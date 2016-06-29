# React Loading Bar
Simplest Youtube Like Loading Bar Component For [React JS](http://facebook.github.io/react)

[DEMO](https://bosnaufal.github.io/react-loading-bar)

## Install
You can import [react-loading-bar](./src/js/components/index.js) to your react component file like [this](./src/js/components/app.js) and process it with your preprocessor.

or

You can install it via NPM
```bash
npm install react-loadingbar
```


## Usage
```javascript

import React from 'react';
import ReactDOM from 'react-dom';

import LoadingBar from 'react-loadingbar';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      progress: 0,
      error: false
    }
  }

  render(){
    return(
      <LoadingBar
        progress={ this.state.progress }
        error={ this.state.error }
        onErrorDone={ errorDone.bind(this) }
        onProgressDone={ progressDone.bind(this) } />
    )
  }

  // Callback
  errorDone(){
    this.setState({ error: false })
  }

  progressDone() {
    this.setState({ progress: 0 })
  }

}


ReactDOM.render(<App />, document.getElementById("app"))


```

Usage With Full Props
```javascript

  render(){
    return(
      <LoadingBar
        id="loadingbar-id"
        className="custom loading-bar className"
        progress={ this.state.progress }
        direction={ this.state.direction }
        error={ this.state.error }
        onErrorDone={ errorDone.bind(this) }
        onProgressDone={ progressDone.bind(this) } />
    )
  }


```

## Props
##### id (String)
custom Id in react-loadingbar component

##### className (String)
custom className in react-loadingbar component

##### progress (Number)
The Progress Percentage of react-loadingbar component

##### direction (String)
The Animation Direction of react-loadingbar component. You can fill it with `'right'` or `'left'` default is `'right'`

##### error (Boolean)
Indicate the component to showing the error state.

##### onErrorDone (Function)
Should change the parent state when the loadingbar has finished with its error state

##### onProgressDone (Function)
Should netralize the parent's progress state to be `0`


## Thank You for Making this useful~

## Let's talk about some projects with me
Just Contact Me At:
- Email: [bosnaufalemail@gmail.com](mailto:bosnaufalemail@gmail.com)
- Skype Id: bosnaufal254
- twitter: [@BosNaufal](https://twitter.com/BosNaufal)

## License
[MIT](http://opensource.org/licenses/MIT)
Copyright (c) 2016 - forever Naufal Rabbani
