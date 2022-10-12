import store from "./Store";
import { bugAdded, bugRemoved, bugResolved } from "./ActionCreators";

store.subscribe(() => {
  console.log("Store Updated");
});

store.dispatch(bugAdded("BUG1"));

store.dispatch(bugAdded("BUG2"));

store.dispatch(bugRemoved());
store.dispatch(bugResolved());


console.log(store.getState());
