# bluetooth-sniffer

[![Build Status](https://travis-ci.org/OpenFenix/bluetooth-sniffer.svg?branch=master)](https://travis-ci.org/OpenFenix/bluetooth-sniffer)

Sniffer of bluetooth traffic between phone and watch 🐶

## Table of contents

<!-- vim-markdown-toc GFM -->

* [Classes used by Garmin Connect](#classes-used-by-garmin-connect)
* [Author](#author)

<!-- vim-markdown-toc -->

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

