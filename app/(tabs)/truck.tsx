import { ScrollView, StyleSheet } from "react-native";

import { TruckList } from "@/features/truck/components/TruckList";

export default function TruckScreen() {
  return (
    <ScrollView style={styles.container}>
      <TruckList />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
    padding: 16,
  },
});
