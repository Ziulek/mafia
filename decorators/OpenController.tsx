import { ReactNode, useState } from "react";
import { Button, View } from "react-native";

const OpenController = ({
  renderContent,
}: {
  renderContent: (isVisible: boolean) => ReactNode;
}) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleOpen = () => setIsVisible(true);
  const handleClose = () => setIsVisible(false);

  return (
    <>
      {renderContent(isVisible)}
      <View style={{ marginTop: "90%" }}>
        <Button title="Open" onPress={handleOpen} />
        <Button title="Close" onPress={handleClose} />
      </View>
    </>
  );
};

export default OpenController;
