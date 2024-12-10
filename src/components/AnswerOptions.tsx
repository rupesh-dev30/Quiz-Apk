import { Pressable, Text, StyleSheet } from "react-native";

type AnswerOptionsProps = {
  option: string;
  isSelected?: boolean;
  onPress: (option: string) => void
};

export default function AnswerOptions({
  option,
  isSelected,
  onPress
}: AnswerOptionsProps) {
  return (
    <Pressable onPress={() => onPress(option)}
      style={[
        styles.container,
        isSelected
          ? {
              backgroundColor: "#87eb4e",
              borderColor: "#87eb4e",
            }
          : {
            backgroundColor: "#f7f7f7",
            borderColor: "#888080",
          },
      ]}
    >
      <Text>{option}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "lightgray",
    padding: 20,
    borderRadius: 20,
  },
});
