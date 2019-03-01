import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import dishes from './store/reducers/rootReducer';
import {Provider} from 'react-redux';
import Dishes from "./components/Dishes";
import OrderTotal from "./components/OrderTotal";
import Modal from "./components/Modal";


const rootReducer = combineReducers({
    dishes:dishes
});


const store = createStore(rootReducer, (applyMiddleware(thunkMiddleware)));

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
          <View style={styles.container}>
              <View style={styles.header}>
                  <Dishes/>
              </View>
          </View>
          <View style={styles.order}>
              <OrderTotal/>
          </View>
          <Modal/>
      </Provider>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 10
  },
});

