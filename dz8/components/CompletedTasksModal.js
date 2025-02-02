import React from 'react';
import { Modalize } from 'react-native-modalize';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../theme/ThemeContext';

const CompletedTasksModal = ({ modalizeRef, completedTasks }) => {
  const { colors } = useTheme();

  return (
    <Modalize ref={modalizeRef} adjustToContentHeight>
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <Text style={[styles.title, { color: colors.text }]}>Завершенные задачи:</Text>
        {completedTasks.map((task) => (
          <Text key={task.id} style={[styles.taskText, { color: colors.text }]}>
            {task.text}
          </Text>
        ))}
      </View>
    </Modalize>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  taskText: {
    marginTop: 10,
    fontSize: 16,
  },
});

export default CompletedTasksModal;
