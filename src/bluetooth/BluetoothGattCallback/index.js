const BluetoothGattCallback = Java.use("h.a.j.a.a");
const BluetoothGattCharacteristic = Java.use("android.bluetooth.BluetoothGattCharacteristic");
// const String = Java.use("java.lang.String");

const onCharacteristicRead = BluetoothGattCallback.onCharacteristicRead;
const onCharacteristicWrite = BluetoothGattCallback.onCharacteristicWrite;

onCharacteristicRead.implementation = function(gatt, characteristic, i) {
	console.log(123);

	const value = BluetoothGattCharacteristic.getValue.call(characteristic);

	console.log(value);

	onCharacteristicRead.call(this, gatt, characteristic, i);
};

onCharacteristicWrite.implementation = function(gatt, characteristic, status) {
	console.log(123);

	const value = BluetoothGattCharacteristic.getValue.call(characteristic);

	const buffer = Java.array("byte", value);

	for (var i = 0; i < buffer.length; ++i) {
		console.log(buffer[i]);
	}

	console.log(buffer.length);

	onCharacteristicWrite.call(this, gatt, characteristic, status);
};

module.exports = {};

