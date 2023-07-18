//Signup
export const selectToken = (state) => state.auth.token;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectIsLoadingAuth = (state) => state.auth.isAuthLoading;
export const selectUser = (state) => state.auth.user;
export const selectIsRefreshing = (state) => state.auth.isRefreshing;

//Search
export const selectSearchValue = (state) => state.searchSelect.search;

//Theme
export const selectTheme = (state) => state.switcherTheme.darkThem;
