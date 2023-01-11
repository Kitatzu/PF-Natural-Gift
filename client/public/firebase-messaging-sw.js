importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyDqXcZKzcgjaBnRfhZpikUAtMOSfptfh-Y",
  authDomain: "natural-gift.firebaseapp.com",
  projectId: "natural-gift",
  storageBucket: "natural-gift.appspot.com",
  messagingSenderId: "402024068355",
  appId: "1:402024068355:web:f5b45c8ae385a39818a536",
  measurementId: "G-MWF6KXLP15",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
