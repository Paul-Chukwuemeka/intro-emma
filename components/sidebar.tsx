import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";

import { Link } from "expo-router";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Pressable
      style={{
        width: isOpen ? "100%" : 50,
        height: isOpen ? "100%" : 50,
        position: "absolute",
        top: 40,
        left:10,
        backgroundColor: "transparent",
        zIndex: 100,
        borderRadius: isOpen ? 10 : "100%",
      }}
      onPress={() => setIsOpen(false)}
    >
      <Pressable
        style={{
          width: isOpen ? 300 : 50,
          height: isOpen ? 600 : 50,
          backgroundColor: "white",
          zIndex: 100,
          borderRadius: isOpen ? 10 : "100%",
          alignItems: isOpen ? "flex-start" : "center",
          justifyContent: isOpen ? "flex-start" : "center",
          padding: 10,
        }}
        onPress={(e) => {
          e.stopPropagation();
          setIsOpen(true);
        }}
      >
        <FontAwesome name="align-right" size={30} />
        {isOpen && (
          <View>
            <Link href={"/home"}>
              <Text style={{ fontSize: 25, fontWeight: 600 }}>Home</Text>
            </Link>
            <Link href={"/(tabs)"}>
              <Text style={{ fontSize: 25, fontWeight: 600 }}>Tabs</Text>
            </Link>
            <Link href={"/projects"}>
              <Text style={{ fontSize: 25, fontWeight: 600 }}>Projects</Text>
            </Link>
          </View>
        )}
      </Pressable>
    </Pressable>
  );
};

export default Sidebar;
