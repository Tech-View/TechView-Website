---
id: supported-libs-and-integration
title: React Supported Libraries & Integration
sidebar_label: React Supported Libraries & Integration
---

## 192. What is reselect and how does it work?

*Reselect* is a **selector library** (for Redux) which uses *memoization* concept. It was originally written to compute derived data from Redux-like applications state, but it can't be tied to any architecture or library.

Reselect keeps a copy of the last inputs/outputs of the last call, and recomputes the result only if one of the inputs changes. If the the same inputs are provided twice in a row, Reselect returns the cached output. It's memoization and cache are fully customizable.

## 193. What is Flow?

*Flow* is a *static type checker* designed to find type errors in JavaScript. Flow types can express much more fine-grained distinctions than traditional type systems. For example, Flow helps you catch errors involving `null`, unlike most type systems.

## 194. What is the difference between Flow and PropTypes?

Flow is a *static analysis tool* (static checker) which uses a superset of the language, allowing you to add type annotations to all of your code and catch an entire class of bugs at compile time. PropTypes is a *basic type checker* (runtime checker) which has been patched onto React. It can't check anything other than the types of the props being passed to a given component. If you want more flexible typechecking for your entire project Flow/TypeScript are appropriate choices.

## 195. How to use Font Awesome icons in React?

Follow the steps below to include Font Awesome in React:

1. Install `font-awesome`:

```console
$ npm install --save font-awesome
```

2. Import `font-awesome` in your `index.js` file:

```javascript
import 'font-awesome/css/font-awesome.min.css'
```

3. Add Font Awesome classes in `className`:

```javascript
render() {
  return <div><i className={'fa fa-spinner'} /></div>
}
```

## 196. What is React Dev Tools?

*React Developer Tools* let you inspect the component hierarchy, including component props and state. It exists both as a browser extension (for Chrome and Firefox), and as a standalone app (works with other environments including Safari, IE, and React Native).

The official extensions available for different browsers or environments.
1. **Chrome extension**
2. **Firefox extension**
3. **Standalone app** (Safari, React Native, etc)

## 197. Why is DevTools not loading in Chrome for local files?

If you opened a local HTML file in your browser (`file://...`) then you must first open *Chrome Extensions* and check `Allow access to file URLs`.

## 198. How to use Polymer in React?

1. Create a Polymer element:

    ```jsx harmony
    <link rel='import' href='../../bower_components/polymer/polymer.html' />
    Polymer({
      is: 'calender-element',
      ready: function() {
        this.textContent = 'I am a calender'
      }
    })
    ```

2. Create the Polymer component HTML tag by importing it in a HTML document, e.g. import it in the `index.html` of your React application:

    ```html
    <link rel='import' href='./src/polymer-components/calender-element.html'>
    ```

    3. Use that element in the JSX file:

    ```javascript
    import React from 'react'

    class MyComponent extends React.Component {
      render() {
        return (
          <calender-element />
        )
      }
    }

    export default MyComponent
    ```

## 199. What are the advantages of React over Vue.js?

React has the following advantages over Vue.js:

1. Gives more flexibility in large apps developing.
2. Easier to test.
3. Suitable for mobile apps creating.
4. More information and solutions available.

## 200. What is the difference between React and Angular?

| React | Angular |
| ----- | ------- |
| React is a library and has only the View layer | Angular is a framework and has complete MVC functionality |
| React handles rendering on the server side | AngularJS renders only on the client side but Angular 2 and above renders on the server side |
| React uses JSX that looks like HTML in JS which can be confusing | Angular follows the template approach for HTML, which makes code shorter and easy to understand |
| React Native, which is a React type to build mobile applications are faster and more stable | Ionic, Angular's mobile native app is relatively less stable and slower |
| In React, data flows only in one way and hence debugging is easy | In Angular, data flows both way i.e it has two-way data binding between children and parent and hence debugging is often difficult |

## 201. Why React tab is not showing up in DevTools?

When the page loads, *React DevTools* sets a global named `__REACT_DEVTOOLS_GLOBAL_HOOK__`, then React communicates with that hook during initialization. If the website is not using React or if React fails to communicate with DevTools then it won't show up the tab.

## 202. What are Styled Components?

`styled-components` is a JavaScript library for styling React applications. It removes the mapping between styles and components, and lets you write actual CSS augmented with JavaScript.

## 203. Give an example of Styled Components?

Lets create `<Title>` and `<Wrapper>` components with specific styles for each.

```javascript
import React from 'react'
import styled from 'styled-components'

// Create a <Title> component that renders an <h1> which is centered, red and sized at 1.5em
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

// Create a <Wrapper> component that renders a <section> with some padding and a papayawhip background
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`
```

These two variables, `Title` and `Wrapper`, are now components that you can render just like any other react component.

```jsx harmony
<Wrapper>
  <Title>{'Lets start first styled component!'}</Title>
</Wrapper>
```

## 204. What is Relay?

Relay is a JavaScript framework for providing a data layer and client-server communication to web applications using the React view layer.

## 205. How to use TypeScript in `create-react-app` application?
Starting from react-scripts@2.1.0 or higher, there is a built-in support for typescript. You can just pass `--typescript` option as below
```bash
npx create-react-app my-app --typescript

# or

yarn create react-app my-app --typescript
```
But for lower versions of react scripts, just supply `--scripts-version` option as `react-scripts-ts` while you create a new project. `react-scripts-ts` is a set of adjustments to take the standard `create-react-app` project pipeline and bring TypeScript into the mix.

Now the project layout should look like the following:

```
my-app/
├─ .gitignore
├─ images.d.ts
├─ node_modules/
├─ public/
├─ src/
│  └─ ...
├─ package.json
├─ tsconfig.json
├─ tsconfig.prod.json
├─ tsconfig.test.json
└─ tslint.json
```