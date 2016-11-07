## Getting Started

- [Install Meteor](https://www.meteor.com/install)
- [Install React Native](https://facebook.github.io/react-native/docs/getting-started.html#content)
- Clone Repo: `git clone https://github.com/Micjoyce/react-native-meteor-streamer-example`
- From the `rnStreamerrnStreamerMeteorApp` directory run `npm install`

## Running on iOS Simulator

_Note_: You must be on a Mac for this.

- Be sure your Meteor app is running: In the ```rnStreamerMeteorApp``` directory, type ```meteor```

You've got a few ways you can run the app for iOS:

- From the `streamerMeteorApp` directory run `react-native run-ios`
- From the `streamerMeteorApp` directory run `npm run ios` then start the project in Xcode

## Running on iOS Device

_Note_: You must be on a Mac for this.

- Get the IP address of your machine (you can run `ipconfig getifaddr en1` to do so)
- In `streamerMeteorApp/ios/streamerMeteorApp/AppDelegate.m` change `localhost` to your machine's IP address
- In `streamerMeteorApp/app/config/settings.js` change `localhost` to your machine's IP address
- Plug your device into your computer (make sure it's on the same network)
- Open the project in Xcode
- Select your device in Xcode and press "Build and run"

For further information please reference the [official docs](https://facebook.github.io/react-native/docs/running-on-device-ios.html#content).

## Running on Android Simulator

- Be sure your Meteor app is running: In the ```rnStreamerMeteorApp``` directory, type ```meteor```
- Get the IP address of your machine
- In `streamerMeteorApp/app/config/settings.js` change `localhost` to your machine's IP address
- Make sure you have an emulator configured and running.
- From the `streamerMeteorApp` directory run `react-native run-android`

On OSX you can get your IP address by running `ipconfig getifaddr en1` in a terminal window.

On linux running `ifconfig` will get you a list of your network interfaces along with their IP addresses. For the stock Google simulator you will want to use the IP of your active network connection (probably `eth0` or `wlan0`). If you are using the Genymotion simulator, it runs in a Virtual Box VM with a Host-only network interface. You will want to use the IP address of this network which may look like vboxnet0 under ifconfig.

## Running on Android Device

- Be sure your Meteor app is running: In the ```rnStreamerMeteorApp``` directory, type ```meteor```
- Make sure [USB Debugging is enabled](https://facebook.github.io/react-native/docs/running-on-device-android.html#prerequisite-usb-debugging)
- Plug your device into your computer
- Run `adb devices` to make sure your device shows up
- Run `adb reverse tcp:8081 tcp:8081`
- In `streamerMeteorApp/app/config/settings.js` change `localhost` in `METEOR_URL` to your computer's IP address (see note in "Running on Android" section on how to get your IP Address)
- Run `react-native run-android`

For further information please reference the [official docs](https://facebook.github.io/react-native/docs/running-on-device-android.html#content).

## Linux Setup for Android Dev

Configure how the device will connect to the meteor server. See [running android on a device](https://facebook.github.io/react-native/docs/running-on-device-android.html) to pick from the options.

Plug in your device and use _lusb_ to find the first 4 digits of  your device ID.
> lsusb
Bus 001 Device 003: ID 04e8:2e76 Motorola PCS

Enter this in udev rules. In the example we are copying over `04e8`
> echo SUBSYSTEM=="usb", ATTR{idVendor}=="04e8", MODE="0666", GROUP="plugdev" | sudo tee /etc/udev/rules.d/51-android-usb.rules

Check that your device is properly connecting to ADB, the Android Debug Bridge, by using:
> adb devices

_Note:_ You should have only one active ADB connection. If you have a simulator running you should close it before proceeding.

These steps are abstracted from the pages [running on device](https://facebook.github.io/react-native/docs/running-on-device-android.html) and [getting started](https://facebook.github.io/react-native/docs/getting-started-linux.html#setting-up-an-android-device) on linux.


If you have any questions please open an issue. Thanks!