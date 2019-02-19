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

## Styles
Below is a list of all react-fx CSS animations.

### Fade In Animations
Import the Fade In stylesheets like so:
```js
import "react-fx/styles/fade/styles.css";
```
You can also import the stylesheet names (string) as constants:
```js
import {
  fxFadeDown,
  fxFadeUp
} from "react-fx/styles/fade";
```
Apply the stylesheets to your React HtmlElements:
```js
render() {
  return (
    <Fragment>
      <div className={fxFadeDown}>Fade In Down</div>
      <div className={fxFadeUp}>Fade In Up</div>
    </Fragment>
  );
}
```

## Components
This userland module is mainly a lightweight CSS library; however, some animations 
are easier to implement with React Components.

### SplitCard
The SplitCard Component has the following animations:
* fxCollapse
* fxSplit

Import the SplitCard Component:
```js
import SplitCard, {
  fxCollapse, fxSplit
} from "react-fx/SplitCard";
```

To use the SplitCard Component:
```js
function render() {
  return(
    <Fragment>
      <SplitCard /> // Card is idle because no stylesheet is applied
      <SplitCard className={fxCollapse}> // Card will fade in and collapse horizontally
        <h1>Card Title</h1>
        <br />
        <p>Lorem Ipsum...</p>
      </SplitCard>
      <SplitCard className={fxSplit}> // Card will fade out and split horizontally
        <h1>Card Title</h1>
        <br />
        <p>Lorem Ipsum...</p>
      </SplitCard>
    </Fragment>
  );
}
```
By default, the parent-most element of SplitCard applies:
```css
overflow: hidden;
```
If the `fxOverflow` property is set to true:
```js
<SplitCard className={fxSplit} fxOverflow={true}>
  <h1>Card Title</h1>
  <br />
  <p>Lorem Ipsum...</p>
</SplitCard>
```
then the css property:
```css
overflow: hidden;
```
will be *removed* from the parent-most element of SplitCard.

Setting fxOverflow to `true` means that you are responsible for handling 
overflow in another ancestor element.

## Maintenance
I may be slow to respond since I tend to get pretty busy.

I also have an attention span of a gnat.

I tend to create Components on a personal-need basis so updates may be sporatic.

## Contributing
I am not interested in collaborating as of now.

## Copyright & Licensing
Feel free to do what you want according to the MIT license.
