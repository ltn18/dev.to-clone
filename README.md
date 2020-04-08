# Dev_Story
## About
Dev Story is a platform for developers to share their stories to the world. Under supervision of Quan Ngo Huu, I developed this website as a demonstration for MindX's Hackathon Final Project. 

## Available Scripts
In the project directory, you can run:

### `yarn start`
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`
Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Technologies & Frameworks
### Database System
* MongoDB

### Frameworks
* ReactJS
* NodeJS
* ExpressJS
* React Bootstrap

### Testing environment
* Visual Studio Code

## Quan Ngo Huu's useAsync Hook
### Code
![Image]("https://github.com/LamNguyenAtCWRU/Dev_Story/blob/master/assets/code.PNG");
import { useState } from 'react';

const useAsync = asyncFunction => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  function execute() {
    setLoading(true);
    asyncFunction
    .apply(this, arguments)
    .then(res => setResult(res))
    .catch(err => setError(err))
    .finally(() => setLoading(false));
  }
  
  return [{loading, result, error}, execute];
};

export default useAsync;

### Code Flow
#### How to use
const [loginApiData, fetchLogin] = useAsync(
  (username, password) => {
    axios.post("/auth/login", {
      username: username,
      password: password,
    })
  }
);

values => fetchLogin(values.username, values.password);

#### Explanation
##### Init state
loginApiData = {false, null, null};

asyncFunction = 
  (username, password) => {
    axios.post("/auth/login", {
      username: username,
      password: password,
    })
  }

fetchLogin = 
  function execute() {
    setLoading(true);
    asyncFunction
    .apply(this, arguments) // this will take parameters from useAsync
    .then(res => setResult(res))
    .catch(err => setError(err))
    .finally(() => setLoading(false));
  }

##### After call fetchLogin
fetchLogin = 
  function execute() {
    setLoading(true);
    axios
    .post("/auth/login", {
      username: values.username,
      password: values.password,
    })
    .apply(this, arguments)
    .then(res => setResult(res))
    .catch(err => setError(err))
    .finally(() => setLoading(false));
  }
  
loginApiData is then updated after calling fetchLogin(values.username, values.password);









