const bondMap = {
	10: "BOND_NONE",
	11: "BOND_BONDING",
	12: "BOND_BONDED",
};

const typeMap = {
	1: "DEVICE_TYPE_CLASSIC",
	2: "DEVICE_TYPE_LE",
	3: "DEVICE_TYPE_DUAL",
	0: "DEVICE_TYPE_UNKNOWN",
};

const BluetoothDevice = Java.use("android.bluetooth.BluetoothDevice");

const getAddress = BluetoothDevice.getAddress;
const getName = BluetoothDevice.getName;
const getBondState = BluetoothDevice.getBondState;
const getType = BluetoothDevice.getType;

getAddress.implementation = function() {
	return devices.getDeviceInfo(this).address;
};

getName.implementation = function() {
	return devices.getDeviceInfo(this).name;
};

getBondState.implementation = function() {
	return devices.getDeviceInfo(this).bondState;
};

getType.implementation = function() {
	return devices.getDeviceInfo(this).type;
};

console.log(123);

const devices = {
	byName: {},
	byAddress: {},

	storeDevice: (device) => {
		if (device.address) {
			if (devices.byAddress[device.address]) {
				Object.assign(devices.byAddress[device.address], device);
			} else {
				devices.byAddress[device.address] = device;
			}
		}

		if (device.name) {
			if (devices.byName[device.name]) {
				Object.assign(devices.byName[device.name], device);
			} else {
				devices.byName[device.name] = device;
			}
		}

		console.log(JSON.stringify(devices, null, 4));
	},

	getDeviceInfo: function(that) {
		const address = getAddress.call(that);
		const name = getName.call(that);
		const bondState = getBondState.call(that);
		const type = getType.call(that);

		const device = {
			name,
			address,
			bondState,
			bondStateName: bondMap[bondState],
			type,
			typeName: typeMap[type],
		};

		devices.storeDevice(device);

		return device;
	}
};


module.exports = devices;

