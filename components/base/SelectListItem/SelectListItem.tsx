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
  isMultiSelected = false, // do zrobienia
}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string[]>([]);
  const [dropDownItems, setDropDownItems] = useState(items);

  return (
    <DropDownPicker
      placeholder="No extra roles"
      multiple={true}
      min={0}
      max={4}
      open={open}
      value={value}
      items={dropDownItems}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setDropDownItems}
      mode="BADGE"
      showBadgeDot={false}
      // https://hossein-zare.github.io/react-native-dropdown-picker-website/docs/advanced/modes
      // badgeColors={["white", "green", "red"]}
    />
  );
};

// const styles = StyleSheet.create({
//   dropdownButtonStyle: {
//     width: "100%",
//     height: 50,
//     backgroundColor: "#E9ECEF",
//     borderRadius: 12,
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     paddingHorizontal: 12,
//   },
//   dropdownButtonTxtStyle: {
//     flex: 1,
//     fontSize: 18,
//     fontWeight: "500",
//     color: "#151E26",
//   },
//   dropdownItemStyle: {
//     width: "90%",
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingHorizontal: 12,
//     paddingVertical: 8,
//   },
//   dropdownItemTxtStyle: {
//     flex: 1,
//     fontSize: 18,
//     fontWeight: "500",
//     color: "#151E26",
//   },
//   icon: {
//     fontSize: 24,
//     color: "#151E26",
//   },
//   dropdownMenuStyle: {
//     width: "90%",
//     backgroundColor: "#E9ECEF",
//     borderRadius: 8,
//   },
// });

export default SelectListItem;
