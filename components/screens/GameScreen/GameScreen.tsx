import Button from "@/components/base/Button/Button";
import Text from "@/components/base/Text/Text";
import AvatarGrid from "@/components/partials/AvatarsGrid/AvatarsGrid";
import { HeaderLobbyHost } from "@/components/partials/HeaderLobbyHost/HeaderLobbyHost";
import { Character } from "@/components/types/Characters";
import { Role } from "@/components/types/Role";
import { FC, useEffect, useRef, useState } from "react";
import { Animated, ImageBackground, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type GameScreenProps = {
  gameState: GameState;
  mode: "host" | "player";

  // host
  onNewGame: () => void;
  onKillPlayer: (player: Player) => void;
  onKickPlayer: (player: Player) => void;
  onUpdateGameRules: (gameRules: GameRules) => void;

  // player
  player?: Player;
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

type Player = {
  id: string;
  character: Character;
  role: Role;
  isDead: boolean;
  nickname: string;
};

export const GameScreen: FC<GameScreenProps> = ({
  gameState,
  mode,
  onNewGame,
  onKillPlayer,
  onKickPlayer,
  onUpdateGameRules,
  player,
  onUpdateCharacter,
}) => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  return (
    <>
      <View>
        <HeaderLobbyHost
          players={gameState.players.length}
          gameCode={gameState.gameCode}
          isVisible={isHeaderVisible}
        />

        <View style={styles.overlay}>
          <View style={styles.AvatarGrid}>
            <AvatarGrid
              mode={"pressable"}
              onPressItem={() => console.log("aha")}
              items={gameState.players}
            />
          </View>
        </View>
      </View>
      <View style={styles.buttonStyle}>
        <Button
          color="accent"
          onPress={() => {
            setIsHeaderVisible((x) => !x);
          }}
        >
          Start Game
        </Button>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  AvatarGridContainerFull: { flexGrow: 1, backgroundColor: "red" },
  AvatarGridContainer: {},

  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  AvatarGrid: {
    paddingTop: 50,
    paddingHorizontal: 20,
    // marginHorizontal:10 ,
  },

  buttonStyle: {
    position: "absolute",
    bottom: 20,
    left: 15,
    right: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});

// <ImageBackground
//   source={require("@/assets/images/Backgrounds/GameScreenBackground.png")} // Replace with your image path
//   style={styles.background}
//   resizeMode="cover"
// > owrapowac cos  </ImageBackground>

// {/* <HeaderLobbyHost
// players={gameState.players.length}
// gameCode={gameState.gameCode}
// isVisible={isHeaderVisible}
// /> */}
