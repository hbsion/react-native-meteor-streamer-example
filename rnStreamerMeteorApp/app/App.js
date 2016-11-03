import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Meteor, { createContainer } from 'react-native-meteor';

Meteor.connect('ws://localhost:3000/websocket');//do this only once

const App = (props) => {
  const { status, user, loggingIn, todosReady } = props;
  console.log(status, user, loggingIn, todosReady);

  if (todosReady) {
    console.log(Meteor.collection('todos').find());

  }
  return (
    <View style={styles.container}>
      <Text>
        hello world!
      </Text>
      <Text>
        {status.connected.toString()}
      </Text>
      <Text>
        {todosReady && <Text>Not ready</Text>}
      </Text>
    </View>
  )
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

App.propTypes = {
  status: React.PropTypes.object,
  user: React.PropTypes.object,
  loggingIn: React.PropTypes.bool,
};

export default createContainer(() => {
  const handle = Meteor.subscribe('todos.all');
  const handle1 = Meteor.subscribe('message');
  return {
    status: Meteor.status(),
    user: Meteor.user(),
    loggingIn: Meteor.loggingIn(),
    todosReady: handle
  };
}, App);
