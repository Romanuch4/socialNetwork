import Store from './state';
import './index.css';
import * as serviceWorker from './serviceWorker';
import rerenderEntireTree from './render';

rerenderEntireTree(Store);

serviceWorker.unregister();
