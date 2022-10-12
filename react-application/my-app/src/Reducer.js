import * as actionTypes from "./ActionTypes";

let lastId = 0;

export default function reducer(state = [], action) {
  if (action.type === actionTypes.BUG_ADDED)
    return [
      ...state,
      {
        id: ++lastId,
        description: action.payLoad.description,
        resolved: false,
      },
    ];

  if (action.type === actionTypes.BUG_REMOVED)
    return state.filter((bug) => {
      bug.id !== action.payLoad.id;
    });
  
    if (action.type === actionTypes.BUG_RESOLVED)
    return state.map(
      (bug) => (bug.id !== action.payLoad.id ? bug : { ...bug, resolved: true })
    );

}
