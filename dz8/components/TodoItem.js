import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';

const TodoItem = ({ item, onDelete, onToggle }) => {
  const handleDelete = () => {
    Alert.alert(
      'Удаление задачи',
      'Точно удалить?',
      [
        { text: 'Нет', style: 'cancel' },
        { text: 'Да', onPress: () => onDelete(item.id) },
      ],
      { cancelable: true }
    );
  };

  const handleToggle = () => {
    onToggle(item.id);
  };

  return (
    <TouchableOpacity onPress={handleToggle}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
        <Text style={{ textDecorationLine: item.completed ? 'line-through' : 'none' }}>
          {item.text}
        </Text>
        <TouchableOpacity onPress={handleDelete}>
          <Text style={{ color: 'red' }}>Удалить</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default TodoItem;