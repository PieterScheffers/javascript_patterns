// http://stackoverflow.com/questions/33726644/redux-state-persistence-with-a-database

export function creatingAccount() {
  return { type: 'CREATING_ACCOUNT' };
}

export function accountCreated(account) {
  return { type: 'ACCOUNT_CREATED', payload: account };
}

export function accountCreatingFailed(error) {
  return { type: 'ACCOUNT_CREATING_FAILED', payload: error };
}

export function createAccount(data, redirectParam) {
  return (dispatch) => {
    dispatch(creatingAccount());

    const url = config.apiUrl + '/auth/signup';

    fetch(url).post({ body: data })
      .then(account => {
        dispatch(accountCreated(account));
      })
      .catch(err => {
        dispatch(accountCreatingFailed(err));
      });
  };
}