This is a starter PhoneGap application with a node.js builder, bower to manage javascript app dependencies, jasmine and karma for unit tests and cucumber and appium for functional tests. 

These instructions assume you are developing on a Mac. See [Installing Cordova on Windows](https://evothings.com/doc/build/cordova-install-windows.html) for Windows installation instructions.

# Requirements

* [XCode Version 8.3 or greater](https://developer.apple.com/xcode/downloads/)
    * You will need an Apple Developer account and a Developer Certificate
* [Android Studio 2.2.2 or greater](https://developer.android.com/studio/index.html)
    * Android SDK 7.1.1 (API Level 25)
    * Tools
    * Platform-tools
    * Build-tools
* [Node Version 7.8.0](https://nodejs.org/en/)
* [npm Version 4.2.0](https://www.npmjs.com/)

Configure the JAVA_HOME and ANDROID_HOME environment variables.

Add $JAVA_HOME/bin, $ANDROID_HOME/platform-tools and $ANDROID_HOME/tools to your PATH environment variable.

Alos add ```./node_modules/.bin``` to your PATH environment variable.

# Installation

## Automatic 

```
npm run build
```

## Manual

Make sure you add ```./node_modules/.bin``` to your local machine's path. This allows you to call node dependencies local to the project, and is required for the following steps to work.

```
npm install
bower install
bower-installer
phonegap platform add android
phonegap platform add browser
phonegap platform add ios
phonegap prepare
phonegap build
```

# Running

### Browser

```
phonegap run browser
```

### iOS

```
phonegap run ios
```

### Android

```
phonegap run android
```

# Running Tests

## Unit Tests with Karma and Jasmine

```
npm run test
```

## Functional Tests with Cucumber and Appium
