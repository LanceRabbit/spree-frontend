// actions
const INCREMENT = 'counter/INCREMENT';

const initState = {
  count: 0,
}

// reducer
const reducer = (state = initState, action) => {
  switch (action.type) {
    case INCREMENT: {
      return {
        ...state,
        count: state.count + 1,
      };
    }
    default:
      return state
  }
}

export default reducer;

// action creator
export const increment = () => {
  return {
    type: INCREMENT,
  }
}

export const asyncIncrement = () => {
  return (dispatch, getState) => {
    setTimeout(() => {
      dispatch(increment());
    }, 1000);
  }
}
