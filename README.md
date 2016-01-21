# Meteor-hello-world-v2-game

This is little multi player game wich I made for my presentation on **Meteor** (https://www.meteor.com/).
The game is trying to demonstrate basics of Meteor platform in wich audience can participate.

It's Meteor default app on "steroid" (not really), transformed to a game.

### Packages used:
- removed *`autopublish`* package because I wanted to observe changes on collection in *subscribe*. To me it looks like natural place to do this stuff.
- *`check`* for one argument in *Meteor.methods* call
- *`msavin:mongol`* for collection administration (removing users and their click count :-) )
- *`chrismbeckett:toastr`* for flashy notification
- *`accounts-ui`* and *`accounts-password`* for user logins
- didn't removed the *`insecure`* - you do it!!! (this is just a demo)

### Want to try yourself:
Clone repo and in it's folder start meteor server.

### How to play?
- register as new user
- click the button
- first player with 50 clicks wins

### 2do:
- When it's finished you can't start it again unless you do '*`meteor reset`*' (on server, doh) or delete all records
