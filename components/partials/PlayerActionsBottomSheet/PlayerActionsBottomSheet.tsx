import { BottomSheet } from "../../base/BottomSheet/BottomSheet";
import { ButtonGroup } from "../../base/ButtonGroup/ButtonGroup";
import { Button } from "../../base/Button/Button";
import { useTranslation } from "react-i18next";

type PlayerActionsBottomSheetProps = {
  nickname: string;
  isDead: boolean;
  onKick: () => void;
  onKill: () => void;
  isVisible: boolean;
  setIsVisible: (e: boolean) => void;
};

const PlayerActionsBottomSheet = ({
  nickname,
  isDead,
  onKick,
  onKill,
  isVisible,
  setIsVisible,
}: PlayerActionsBottomSheetProps) => {
  const { t } = useTranslation();
  return (
    <BottomSheet
      title={nickname}
      handleClose={() => setIsVisible(false)}
      isVisible={isVisible}
    >
      <ButtonGroup>
        <Button color="kill" onPress={onKill} isDisabled={isDead}>
          {t("playerActionsBottomSheet/killPlayer")}
        </Button>
        <Button color="secondary" onPress={onKick}>
          {t("playerActionsBottomSheet/kickPlayer")}
        </Button>

        <Button color="back" onPress={() => setIsVisible(false)}>
          {t("playerActionsBottomSheet/cancel")}
        </Button>
      </ButtonGroup>
    </BottomSheet>
  );
};

export default PlayerActionsBottomSheet;
