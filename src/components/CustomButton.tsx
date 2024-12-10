import {
  View,
  Text,
  Pressable,
  StyleSheet,
  PressableProps,
} from "react-native";

type CustomButtonProps = {
  buttonText: string;
  icon?: React.ReactNode;
  // onPress: () => void;
  // onLongPress?: () => void;
} & PressableProps;

export default function CustomButton({
  buttonText,
  icon,
  // onPress,
  // onLongPress,
  ...pressableProps
}: CustomButtonProps) {
  console.log(pressableProps);

  return (
    <Pressable
      style={styles.button}
      // onPress={pressableProps.onPress}
      // onLongPress={pressableProps.onLongPress}
      {...pressableProps}
    >
      <Text style={styles.buttonText}>{buttonText}</Text>
      <View style={styles.buttonIcon}>{icon}</View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#005055",
    padding: 20,
    borderRadius: 100,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontSize: 15,
    letterSpacing: 1.5,
  },
  buttonIcon: {
    position: "absolute",
    right: 20,
    top: 20,
  },
});
