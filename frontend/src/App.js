import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AuthProvider } from './context/auth';
import AuthRoute from './utils/AuthRoute';
import { Container } from 'semantic-ui-react';
import { MenuBar } from './components';
import { Home, Login, Register, SinglePost } from './pages';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Container>
          <MenuBar />

          <Route exact path='/' component={Home} />
          <AuthRoute exact path='/login' component={Login} />
          <AuthRoute exact path='/register' component={Register} />
          <Route exact path='/posts/:postId' component={SinglePost} />
        </Container>
      </Router>
    </AuthProvider>
  );
}

export default App;
