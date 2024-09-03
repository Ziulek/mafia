import { FC, useEffect, useState } from "react";
import { Platform, StyleSheet, View, StatusBar } from "react-native";
import Animated, {
  Easing,
  ReduceMotion,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import Toast from "react-native-toast-message";

// components
import ImageBackground from "@/components/partials/ImageBackground/ImageBackground";
import { HeaderLobbyPlayer } from "@/components/partials/HeaderLobbyPlayer/HeaderLobbyPlayer";
import { HeaderLobbyHost } from "@/components/partials/HeaderLobbyHost/HeaderLobbyHost";
import { HeaderResult } from "@/components/partials/HeaderResult/HeaderResult";
import AvatarGrid from "@/components/partials/AvatarsGrid/AvatarsGrid";
import Button from "@/components/base/Button/Button";
import ChangeAvatarBottomSheet from "@/components/partials/ChangeAvatarBottomSheet/ChangeAvatarBottomSheet";
import { PlayerActionsBottomSheet } from "@/components/partials/PlayerActionsBottomSheet/PlayerActionsBottomSheet";

// types
import { Mode } from "@/components/types/Mode";
import { Player } from "@/components/types/Player";
import { Character } from "@/components/types/Characters";
import { GameRules } from "@/components/types/GameRules";
import { GameState } from "@/components/types/GameState";
import { AdditionalRole } from "@/components/types/AdditionalRole";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type GameScreenProps = {
  gameState: GameState;
  mode: "host" | "player";

  // host
  onStartGame: (
    showRolesAfterDeath: boolean,
    numberOfMafia: number,
    additionalRoles: AdditionalRole[]
  ) => void;
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
  const winner = gameState?.winner;
  const players = gameState?.players;

  // Header States
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [headerHeight, setHeaderHeight] = useState(0); // Track header height

  // BottomSheet States
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);
  const [isAvatarSelectVisible, setIsAvatarSelectVisible] = useState(false);

  // AvatarGrid States
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const [avatarGridMode, setAvatarGridMode] = useState<Mode>("default");

  const currentPlayer = players?.find((player) => player.id === playerID);
  const insets = useSafeAreaInsets();

  const animatedStyle = useAnimatedStyle(() => {
    if (gameState.stage === "game") {
      return {
        marginTop: insets.top * 1.75,
      };
    } else {
      return {
        marginTop: withTiming(headerHeight, {
          duration: 500,
          easing: Easing.out(Easing.cubic),
          reduceMotion: ReduceMotion.Never,
        }),
      };
    }
  });

  // GameRules States
  const [showRolesAfterDeath, setShowRolesAfterDeath] = useState(false);
  const [numberOfMafia, setNumberOfMafia] = useState(2);
  const [additionalRoles, setAdditionalRoles] = useState<AdditionalRole[]>([]);

  const HandleStartGame = (
    showRolesAfterDeath: boolean,
    numberOfMafia: number,
    additionalRoles: AdditionalRole[]
  ) => {
    if (players?.length === 0) {
      Toast.show({
        type: "customToast",
        text1: "No players",
        text2: "Invite your friends",
      });
      return;
    }

    if (players?.length < 3) {
      Toast.show({
        type: "customToast",
        text1: "Not enough players",
        text2: "Add at least 3 players",
      });
      return;
    }

    if (players?.length < numberOfMafia * 2 + 1) {
      Toast.show({
        type: "customToast",
        text1: "Too many mafia",
        text2: "Decrease number of mafia",
      });
      return;
    }

    // Start the game if all conditions are met
    onStartGame(showRolesAfterDeath, numberOfMafia, additionalRoles);
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
    if (gameState.stage === "game") {
      onKillPlayer(id);
      setIsBottomSheetVisible(false);
    } else {
      Toast.show({
        type: "customToast",
        text1: "Can't kill player",
        text2: "You can only kill in the game stage.",
      });
    }
  };

  const HandleOnKick = (id: string) => {
    onKickPlayer(id);
    setIsBottomSheetVisible(false);
  };

  const HandleCharacterSelect = (character: Character) => {
    onCharacterUpdate(character);
  };

  const handleHeaderHeightChange = (newHeight: number) => {
    setHeaderHeight(newHeight);
  };

  // to jest głupie rozwiazywanie problemu z headerem (chyba) ale bez tego zostanie wyswietlony po stronie playera jak się zacznie gre
  useEffect(() => {
    setIsHeaderVisible(
      gameState.stage === "waitingForPlayers" || gameState.stage === "result"
      // false
    );
    setAvatarGridMode(
      gameState.stage === "result"
        ? "revealed"
        : mode === "host"
        ? "pressable"
        : "default"
    );
  }, [gameState.stage]);

  console.log("GameState lol:", gameState);

  console.log("avatar grid mode", avatarGridMode);

  console.log("Header Height", headerHeight);

  return (
    <>
      <StatusBar
        animated={true}
        barStyle={isHeaderVisible ? "dark-content" : "light-content"}
      />
      <ImageBackground>
        {mode === "host" && gameState.stage === "waitingForPlayers" && (
          <HeaderLobbyHost
            players={players?.length}
            gameCode={gameState?.gameCode}
            isVisible={isHeaderVisible}
            // isVisible={false}
            isSwitchOn={showRolesAfterDeath}
            setIsSwitchOn={setShowRolesAfterDeath}
            numberOfMafia={numberOfMafia}
            setNumberOfMafia={setNumberOfMafia}
            additionalRoles={additionalRoles}
            setAdditionalRoles={setAdditionalRoles}
            onHeaderHeightChange={handleHeaderHeightChange} // Pass the handler to the header
          />
        )}
        {mode === "player" && gameState.stage === "waitingForPlayers" && (
          <HeaderLobbyPlayer
            players={players?.length}
            gameCode={gameState?.gameCode}
            isVisible={isHeaderVisible}
            onHeaderHeightChange={handleHeaderHeightChange} // Pass the handler to the header
          />
        )}
        {winner && gameState.stage === "result" && (
          <HeaderResult
            winner={winner}
            isVisible={isHeaderVisible}
            onHeaderHeightChange={handleHeaderHeightChange}
          />
        )}
        <Animated.View style={[styles.AvatarGrid, animatedStyle]}>
          <AvatarGrid
            mode={avatarGridMode}
            onPressItem={HandleSelectPlayer}
            items={players}
          />
        </Animated.View>

        <View style={styles.button}>
          {/* Player Side Change Avatar Button */}
          {mode === "player" && gameState.stage === "waitingForPlayers" && (
            <Button color="accent" onPress={() => HandleAvatarChange()}>
              Change Avatar
            </Button>
          )}
          {/* Host Side Start Game Button */}

          {gameState.stage === "waitingForPlayers" && mode === "host" && (
            <Button
              color={
                players?.length >= numberOfMafia * 2 + 1 ? "accent" : "back"
              }
              onPress={() =>
                HandleStartGame(
                  showRolesAfterDeath,
                  numberOfMafia,
                  additionalRoles
                )
              }
            >
              Start Game
            </Button>
          )}

          {/* Host Side Show Roles Button */}
          {gameState.stage === "game" && mode === "host" && (
            <Button
              color="primary"
              onPressIn={() => setAvatarGridMode("revealed")}
              PressOutDelay={1000}
              onPressOut={() => setAvatarGridMode("pressable")}
            >
              Show Roles
            </Button>
          )}
          {/* Both Sides New Game Button */}
          {gameState.stage === "result" && (
            <Button color="accent" onPress={() => {}}>
              New Game
            </Button>
          )}
        </View>

        {/* Temp Set Winner Button */}
        {/* <View style={styles.buttonTemp}>
          <Button
            color="kill"
            onPress={() => {
              setIsHeaderVisible(!isHeaderVisible);
            }}
          >
            test
          </Button>
        </View> */}
        {mode === "player" && playerID && isAvatarSelectVisible && (
          <ChangeAvatarBottomSheet
            currentCharacter={currentPlayer?.character}
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
    flex: 1,
    paddingHorizontal: 20,
    // backgroundColor: "red",
  },
  button: {
    position: "absolute",
    bottom: Platform.OS === "ios" ? 50 : 10,
    left: 20,
    right: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTemp: {
    position: "absolute",
    bottom: 110,
    left: 20,
    right: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameScreen;
