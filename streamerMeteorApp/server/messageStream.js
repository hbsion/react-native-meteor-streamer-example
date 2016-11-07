streamer = new Meteor.Streamer('chat');
streamer.allowRead('all');
streamer.allowWrite('all');

Meteor.startup(function(){
  let count = 0;
  Meteor.setInterval( function() {
    count ++;
    streamer.emit('message', {text: 'My new message', user: 'User1'}, count: count); // Send one object
  }, 1000)
});
