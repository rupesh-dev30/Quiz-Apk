import { View } from "react-native";
import React, { useEffect, useState } from "react";
import { Question, QuestionProps } from "../types";
import AnswerOptions from "./AnswerOptions";
import Card from "./Card";

export default function QuestionCard({ question }: Question) {
  useEffect(() => {
    console.warn("load");
  }, []);

  useEffect(() => {
    console.warn("load");
    // return console.log("cleanup");
  }, [question]);

  return (
    <Card title={question.title}>
      <View style={{ gap: 10 }}>
        {question.options.map((option) => (
          <AnswerOptions key={option} option={option} />
        ))}
      </View>
    </Card>
  );
}
