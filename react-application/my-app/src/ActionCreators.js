import * as actionTypes from "./ActionTypes";

export function bugAdded() {
  return {
    type: actionTypes.BUG_ADDED,
    payLoad: {
      description: "Bug1",
    },
  };
}

export function bugRemoved() {
  return {
    type: actionTypes.BUG_REMOVED,
    payLoad: {
      id: 1,
    },
  };
}

// export function bugResolved() {
//   return {
//     type: actionTypes.BUG_RESOLVED,
//     payLoad: {
//       description: "BUG RESOLVED"
//     },
//   };
// }