import Vue from 'vuido'

import MainWindow from './MainWindow'

import db from '@z-todo/db'

Vue.prototype.$db = db

const window = new Vue( {
  render: h => h( MainWindow )
} );

window.$start();
