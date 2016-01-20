Meteor.methods({
  klik: function(user){
    Kliks.update({user: user}, {$inc: {kliked: 1}}, {upsert: true});    // add click count for current user
    return Kliks.findOne({user: user}).kliked; // return final count
  }
})
