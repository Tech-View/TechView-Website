---
id: react-internationalization
title: React Internationalization
sidebar_label: React Internationalization
---

## 140. What is React Intl?

The *React Intl* library makes internalization in React straightforward, with off-the-shelf components and an API that can handle everything from formatting strings, dates, and numbers, to pluralization. React Intl is part of *FormatJS* which provides bindings to React via its components and API.

## 141. What are the main features of React Intl?

1. Display numbers with separators.
2. Display dates and times correctly.
3. Display dates relative to "now".
4. Pluralize labels in strings.
5. Support for 150+ languages.
6. Runs in the browser and Node.
7. Built on standards.

## 142. What are the two ways of formatting in React Intl?

The library provides two ways to format strings, numbers, and dates: react components or an API.

```jsx harmony
<FormattedMessage
  id={'account'}
  defaultMessage={'The amount is less than minimum balance.'}
/>
```

```javascript
const messages = defineMessages({
  accountMessage: {
    id: 'account',
    defaultMessage: 'The amount is less than minimum balance.',
  }
})

formatMessage(messages.accountMessage)
```

## 143. How to use `<FormattedMessage>` as placeholder using React Intl?

The `<Formatted... />` components from `react-intl` return elements, not plain text, so they can't be used for placeholders, alt text, etc. In that case, you should use lower level API `formatMessage()`. You can inject the `intl` object into your component using `injectIntl()` higher-order component and then format the message using `formatMessage()` available on that object.

```jsx harmony
import React from 'react'
import { injectIntl, intlShape } from 'react-intl'

const MyComponent = ({ intl }) => {
  const placeholder = intl.formatMessage({id: 'messageId'})
  return <input placeholder={placeholder} />
}

MyComponent.propTypes = {
  intl: intlShape.isRequired
}

export default injectIntl(MyComponent)
```

## 144. How to access current locale with React Intl?

You can get the current locale in any component of your application using `injectIntl()`:

```jsx harmony
import { injectIntl, intlShape } from 'react-intl'

const MyComponent = ({ intl }) => (
  <div>{`The current locale is ${intl.locale}`}</div>
)

MyComponent.propTypes = {
  intl: intlShape.isRequired
}

export default injectIntl(MyComponent)
```

## 145. How to format date using React Intl?

The `injectIntl()` higher-order component will give you access to the `formatDate()` method via the props in your component. The method is used internally by instances of `FormattedDate` and it returns the string representation of the formatted date.

```jsx harmony
import { injectIntl, intlShape } from 'react-intl'

const stringDate = this.props.intl.formatDate(date, {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric'
})

const MyComponent = ({intl}) => (
  <div>{`The formatted date is ${stringDate}`}</div>
)

MyComponent.propTypes = {
  intl: intlShape.isRequired
}

export default injectIntl(MyComponent)
```
