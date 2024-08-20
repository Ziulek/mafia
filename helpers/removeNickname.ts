import AsyncStorage from "@react-native-async-storage/async-storage";

const removeNickname = async () => {
  try {
    await AsyncStorage.removeItem("@userNickname");
    console.log("Nickname successfully removed.");
  } catch (error) {
    console.error("Error removing nickname:", error);
  }
};

export default removeNickname;
