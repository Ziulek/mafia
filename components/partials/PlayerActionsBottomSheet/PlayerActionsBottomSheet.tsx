import { BottomSheet } from "../../base/BottomSheet/BottomSheet";
import { ButtonGroup } from "../../base/ButtonGroup/ButtonGroup";
import { Button } from "../../base/Button/Button";


type PlayerActionsBottomSheetProps = {
  nickname: string;
  isDead: boolean;
  onKick: () => void;
  onKill: () => void;
  isVisible: boolean;
  setIsVisible: (e: boolean) => void;
};

export const PlayerActionsBottomSheet = ({
  nickname,
  isDead,
  onKick,
  onKill,
  isVisible,
  setIsVisible,
}: PlayerActionsBottomSheetProps) => {
  // const [showBottomSheet, setShowBottomSheet] = useState(true);
  return (
    <BottomSheet
      title={nickname}
      handleClose={() => setIsVisible(false)}
      isVisible={isVisible}
    >
      <ButtonGroup>
        <Button color="kill" onPress={onKill} isDisabled={isDead}>
          Kill Player
        </Button>
        <Button color="secondary" onPress={onKick}>
          Kick Player
        </Button>

        <Button color="back" onPress={() => setIsVisible(false)}>
          Cancel
        </Button>
      </ButtonGroup>
    </BottomSheet>
  );
};
