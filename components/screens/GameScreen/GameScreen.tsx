import Button from "@/components/base/Button/Button";
import Text from "@/components/base/Text/Text";
import AvatarGrid from "@/components/partials/AvatarsGrid/AvatarsGrid";
import { HeaderLobbyHost } from "@/components/partials/HeaderLobbyHost/HeaderLobbyHost";
import { Character } from "@/components/types/Characters";
import { Role } from "@/components/types/Role";
import { FC, useState } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";

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
  return (
    <ImageBackground
      source={require("@/assets/images/Backgrounds/GameScreenBackground.png")} // Replace with your image path
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <HeaderLobbyHost
          players={gameState.players.length}
          gameCode={gameState.gameCode}
          isVisible={true}
        />

        <View style={styles.AvatarGridContainer}>
          <AvatarGrid
            mode={"pressable"}
            onPressItem={() => console.log("aha")}
            items={gameState.players}
          />
        </View>
        <View style={styles.buttonStyle}>
          <Button color="accent" onPress={() => {}}>
            Start Game
          </Button>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  AvatarGridContainer: { flex: 1 },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
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
