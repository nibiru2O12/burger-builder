import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import AppTest from './App.test';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
