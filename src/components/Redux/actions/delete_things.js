
export const deletePhoneNumber = (id) => {
   return (dispatch, getState, { getFirebase }) => {
      const firestore = getFirebase().firestore();
      firestore.collection('phone-number').doc(id)
         .delete()
         .then(data => {
            dispatch({ type: "DATA_DELETED", data });
            console.log("Deleted");
            
         })
   }
}