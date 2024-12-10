import { View } from "react-native";
import React, { useState } from "react";
import { QuestionProps } from "../types";
import AnswerOptions from "./AnswerOptions";
import Card from "./Card";

export default function QuestionCard({ question }: QuestionProps) {
  const [selectedOption, setSelectedOption] = useState<string | undefined>();

  const onOptionsSelected = (option: string) => {
    setSelectedOption(option)
    console.warn("Selected: ", option);
  };

  return (
    <Card title={question.title}>
      <View style={{ gap: 10 }}>
        {question.options.map((option) => (
          <AnswerOptions
            key={option}
            option={option}
            isSelected={option === selectedOption}
            onPress={onOptionsSelected}
          />
        ))}
      </View>
    </Card>
  );
}
