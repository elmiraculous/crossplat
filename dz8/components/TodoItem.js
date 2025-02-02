import React from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import AppText from './AppText';


const TodoItem = ({ item, onDelete, onToggle }) => {
  const { colors, theme } = useTheme();
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
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <AppText style={[styles.text, { textDecorationLine: item.completed ? 'line-through' : 'none', color: colors.text }]}>
          {item.text}
        </AppText>
        <TouchableOpacity onPress={handleDelete}>
          <AppText style={{ color: theme === 'dark' ? '#ff6347' : '#b22222' }}>Удалить</AppText>  {/* Используем красный цвет для кнопки */}
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
  },
});

export default TodoItem;
