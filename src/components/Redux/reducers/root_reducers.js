import { firebaseReducer } from 'react-redux-firebase';
import { combineReducers } from 'redux';
// import { firestoreReducer } from 'redux-firestore';
// import getData from './data_getter_reducer';
import getDataFromFirestore from './get_data_reducer';

const rootReducer = combineReducers({
   getFirestoreData: getDataFromFirestore,
   // firestore: firestoreReducer,
   firebase: firebaseReducer
});

export default rootReducer;