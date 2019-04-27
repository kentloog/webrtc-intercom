const Gpio = require('onoff').Gpio;
const door = new Gpio(2, 'out');
var pushButton = new Gpio(3, 'in', 'falling');

function switchOff() {
	door.writeSync(0);
}

exports.open = function() {
	door.writeSync(1);
	setTimeout(switchOff, 3000);
};

pushButton.watch(function(err) {
	if (err) {
		console.error('There was an error', err);
		return;
	}
	door.writeSync(1);
	setTimeout(switchOff, 1000);
});

function unexportOnClose() {
	door.writeSync(0);
	door.unexport();
	pushButton.unexport();
}

process.on('SIGINT', unexportOnClose);
