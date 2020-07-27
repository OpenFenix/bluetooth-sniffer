const BluetoothGattCharacteristic = Java.use("android.bluetooth.BluetoothGattCharacteristic");

const getValue = BluetoothGattCharacteristic.getValue;

getValue.implementation = function() {
	const data = getValue.call(this);

	console.log(data);

	return data;
};

module.exports = {};

