/**
* TrafficAlertSubscription.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/
var api_key = 'key-8c55af2ad3c087e6ae62be139edcb070';
var domain = 'sandboxeb91f3e66c204061a4b00763eeaf58c9.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

module.exports = {

  attributes: {
    email: {
      type: 'string'
    },
    cellularProvider: {
      type: 'string'
    },
    phone: {
      type: 'string'
    },
    homeAddress: {
      type: 'string'
    },
    workAddress: {
      type: 'string'
    },
    workStartTime: {
      type: 'string'
    },
  },

  afterCreate: function(trafficAlertSubscription, cb) {
    var email = '';
    if(trafficAlertSubscription.cellularProvider && trafficAlertSubscription.phone) {
      email = trafficAlertSubscription.phone + '@' + trafficAlertSubscription.cellularProvider;
    }
    else {
      email = trafficAlertSubscription.email;
    }

    var data = {
      from: 'will i be late <info@willibelate.com>',
      to: email,
      subject: 'Welcome!',
      text: 'You just signed up for will i be late! Your next alert will arive 10 minutes before you need to leave for work.'
    };

    mailgun.messages().send(data, function (error, body) {
      console.log(body);
      cb();
    });
  }
};
