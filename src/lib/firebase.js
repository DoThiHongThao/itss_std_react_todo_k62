
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDVKFBExTbWOEw1yfQ_ZXvKiygdIqFB6Lc",
    authDomain: "fb-sample-e0c7b.firebaseapp.com",
    projectId: "fb-sample-e0c7b",
    storageBucket: "fb-sample-e0c7b.appspot.com",
    messagingSenderId: "434018374093",
    appId: "1:434018374093:web:761e6c336d01a75f783484",
    measurementId: "G-PXKP2B2FPJ"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export default firebase;

export const getFirebaseItems = async () => {
    try {
      const snapshot = await db
        .collection("todos")
        .get();
      const items = snapshot.docs.map(
        (doc) => ({ ...doc.data(), id: doc.id })
      );
      return items;
    } catch (err) {
      console.log(err);
      return [];
    }
}
  
export const addFirebaseItem = async (item) => {
    try {
      const todoRef = db.collection("todos");
      await todoRef.add(item);
    } catch (err) {
      console.log(err);
    }
}
  
export const updateFirebaseItem = async (item, id) => {
    try {
      const todoRef = db.collection("todos").doc(id);
      await todoRef.update(item);
    } catch (err) {
      console.log(err);
    }
}
  
export const clearFirebaseItem = async (item) => {
    const todoRef = db.collection("todos").doc(item.id);
    await todoRef.delete().then(function () {
    }).catch(function (err) {
      console.log(err);
    });
};