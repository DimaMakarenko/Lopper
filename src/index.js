import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';

import * as serviceWorker from './serviceWorker';

// eslint-disable-next-line react/jsx-filename-extension,no-undef
ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
