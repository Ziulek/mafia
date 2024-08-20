import AsyncStorage from "@react-native-async-storage/async-storage";

const storeNickname = async (nickname: string) => {
    try {
      await AsyncStorage.setItem('@userNickname', nickname);
      console.log('Nickname successfully stored.');
    } catch (error) {
      console.error('Error saving nickname:', error);
    }
  };

  export default storeNickname