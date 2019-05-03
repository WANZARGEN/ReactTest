import React from 'react';
import ReactDOM from 'react-dom'; //React DOM takes care of updating the DOM to match the React elements.
import { BrowserRouter } from "react-router-dom";

import { Provider } from 'react-redux';
import configureStore from './configureStore';

import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker'; //브라우저가 백그라운드에서 실행하는 스크립트. 웹페이지와는 별개로 작동. 푸시 알림 및 백그라운드 동기화와 같은 기능 제공.

const store = configureStore()

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root')
);//Applications built with just React usually have a single root DOM node

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
