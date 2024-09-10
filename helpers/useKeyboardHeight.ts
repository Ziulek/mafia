import { useEffect, useState } from "react";
import { Keyboard, KeyboardEvent, Platform } from "react-native";
export const useKeyboardHeight = () => {
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  useEffect(() => {
    const onKeyboardShow = (event: KeyboardEvent) => {
      if (Platform.OS === "android") {
        setKeyboardHeight(event.endCoordinates.height);
      } else {
        // On iOS, there are two different events: "keyboardWillShow" and "keyboardDidShow"
        // You can use either, but "keyboardWillShow" gives you some time before the keyboard is fully open
        setKeyboardHeight(event.endCoordinates.height);
      }
    };

    const onKeyboardHide = () => {
      //   setKeyboardHeight(0); // Reset the keyboard height when the keyboard is hidden
    };

    const showEvent =
      Platform.OS === "android" ? "keyboardDidShow" : "keyboardWillShow";
    const hideEvent =
      Platform.OS === "android" ? "keyboardDidHide" : "keyboardWillHide";

    // Add event listeners for keyboard show and hide
    const keyboardDidShowListener = Keyboard.addListener(
      showEvent,
      onKeyboardShow
    );
    const keyboardDidHideListener = Keyboard.addListener(
      hideEvent,
      onKeyboardHide
    );

    return () => {
      // Clean up the event listeners
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return keyboardHeight;
};
