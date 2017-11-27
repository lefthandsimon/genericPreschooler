'use strict';
var Alexa = require("alexa-sdk");

// For detailed tutorial on how to making a Alexa skill,
// please visit us at http://alexa.design/build


exports.handler = function(event, context) {
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    "LaunchRequest": function () {
        this.response.speak("Hi I'm Pogo, your CBeebies friend, you can say play a game, tell me a story or just chat... ask me a question like how old are you?").listen()
        this.emit(":responseReady");
    },
    "StoryIntent": function () {
        var audioURL = "https://s3.amazonaws.com/simoncalexa/lr.mp3"
        this.response.speak('<audio src="' + audioURL + '" />');
        this.emit(":responseReady");
    },
    "GameIntent": function () {
        console.log("inside game intent");
        this.response.speak("Under construction, come back later");
        this.emit(":responseReady");
    },
    "SessionEndedRequest" : function() {
        console.log('Session ended with reason: ' + this.event.request.reason);
    },
    "AMAZON.StopIntent" : function() {
        this.response.speak('Bye');
        this.emit(':responseReady');
    },
    "AMAZON.HelpIntent" : function() {
        this.response.speak("You can say play a game, tell me a story or just chat... why not try a question like how old are you?'");
        this.emit(':responseReady');
    },
    "AMAZON.CancelIntent" : function() {
        this.response.speak('Bye');
        this.emit(':responseReady');
    },
    "Unhandled" : function() {
        this.response.speak("You can say play a game, tell me a story or just chat... ask me a question like how old are you?");
    }
};
