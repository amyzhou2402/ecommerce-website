import firestore from "./firebase";
const collectionName = "product-collection";

// Create
export const create = (searchTerm) => {
    firestore.collection(collectionName).add(searchTerm);
};

// Read - returns array of objects/products
export const readAll = async (callback) => {
    const querySnapshot = await firestore.collection(collectionName).get();

    // Create our new array
    const searchTerms = querySnapshot.docs.map((doc) => doc.data());

    callback(searchTerms);
    //callback should be a setter (e.g. useState)
};

export const read = async (id, callback) => {
    const querySnapshot = await firestore
        .collection(collectionName)
        .doc(id)
        .get();
    callback(querySnapshot.data());
};

// Update
export const update = (id, searchTerm) => {
    firestore
        .collection(collectionName)
        .doc(id)
        .set(searchTerm, { merge: true });
};

// Delete
export const deleteDoc = (id) => {
    firestore.collection(collectionName).doc(id).delete();
};
