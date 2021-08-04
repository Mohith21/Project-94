var firebaseConfig = {
      apiKey: "AIzaSyB_4LnFCHIxSjLS_nW692iMxUxAWl5XfWA",
      authDomain: "let-s-chat-page.firebaseapp.com",
      projectId: "let-s-chat-page",
      storageBucket: "let-s-chat-page.appspot.com",
      messagingSenderId: "57837290628",
      appId: "1:57837290628:web:238ec6772f7bd8930aeed1"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

    