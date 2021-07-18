import { createSelector } from "@reduxjs/toolkit";

const getFilter = (state) => state.filter;

const getContacts = (state) => state.contacts;

const getFilteredContacts = createSelector(
    [getContacts, getFilter],
    (contacts, filter) =>
contacts.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()))
)


export default { getFilter, getContacts, getFilteredContacts};