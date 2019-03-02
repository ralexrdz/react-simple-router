import { call, put, takeEvery } from 'redux-saga/effects'

function* getTweets(action) {
  try {
    const response = yield call(fetch, action.url)
    const tweets = yield call([response, response.json])
    yield put({type: "GET_TWEETS_SUCCESSFUL", tweets});
  } catch (e) {
    yield put({type: "GET_TWEETS_ERROR", message: e});
  }
}

function* sagaRoot () {
  yield takeEvery('GET_TWEETS', getTweets);
}

export default sagaRoot;
