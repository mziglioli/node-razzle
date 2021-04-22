import React from 'react';
import { Product } from "../Product";
import './App.css';

export const App = () => {
    return (
        <div data-testid="App__Container">
            Welcome to Razzle.
            <Product/>
        </div>
    );
}
