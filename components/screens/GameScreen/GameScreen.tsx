import { PlayerActionsBottomSheet } from "@/components/partials/PlayerActionsBottomSheet/PlayerActionsBottomSheet";
import { ChangeAvatarBottomSheet } from "@/components/partials/ChangeAvatarBottomSheet/ChangeAvatarBottomSheet";
import { HeaderLobbyPlayer } from "@/components/partials/HeaderLobbyPlayer/HeaderLobbyPlayer";
import { HeaderLobbyHost } from "@/components/partials/HeaderLobbyHost/HeaderLobbyHost";
import AvatarGrid from "@/components/partials/AvatarsGrid/AvatarsGrid";
import { Character } from "@/components/types/Characters";
import Button from "@/components/base/Button/Button";
import { Player } from "@/components/types/Player";
import { Mode } from "@/components/types/Mode";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ImageBackground, StyleSheet, View } from "react-native";
import { FC, useEffect, useState } from "react";
import { StatusBar } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  ReduceMotion,
  runOnJS,
} from "react-native-reanimated";
import { HeaderResult } from "@/components/partials/HeaderResult/HeaderResult";
import { useMutation } from "@apollo/client";
import { START_GAME } from "@/GraphQL/Mutations/StartGame";

type GameScreenProps = {
  gameState: GameState;
  mode: "host" | "player";

  // host
  onNewGame: () => void;
  onKillPlayer: (player: Player) => void;
  onKickPlayer: (player: Player) => void;
  onUpdateGameRules: (gameRules: GameRules) => void;

  // player
  playerID?: string;
  onUpdateCharacter: (character: Character) => void;
};

export type GameState = {
  players: Player[];
  stage: "waitingForPlayers" | "game" | "result";
  gameRules: GameRules;
  gameCode: string;
  winner?: "mafia" | "police";
};

type GameRules = {
  extraRoles?: ExtraRole[];
  revealRolesAfterDeath?: boolean;
};

type ExtraRole = "detective" | "medic" | "serialKiller" | "medium";

