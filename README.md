# CSS-FX
[![CircleCI](https://circleci.com/gh/paulckim/css-fx/tree/master.svg?style=svg)](https://circleci.com/gh/paulckim/css-fx/tree/master)

CSS-FX is a minimalistic, CSS animations library.

CSS-fx is intended for those that want to be JQuery.

I am also a firm believer in explicitly getting what you asked for.

This module only provides CSS animations, nothing more and nothing less.

## Getting Started
Installing witn npm:
```bash
npm i css-fx
```

Installing witn yarn:
```bash
yarn add css-fx
```

To import and reference the stylesheets:
```js
// import all styles
import "css-fx/css-fx.css";
/** or **/
// import as CSS Module
import styles from "css-fx/css-fx.css";
```

## Styles
Below is a list of all css-fx CSS animations.

### Fade In CSS
Fade in animations:
* `fx-fade-in-down`
* `fx-fade-in-up`

#### Example
Here's an example of the fade in animations using React:
```js
setAnimating(isActive) {
  this.setState({ isActive: isActive })
}
render() {
  const { isActive } = this.state;
  const animationCss = isActive 
    ? "fx-fade-in-down" 
    : "fx-fade-in-up";
  return (
    <Fragment>
      <div className={animationCss} style={
        { height: "300px", width: "500px" }
      }>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Nullam vestibulum tellus euismod neque finibus accumsan. 
        Suspendisse potenti. Fusce vehicula lorem quis enim 
        hendrerit, ac tempus justo tempus.
      </div>
      <button onClick={() => {
        this.setAnimating(!this.state.isActive)
      }}>
        Animate Me!
      </button>
    </Fragment>
  );
}
```

### Split CSS
Split CSS anchors:
* "fx-root-split"
* "fx-left-split"
* "fx-right-split"

Split animations:
* "fx-collapse"
* "fx-split"

Split syntax sugar:
* "fx-hide-overflow"

#### Example
In this example, we are only applying the fx-collapse animation. 

In order to use the split animations, you **must** apply the `fx-root-split` 
class to the parent html element.

You **must** also apply the `fx-left-split` class to the background element 
(background in terms of html stacking relativity) and the `fx-right-split` 
class to the foreground element.

As soon as you apply the CSS animation of your choice (e.g. `fx-collapse`), 
the animations will start.

Here's an example of Split card using React:
```js
setAnimating(isActive) {
  this.setState({ isActive: isActive })
}
render() {
  const { isActive } = this.state;
  const animationCss = isActive 
    ? "fx-collapse" : "fx-split";
  return (
    <Fragment>
      <div className={`fx-root-split ${animationCss}`}>
        <div className="fx-left-split">
          {this.props.children}
        </div>
        <div className="fx-right-split">
          {this.props.children}
        </div>
      </div>
      <button onClick={() => {
        setAnimating(!this.state.isActive);
      }}>
        Toggle!
      <button/>
    </Fragement>
  );
}
```

## Maintenance
I may be slow to respond since I tend to get pretty busy.

I also have an attention span of a gnat.

I tend to create Components on a personal-need basis so updates may be sporatic.

## Contributing
I am not interested in collaborating as of now.

## Copyright & Licensing
Feel free to do what you want according to the MIT license.
