import React from "react";
import { View, Text, StyleSheet, Platform, ProgressBarAndroid, ProgressBar } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Card } from "react-native-paper"; // Using React Native Paper

export default function CommunityOverview() {
  const community = {
    name: "Green Earth Community",
    location: "New York, USA",
    totalPoints: 7500,
    wasteCategories: {
      Recyclable: 500,
      Compostable: 200,
      NonRecyclable: 150,
    },
    goalProgress: 0.65, // Progress in decimal (0.65 = 65%)
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>{community.name}</Text>
        <Text style={styles.location}>📍 {community.location}</Text>
      </View>

      {/* Waste Breakdown & Total Points */}
      <View style={styles.row}>
        {/* Waste Breakdown */}
        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.cardTitle}>Waste Breakdown</Text>
            {Object.entries(community.wasteCategories).map(([category, amount]) => (
              <View key={category} style={styles.listItem}>
                <Text>{category}</Text>
                <Text style={styles.bold}>{amount} kg</Text>
              </View>
            ))}
          </Card.Content>
        </Card>

        {/* Total Points */}
        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.cardTitle}>Total Points</Text>
            <View style={styles.pointsContainer}>
              <MaterialIcons name="stars" size={50} color="gold" />
              <Text style={styles.points}>{community.totalPoints}</Text>
            </View>
          </Card.Content>
        </Card>
      </View>

      {/* Progress Bar */}
      <View style={styles.progressContainer}>
        <Text style={styles.cardTitle}>Community Goal Progress</Text>
        {Platform.OS === "android" ? (
          <ProgressBarAndroid
            styleAttr="Horizontal"
            indeterminate={false}
            progress={community.goalProgress}
            color="green"
          />
        ) : (
          <ProgressBar progress={community.goalProgress} color="green" style={styles.progressBar} />
        )}
        <Text style={styles.progressText}>{community.goalProgress * 100}% completed</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  header: { alignItems: "center", marginBottom: 20 },
  title: { fontSize: 22, fontWeight: "bold" },
  location: { fontSize: 16, color: "gray" },
  row: { flexDirection: "row", justifyContent: "space-between" },
  card: { flex: 1, padding: 10, margin: 5 },
  cardTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  listItem: { flexDirection: "row", justifyContent: "space-between", marginBottom: 5 },
  bold: { fontWeight: "bold" },
  pointsContainer: { alignItems: "center" },
  points: { fontSize: 22, fontWeight: "bold", marginTop: 5 },
  progressContainer: { marginTop: 20 },
  progressText: { fontSize: 14, color: "gray", marginTop: 5 },
  progressBar: { height: 10, borderRadius: 5, backgroundColor: "#ddd" }, // iOS ProgressBar styling
});