export const GameScreen: FC<GameScreenProps> = ({
  gameState,
  mode,
  onNewGame,
  onKillPlayer,
  onKickPlayer,
  onUpdateGameRules,
  playerID,
  onUpdateCharacter,
}) => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);
  const [isAvatarSelectVisible, setIsAvatarSelectVisible] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const [players, setPlayers] = useState<Player[]>(gameState.players);
  const [winner, setWinner] = useState(gameState.winner);

  const [avatarGridMode, setAvatarGridMode] = useState<Mode>("default");

  const insets = useSafeAreaInsets();
  const paddingTop = useSharedValue(mode === "host" ? 270 : 200); // Initial paddingTop value
  const config = {
    duration: 500,
    easing: Easing.linear,
  };

  const currentPlayer = players.find((player) => player.id === playerID);

  const [startGame, { error }] = useMutation(START_GAME);

  const HandleStartGame = () => {
    startGame({
      variables: {
        gameCode: "YDCPWQUS",
      },
    });
    setIsHeaderVisible(false);
    gameState.stage = "game";
    setAvatarGridMode("pressable");
  };

  const revealRolesAnimation = useSharedValue(0);

  const HandleAvatarChange = () => {
    setIsAvatarSelectVisible(true);
  };

  const HandleSelectPlayer = (item: Player) => {
    console.log(item);
    setSelectedPlayer(item);
    setIsBottomSheetVisible(true);
  };

  const HandleOnKill = (item: Player) => {
    console.log(`Player ${item.id} was killed`);
    setPlayers((prevPlayers) =>
      prevPlayers.map((player) =>
        player.id === item.id ? { ...player, isDead: true } : player
      )
    );
    setIsBottomSheetVisible(false);
  };

  const HandleOnKick = (item: Player) => {
    console.log(`Player ${item.id} was kicked`);
    setPlayers((prevPlayers) =>
      prevPlayers.filter((player) => player.id !== item.id)
    );
    setIsBottomSheetVisible(false);
  };

  const HandleCharacterSelect = (character: Character) => {
    setPlayers((prevPlayers) =>
      prevPlayers.map((player) =>
        player.id === playerID ? { ...player, character } : player
      )
    );
    onUpdateCharacter(character);
  };

  useEffect(() => {
    // Update paddingTop based on header visibility
    paddingTop.value = withTiming(
      isHeaderVisible ? (mode === "host" ? 270 : 200) : winner ? 110 : 0,
      config
    );
  }, [isHeaderVisible, winner]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      paddingTop: paddingTop.value,
    };
  });

  const backgroundStyle = {
    marginTop: -insets.top,
    marginBottom: -insets.bottom,
  };

  return (
    <>
      <StatusBar
        animated={true}
        barStyle={isHeaderVisible ? "dark-content" : "light-content"}
      />
      <ImageBackground
        source={require("@/assets/images/Backgrounds/GameScreenBackground.png")}
        style={backgroundStyle}
        resizeMode="cover"
      >
        <View>
          {mode === "host" && (
            <HeaderLobbyHost
              players={players.length}
              gameCode={gameState.gameCode}
              isVisible={isHeaderVisible}
            />
          )}
          {mode === "player" && (
            <HeaderLobbyPlayer
              players={players.length}
              gameCode={gameState.gameCode}
              isVisible={isHeaderVisible}
            />
          )}
          {winner && (
            <HeaderResult
              winner={winner}
              isVisible={typeof winner === "string"}
            />
          )}
          <View style={styles.overlay}>
            <Animated.View style={[styles.AvatarGrid, animatedStyle]}>
              <AvatarGrid
                mode={avatarGridMode}
                revealRolesAnimation={revealRolesAnimation}
                onPressItem={HandleSelectPlayer}
                items={players}
              />
            </Animated.View>
          </View>
        </View>

        <View style={styles.button}>
          {/* Player Side Change Avatar Button */}
          {mode === "player" && (
            <Button color="accent" onPress={() => HandleAvatarChange()}>
              Change Avatar
            </Button>
          )}
          {/* Host Side Start Game Button */}
          {gameState.stage === "waitingForPlayers" && mode === "host" && (
            <Button color="accent" onPress={() => HandleStartGame()}>
              Start Game
            </Button>
          )}

          {/* Host Side Show Roles Button */}
          {gameState.stage === "game" && mode === "host" && (
            <Button
              color="primary"
              onPressIn={() => {
                setAvatarGridMode("revealed");
                revealRolesAnimation.value = withTiming(1, {
                  duration: 1000,
                  easing: Easing.linear,
                  reduceMotion: ReduceMotion.System,
                });
              }}
              PressOutDelay={1000}
              onPressOut={() => {
                revealRolesAnimation.value = withTiming(
                  0,
                  {
                    duration: 1000,
                    easing: Easing.linear,
                    reduceMotion: ReduceMotion.System,
                  },
                  () => {
                    // happens on end of the animation
                    runOnJS(setAvatarGridMode)("pressable");
                  }
                );
              }}
            >
              Show Roles
            </Button>
          )}
          {/* Both Sides New Game Button */}
          {gameState.stage === "result" && (
            <Button color="accent" onPress={() => HandleStartGame()}>
              New Game
            </Button>
          )}
        </View>
        {/* Temp Set Winner Button */}
        <View style={styles.buttonTemp}>
          <Button
            color="kill"
            onPress={() => {
              gameState.stage = "result";
              setWinner("mafia");
              setAvatarGridMode("revealed");
            }}
          >
            Set Winner
          </Button>
        </View>

        {mode === "player" && playerID && isAvatarSelectVisible && (
          <ChangeAvatarBottomSheet
            nickname={currentPlayer?.nickname}
            isVisible={isAvatarSelectVisible}
            setIsVisible={setIsAvatarSelectVisible}
            onCharacterSelected={HandleCharacterSelect}
          />
        )}

        {selectedPlayer && mode === "host" && (
          <PlayerActionsBottomSheet
            nickname={selectedPlayer.nickname}
            onKill={() => HandleOnKill(selectedPlayer)}
            onKick={() => HandleOnKick(selectedPlayer)}
            isVisible={isBottomSheetVisible}
            setIsVisible={setIsBottomSheetVisible}
          />
        )}
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  AvatarGrid: {
    marginTop: 50,
    paddingHorizontal: 20,
  },
  button: {
    position: "absolute",
    bottom: 50,
    left: 15,
    right: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTemp: {
    position: "absolute",
    bottom: 110,
    left: 15,
    right: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameScreen;
