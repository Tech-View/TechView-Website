---
id: react-native
title: React Native
sidebar_label: React Native
---
## 188. What is the difference between React Native and React?

**React** is a JavaScript library, supporting both front end web and being run on the server, for building user interfaces and web applications.

**React Native** is a mobile framework that compiles to native app components, allowing you to build native mobile applications (iOS, Android, and Windows) in JavaScript that allows you to use React to build your components, and implements React under the hood.

## 189. How to test React Native apps?

React Native can be tested only in mobile simulators like iOS and Android. You can run the app in your mobile using expo app (https://expo.io) Where it syncs using QR code, your mobile and computer should be in same wireless network.

## 190. How to do logging in React Native?

You can use `console.log`, `console.warn`, etc. As of React Native v0.29 you can simply run the following to see logs in the console:

```
$ react-native log-ios
$ react-native log-android
```

## 191. How to debug your React Native?

Follow the below steps to debug React Native app:

1. Run your application in the iOS simulator.
2. Press `Command + D` and a webpage should open up at `http://localhost:8081/debugger-ui`.
3. Enable *Pause On Caught Exceptions* for a better debugging experience.
4. Press `Command + Option + I` to open the Chrome Developer tools, or open it via `View` -> `Developer` -> `Developer Tools`.
5. You should now be able to debug as you normally would.