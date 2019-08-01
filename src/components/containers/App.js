import React from 'react';
import MainPlayer from './MainPlayer';
import NoMatch from '../NoMatch';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import GlobalStyle from '../styles/GlobalStyle'

const App = () => (
  <BrowserRouter>
  {/* Check if I actually need this fragment.  */}
  <>
    <Switch>
      <Route exact path="/" component={MainPlayer}/>
      <Route exact path="/:activeVideo" component={MainPlayer}/>
      <Route component={NoMatch}/>
    </Switch>
    <GlobalStyle/>
  </>
  </BrowserRouter>
)

export default App;