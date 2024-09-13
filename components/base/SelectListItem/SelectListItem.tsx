import { AdditionalRole } from "@/components/types/AdditionalRole";
import { Dispatch, FC, SetStateAction, useState } from "react";
import { useTranslation } from "react-i18next";
import DropDownPicker from "react-native-dropdown-picker";

interface SelectItem {
  label: string;
  value: string;
}

interface SelectListItemProps {
  items: SelectItem[];
  isMultiSelected?: boolean;
  value: AdditionalRole[];
  setValue: Dispatch<SetStateAction<AdditionalRole[]>>;
}

const SelectListItem: FC<SelectListItemProps> = ({
  items,
  isMultiSelected = false,
  value,
  setValue,
}) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [singleValue, setSingleValue] = useState<string | null>(null);
  const [dropDownItems, setDropDownItems] = useState(items);

  const dropDownProps = isMultiSelected
    ? {
        multiple: true as true,
        min: 0,
        max: items.length,
        value: value,
        setValue: setValue,
      }
    : {
        value: singleValue,
        setValue: setSingleValue,
      };

  return (
    <DropDownPicker
      placeholder={t("selectListItem/placeholder")}
      open={open}
      items={dropDownItems}
      setOpen={setOpen}
      setItems={setDropDownItems}
      mode="BADGE"
      showBadgeDot={false}
      textStyle={{
        fontFamily: "AmericanTypewriter",
      }}
      {...dropDownProps}

      // badgeStyle={{ backgroundColor: "red" }}
      // https://hossein-zare.github.io/react-native-dropdown-picker-website/docs/advanced/modes

      // badgeColors={["white", "green", "orange", "red"]}
    />
  );
};

export default SelectListItem;
