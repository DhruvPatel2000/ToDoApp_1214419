import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, KeyboardAvoidingView, Platform } from 'react-native';
import styles from './styles';

const AddTask = ({ onAddTask }) => {
  const [taskTitle, setTaskTitle] = useState('');

  const handleAddTask = () => {
    onAddTask(taskTitle);
    setTaskTitle('');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.inputContainer}
    >
      <TextInput
        style={styles.input}
        placeholder="Enter task title"
        value={taskTitle}
        onChangeText={setTaskTitle}
      />
      <TouchableOpacity
        style={[styles.addButton, { backgroundColor: taskTitle.trim().length === 0 ? 'gray' : 'green' }]}
        onPress={handleAddTask}
        disabled={taskTitle.trim().length === 0}
      >
        <Text style={styles.addButtonText}>Add Task</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default AddTask;
