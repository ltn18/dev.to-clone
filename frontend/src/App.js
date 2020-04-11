import React,{ useState }  from 'react';
import { Route } from 'react-router-dom'
import { Header, Footer } from './components/layout';

import Auth from './containers/auth';

import AuthContext from './contexts/auth';
import NewPost from './containers/newPost';

const App = () => {

  const [authUser, setAuthUser] = useState(null);

  return (
    <AuthContext.Provider value={{authUser, setAuthUser}}>
      <div className="App">
        <Header />
        <div className="flex-grow-1 h-100">
          <Route path="/auth" component={Auth} />
          <Route path="/new" component={NewPost} />
        </div>
        <Route path="/auth" component={Footer} />
      </div>
    </AuthContext.Provider>
  )
}

export default App
