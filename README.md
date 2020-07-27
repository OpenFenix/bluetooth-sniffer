# bluetooth-sniffer

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
     60 Landroid/bluetooth/BluetoothGatt
     44 Landroid/bluetooth/le/ScanResult
     40 Landroid/bluetooth/le/ScanCallback
     32 Landroid/bluetooth/BluetoothGattCharacteristic
     22 Landroid/bluetooth/le/BluetoothLeScanner
     15 Landroid/bluetooth/BluetoothGattDescriptor
     14 Landroid/bluetooth/BluetoothSocket
     13 Landroid/bluetooth/BluetoothGattCallback
     12 Landroid/bluetooth/le/ScanRecord
     12 Landroid/bluetooth/le/ScanFilter
     12 Landroid/bluetooth/BluetoothManager
     10 Landroid/bluetooth/le/ScanSettings$Builder
      8 Landroid/bluetooth/le/ScanFilter$Builder
      5 Landroid/bluetooth/BluetoothServerSocket
      5 Landroid/bluetooth/BluetoothGattService
      4 Landroid/bluetooth/le/ScanSettings
      1 Landroid/bluetooth/BluetoothAdapter$LeScanCallback
```

## Author

* [nemanjan00](https://github.com/nemanjan00)

