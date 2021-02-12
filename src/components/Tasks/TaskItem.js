import { StyleSheet, Text, View} from "react-native";
import React from 'react';

const TaskItem = (props) => {
    return <View style={styles.task}>
        <Text>{props.title}</Text>
    </View>
};

const styles = StyleSheet.create({
    task: {padding: 15, alignItems: 'center', borderWidth: 3, borderColor: 'green', fontSize: 30, width: 200}
});
export default TaskItem;