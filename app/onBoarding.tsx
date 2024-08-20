import { useState, type ReactElement, useEffect } from "react";
import { useRouter } from "expo-router";
import OnBoardingScreen from "@/components/screens/onBoardingScreen/onBoardingScreen";
import correctNickname from "@/helpers/correctNickname";
import storeNickname from "@/helpers/storeNickname";
import getNickname from "@/helpers/getNickname";

export default (): ReactElement => {
  const router = useRouter();
  const [nickname, setNickname] = useState<string>("");
  const [isNicknameValid, setIsNicknameValid] = useState<boolean>(true);
  const [nicknameMessage, setNicknameMessage] = useState<string>("");

  // const checkNickname = async () => {
  //   const nickname = await getNickname();
  //   if (nickname) {
  //     router.push(`/joinOrHost`);
  //   } else {
  //     router.replace(`/onBoarding`);
  //   }
  // };
  // checkNickname();

  useEffect(() => {
    const { isValid, message } = correctNickname(nickname);
    console.log("isValid", isValid, "message", message);
    setIsNicknameValid(isValid);
    setNicknameMessage(message);
  }, [nickname]);

  const handleNicknameInput = () => {
    storeNickname(nickname);
    router.push(`/joinOrHost`);
  };

  return (
    <OnBoardingScreen
      nickname={nickname}
      setNickname={setNickname}
      isNicknameValid={isNicknameValid}
      nicknameMessage={nicknameMessage}
      onPress={() => handleNicknameInput()}
    />
  );
};

//456789ABCDEFG
