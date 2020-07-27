const devices = require("../BluetoothDevice");

const BluetoothGatt = Java.use("android.bluetooth.BluetoothGatt");
const BluetoothGattService = Java.use("android.bluetooth.BluetoothGattService");

const getDevice = BluetoothGatt.getDevice;
const getServices = BluetoothGatt.getServices;

getDevice.implementation = function() {
	const device = getDevice.call(this);

	devices.getDeviceInfo(device);

	return device;
};

getServices.implementation = function() {
	const services = getServices.call(this);

	const iter = services.iterator();

	while (iter.hasNext()) {
		const service = iter.next();

		console.log(BluetoothGattService.getUuid.call(service));
	}

	return services;
};

module.exports = {};
