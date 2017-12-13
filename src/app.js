import React from 'react';
import ReactDOM from 'react-dom';

import 'bulma';
import './app.scss';

import HelloMessage from './HelloMessage';

var mountNode = document.getElementById("root");
ReactDOM.render(<HelloMessage name="Andrés" what="React"/>, mountNode);