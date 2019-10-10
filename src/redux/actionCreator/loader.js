import {
  LOADING_CONTENT,
  CONTENT_LOADED,
  SEARCH_RESULT_LOADING,
  SEARCH_RESULT_LOADED
} from '../constants/actionTypes';

export const loadingContent = () => ({
  type: LOADING_CONTENT,
  isLoading: true
});

export const contentLoaded = () => ({
  type: CONTENT_LOADED,
  isLoading: false
});

export const searchResultLoading = () => ({
  type: SEARCH_RESULT_LOADING,
  searchResultLoading: true
});

export const searchResultLoaded = () => ({
  type: SEARCH_RESULT_LOADED,
  searchResultLoaded: false
});
