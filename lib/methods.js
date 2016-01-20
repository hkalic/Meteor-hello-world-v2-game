Meteor.methods({
  klik: function(user){
    check(user, String);  // no funny bussiness with usernames
    
    Kliks.update({user: user}, {$inc: {kliked: 1}}, {upsert: true});    // add click count for current user
    return Kliks.findOne({user: user}).kliked; // return final count
  }
})
