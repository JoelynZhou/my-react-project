import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import Sample from './Sample';

ReactDOM.render(
  (
    <Router >
        <div>
            <Route path="/sample" component={Sample}/>
            <Route path="/app" component={App}/>
        </div>
    </Router>
),
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
