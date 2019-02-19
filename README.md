# React-FX

[![CircleCI](https://circleci.com/gh/paulckim/react-fx.svg?style=svg)](https://circleci.com/gh/paulckim/react-fx)

React-FX is a minimalistic, React library that defines Components with built-in CSS defaults - no JQuery.

Originally intended to only exist for my personal website, React-FX is also for those that love writing their own stylesheets but are only looking for base/ wrapper Components (e.g. Component boilerplate) with default animations.

## Getting Started
Installing witn npm:
```bash
npm i react-fx
```

Installing witn yarn:
```bash
yarn add react-fx
```

## Components List
I don't have any official documentations, but I plan on generating those sometime in the future.

`Note: fxActive props will probably be removed. It's pretty redundant.`

### Container
The Container Component is pretty bland and straight forward.

It's a block element with a min-width and max-width restriction. The rest is filled as margin using auto.

Import the Container Component:
```js
import Container from "react-fx/Container";
```

Use it like you would with any regular React HtmlElement:
```js
//...
render() {
  return (
    <Container>
      <div>Element 1</div>
      <div>Element 2</div>
    </Container>
  );
}
```

### Card
The Card Component has the following CSS animations:
* fxFadeDown

Import the Container Component:
```js
import Card, { CardStyles } from "react-fx/Card";
```

To use the Card Component:
```js
// Card is IDLE. Setting fxActive to true does nothing:
render() {
  return (
    <Card>
      <h1>Card Title</h1>
      <br />
      <p>Lorem Ipsum...</p>
    </Card>
  );
}
// When fxActive is set to true, the Card will fade in and down.
render() {
  return (
    <Card className={CardStyles.fxFadeDown} fxActive={true}>
      <h1>Card Title</h1>
      <br />
      <p>Lorem Ipsum...</p>
    </Card>
  );
}
```

### SplitCard
The SplitCard Component has the following animations:
* fxCollapse
* fxSplit

Import the SplitCard Component:
```js
import SplitCard, { SplitCardStyles } from "react-fx/SplitCard";
```

To use the SplitCard Component:
```js
// Card is IDLE. Setting fxActive to true does nothing:
render() {
  return (
    <SplitCard>
      <h1>Card Title</h1>
      <br />
      <p>Lorem Ipsum...</p>
    </SplitCard>
  );
}
// When fxActive is set to true, the Card will fade in and collapse horizontally.
render() {
  return (
    <SplitCard className={CardStyles.fxCollapse} fxActive={true}>
      <h1>Card Title</h1>
      <br />
      <p>Lorem Ipsum...</p>
    </SplitCard>
  );
}
// When fxActive is set to true, the Card will fade out and split horizontally.
render() {
  return (
    <SplitCard className={CardStyles.fxSplit} fxActive={true}>
      <h1>Card Title</h1>
      <br />
      <p>Lorem Ipsum...</p>
    </SplitCard>
  );
}
```

## Future Components
An informal list of Components I plan on creating sometime in the future:
* Row
* NavBar
* Button

## Maintenance
I may be slow to respond since I tend to get pretty busy.

I also have an attention span of a gnat.

I tend to create Components on a personal-need basis so updates may be sporatic.

## Contributing
I am not interested in collaborating as of now.

## Copyright & Licensing
Feel free to do what you want according to the MIT license.
