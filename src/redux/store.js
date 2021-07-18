import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import { contactsReducer, filterReducer } from "./reducer";


const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];
const rootReducers = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
const store = configureStore({
  reducer:rootReducers,
  middleware,
});


export default store;