const GET_GREETING = 'greeting/GET_GREETING';

export const fetchGreetingFromApi = () => async (dispatch) => {
  const response = await fetch('http://localhost:3000/v1/greetings', {
    method: 'GET',
  });
  const greeting = await response.json();

  if (response.ok) {
    dispatch({
      type: GET_GREETING,
      payload: greeting,
    });
  }
};

export const greetingsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_GREETING:
      return action.payload;
    default:
      return state;
  }
};
