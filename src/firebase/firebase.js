import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export {firebase, database as default};

/*
// === child_removed === event yang berbeda, setara dengan 'value'
database.ref('expenses').on('child_removed', (snapshot) => {
  console.log(snapshot.val())
});

// === child_changed ===
database.ref('expenses').on('child_changed', (snapshot) => {
  console.log(snapshot.val())
});

// ==== Subscribe Firebase in Array Transformation ====
// database.ref('expenses')
//   .on('value', (snapshot) => {
//     const expenses = []
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id : childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     })
//     console.log(expenses)
// });

// ===== Expenses Array in Firebase =====
// database.ref('expenses').push({
//   description : 'Makan ayam nuklir',
//   note : 'Lumayan kenyang laah',
//   amount : 18000,
//   creaetedAt : 1000
// });

// database.ref('expenses').push({
//   description : 'Sate sapi sukapura',
//   note : 'kemanisan bumbunya',
//   amount : 20000,
//   creaetedAt : 2000
// });

// database.ref('expenses').push({
//   description : 'Ayam bakar gratis',
//   note : 'tulangnya ampe bisa dimakan',
//   amount : 10000,
//   creaetedAt : 3000
// });


// ref(Firebase) === collection(Mongodb) === columndata(MySql)
// database.ref().set({
//   name: 'Gugun Mediamer',
//   age: 21,
//   stressLevel : 6,
//   job : {
//     title : 'Software Developer',
//     company : 'Google'
//   },
//   location: {
//     city: 'London',
//     country: 'England'
//   }
// }).then(() => {
//   console.log('Data is Saved.!');
// }).catch((e) => {
//   console.log('This Failed. ', e);
// });

// database.ref('age').set(22);
// database.ref('location/city').set('Philadelphia');

// ==== Challenge ====
// database.ref("attributes").set({
//   height: 178,
//   weight: 78
// }).then(() => {
//   console.log('Data is updated.');
// }).catch((e) => {
//   console.log('This Failed. ', e);
// })

// ==== UPDATE DATA IN FIREBASE ====
// database.ref().update({
//   stressLevel : 9,
//   'job/company' : 'Amazon',
//   'location/city' : 'seattle'
// });

// ==== Remove some data in database ====
// database.ref().remove()
//   .then(() => {
//     console.log('isSingle is deleted!');
//   })
//   .catch((e) => {
//     console.log('This Failed. ', e)
//   })

// ==== SUBSCRIBE FIREBASE ====
// const onValueChange = database.ref().on('value', (snapshot) => {
//   const val =snapshot.val();
//   console.log(`${val.name} ia a ${val.job.title} at ${val.job.company}`)
// });

// setTimeout(() => {
//   database.ref('job/company').set('Google');
// }, 3500)
*/