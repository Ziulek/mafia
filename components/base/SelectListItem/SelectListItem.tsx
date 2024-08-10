import { FC, useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";

interface SelectItem {
  label: string;
  value: string;
}

interface SelectListItemProps {
  items: SelectItem[];
  isMultiSelected?: boolean;
}

const SelectListItem: FC<SelectListItemProps> = ({
  items,
  isMultiSelected = false,
}) => {
  const [open, setOpen] = useState(false);
  const [singleValue, setSingleValue] = useState<string | null>(null);
  const [multiValue, setMultiValue] = useState<string[]>([]);
  const [dropDownItems, setDropDownItems] = useState(items);

  const dropDownProps = isMultiSelected
    ? {
        multiple: true as true,
        min: 0,
        max: items.length,
        value: multiValue,
        setValue: setMultiValue,
      }
    : {
        value: singleValue,
        setValue: setSingleValue,
      };

  return (
    <DropDownPicker
      placeholder="No extra roles"
      open={open}
      items={dropDownItems}
      setOpen={setOpen}
      setItems={setDropDownItems}
      mode="BADGE"
      showBadgeDot={false}
      {...dropDownProps}
      // badgeStyle={{ backgroundColor: "red" }}
      // https://hossein-zare.github.io/react-native-dropdown-picker-website/docs/advanced/modes

      // badgeColors={["white", "green", "orange", "red"]}
    />
  );
};

export default SelectListItem;
