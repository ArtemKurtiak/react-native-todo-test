import {NavigationContainer} from "@react-navigation/native";
import AllScreen from "../AllScreen/AllSсreen";
import {Image} from "react-native";
import ActiveScreen from "../ActiveScreen/ActiveScreen";
import CompletedScreen from "../CompletedScreen/DoneScreen";
import React from "react";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import { COLOR } from '../../constants/colors';


const Tab = createMaterialBottomTabNavigator();
export default function TabNavigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                activeColor="#0A0D76"
                inactiveColor="#6B6EC9"
                barStyle={{
                    backgroundColor: COLOR.RED,
                    borderTopWidth: 4,
                    borderColor: '#A06FD7',
                }}>
                <Tab.Screen
                    name="All"
                    component={AllScreen}
                    options={{
                        tabBarLabel: 'All',
                        tabBarIcon: () => (
                            <Image
                                source={{
                                    uri: 'https://static.thenounproject.com/png/1022925-200.png',
                                }}
                                style={{width: 25, height: 25, tintColor: 'black'}}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Active"
                    component={ActiveScreen}
                    options={{
                        tabBarLabel: 'Active',
                        tabBarIcon: () => (
                            <Image
                                source={{
                                    uri: 'https://static.thenounproject.com/png/1837652-200.png',
                                }}
                                style={{width: 25, height: 25, tintColor: 'black'}}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Completed"
                    component={CompletedScreen}
                    options={{
                        tabBarLabel: 'Completed',
                        tabBarIcon: () => (
                            <Image
                                source={{
                                    uri: 'https://static.thenounproject.com/png/1596429-200.png',
                                }}
                                style={{width: 25, height: 25, tintColor: 'black'}}
                            />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}