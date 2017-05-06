This is a starter PhoneGap application with a node.js builder, bower to manage javascript app dependencies, jasmine and karma for unit tests and cucumber and appium for functional tests. It builds a simple tilt meter.

<img src="https://github.com/geocolumbus/geomob/blob/master/screen_shot.png" width=200 style="margin:auto"/>

These instructions assume you are developing on a Mac. See [Installing Cordova on Windows](https://evothings.com/doc/build/cordova-install-windows.html) for Windows installation instructions.

# Requirements

* [XCode Version 8.3 or greater](https://developer.apple.com/xcode/downloads/)
    * You will need an Apple Developer account and a Developer Certificate
* [Android Studio 2.2.2 or greater](https://developer.android.com/studio/index.html)
    * Android SDK 7.1.1 (API Level 25)
    * Tools
    * Platform-tools
    * Build-tools
* [Node Version 7.8.0](https://nodejs.org/en/) or latest.
* [npm Version 4.2.0](https://www.npmjs.com/) or latest.

## iOS Configuation

Follow the instructions at https://cordova.apache.org/docs/en/latest/guide/platforms/ios/

Note that we found it was easy to run iOS in debug mode by opening the iOS project in Xcode and setting the team name and developer profile there. Once you set it there once, it will stay set until you delete the platforms folder and do a complete rebuild.

## Android Configuration

Configure the JAVA_HOME and ANDROID_HOME environment variables.

Add $JAVA_HOME/bin, $ANDROID_HOME/platform-tools and $ANDROID_HOME/tools to your PATH environment variable.

## Configure node for local running

Add ```./node_modules/.bin``` to your PATH environment variable.

# Installation

## Automatic 

```npm run build```

## Manual

Make sure you add ```./node_modules/.bin``` to your local machine's path. This allows you to call node dependencies local to the project, and is required for the following steps to work.

```
npm install
bower install
bower-installer
phonegap platform add android
phonegap platform add browser
phonegap platform add ios
phonegap build
```

## Build Error Troubleshooting

If you get a message like "Error code 65 for command: xcodebuild with args ..." then it means that you need to add your GroupId to the HelloWorld iOS project using XCode. Then rerun PhoneGap Build.


# Running

You can run the PhoneGap app in an attached device, an emulator or the browser.

### Browser

```
phonegap run browser
```

### iOS

```
phonegap run ios
or
phonegap emulate ios
```

### Android

```
phonegap run android
or
phonegap emulate android
```

# Running Tests

## Unit Tests with Karma and Jasmine

```
npm run test
```

Unit tests are in the tests folder.

## Functional Tests with Cucumber and Appium

TODO

# Other Resources

There are many ways to get started with PhoneGap.

## PhoneGap's official quick start guide

[Getting Started with PhoneGap](http://phonegap.com/getstarted/)

## IDE's

### Eclipse

[Setup PhoneGap for Android on Eclipse](http://www.tech-faq.com/setup-phonegap-for-android-on-eclipse.html)

### IntelliJ IDEA

[Using PhoneGap/Cordova with IntelliJ 2017.1](https://www.jetbrains.com/help/idea/2017.1/using-phonegap-cordova.html)
