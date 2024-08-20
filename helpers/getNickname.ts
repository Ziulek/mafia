import AsyncStorage from "@react-native-async-storage/async-storage";

const getNickname = async () => {
    try {
      const storedValue = await AsyncStorage.getItem("@userNickname");
      if (storedValue !== null) {
        let nickname;

        try {
          // Attempt to parse the stored value as JSON
          const parsedValue = JSON.parse(storedValue);

          // Destructure to get the value of _result
          const { _result } = parsedValue;
          nickname = _result; // Extract _result value
        } catch (e) {
          // If parsing fails, treat the value as a string directly
          nickname = storedValue;
        }

        console.log("Retrieved nickname:", nickname);
        return nickname;
      } else {
        console.log("No nickname found");
        return null;
      }
    } catch (error) {
      console.error("Error retrieving nickname:", error);
      return null;
    }
  };

  export default getNickname