import React from 'react';
import { FlatList } from 'react-native';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onToggleTaskStatus, onDeleteTask }) => {
  const renderItem = ({ item }) => (
    <TaskItem item={item} onToggleTaskStatus={onToggleTaskStatus} onDeleteTask={onDeleteTask} />
  );

  return (
    <FlatList
      data={tasks}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

export default TaskList;
