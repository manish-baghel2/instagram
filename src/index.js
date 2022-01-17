import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FirebaseContext from './context/firebase';
import { firebase, FieldValue } from './lib/firebase';
import './styles/app.css';

ReactDOM.render( 
    <FirebaseContext.Provider value={{ firebase, FieldValue }}>
        <App /> 
    </FirebaseContext.Provider>,
document.getElementById('root'));

// client side rended app: react (cra)
    // -> database which is firebase
    // -> react-loading-skeleton
    // tailwind

// folder structure
    // src
        // -> components,
        // -> constants, 
        // -> contexts, 
        // -> helpers, 
        // -> hooks,
        // -> pages,
        // -> lib (firebase is going to live ni here), 
        // -> services (firebase functions in here)
        // -> styles (tailwind's folder (app/tailwind))
