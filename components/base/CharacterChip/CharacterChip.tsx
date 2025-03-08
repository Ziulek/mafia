import React, { useEffect, useState } from "react";
import {
  Canvas,
  ImageShader,
  processTransform3d,
  vec,
  mapPoint3d,
  useImage,
  Vertices,
  SkPoint,
  Transforms3d,
  Size,
  Skia,
  ClipOp,
  SkImage,
  useFont,
} from "@shopify/react-native-skia";
import { extrudePolygon } from "geometry-extrude";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import {
  useDerivedValue,
  useSharedValue,
  withDecay,
} from "react-native-reanimated";

type Object3d = Exclude<ReturnType<typeof extrudePolygon>, "bounds">;
type Vec3 = readonly [number, number, number];

export const normalizeRadians = (angle: number) => {
  "worklet";
  const twoPi = 2 * Math.PI;
  // Ensure the angle is positive
  while (angle < 0) {
    angle += twoPi;
  }
  // Normalize the angle to the range [0, 2PI)
  return angle % twoPi;
};

export const triangleCentroid = (triangle: Vec3[]) => {
  "worklet";
  return [
    triangle[0][0] + triangle[1][0] + triangle[2][0] / 3,
    triangle[0][1] + triangle[1][1] + triangle[2][1] / 3,
    triangle[0][2] + triangle[1][2] + triangle[2][2] / 3,
  ];
};

export const avg = (arr: number[]) => {
  "worklet";
  return arr.reduce((a, b) => a + b, 0) / arr.length;
};

export const avgDepth = (vertices: Vec3[]) => {
  "worklet";
  const centroid = triangleCentroid(vertices);

  return centroid[2];
};

export const createCircle = (r: number, steps: number): [number, number][] => {
  const vertices: [number, number][] = [];
  for (let step = 0; step < steps; step++) {
    // Calculate angle for this step
    const theta = (step / steps) * 2 * Math.PI;
    // Calculate x and y of the point
    const x = r * Math.cos(theta);
    const y = r * Math.sin(theta);
    // Add point to the vertices array
    vertices.push([x, y]);
  }
  return vertices;
};

interface Triangle {
  vertices: (readonly [number, number, number])[];
  uv: SkPoint[];
  indices: number[];
}

type Face = Triangle[];
export type Faces = Face[];

const vec2 = (x: number, y: number) => ({
  x,
  y,
});

export const createObject = (
  { indices, position, uv, normal }: Object3d,
  transform: Transforms3d,
  textureSize: Size
) => {
  const faces: Record<string, Face> = {};
  const matrix = processTransform3d(transform);
  for (let i = 0; i < indices.length; i += 3) {
    const a = indices[i];
    const b = indices[i + 1];
    const c = indices[i + 2];
    const normalX = normal[a * 3];
    const normalY = normal[a * 3 + 1];
    const normalZ = normal[a * 3 + 2];
    if (
      normalX === undefined ||
      normalY === undefined ||
      normalZ === undefined
    ) {
      throw new Error("Normal is undefined for index " + i);
    }
    const key = `${normalX}, ${normalY}, ${normalZ}`;
    if (!faces[key]) {
      faces[key] = [];
    }
    const transformedA = mapPoint3d(matrix, [
      position[a * 3],
      position[a * 3 + 1],
      position[a * 3 + 2],
    ]);
    const transformedB = mapPoint3d(matrix, [
      position[b * 3],
      position[b * 3 + 1],
      position[b * 3 + 2],
    ]);
    const transformedC = mapPoint3d(matrix, [
      position[c * 3],
      position[c * 3 + 1],
      position[c * 3 + 2],
    ]);
    const tWidth = textureSize.width;
    const tHeight = textureSize.height;
    const uvA = vec2(uv[a * 2] * tWidth, uv[a * 2 + 1] * tHeight);
    const uvB = vec2(uv[b * 2] * tWidth, uv[b * 2 + 1] * tHeight);
    const uvC = vec2(uv[c * 2] * tWidth, uv[c * 2 + 1] * tHeight);
    faces[key].push({
      vertices: [transformedA, transformedB, transformedC],
      uv: [uvA, uvB, uvC],
      indices: [a, b, c],
    });
  }
  return Object.values(faces);
};

const chipRadius = 100;
const chipDepth = 10;

const width = chipRadius * 2;
const height = chipRadius * 2;

// const d = height * 0.025;

const textureSize = { width: chipRadius * 2, height: chipRadius * 2 };

