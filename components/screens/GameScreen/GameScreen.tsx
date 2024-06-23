import AvatarGrid from "@/components/partials/AvatarsGrid/AvatarsGrid";
import { HeaderLobbyHost } from "@/components/partials/HeaderLobbyHost/HeaderLobbyHost";
import { Character } from "@/components/types/Characters";
import { Role } from "@/components/types/Role";
import { FC } from "react";
import { StyleSheet, View } from "react-native";

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
    <View style={{}}>
      <HeaderLobbyHost
        players={gameState.players.length}
        gameCode={gameState.gameCode}
        isVisible={false}
      />

      <View style={styles.AvatarGridContainer}>
        <AvatarGrid
          mode={"pressable"}
          onPressItem={() => console.log("aha")}
          items={gameState.players}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  AvatarGridContainer: {
    flex: 1,
  },
});
