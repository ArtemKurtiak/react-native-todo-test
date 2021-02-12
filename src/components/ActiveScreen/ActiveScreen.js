import {StyleSheet, Text, View} from "react-native";
import React from "react";
import TaskItem from "../Tasks/TaskItem";

export default function ActiveScreen() {
    return (
        <View style={styles.tabContent}>
            <TaskItem title={'First task'} />
            <Text>Active!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    tabContent: {flex: 1, alignItems: 'center'},
});