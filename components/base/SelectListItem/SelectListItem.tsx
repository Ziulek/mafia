import { Check, ChevronDown } from "@tamagui/lucide-icons";
import { useMemo, useState } from "react";

import {
  Label,
  Select,
  Sheet,
  YStack,
  XStack,
  PortalProvider,
  Adapt,
  SelectProps,
} from "tamagui";

interface ListItem {
  id: number;
  name: string;
}

type SelectListItemProps = {
  items: ListItem[];
};

export function SelectListItem() {
  const [val, setVal] = useState("Choose options");

  const items = [
    { id: 1, name: "Detective" },
    { id: 2, name: "Medic" },
    { id: 3, name: "Serial Killer" },
    { id: 4, name: "Medium" },
  ];

  // Memoize the list items
  const listItems = items.map((item, i) => (
    <Select.Item index={i} key={item.id} value={item.name.toLowerCase()}>
      <Select.ItemText fontFamily="unset">{item.name}</Select.ItemText>
      <Select.ItemIndicator marginLeft="auto">
        <Check size={16} />
      </Select.ItemIndicator>
    </Select.Item>
  ));

  return (
    <PortalProvider>
      <Select
        value={val}
        onValueChange={setVal}
        disablePreventBodyScroll={false}
      >
        <Select.Trigger width={"100%"} iconAfter={ChevronDown}>
          <Select.Value placeholder="Something" />
        </Select.Trigger>
        <Adapt when="sm" platform="touch">
          <Sheet
          // native={!!props.native}
          // modal
          // dismissOnSnapToBottom
          // animationConfig={{
          //   type: "spring",
          //   damping: 20,
          //   mass: 1.2,
          //   stiffness: 250,
          // }}
          >
            <Sheet.Frame>
              <Sheet.ScrollView>
                <Adapt.Contents />
              </Sheet.ScrollView>
            </Sheet.Frame>
            <Sheet.Overlay
            // animation="lazy"
            // enterStyle={{ opacity: 0 }}
            // exitStyle={{ opacity: 0 }}
            />
          </Sheet>
        </Adapt>
        <Select.Content>
          <Select.Viewport>{listItems}</Select.Viewport>
        </Select.Content>
      </Select>
    </PortalProvider>
  );
}
