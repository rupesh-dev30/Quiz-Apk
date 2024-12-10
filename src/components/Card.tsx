import { StyleSheet, Text, View } from "react-native";
import { PropsWithChildren } from "react"; // it allow children to give types

/*
without PropsWithChildren

type Card = {
  title: string;
  children: React.ReactNode;
};
*/

type Card = PropsWithChildren<{
  title: string;
}>;

export default function Card({ title, children }: Card) {
  return (
    <View style={styles.containter}>
      <Text style={styles.question}>{title}</Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  containter: {
    backgroundColor: "white",
    padding: 20,
    paddingVertical: 40,
    borderRadius: 20,
    gap: 20,

    // Shadow -> Shadow Generator
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,

    elevation: 17,
  },
  question: {
    fontSize: 24,
    fontWeight: "800",
  },
});
