import { createReducer } from "@reduxjs/toolkit";
import actions from "./actions";

const {
 
  fetchSuccess,
  addSuccess,
  deleteSuccess,
} = actions;

export const contactsReducer = createReducer([], {
  [fetchSuccess]: (_, { payload }) => payload,
  [addSuccess]: (state, { payload }) => [payload, ...state],
  [deleteSuccess]: (state, { payload }) => state.filter(({ id }) => id !== payload),
});

export const filterReducer = createReducer("", {
  [actions.Filter]: (_, { payload }) => payload,
});

export default {
    contactsReducer,
    filterReducer,
};