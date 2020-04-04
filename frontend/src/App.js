import React from 'react';
import {Route} from 'react-router-dom'
import {Header, Footer} from './components/layout';
import Auth from './containers/auth';

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="flex-grow-1 h-100">
        <Route path="/auth" component={Auth}/>
      </div>
      <Route path="/auth" component={Footer}/>
    </div>
  )
}

export default App
