import { db } from '../config/firebase';
import { 
  collection, 
  doc, 
  getDoc, 
  getDocs, 
  addDoc, 
  updateDoc, 
  deleteDoc,
  query,
  where,
  orderBy,
  limit
} from 'firebase/firestore';

// Generic CRUD operations
export const createDocument = async (collectionName, data) => {
  return await addDoc(collection(db, collectionName), {
    ...data,
    createdAt: new Date().toISOString()
  });
};

export const getDocument = async (collectionName, docId) => {
  const docRef = doc(db, collectionName, docId);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null;
};

export const updateDocument = async (collectionName, docId, data) => {
  const docRef = doc(db, collectionName, docId);
  return await updateDoc(docRef, {
    ...data,
    updatedAt: new Date().toISOString()
  });
};

export const deleteDocument = async (collectionName, docId) => {
  const docRef = doc(db, collectionName, docId);
  return await deleteDoc(docRef);
};

export const getCollectionData = async (collectionName, queryConstraints = []) => {
  const q = query(collection(db, collectionName), ...queryConstraints);
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};
