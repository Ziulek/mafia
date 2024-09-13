import Toast from "react-native-toast-message";
import PagerView from "react-native-pager-view";
import { FC, useEffect, useRef, useState } from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// components
import ImageBackground from "@/components/partials/ImageBackground/ImageBackground";
import Header from "@/components/partials/Header/Header";
import InfoTab from "@/components/partials/InfoTab/InfoTab";
import AvatarGrid from "@/components/partials/AvatarsGrid/AvatarsGrid";
import PageIndicator from "@/components/base/PageIndicator/PageIndicator";
import Button from "@/components/base/Button/Button";
import ChangeAvatarBottomSheet from "@/components/partials/ChangeAvatarBottomSheet/ChangeAvatarBottomSheet";
import PlayerActionsBottomSheet from "@/components/partials/PlayerActionsBottomSheet/PlayerActionsBottomSheet";

// types
import { Mode } from "@/components/types/Mode";
import { Player } from "@/components/types/Player";
import { Character } from "@/components/types/Characters";
import { GameRules } from "@/components/types/GameRules";
import { GameState } from "@/components/types/GameState";
import { AdditionalRole } from "@/components/types/AdditionalRole";
import { AvatarGridMode } from "@/components/types/AvatarGridMode";
import { Role } from "@/components/types/Role";

type GameScreenProps = {
  gameState: GameState;
  mode: Mode;
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
  // BottomSheet States
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);
  const [isAvatarSelectVisible, setIsAvatarSelectVisible] = useState(false);

  // AvatarGrid States
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const [avatarGridMode, setAvatarGridMode] =
    useState<AvatarGridMode>("default");

  // GameRules States
  const [showRolesAfterDeath, setShowRolesAfterDeath] = useState(false);
  const [numberOfMafia, setNumberOfMafia] = useState(2);
  const [additionalRoles, setAdditionalRoles] = useState<AdditionalRole[]>([]);

  const winner = gameState?.winner;
  const players = gameState?.players;
  const currentPlayer = players?.find((player) => player.id === playerID);

  const pagerViewRef = useRef<PagerView>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const selectedRoles: Role[] = ["police", "mafia", ...additionalRoles];

  const insets = useSafeAreaInsets();

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
  };

  const HandleAvatarChange = () => {
    setIsAvatarSelectVisible(true);
  };

  const HandleSelectPlayer = (item: Player) => {
    if (mode === "host") {
      console.log(item);
      setSelectedPlayer(item);
      setIsBottomSheetVisible(true);
    }
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

  // przeniaśc do AvatarGrid
  // to jest głupie rozwiazywanie problemu z headerem (chyba) ale bez tego zostanie wyswietlony po stronie playera jak się zacznie gre
  useEffect(() => {
    let newMode: AvatarGridMode;

    if (gameState.stage === "result") {
      newMode = "revealed";
    } else if (gameState.stage === "waitingForPlayers") {
      newMode = "default";
    } else if (gameState.stage === "game") {
      newMode = mode === "host" ? "pressable" : "default";
    } else {
      newMode = "default";
    }

    setAvatarGridMode(newMode);
  }, [gameState?.stage, mode]);

  useEffect(() => {
    if (gameState.stage === "result" && pagerViewRef.current) {
      pagerViewRef.current.setPage(1);
    }
  }, [gameState?.stage]);

  return (
    <>
      <StatusBar
        animated={true}
        barStyle={
          gameState?.stage === "game" ? "light-content" : "dark-content"
        }
      />
      <ImageBackground>
        <Header
          mode={mode}
          gameStage={gameState?.stage}
          players={players?.length}
          gameCode={gameState?.gameCode}
          winner={winner}
          isSwitchOn={showRolesAfterDeath}
          setIsSwitchOn={setShowRolesAfterDeath}
          numberOfMafia={numberOfMafia}
          setNumberOfMafia={setNumberOfMafia}
          additionalRoles={additionalRoles}
          setAdditionalRoles={setAdditionalRoles}
        />

        <PagerView
          ref={pagerViewRef}
          style={{ flex: 1 }}
          initialPage={1}
          onPageSelected={(e) => setCurrentPage(e.nativeEvent.position)}
          scrollEnabled={gameState?.stage === "game"}
        >
          <View key="1" style={{ flex: 1 }}>
            <InfoTab
              mode={mode}
              playerRole={currentPlayer?.role}
              selectedRoles={selectedRoles}
            />
          </View>

          <View key="2">
            <AvatarGrid
              gameStage={gameState?.stage}
              mode={mode}
              avatarGridMode={avatarGridMode}
              showRolesAfterDeath={showRolesAfterDeath}
              onPressItem={HandleSelectPlayer}
              items={players}
            />

            <View style={[styles.button, { bottom: insets.bottom + 10 }]}>
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
                <Button color="accent" onPress={onNewGame}>
                  New Game
                </Button>
              )}
            </View>
          </View>
        </PagerView>

        {gameState.stage === "game" && (
          <PageIndicator currentPage={currentPage} />
        )}

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
            isDead={selectedPlayer.isDead}
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
  button: {
    position: "absolute",
    left: 20,
    right: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameScreen;
