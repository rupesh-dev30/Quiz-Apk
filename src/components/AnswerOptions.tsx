import { Pressable, Text, StyleSheet } from "react-native";
import { useQuizContext } from "../providers/QuizProvider";

type AnswerOptionsProps = {
  option: string;
};

export default function AnswerOptions({ option }: AnswerOptionsProps) {
  const { selectedOption, setSelectedOption } = useQuizContext();

  const isSelected = option === selectedOption;

  return (
    <Pressable
      onPress={() => setSelectedOption(option)}
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
