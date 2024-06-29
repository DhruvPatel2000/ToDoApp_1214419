import React from 'react';
import { View, Text, TouchableOpacity, Switch, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

const TaskItem = ({ item, onToggleTaskStatus, onDeleteTask }) => {
  const fadeAnim = new Animated.Value(0);

  Animated.timing(fadeAnim, {
    toValue: 1,
    duration: 500,
    useNativeDriver: true
  }).start();

  return (
    <Animated.View style={[styles.taskContainer, { opacity: fadeAnim }]}>
      <View style={styles.taskInfo}>
        <Text style={[styles.taskTitle, item.status && styles.taskDone]}>{item.title}</Text>
        <Switch
          value={item.status}
          onValueChange={() => onToggleTaskStatus(item.id)}
        />
      </View>
      <TouchableOpacity onPress={() => onDeleteTask(item.id)} style={styles.deleteButton}>
        <Ionicons name="trash-bin" size={25} color="white" />
      </TouchableOpacity>
    </Animated.View>
  );
};

export default TaskItem;
