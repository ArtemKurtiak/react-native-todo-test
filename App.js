import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

function AllScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>All!</Text>
    </View>
  );
}

function ActiveScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Active!</Text>
    </View>
  );
}
function DoneScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Done</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="All" component={AllScreen} />
          <Tab.Screen name="Active" component={ActiveScreen} />
          <Tab.Screen name="Done" component={DoneScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
