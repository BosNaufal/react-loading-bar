
import React from 'react';
import ReactDOM from 'react-dom';

require('../../sass/main.sass')

import LoadingBar from './index.js';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      progress: 0,
      direction: "right",
      error: false
    }
  }

  render(){

    let { progress, error, direction } = this.state
    let { progressTo, changeDirection, setToError, errorDone, progressDone } = this

    return(
      <div>
        <LoadingBar
          onErrorDone={ errorDone.bind(this) }
          onProgressDone={ progressDone.bind(this) }
          progress={ progress }
          direction={ direction }
          error={ error } />

          <div class="main">
          <h1>React Loading Bar</h1>
            <p>Progress is { progress }% { error }</p>
            <div class="button-container">
              <button type="button" onClick={ progressTo.bind(this,30) }>Progress to 30</button>
              <button type="button" onClick={ progressTo.bind(this,50) }>Progress to 50</button>
              <button type="button" onClick={ progressTo.bind(this,100) }>Progress to 100</button>
              <button type="button" onClick={ changeDirection.bind(this) }>Change Direction</button>
              <button class="error" type="button" onClick={ setToError.bind(this,true) }>Give An Error</button>
            </div>
          </div>
          <br/>
          <h3 className="text-center"><a href="https://github.com/BosNaufal/react-loading-bar">Fork Me On Github!</a></h3>
      </div>
    )
  }

  // Events
  progressTo(number) {
    this.setState({ progress: number })
  }

  changeDirection() {
    let { direction } = this.state
    this.setState({ direction: direction === 'right' ? 'left' : 'right' })
  }

  setToError(bool){
    this.setState({ error: bool })
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
