import { useState, type ReactElement, useEffect } from "react";
import { useRouter } from "expo-router";
import OnBoardingScreen from "@/components/screens/onBoardingScreen/onBoardingScreen";
import correctNickname from "@/helpers/correctNickname";
import storeNickname from "@/helpers/storeNickname";
import { useTranslation } from "react-i18next";

export default (): ReactElement => {
  const router = useRouter();
  const { t } = useTranslation();
  const [nickname, setNickname] = useState<string>("");
  const [isNicknameValid, setIsNicknameValid] = useState<boolean>(true);
  const [nicknameMessage, setNicknameMessage] = useState<string>("");

  useEffect(() => {
    const { isValid, message } = correctNickname(nickname, t);
    console.log("isValid", isValid, "message", message);
    setIsNicknameValid(isValid);
    setNicknameMessage(message);
  }, [nickname]);

  const handleNicknameInput = () => {
    storeNickname(nickname);
    router.replace(`/joinOrHost`);
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