const plate = [
  ...createObject(
    extrudePolygon([[createCircle(chipRadius, 100)]], {
      depth: chipDepth,
      // excludeBottom: true,
    }),
    [
      { translate: [width / 2, height / 2] },
      //  { rotateX: Math.PI / 2 },
    ],
    textureSize
  ),
];

const CharacterChip = () => {
  const originalFrontImage = useImage(
    require("../../../assets/images/Male1/male1_dead.png")
  );

  const [frontImage, setFrontImage] = useState<SkImage | null>(null);
  const fontSize = 60;
  const font = useFont(
    require("../../../assets/fonts/AmericanTypewriter.ttf"),
    fontSize
  );

  useEffect(() => {
    if (!originalFrontImage) return;

    // Assume the original image is square.
    const origSize = originalFrontImage.width();
    // New size is 25% larger.
    const newSize = origSize * 1.25;

    // Create an offscreen Skia surface.
    const surface = Skia.Surface.Make(newSize, newSize);
    if (!surface) {
      console.error("Failed to create a Skia surface");
      return;
    }
    const canvas = surface.getCanvas();

    // 1. Fill the canvas with blue.
    const bluePaint = Skia.Paint();
    bluePaint.setColor(Skia.Color("blue"));
    canvas.drawRect(Skia.XYWHRect(0, 0, newSize, newSize), bluePaint);

    // 2. Draw the circular cut-out of the original image.
    const clipPath = Skia.Path.Make();
    const center = newSize / 2;
    const radius = origSize / 2;
    clipPath.addCircle(center, center, radius);
    canvas.save();
    canvas.clipPath(clipPath, ClipOp.Intersect, true);
    canvas.drawImage(
      originalFrontImage,
      center - origSize / 2,
      center - origSize / 2
    );
    canvas.restore();

    // 3. Draw curved text along an arc.
    const nickname = "NICKN".toUpperCase();
    // Set up text paint.
    const textPaint = Skia.Paint();
    textPaint.setColor(Skia.Color("white"));
    textPaint.setAntiAlias(true);

    // Define arc parameters.
    // We'll draw the text along an arc outside the circular image.
    const arcRadius = radius + 50;
    // Define the arc: bottom half of a circle.
    // Start at 180° (Math.PI radians) and sweep -180° (-Math.PI radians).
    const startAngle = Math.PI; // 180°
    const sweepAngle = -Math.PI; // -180°
    const arcCenter = { x: center, y: center };

    const numChars = nickname.length;
    for (let i = 0; i < numChars; i++) {
      const letter = nickname[i];
      // Compute an offset angle for each character so that they are evenly spaced.
      const angleOffset = ((i + 0.5) / numChars) * sweepAngle;
      const angle = startAngle + angleOffset;
      // Compute position along the arc.
      const x = arcCenter.x + arcRadius * Math.cos(angle);
      const y = arcCenter.y + arcRadius * Math.sin(angle);
      // To have the letter parallel to the radius (line from letter to center),
      // use the radial angle (angle) as the rotation.
      const angleInDegrees = angle * (180 / Math.PI);
      const rotation = angleInDegrees - 90;

      console.log({
        letter,
        angle,
        angleInDegrees,
        x,
        y,
      });

      if (!font) {
        console.error("Font is null");
        return;
      }
      // Create a text blob for the letter.
      const blob = Skia.TextBlob.MakeFromText(letter, font);
      // Measure the letter's width so we can center it horizontally.
      const letterWidth = font.getTextWidth(letter);

      canvas.save();
      // Move to the letter's computed position.
      canvas.translate(x, y);
      // Rotate the canvas so the letter's baseline is parallel to the radial line.
      canvas.rotate(rotation, 0, 0);
      // Draw the letter centered horizontally.
      canvas.drawTextBlob(blob, -letterWidth / 2, 0, textPaint);
      canvas.restore();
    }

    // 4. Snapshot the surface.
    const snapshot = surface.makeImageSnapshot();
    setFrontImage(snapshot);
  }, [originalFrontImage]);

  const rotateX = useSharedValue(0);
  const rotateY = useSharedValue(0);
  const gesture = Gesture.Pan()
    .onChange((event) => {
      rotateY.value = event.changeX / width;
      rotateX.value -= event.changeY / height;
    })
    .onEnd(({ velocityX, velocityY }) => {
      rotateY.value = withDecay({ velocity: velocityX / width });
      rotateX.value = withDecay({ velocity: -velocityY / height });
    });

  const matrix = useDerivedValue(() => {
    return processTransform3d([
      { translate: [width / 2, height / 2] },
      { rotateY: rotateY.value },
      { rotateX: rotateX.value },
      { translate: [-width / 2, -height / 2] },
    ]);
  });

  // 1. Project all points
  const model = useDerivedValue(() => {
    const projectedFaces = plate.map((face) =>
      face.map((tri) => {
        const projectedVertices = tri.vertices.map((point) =>
          mapPoint3d(matrix.value, point)
        );
        return {
          vertices: projectedVertices,
          uv: tri.uv,
          indices: tri.indices,
        };
      })
    );

    const coinHead = { faces: projectedFaces[0], type: "head" };
    const coinTail = { faces: projectedFaces[1], type: "tail" };
    const edge = projectedFaces.slice(2);

    const facesInOrder = [coinHead, coinTail].sort((a, b) => {
      // Calculate the centroid depth of each face (a)
      const depthA = avg(a.faces.flatMap((t) => avgDepth(t.vertices)));
      const depthB = avg(b.faces.flatMap((t) => avgDepth(t.vertices)));
      return depthA - depthB;
    });

    const visibleSide = facesInOrder[1];
    const hiddenSide = facesInOrder[0];

    // 2. Sort by depth using the centroid of the triangles
    const edgeInOrder = edge.sort((a, b) => {
      // Calculate the centroid depth of each face (a)
      const depthA = avg(a.flatMap((t) => avgDepth(t.vertices)));
      const depthB = avg(b.flatMap((t) => avgDepth(t.vertices)));
      return depthA - depthB;
    });

    console.log(projectedFaces.length);

    return {
      coinVisibleSide: {
        faces: visibleSide.faces.flat(),
        type: visibleSide.type,
      },
      coinHiddenSide: {
        faces: hiddenSide.faces.flat(),
        type: hiddenSide.type,
      },
      edge: edgeInOrder.flat(),
    };
  });

  const visibleVertices = useDerivedValue(() => {
    return model.value.coinHiddenSide.faces.flatMap((point) =>
      point.vertices.map((p) => vec(p[0], p[1]))
    );
  });

  const visibleTextures = useDerivedValue(() => {
    return model.value.coinHiddenSide.faces.flatMap((point) => point.uv);
  });

  const hiddenVertices = useDerivedValue(() => {
    return model.value.coinVisibleSide.faces.flatMap((point) =>
      point.vertices.map((p) => vec(p[0], p[1]))
    );
  });

  const hiddenTextures = useDerivedValue(() => {
    return model.value.coinVisibleSide.faces.flatMap((point) => point.uv);
  });

  const edgeVertices = useDerivedValue(() => {
    return model.value.edge.flatMap((point) =>
      point.vertices.map((p) => vec(p[0], p[1]))
    );
  });

  const edgeTextures = useDerivedValue(() => {
    return model.value.edge.flatMap((point) => point.uv);
  });

  const backImage = useImage(
    require("../../../assets/images/Male1/male1_police.png")
  );

  const edgeImage = useImage(
    require("../../../assets/images/Male1/male1_detective.png")
  );

  const visibleImage = useDerivedValue(() => {
    return model.value.coinVisibleSide.type === "head" ? frontImage : backImage;
  });

  const hiddenImage = useDerivedValue(() => {
    return model.value.coinHiddenSide.type === "head" ? frontImage : backImage;
  });

  if (!frontImage) {
    return null;
  }

  return (
    <GestureDetector gesture={gesture}>
      <Canvas style={{ width: width, height: width }}>
        {/** Coin hidden Side - maybe dont need to render */}
        <Vertices vertices={hiddenVertices} textures={hiddenTextures}>
          <ImageShader
            image={hiddenImage}
            fit="contain"
            x={0}
            y={0}
            width={width}
            height={height}
          />
        </Vertices>

        {/** Edge */}
        <Vertices vertices={edgeVertices} textures={edgeTextures}>
          <ImageShader
            image={edgeImage}
            fit="contain"
            x={0}
            y={0}
            width={width}
            height={height}
          />
        </Vertices>

        {/** Coin visible Side */}
        <Vertices vertices={visibleVertices} textures={visibleTextures}>
          <ImageShader
            image={visibleImage}
            fit="contain"
            x={0}
            y={0}
            width={width}
            height={height}
          />
        </Vertices>
      </Canvas>
    </GestureDetector>
  );
};
export default CharacterChip;
