import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Block from './component/Block/Block';
import Table from './component/Table/Table';
import Timeline from './component/Timeline/Timeline';
import Scale from './component/Scale/Scale';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <div className="link-container">
            <h1 className='link-item'>
              <Link to="/block">Block</Link>
            </h1>

            <h1 className='link-item'>
              <Link to="/table">Table</Link>
            </h1>
            
            <h1 className='link-item'>
              <Link to="/timeline">Timeline</Link>
            </h1>

            <h1 className='link-item'>
              <Link to="/scale">Scale</Link>
            </h1>
          </div>
        </nav>

        <Switch>
          <Route path="/block">
            <Block />
          </Route>

          <Route path="/table">
            <Table />
          </Route>

          <Route path="/timeline">
            <Timeline />
          </Route>

          <Route path="/scale">
            <Scale />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
