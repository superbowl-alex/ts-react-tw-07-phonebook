import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filter;

export const selectVisibleContacts = createSelector(
  [selectFilter, selectContacts],
  (filter, contacts) => {
    const normalizedFilter = filter.value.toLowerCase();
    return contacts.filter(({ name }) =>
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
