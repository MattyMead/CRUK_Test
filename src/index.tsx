import React from 'react';
import ReactDOM from 'react-dom';
import 'styles/index.css';
import { AppProvider } from 'core/provider';

const container = document.getElementById('app');

ReactDOM.render(<AppProvider />, container);