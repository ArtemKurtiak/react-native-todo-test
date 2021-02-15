import React from 'react';
import {View} from 'react-native';
import TabNavigator from './src/navigator/TabNavigator/TabNavigator';
import rootReducer from "./src/Redux/store";
import {applyMiddleware, createStore} from "redux";
import {createLogger} from "redux-logger";
import {Provider} from "react-redux";


const store = createStore(rootReducer, applyMiddleware(createLogger()))


const App = () => {
    return <Provider store={store}>

        <View style={{flex: 1, marginTop: 10}}>
            <TabNavigator/>
        </View>

    </Provider>
}


export default App;
