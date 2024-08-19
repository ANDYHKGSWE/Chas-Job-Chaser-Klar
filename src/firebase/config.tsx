import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';

// Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyA8R-IbgouOlsi6hkCXT3ILD1EjJLA5mwE',
	authDomain: 'jobchaser-44c7a.firebaseapp.com',
	projectId: 'jobchaser-44c7a',
	storageBucket: 'jobchaser-44c7a.appspot.com',
	messagingSenderId: '451735002664',
	appId: '1:451735002664:web:99897859d5d93115cd9f1d',
	measurementId: 'G-SZ4438RF47',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
