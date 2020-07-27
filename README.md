# bluetooth-sniffer

[![Build Status](https://travis-ci.org/OpenFenix/bluetooth-sniffer.svg?branch=master)](https://travis-ci.org/OpenFenix/bluetooth-sniffer)

Sniffer of bluetooth traffic between phone and watch 🐶

## Table of contents

<!-- vim-markdown-toc GFM -->

* [Important notes](#important-notes)
* [Bluetooth protocol details](#bluetooth-protocol-details)
	* [Gatt](#gatt)
		* [Channel initialization](#channel-initialization)
	* [BluetoothSocket](#bluetoothsocket)
* [Classes used by Garmin Connect](#classes-used-by-garmin-connect)
* [Author](#author)

<!-- vim-markdown-toc -->

## Important notes

* Keep in mind [android.bluetooth.BluetoothGattCallback](https://github.com/OpenFenix/bluetooth-sniffer/blob/master/src/bluetooth/BluetoothGattCallback/index.js#L1) is extended, so, you need to get class name for your specific version. Just search for `onCharacteristicChanged`. 

## Bluetooth protocol details

### Gatt

It looks like they use multichannel communication, on top of a single Gatt service. First byte of each message looks like channel identifier. 

#### Channel initialization

```
Characteristic 6a4e2812-667b-11e3-949a-0800200c9a66 changed
	0 1 1 0 0 0 0 0 0 0 6 0 0 106 0                        	| 0 1 1 0 0 0 0 0 0 0 6 0 0 6a 0
Characteristic 6a4e2812-667b-11e3-949a-0800200c9a66 changed
	106 0 -1 55 -1 -1                                      	| 6a 0 -1 37 -1 -1

```

```
	0 1 1 0 0 0 0 0 0 0 1 0 0 103 0                        	| 0 1 1 0 0 0 0 0 0 0 1 0 0 67 0
	0 1 1 0 0 0 0 0 0 0 4 0 0 102 0                        	| 0 1 1 0 0 0 0 0 0 0 4 0 0 66 0
	0 1 1 0 0 0 0 0 0 0 22 0 0 104 0                       	| 0 1 1 0 0 0 0 0 0 0 16 0 0 68 0
```

### BluetoothSocket

It looks like they use BluetoothSocket for transfering larger files. 

## Classes used by Garmin Connect

```
    218 Landroid/bluetooth/BluetoothDevice
       49 getAddress()Ljava/lang/String;
       13 getName()Ljava/lang/String;
       12 getBondState()I
        8 getType()I
        5 createBond()Z
        1 CREATOR:Landroid/os/Parcelable$Creator;
        1 connectGatt(Landroid/content/Context;ZLandroid/bluetooth/BluetoothGattCallback;)Landroid/bluetooth/BluetoothGatt;
        1 connectGatt(Landroid/content/Context;ZLandroid/bluetooth/BluetoothGattCallback;I)Landroid/bluetooth/BluetoothGatt;
     63 Landroid/bluetooth/BluetoothAdapter
       18 getDefaultAdapter()Landroid/bluetooth/BluetoothAdapter;
        7 isEnabled()Z
        7 getBondedDevices()Ljava/util/Set;
        6 getRemoteDevice(Ljava/lang/String;)Landroid/bluetooth/BluetoothDevice;
        3 getState()I
        3 checkBluetoothAddress(Ljava/lang/String;)Z
        2 startDiscovery()Z
        2 getBluetoothLeScanner()Landroid/bluetooth/le/BluetoothLeScanner;
        1 stopLeScan(Landroid/bluetooth/BluetoothAdapter$LeScanCallback;)V
        1 startLeScan(Landroid/bluetooth/BluetoothAdapter$LeScanCallback;)Z
        1 listenUsingRfcommWithServiceRecord(Ljava/lang/String;Ljava/util/UUID;)Landroid/bluetooth/BluetoothServerSocket;
        1 isDiscovering()Z
        1 getName()Ljava/lang/String;
        1 cancelDiscovery()Z
     60 Landroid/bluetooth/BluetoothGatt
        3 getDevice()Landroid/bluetooth/BluetoothDevice;
        2 setCharacteristicNotification(Landroid/bluetooth/BluetoothGattCharacteristic;Z)Z
        2 getServices()Ljava/util/List;
        2 getService(Ljava/util/UUID;)Landroid/bluetooth/BluetoothGattService;
        1 writeDescriptor(Landroid/bluetooth/BluetoothGattDescriptor;)Z
        1 writeCharacteristic(Landroid/bluetooth/BluetoothGattCharacteristic;)Z
        1 readCharacteristic(Landroid/bluetooth/BluetoothGattCharacteristic;)Z
        1 discoverServices()Z
        1 disconnect()V
        1 close()V
     44 Landroid/bluetooth/le/ScanResult
     40 Landroid/bluetooth/le/ScanCallback
     32 Landroid/bluetooth/BluetoothGattCharacteristic
        2 getValue()[B
        2 getUuid()Ljava/util/UUID;
        2 getProperties()I
        1 setWriteType(I)V
        1 setValue([B)Z
        1 getService()Landroid/bluetooth/BluetoothGattService;
        1 getDescriptors()Ljava/util/List;
     22 Landroid/bluetooth/le/BluetoothLeScanner
     15 Landroid/bluetooth/BluetoothGattDescriptor
        2 DISABLE_NOTIFICATION_VALUE:[B
        1 setValue([B)Z
        1 ENABLE_NOTIFICATION_VALUE:[B
        1 ENABLE_INDICATION_VALUE:[B
     14 Landroid/bluetooth/BluetoothSocket
        2 getRemoteDevice()Landroid/bluetooth/BluetoothDevice;
        1 getOutputStream()Ljava/io/OutputStream;
        1 getInputStream()Ljava/io/InputStream;
     13 Landroid/bluetooth/BluetoothGattCallback
        2 <init>()V
        1 onServicesDiscovered(Landroid/bluetooth/BluetoothGatt;I)V
        1 onConnectionStateChange(Landroid/bluetooth/BluetoothGatt;II)V
     12 Landroid/bluetooth/le/ScanRecord
     12 Landroid/bluetooth/le/ScanFilter
     12 Landroid/bluetooth/BluetoothManager
     10 Landroid/bluetooth/le/ScanSettings$Builder
      8 Landroid/bluetooth/le/ScanFilter$Builder
      5 Landroid/bluetooth/BluetoothServerSocket
        1 accept()Landroid/bluetooth/BluetoothSocket;
      5 Landroid/bluetooth/BluetoothGattService
        2 getUuid()Ljava/util/UUID;
        1 getCharacteristics()Ljava/util/List;
        1 getCharacteristic(Ljava/util/UUID;)Landroid/bluetooth/BluetoothGattCharacteristic;
      4 Landroid/bluetooth/le/ScanSettings
      1 Landroid/bluetooth/BluetoothAdapter$LeScanCallback
```

## Author

* [nemanjan00](https://github.com/nemanjan00)

