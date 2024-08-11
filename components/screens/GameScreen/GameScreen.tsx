import { PlayerActionsBottomSheet } from "@/components/partials/PlayerActionsBottomSheet/PlayerActionsBottomSheet";
import { ChangeAvatarBottomSheet } from "@/components/partials/ChangeAvatarBottomSheet/ChangeAvatarBottomSheet";
import { HeaderLobbyPlayer } from "@/components/partials/HeaderLobbyPlayer/HeaderLobbyPlayer";
import { HeaderLobbyHost } from "@/components/partials/HeaderLobbyHost/HeaderLobbyHost";
import AvatarGrid from "@/components/partials/AvatarsGrid/AvatarsGrid";
import { HeaderResult } from "@/components/partials/HeaderResult/HeaderResult";

import Button from "@/components/base/Button/Button";

import { FC, useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { StatusBar } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  ReduceMotion,
  runOnJS,
} from "react-native-reanimated";

import { Mode } from "@/components/types/Mode";
import { Player } from "@/components/types/Player";
import { Character } from "@/components/types/Characters";
import { GameRules } from "@/components/types/GameRules";
import { GameState } from "@/components/types/GameState";
import ImageBackground from "@/components/partials/ImageBackground/ImageBackground";

type GameScreenProps = {
  gameState: GameState;
  mode: "host" | "player";

  // host
  onStartGame: () => void;
  onNewGame: () => void;
  onKillPlayer: (id: string) => void;
  onKickPlayer: (id: string) => void;
  onUpdateGameRules: (gameRules: GameRules) => void;

  // player
  playerID?: string;
  onCharacterUpdate: (character: Character) => void;
};

export const GameScreen: FC<GameScreenProps> = ({
  gameState,
  mode,
  onStartGame,
  onNewGame,
  onKillPlayer,
  onKickPlayer,
  onUpdateGameRules,
  playerID,
  onCharacterUpdate,
}) => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);
  const [isAvatarSelectVisible, setIsAvatarSelectVisible] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const [avatarGridMode, setAvatarGridMode] = useState<Mode>("default");

  const winner = gameState?.winner;
  const players = gameState?.players;

  const paddingTop = useSharedValue(mode === "host" ? 270 : 200); // Initial paddingTop value
  const config = {
    duration: 500,
    easing: Easing.linear,
  };

  console.log("GameState lol:", gameState);

  const currentPlayer = players?.find((player) => player.id === playerID);

  const revealRolesAnimation = useSharedValue(0);

  const HandleStartGame = () => {
    onStartGame();
    setIsHeaderVisible(false);
    setAvatarGridMode("pressable");
  };

  const HandleAvatarChange = () => {
    setIsAvatarSelectVisible(true);
  };

  const HandleSelectPlayer = (item: Player) => {
    console.log(item);
    setSelectedPlayer(item);
    setIsBottomSheetVisible(true);
  };

  const HandleOnKill = (id: string) => {
    onKillPlayer(id);
    setIsBottomSheetVisible(false);
  };

  const HandleOnKick = (id: string) => {
    onKickPlayer(id);
    setIsBottomSheetVisible(false);
  };

  const HandleCharacterSelect = (character: Character) => {
    onCharacterUpdate(character);
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

  if (!gameState) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#ff4d00" />
      </View>
    );
  }
  return (
    <>
      <StatusBar
        animated={true}
        barStyle={isHeaderVisible ? "dark-content" : "light-content"}
      />
      <ImageBackground>
        <View>
          {mode === "host" && (
            <HeaderLobbyHost
              players={players?.length}
              gameCode={gameState?.gameCode}
              isVisible={isHeaderVisible}
            />
          )}
          {mode === "player" && (
            <HeaderLobbyPlayer
              players={players?.length}
              gameCode={gameState?.gameCode}
              isVisible={isHeaderVisible}
            />
          )}
          {winner && (
            <HeaderResult
              winner={winner}
              isVisible={typeof winner === "string"}
            />
          )}

          <Animated.View style={[styles.AvatarGrid, animatedStyle]}>
            <AvatarGrid
              mode={avatarGridMode}
              revealRolesAnimation={revealRolesAnimation}
              onPressItem={HandleSelectPlayer}
              items={players}
            />
          </Animated.View>
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
        {/* <View style={styles.buttonTemp}>
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
        </View> */}

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
            onKill={() => HandleOnKill(selectedPlayer.id)}
            onKick={() => HandleOnKick(selectedPlayer.id)}
            isVisible={isBottomSheetVisible}
            setIsVisible={setIsBottomSheetVisible}
          />
        )}
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  AvatarGrid: {
    marginTop: 50,
    paddingHorizontal: 20,
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  button: {
    position: "absolute",
    bottom: 50,
    left: 20,
    right: 20,
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
