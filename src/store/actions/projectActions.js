export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make sync call 
    dispatch({ type: 'CREATE_PROJECT', project })
  }
}