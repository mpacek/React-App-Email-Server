const sendgrid = require('sendgrid');
const helper = sendgrid.mail;
const keyes = require('../config/keys');

class Mailer extends helper.Mail {}

module.exports = Mailer;
