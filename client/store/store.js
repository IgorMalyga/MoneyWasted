import { createStore } from 'redux';

import { reducer } from './reducers/userReducer';

export const store = createStore(reducer);
