import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, Alert } from 'react-native';
import TaskList from './TaskList';
import AddTask from './AddTask';
import styles from './styles';
import { database } from './firebaseConfig';
import { ref, onValue, push, set, update, remove } from 'firebase/database';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const tasksRef = ref(database, 'tasks');
    const unsubscribe = onValue(tasksRef, (snapshot) => {
      const data = snapshot.val();
      const loadedTasks = data ? Object.keys(data).map(key => ({ id: key, ...data[key] })) : [];
      setTasks(loadedTasks);
    });

    return () => unsubscribe();
  }, []);

  const addTask = (title) => {
    if (title.trim().length > 0) {
      const newTaskRef = push(ref(database, 'tasks'));
      set(newTaskRef, {
        title,
        status: false
      });
    }
  };

  const toggleTaskStatus = (id) => {
    const taskRef = ref(database, `tasks/${id}`);
    onValue(taskRef, (snapshot) => {
      const task = snapshot.val();
      update(taskRef, { status: !task.status });
    }, { onlyOnce: true });
  };

  const deleteTask = (id) => {
    Alert.alert(
      "Delete Task",
      "Are you sure you want to delete this task?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          onPress: () => remove(ref(database, `tasks/${id}`)),
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
