import { BottomSheet } from "../BottomSheet/BottomSheet";
import { ButtonGroup } from "../ButtonGroup/ButtonGroup";
import { Button } from "../Button/Button";
import { useState } from "react";

type PlayerActionsBottomSheetProps = {
  nickname: string;
  onKick: () => void;
  onKill: () => void;
};

export const PlayerActionsBottomSheet = ({
  nickname,
  onKick,
  onKill,
}: PlayerActionsBottomSheetProps) => {
  const [showBottomSheet, setShowBottomSheet] = useState(false);
  return (
    <BottomSheet
      title={nickname}
      handleClose={() => setShowBottomSheet(false)}
      isVisible={showBottomSheet}
    >
      <ButtonGroup>
        <Button color="kill" onPress={onKill}>
          {"Kill Player"}
        </Button>
        <Button color="secondary" onPress={onKick}>
          {"Kick Player"}
        </Button>

        <Button color="back" onPress={() => setShowBottomSheet(false)}>
          {"Cancel"}
        </Button>
      </ButtonGroup>
    </BottomSheet>
  );
};
