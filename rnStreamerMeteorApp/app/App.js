import React, { Component } from 'react';
import {
  TouchableHighlight,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Meteor, { createContainer } from 'react-native-meteor';
import Streamer from './lib/Streamer'

Meteor.connect('ws://localhost:3000/websocket');//do this only once

const chat = new Streamer('chat')
chat.on("message", function(record){
  console.log('stream message' + JSON.stringify(record));
});

const App = (props) => {
  const { status, user, loggingIn, todosReady ,handle1} = props;
  console.log(status, user, loggingIn, todosReady, handle1);
  const Data=  Meteor.getData()
  if (todosReady) {
    console.log(Meteor.collection('todos').find());
  }

  // _onPressButton => {
  //   console.log('stop---')
  //   chat.stop("message")
  // }
  // if (handle1) {
    
  // }
  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={()=> {
        console.log(chat.getLastMessageFromEvent('message'));
      }}>
        <Text>Get last message from event name 'message'</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={()=> {
        chat.stop('message')
      }}>
        <Text>Stop listen stream message</Text>
      </TouchableHighlight>      
      <TouchableHighlight onPress={()=> {
        chat.on("message", function(record){
          console.log('stream message' + JSON.stringify(record));
        });
      }}>
        <Text>reStart listen stream message</Text>
      </TouchableHighlight>
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
  const todosReady = Meteor.subscribe('todos.all');
  return {
    status: Meteor.status(),
    user: Meteor.user(),
    loggingIn: Meteor.loggingIn(),
    todosReady: todosReady,
  };
}, App);
