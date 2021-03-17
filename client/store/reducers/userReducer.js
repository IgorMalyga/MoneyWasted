import { ACTION_1 } from '../actions/action_1';

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_1:
      return { value: action.value_1 };

    default:
      return state;
  }
};
