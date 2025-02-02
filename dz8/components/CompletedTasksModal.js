import React from 'react';
import { Modalize } from 'react-native-modalize';
import { View, Text } from 'react-native';

const CompletedTasksModal = ({ modalizeRef, completedTasks }) => {
  return (
    <Modalize ref={modalizeRef} adjustToContentHeight>
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Завершенные задачи:</Text>
        {completedTasks.map((task) => (
          <Text key={task.id} style={{ marginTop: 10 }}>{task.text}</Text>
        ))}
      </View>
    </Modalize>
  );
};

export default CompletedTasksModal;