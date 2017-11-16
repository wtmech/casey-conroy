import React from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.css';
import '../node_modules/normalize.css/normalize.css';
import '../node_modules/swiper/dist/css/swiper.min.css';
import './css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
