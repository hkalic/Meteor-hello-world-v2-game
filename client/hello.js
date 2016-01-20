  // basic init on client side
  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY" // sign in only with username (no emails)
  });

  Session.setDefault('counter', 0); // counter for text below button

  Template.hello.helpers({
    counter: function () {  // helper wich is used in hell.html file as {{counter}}
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () { // increment the counter when button is clicked      
      
      let user = Meteor.user().username; // find current logged user
      
      Meteor.call('klik', user, function(error, result){  // RPC call because of: "Untrusted code can only modify a single document at once, specified by its _id."
        Session.set('counter', result); // update counter
      });
    }
  });

  Meteor.subscribe('baza', function(){
    Kliks.find().observe({  // let's wach changes in database
      added: function(res){ // on new user
        toastr.warning(`Welcome ${res.user}!`); // greet him/her
      },
      changed: function(res){ // on change (click), get the no. of clicks
        if(res.kliked > 49)  // and when it's > 49
        {
          toastr.clear();     // clean all toasts

          let options = { // winning toast is gonna be somehow different
            positionClass: "toast-top-center",
            timeOut: 0,
            extendedTimeOut: 0,
            preventDuplicates: true,
            tapToDismiss: false};

          toastr.info(res.user, 'and the winner is:', options); // and declare the winner
          
          $(":button").attr('disabled', 'true');  // jQuery: select button ("Click me" button) and disable it
        } 
        else 
        {  // throw some info for click
          if(res.user == Meteor.user().username){ // if it's mine click
            toastr.success(`${res.user} clicked ${res.kliked} times!`)  // 'success' message
          } else {
            toastr.warning(`${res.user} clicked ${res.kliked} times!`)};  // for other users 'warning' message
        }
      }
    });

  });
  