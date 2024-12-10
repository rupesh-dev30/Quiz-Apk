import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import QuestionCard from "../components/QuestionCard";
import AntDesign from "@expo/vector-icons/AntDesign";
import Card from "../components/Card";
import CustomButton from "../components/CustomButton";
import { useQuizContext } from "../providers/QuizProvider";
import { useEffect, useState } from "react";

export default function QuizScreen() {
  const {
    question,
    questionIndex,
    onNext,
    score,
    totalQuestion,
    correctAnswer,
    isFinished,
    bestScore,
  } = useQuizContext();

  const [time, setTime] = useState(20);

  useEffect(() => {
    setTime(20);
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [question]);

  useEffect(() => {
    if(time <= 0) {
      onNext();
    }
  }, [time])

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        {!isFinished && (
          <View>
            <Text style={styles.title}>
              Question {questionIndex + 1}/{totalQuestion}
            </Text>
          </View>
        )}

        {question ? (
          <View>
            <QuestionCard question={question} />
            <Text style={styles.time}>{time} sec</Text>
          </View>
        ) : (
          <Card title="Well Done">
            <Text>
              Correct Answer: {correctAnswer}/{totalQuestion}
            </Text>
            <Text>Score: {score}</Text>
            <Text>Best score: {bestScore}</Text>
          </Card>
        )}

        <View>
          <CustomButton
            buttonText="Next"
            icon={<AntDesign name="arrowright" size={18} color="white" />}
            onPress={() => onNext()}
            // onLongPress={() => console.warn("LONG PRESSED")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    color: "#005055",
  },
  container: {
    backgroundColor: "#FDFEF4",
    flex: 1,
    justifyContent: "space-between",
    padding: 20,
  },
  time: {
    marginTop: 15,
    textAlign: "center",
    color: "#005055",
    fontWeight: "bold",
  },
});
