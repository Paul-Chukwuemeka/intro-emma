import { Text, View, TextInput, Pressable } from "react-native";
import { useEffect, useState } from "react";

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: "flex-start",
          alignItems: "center",
          padding: 30,
          paddingTop: 20,
          gap: 20,
          backgroundColor: "#d7f7daff",
        }}
      >
        <Text
          style={{
            fontSize: 40,
            fontWeight: "bold",
            color: "#2e7d32",
          }}
        >
          To do App
        </Text>

        <View
          style={{
            width: "100%",
            flexDirection: "row",
            gap: 5,
          }}
        >
          <TextInput
            value={newTask}
            onChangeText={(value) => {
              setNewTask(value);
            }}
            onSubmitEditing={() => {
              setTasks((prev) => [...prev, newTask]);
              setNewTask("");
            }}
            style={{
              height: 40,
              borderColor: "#2e7d32",
              borderWidth: 1,
              flex: 1,
              paddingHorizontal: 10,
            }}
          />
          <Pressable
            onPress={() => {
              setTasks((prev) => [...prev, newTask]);
              setNewTask("");
            }}
            style={{
              width: 50,
              backgroundColor: "#2e7d32",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 30,
                fontWeight: "bold",
              }}
            >
              +
            </Text>
          </Pressable>
        </View>

        <View
          style={{
            width: "100%",
            borderWidth: 1,
            padding: 10,
            display: "flex",
            gap: 10,
          }}
        >
          {tasks &&
            tasks.map((task, id) => {
              return (
                <View
                  key={id}
                  style={{
                    width: "100%",
                    flexDirection: "row",
                    gap: 10,
                  }}
                >
                  <Text style={{ fontWeight: 600, flex: 1, fontSize: 18 }}>
                    {task}
                  </Text>
                  <Pressable
                    style={{}}
                    onPress={() => {
                      setTasks(tasks.filter((_, idx) => idx !== id));
                    }}
                  >
                    <Text>Delete</Text>
                  </Pressable>
                </View>
              );
            })}
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
