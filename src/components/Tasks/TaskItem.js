import { StyleSheet, Text, View} from "react-native";
import React, {useState} from 'react';
import CheckBox from "@react-native-community/checkbox";


const TaskItem = (props) => {
    return <View style={styles.task}>
        <Text><CheckBox
            style={{alignSelf: "center"}}
        /></Text>
        <Text>{props.title}</Text>
    </View>
};

const styles = StyleSheet.create({
    task: {
        padding: 15,
        alignItems: 'center',
        borderWidth: 3,
        borderColor: 'gray',
        fontSize: 30,
        width: 200,
        borderRadius: 5,
        marginTop: 15,
        flexDirection: 'row'
    }
});
export default TaskItem;