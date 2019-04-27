const twilio_config = require('../etc/twilio_config.json');
const Gpio = require('onoff').Gpio;

const accountSid = twilio_config.accountSid;
const authToken = twilio_config.authToken;
const client = require('twilio')(accountSid, authToken);

const button = new Gpio(4, 'in', 'falling');

const sendMessage = () => {
	client.messages
		.create({
			body: 'Somebody is behind your door',
			from: twilio_config.twilioPhoneNumber,
			to: twilio_config.userPhoneNumber
		})
		.then(message => console.log(message.sid))
		.done();
};

button.watch(err => {
	if (err) {
		throw err;
	}
	sendMessage();
});

process.on('SIGINT', () => {
	button.unexport();
});
