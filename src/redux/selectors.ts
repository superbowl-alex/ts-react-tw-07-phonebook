import { createSelector } from '@reduxjs/toolkit';
import { RootState } from "./store";

export const selectContacts = (state: RootState) => state.contacts.items;

export const selectIsLoading = (state: RootState) => state.contacts.isLoading;

export const selectError = (state: RootState) => state.contacts.error;

export const selectFilter = (state: RootState) => state.filter;

export const selectVisibleContacts = createSelector(
  [selectFilter, selectContacts],
  (filter, contacts) => {
    const normalizedFilter = filter.value.toLowerCase();
    return contacts?.filter(({ name }) =>
      name?.toLowerCase()?.includes(normalizedFilter)
    );
  }
);

export const selectPendingStatus = createSelector(
  [selectIsLoading, selectError],
  (isLoading, error) => {
    return isLoading && !error;
  }
);
