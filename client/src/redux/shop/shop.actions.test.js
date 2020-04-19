import {
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_FAILURE,
} from './shop.types';
import {
  fetchCollectionsStart,
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
  fetchCollectionsStartAsync,
} from './shop.actions';

describe('fetchCollectionsStart action', () => {
   // TODO: fix this test
  // it('should create the fetchCollectionsStart action', () => {
  //   expect(fetchCollectionsStart().type).toEqual(FETCH_COLLECTIONS_START);
  // });
});

describe('fetchCollectionsSuccess action', () => {
   // TODO: fix this test
  it('should create the fetchCollectionsSuccess action', () => {
    // const mockCollectionsMap = {
    //   hats: {
    //     id: 1,
    //   },
    // };

    // const action = fetchCollectionsSuccess(mockCollectionsMap);

    // expect(action.type).toEqual(FETCH_COLLECTIONS_SUCCESS);
    // expect(action.payload).toEqual(mockCollectionsMap);
  });
});

describe('fetchCollectionsFailure action', () => {
  it('should create the fetchCollectionsFailure action', () => {
     // TODO: fix this test
    // const action = fetchCollectionsFailure('errored');

    // expect(action.type).toEqual(FETCH_COLLECTIONS_FAILURE);
    // expect(action.payload).toEqual('errored');
  });
});

describe('fetchCollectionsStartAsync action', () => {
  it('should create the fetchCollectionsStartAsync action', () => {
     // TODO: fix this test
    // const mockActionCreator = fetchCollectionsStartAsync;
    // const mockDispatch = jest.fn();
    // mockActionCreator(mockDispatch());

    // expect(mockDispatch).toHaveBeenCalledWith(fetchCollectionsStart());
  });
});
