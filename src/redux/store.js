import { createStore } from "redux";
import reducers from "./reducers/index";

// is take couple of arguments the first one is all the reducers we have created
// and second is middleware but we haven't created anyone.
const store = createStore(
  reducers,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
