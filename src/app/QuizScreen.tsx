import { View, Text, StyleSheet, Button, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import QuestionCard from "../components/QuestionCard";
import AntDesign from "@expo/vector-icons/AntDesign";
import questions from "../questions";
import Card from "../components/Card";
import CustomButton from "../components/CustomButton";

export default function QuizScreen() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const question = questions[questionIndex];

  const onNext = () => {
    setQuestionIndex((curr) => curr + 1);
  };

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        {/* Header */}
        <View>
          <Text style={styles.title}>Question 1/5</Text>
        </View>

        {question ? (
          <View>
            <QuestionCard question={question} />
            <Text style={styles.time}>30 sec</Text>
          </View>
        ) : (
          <Card title="Well Done">
            <Text>Correct Answer: 2/5</Text>
            <Text>Best score: 10</Text>
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
