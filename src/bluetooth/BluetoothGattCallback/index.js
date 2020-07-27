const BluetoothGattCallback = Java.use("h.a.j.a.a");
const BluetoothGattCharacteristic = Java.use("android.bluetooth.BluetoothGattCharacteristic");
// const String = Java.use("java.lang.String");

const buffersIn = {};
const buffers = {};

const onCharacteristicRead = BluetoothGattCallback.onCharacteristicRead;
const onCharacteristicWrite = BluetoothGattCallback.onCharacteristicWrite;
const onCharacteristicChanged = BluetoothGattCallback.onCharacteristicChanged;

onCharacteristicRead.implementation = function(gatt, characteristic, status) {
	console.log(123);

	const value = BluetoothGattCharacteristic.getValue.call(characteristic);

	console.log(value);

	onCharacteristicRead.call(this, gatt, characteristic, status);
};

onCharacteristicChanged.implementation = function(gatt, characteristic) {
	const value = BluetoothGattCharacteristic.getValue.call(characteristic);

	const buffer = Java.array("byte", value);

	const uuid = BluetoothGattCharacteristic.getUuid.call(characteristic);

	if (buffersIn[uuid] === undefined) {
		buffersIn[uuid] = [];
	}

	for (var i = 0; i < buffer.length; ++i) {
		buffersIn[uuid].push(buffer[i]);
	}

	console.log(`Characteristic ${uuid} changed ${(buffersIn[uuid]).join(" ")}`);

	console.log();
	console.log();
	console.log();

	onCharacteristicChanged.call(this, gatt, characteristic);
};

onCharacteristicWrite.implementation = function(gatt, characteristic, status) {
	const value = BluetoothGattCharacteristic.getValue.call(characteristic);

	const buffer = Java.array("byte", value);

	const uuid = BluetoothGattCharacteristic.getUuid.call(characteristic);

	if (buffers[uuid] === undefined) {
		buffers[uuid] = [];
	}

	for (var i = 0; i < buffer.length; ++i) {
		buffers[uuid].push(buffer[i]);
	}

	console.log(`Characteristic ${uuid} written ${(buffers[uuid]).join(" ")}`);

	console.log();
	console.log();
	console.log();

	onCharacteristicWrite.call(this, gatt, characteristic, status);
};

module.exports = {};

