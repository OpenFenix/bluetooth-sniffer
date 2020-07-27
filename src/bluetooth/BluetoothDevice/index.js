const bondMap = {
	10: "BOND_NONE",
	11: "BOND_BONDING",
	12: "BOND_BONDED"
};

const devices = {
	byName: {},
	byAddress: {},

	storeDevice: (device) => {
		if(device.address) {
			if(devices.byAddress[device.address]) {
				Object.assign(devices.byAddress[device.address], device);
			} else {
				devices.byAddress[device.address] = device;
			}
		}

		if(device.name) {
			if(devices.byName[device.name]) {
				Object.assign(devices.byName[device.name], device);
			} else {
				devices.byName[device.name] = device;
			}
		}

		console.log(JSON.stringify(devices, null, 4));
	}
};

Java.perform(function() {
	const BluetoothDevice = Java.use("android.bluetooth.BluetoothDevice");

	const getAddress = BluetoothDevice.getAddress;
	const getName = BluetoothDevice.getName;
	const getBondState = BluetoothDevice.getBondState;

	const getDevice = function(that) {
		const address = getAddress.call(that);
		const name = getName.call(that);
		const bondState = getBondState.call(that);

		const device = {
			name,
			address,
			bondState,
			bondStateName: bondMap[bondState]
		};

		devices.storeDevice(device);

		return device;
	}

	getAddress.implementation = function() {
		return getDevice(this).address;
	}

	getName.implementation = function() {
		return getDevice(this).name;
	}

	getBondState.implementation = function() {
		return getDevice(this).bondState;
	}
});

module.exports = devices;

