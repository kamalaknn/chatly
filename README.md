## About this project

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). This project is build with React and Redux.

This output is available at [https://kamalaknn.github.io/chatly/](https://kamalaknn.github.io/chatly/).

## Context

 - This app is study experiment to clone whatsapp web.
 - This app allows sending messages with a single profile. It is now not possible to switch profiles.
 - A list of friends is is hardcoded into it.
 - An initial conversation is stored in [conversations.json](https://github.com/kamalaknn/chatly/blob/master/public/conversations.json)
 - On the very first load, the conversations are fetched from conversations.json to simulate a network roundtrip.
 - Subsequent messaging is a websocket echo with [https://www.websocket.org/echo.html](https://www.websocket.org/echo.html).
 - This allows visualising messages sent. However, to simulate messages received, a utility function pushes random messages to messaging pipeline periodically.

## Viewing the App

 - The app is available at [https://kamalaknn.github.io/chatly/](https://kamalaknn.github.io/chatly/).
 - To run the app locally, clone and `npm install` or `yarn` and run `npm start`.
 - The app was developed and tested extensively in chrome. However it should work fine on latest browsers.
 - The app is not yet optimised for mobile or small screen experiences.


## Search

 - The search box on the left allows filtering through names in the friends list.
 - Search only allows to search through names, and not messages in conversations.

## Notifications

 - The `Enable Notifications` button on the left pane, controls desktop notifications pushed from app.
 - You can use it toggle notification preference.
 - Messages received from the pipeline will be pushed as a notification.

## Offline handling

 - As mentioned above, the initial conversation is fetched over the network on the very first visit.
 - As the app, sends and receives messages, it pushes to the browsers `localStorage`. This allows the app to load initial conversation when offline, and preserve state over reloads, without having an actual persistance server.
 - If the user goes offline, while using the app, a banner is shown, indicating offline status.
 - To allow, loading the app when a user is offline, a `service-worker` caches client assets. User can view and read existing conversations when offline.

## Tests

 - The test suite now includes unit tests for reducers.
