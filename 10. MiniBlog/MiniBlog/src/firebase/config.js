import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyAvQCyBQNeUgZcdK0RsqPlXcJCemHKVsiE",
	authDomain: "miniblog-b97d4.firebaseapp.com",
	projectId: "miniblog-b97d4",
	storageBucket: "miniblog-b97d4.appspot.com",
	messagingSenderId: "378419236727",
	appId: "1:378419236727:web:6eb6f0baa3ac07026f5b72",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
