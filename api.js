import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// Your web app's Firebase configuration

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: 'AIzaSyDWf7E61xrY7sYtr3s9QYVV68nmvOfvm84',
  authDomain: 'van-life-bd185.firebaseapp.com',
  projectId: 'van-life-bd185',
  storageBucket: 'van-life-bd185.appspot.com',
  messagingSenderId: '977256285656',
  appId: '1:977256285656:web:fbef05f8e4e1d14df25ead',
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
console.log('APP: ', app);

const db = getFirestore(app);

console.log('DB: ', db);

const vansCollectionRef = collection(db, 'vans');

console.log('vansCollectionRef: ', vansCollectionRef);

export async function getVans() {
  const querySnapshot = await getDocs(vansCollectionRef);
  console.log('DUPA: ', querySnapshot);

  const dataArr = querySnapshot.docs.map(doc => ({
    ...doc.data(),
    id: doc.id,
  }));
  console.log('dataArr: ', dataArr);
  return dataArr;
}

// export async function getVans(id) {
//   const url = id ? `/api/vans/${id}` : '/api/vans';
//   const res = await fetch(url);
//   if (!res.ok) {
//     throw {
//       message: 'Failed to fetch vans',
//       statusText: res.statusText,
//       status: res.status,
//     };
//   }
//   const data = await res.json();
//   return data.vans;
// }

export async function getHostVans(id) {
  const url = id ? `/api/host/vans/${id}` : '/api/host/vans';
  const res = await fetch(url);
  if (!res.ok) {
    throw {
      message: 'Failed to fetch vans',
      statusText: res.statusText,
      status: res.status,
    };
  }
  const data = await res.json();
  return data.vans;
}

export async function loginUser(creds) {
  const res = await fetch('/api/login', {
    method: 'post',
    body: JSON.stringify(creds),
  });
  const data = await res.json();

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    };
  }

  return data;
}
