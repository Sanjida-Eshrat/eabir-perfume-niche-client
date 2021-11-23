// const firebaseConfig = {
//     apiKey: "AIzaSyDwBXbaFs1QxBCpkRRwX2eTy8398yN__9k",
//     authDomain: "niche-website-2.firebaseapp.com",
//     projectId: "niche-website-2",
//     storageBucket: "niche-website-2.appspot.com",
//     messagingSenderId: "860054255988",
//     appId: "1:860054255988:web:0324612a3ffa1709b8d421"
//   };

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
};

export default firebaseConfig;