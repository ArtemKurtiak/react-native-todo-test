import {StyleSheet, Text, View} from "react-native";
import React from "react";

export default function AllScreen() {
    return (
        <View style={styles.tabContent}>
            <Text>All!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    tabContent: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});