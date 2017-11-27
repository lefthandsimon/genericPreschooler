'use strict';
var Alexa = require("alexa-sdk");

// For detailed tutorial on how to making a Alexa skill,
// please visit us at http://alexa.design/build

const urlRoot = 'https://s3.amazonaws.com/simoncalexa/generic_preschooler/story/'
const storyParts = ['sp1.mp3','sp2.mp3', 'sp3.mp3', 'sp4.mp3', 'sp5.mp3', 'sp6.mp3', 'sp7.mp3']
var storyIndex = 0;
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
        this.response.speak('<audio src="' + urlRoot + storyParts[storyIndex] + '" />').listen("don't be shy, we're all friends here. What's your name?");
        storyIndex++;
        this.emit(":responseReady");
    },
    "StoryResponseIntent": function () {
        console.log("storyIndex = " + storyIndex)
        this.response.speak('<audio src="' +  urlRoot + storyParts[storyIndex] + '" />').listen("I don't think he heard you");
        storyIndex++;
        this.emit(":responseReady");
    },
    "DragonResponseIntent": function () {
        this.response.speak('<audio src="' +  urlRoot + storyParts[storyIndex] + '" />').listen("I don't think he heard you");
        storyIndex++;
        this.emit(":responseReady");
    },
    "WitchResponseIntent": function () {
        this.response.speak('hmm, that one isn\'t quite ready yet, but the dragon one is. Let\'s have that one and come back when the witch story is ready... ' + '<audio src="' +  urlRoot + storyParts[storyIndex] + '" />').listen("I don't think he heard you");
        storyIndex++;
        this.emit(":responseReady");
    },
    "AppleResponseIntent": function () {
        this.response.speak('Suddenly Sam had a great idea, he could eat the apple now and still take the sword, so that\'s what he did... ' + '<audio src="' +  urlRoot + storyParts[storyIndex] + '" />' + 'oh no I think Bigby\'s fallen asleep. Can you shout "WAKE UP BIGBY"?').listen("I don't think he heard you");
        storyIndex++;
        this.emit(":responseReady");
    },
    "GameIntent": function () {
        console.log("inside game intent");
        this.response.speak("Under construction, come back later");
        this.emit(":responseReady");
    },
    "SessionEndedRequest" : function() {
        storyIndex = 0;
        console.log('Session ended with reason: ' + this.event.request.reason);
    },
    "AMAZON.StopIntent" : function() {
        this.response.speak('Bye');
        storyIndex = 0;
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
