Meteor.publish("todos.all", function(argument){
  return Todos.find();
});
