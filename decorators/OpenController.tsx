import { ReactNode, useState } from "react";
import { Button, View } from "react-native";

const OpenController = ({
  renderContent,
}: {
  renderContent: (isVisible: boolean) => ReactNode;
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleOpen = () => setIsVisible(true);
  const handleClose = () => setIsVisible(false);

  return (
    <>
      {renderContent(isVisible)}
      <View style={{ marginTop: "100%" }}>
        <Button title="Open" onPress={handleOpen} />
        <Button title="Close" onPress={handleClose} />
      </View>
    </>
  );
};

export default OpenController;
