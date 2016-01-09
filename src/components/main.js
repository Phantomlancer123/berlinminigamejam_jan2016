// Shims for ES5
import 'es5-shim/es5-shim';
import 'es5-shim/es5-sham';

// Console polyfill
// TODO: Webpack should provide something like that. Check it it's the same
import 'console-polyfill';

// ES6 promise polyfill
import ES6Promise from 'es6-promise';
ES6Promise.polyfill();

import React, {Component} from 'react';

import 'normalize.css/normalize.css';
import '../styles/main.less';

import Viewport from './Viewport';
import SceneDirector from './SceneDirector';

import FastClick from 'fastclick';

const content = document.getElementById('content');

if (Object.hasOwnProperty.call(document, 'addEventListener')) {
  document.addEventListener('DOMContentLoaded', function() {
    FastClick.attach(document.body);
  }, false);
}

const game = (
  <Viewport>
    <SceneDirector />
    <audio autoPlay loop>
      <source src="images/music.mp3" type="audio/mpeg" />
    </audio>
  </Viewport>
);

React.render(game, content);
