import asyncFetchItems from '../api/asyncFetchItems';

export const fetchItemsRequest = () => {
  return {
    type: 'FETCH_ITEMS_REQUEST'
  }
};

export const fetchItems = () => {
  return (dispatch) => {
    dispatch(fetchItemsRequest());
    return asyncFetchItems().then((response) => {
      if(response.status === 200){
        dispatch(fetchItemsSuccess(response));
      } else {
        dispatch(fetchItemsFailed(response));
      }
    });
  }
};

export const fetchItemsSuccess = (response) => {
  return {
    type: 'FETCH_ITEMS_SUCCESS',
    items: response.data
  }
};

export const fetchItemsFailed = (error) => {
  return {
    type: 'FETCH_ITEMS_FAILED',
    error: error
  }
};
