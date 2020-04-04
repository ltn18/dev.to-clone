import React from 'react';
import {Route} from 'react-router-dom'
import {Header} from './components/layout';
import Auth from './containers/auth';

const App = () => {
  return (
    <div className="App">
      <Header />
      <div>
        <Route path="/auth" component={Auth}/>
      </div>
    </div>
  )
}

export default App
