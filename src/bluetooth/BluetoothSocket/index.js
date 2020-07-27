const BluetoothSocket = Java.use("android.bluetooth.BluetoothSocket");

const getOutputStream = BluetoothSocket.getOutputStream;
const getInputStream = BluetoothSocket.getInputStream;

getOutputStream.implementation = function() {
	const outputStream = getOutputStream.call(this);

	console.log(outputStream);

	return outputStream;
};

getInputStream.implementation = function() {
	const inputStream = getInputStream.call(this);

	return inputStream;
};

module.exports = {};

