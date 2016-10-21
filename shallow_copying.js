// Shallow copying for Redux
// =========================

////////////////// Array //////////////////

///// Add an entry /////

function user(state = {}, action) {
  // if action === ADDUSER
  return {
    ...state,
    ...action.payload
  };
}

function users(state = [], action) {
  // if action === ADDUSER
  return [
    ...state,
    user(undefined, action)
  ];
}


///// Update an entry /////

function user(state = {}, action) {
  // if action === UPDATEUSER
  
  if( state.id === action.payload.id ) {
    return {
      ...state,
      ...action.payload
    };
  } else {
    return state;
  }

}

function users(state = [], action) {
  // if action === UPDATEUSER
  return state.map(u => user(u, action))
}

///// Remove an entry /////

function users(state = [], action) {
  // if action === REMOVEUSER
  const index = state.findIndex(u => u.id === action.payload.id);

  return [
    ...state.slice(0, index),
    ...state.slice(index + 1)
  ];
}



////////////////// Object //////////////////

///// Add an entry /////

function user(state = {}, action) {
  // if action === ADDUSER
  return {
    ...state,
    ...action.payload
  };
}

function users(state = {}, action) {
  // if action === ADDUSER
  return {
    ...state,
    [action.payload.id]: user(undefined, action)
  };
}

///// Update an entry /////

function user(state = {}, action) {
  // if action === UPDATEUSER
  return {
    ...state,
    ...action.payload
  };
}

function users(state = {}, action) {
  // if action === UPDATEUSER
  return {
    ...state,
    [action.payload.id]: user( state[action.payload.id], action )
  }
}

///// Remove an entry /////
// http://stackoverflow.com/questions/34401098/remove-a-property-in-an-object-immutably

function users(state = {}, action) {
  // if action === UPDATEUSER
  const newState = { ...state };
  delete newState[action.payload.id];
  return newState;
}
