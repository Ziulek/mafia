import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import Icon from "react-native-vector-icons/MaterialIcons"; // Import MaterialIcons for the check mark icon

interface ListItem {
  id: number;
  name: string;
}

const SelectListItem: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState<ListItem[]>([]);
  const [displayText, setDisplayText] = useState("Select options");

  const items: ListItem[] = [
    { id: 1, name: "Detective" },
    { id: 2, name: "Medic" },
    { id: 3, name: "Serial Killer" },
    { id: 4, name: "Medium" },
  ];

  const handleValueChange = (selectedItem: ListItem) => {
    const newSelectedItems = [...selectedItems];
    const itemIndex = newSelectedItems.findIndex(
      (item) => item.id === selectedItem.id
    );

    if (itemIndex > -1) {
      newSelectedItems.splice(itemIndex, 1);
    } else {
      newSelectedItems.push(selectedItem);
    }

    setSelectedItems(newSelectedItems);
    setDisplayText(
      newSelectedItems.length > 0
        ? newSelectedItems.map((item) => item.name).join(", ")
        : "Select options"
    );
  };

  const renderDropdownButton = (
    selectedItem: ListItem | null,
    isOpened: boolean
  ) => {
    return (
      <View style={styles.dropdownButtonStyle}>
        <Text style={styles.dropdownButtonTxtStyle}>{displayText}</Text>
        {!isOpened && <Icon name="keyboard-arrow-down" style={styles.icon} />}
      </View>
    );
  };

  const renderDropdownItem = (
    item: ListItem,
    index: number,
    isSelected: boolean
  ) => {
    return (
      <View style={styles.dropdownItemStyle}>
        <Text style={styles.dropdownItemTxtStyle}>{item.name}</Text>
        {isSelected && <Icon name="check" style={styles.icon} />}
      </View>
    );
  };

  return (
    <SelectDropdown
      data={items}
      onSelect={(selectedItem: ListItem, index: number) =>
        handleValueChange(selectedItem)
      }
      renderButton={(selectedItem, isOpened) =>
        renderDropdownButton(selectedItem, isOpened)
      }
      renderItem={(item, index, isSelected) =>
        renderDropdownItem(item, index, selectedItems.includes(item))
      }
      showsVerticalScrollIndicator={false}
      dropdownStyle={styles.dropdownMenuStyle}
    />
  );
};

const styles = StyleSheet.create({
  dropdownButtonStyle: {
    width: "100%",
    height: 50,
    backgroundColor: "#E9ECEF",
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "500",
    color: "#151E26",
  },
  dropdownItemStyle: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "500",
    color: "#151E26",
  },
  icon: {
    fontSize: 24,
    color: "#151E26",
  },
  dropdownMenuStyle: {
    width: "90%",
    backgroundColor: "#E9ECEF",
    borderRadius: 8,
  },
});

export default SelectListItem;
