import { Text, StyleSheet } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const Projects = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "green", flex: 1 }}>
      <Text style={styles.title}>Home</Text>
      <Link
        style={{
          color: "yellow",
        }}
        href={"/projects"}
      >
        Projects page
      </Link>

      <Link
        style={{
          color: "white",
          fontSize:20,
          fontWeight:600,
          margin:10
        }}
        href={"/(tabs)"}
      >
        Go to tabs
      </Link>
    </SafeAreaView>
  );
};

export default Projects;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 900,
    color: "white",
  },
});
