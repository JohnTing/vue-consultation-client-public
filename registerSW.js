if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/vue-consultation-client-public/sw.js', { scope: '/vue-consultation-client-public/' })})}