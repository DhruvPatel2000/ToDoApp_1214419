import React, { useState } from 'react';
import { SafeAreaView, FlatList, View, Text, Alert } from 'react-native';
import TaskList from './TaskList';
import AddTask from './AddTask';
import styles from './styles';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (title) => {
    if (title.trim().length > 0) {
      setTasks([...tasks, { id: Date.now().toString(), title, status: false }]);
    }
  };

  const toggleTaskStatus = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, status: !task.status } : task));
  };

  const deleteTask = (id) => {
    Alert.alert(
      "Delete Task",
      "Are you sure you want to delete this task?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          onPress: () => setTasks(tasks.filter(task => task.id !== id)),
          style: "destructive"
        }
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>ToDoApp_1214419</Text>
      <AddTask onAddTask={addTask} />
      {tasks.length > 0 ? (
        <TaskList tasks={tasks} onToggleTaskStatus={toggleTaskStatus} onDeleteTask={deleteTask} />
      ) : (
        <View style={styles.noTasksContainer}>
          <Text style={styles.noTasksText}>No tasks available</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default App;
