const getDataFromFirestore = (state = {}, action) => {

   if (action.type) {
      switch (action.type) {
         case 'PHONE_NUMBER_DATA_STORED':
            return {
               ...state,
               phoneNumberData: action.data
            }
         case 'GET_SCHEDULE':
            return {
               ...state,
               scheduleData: action.data
            }

         case 'DATA_DELETED':
            return {
               ...state,
               isDeletedData: true,
            }
         default:
            return state;
      }
   }
}


export default getDataFromFirestore;