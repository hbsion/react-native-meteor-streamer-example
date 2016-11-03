Todos = new Mongo.Collection("todos");
Todos.allow({
  insert: function(){
    return true;
  },
  update: function(){
    return true;
  },
  remove: function(){
    return true;
  }
});


streamer = new Meteor.Streamer('chat');
streamer.allowRead('all');
streamer.allowWrite('all');

streamer.emit('message', {text: 'My new message', user: 'User1'}); // Send one object
