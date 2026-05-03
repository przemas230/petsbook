
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyA0v4InL2jZ-ApajyqBFRTgD_G1P6QpkJI",
  authDomain: "petsbook-f37d0.firebaseapp.com",
  databaseURL: "https://petsbook-f37d0-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "petsbook-f37d0",
  storageBucket: "petsbook-f37d0.firebasestorage.app",
  messagingSenderId: "552063929911",
  appId: "1:552063929911:web:daeee3eabd4592bcafb9b2"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  const notif = payload.notification || {};
  self.registration.showNotification(notif.title || 'PetsBook', {
    body: notif.body || '',
    icon: '/icon-192.png',
    badge: '/icon-192.png',
    data: payload.data || {}
  });
});
