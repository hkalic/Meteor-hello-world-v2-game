Meteor.publish('baza', function() {
  return Kliks.find()
})
