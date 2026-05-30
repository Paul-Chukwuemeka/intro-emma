import { Text ,StyleSheet} from "react-native";
import React from "react";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const Projects = () => {
  return (
    <SafeAreaView style={{backgroundColor:"yellow",flex:1}}>
      <Text style={styles.title}>Projects</Text>
      <Link style={{
        color:"red"
      }} href={"/home"}>Home page</Link>
    </SafeAreaView>
  );
};

export default Projects;



const styles = StyleSheet.create({
    title:{
        fontSize:30,
        fontWeight: 900
    }
})