import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import CounterContextProvider from './store/03CounterContextStore';
// import ToggleContextProvider from './store/03ToggleContextStore';
import {Provider} from 'react-redux'
import store from './store/redux_example/04MainReduxStore';


// 03 - Context has an issue with stacking too many contexts
// ReactDOM.render(
//   <React.StrictMode>
//     <CounterContextProvider>
//       <ToggleContextProvider>
//       <App />
//       </ToggleContextProvider>
//     </CounterContextProvider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

