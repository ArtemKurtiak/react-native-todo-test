import { Button, StyleSheet, Text, TextInput, View} from "react-native";
import React, {useState} from "react";
import TaskItem from "../../components/Tasks/TaskItem";

const AllScreen = (props) => {
    let [text, setText] = useState('Task');
    let allTasks = props.allTasks.map((task) => (
        <TaskItem key={task.title} title={task.title}/>
    ));
    return (
        <View style={styles.tabContent}>
            <TextInput style={{alignSelf: "center", height: 40, borderColor: 'gray', borderWidth: 1, width: 300}} onChangeText={(value) => setText(value)}/>
            <Button title='Add' onPress={() => {props.addTask(text)}}/>
            {allTasks}
        </View>
    );
};

const styles = StyleSheet.create({
    tabContent: {flex: 1, alignItems: 'center'},
});
export default AllScreen;