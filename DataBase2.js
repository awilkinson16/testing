// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyABdUNhn7XURX4EMa7Xa_MlDmZo6x6DVYc",
    authDomain: "thonnytesting1.firebaseapp.com",
    databaseURL: "https://thonnytesting1-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "thonnytesting1",
    storageBucket: "thonnytesting1.appspot.com",
    messagingSenderId: "529694762153",
    appId: "1:529694762153:web:f6f0ee9efe90977906f5b8"
  };
  
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Retrieve the database handle
  const myDBdata = firebase.database().ref('/MicrobitData');  
  
  
  myDBdata.on("child_added", displayData); // displayDataAsList

  
  // A handler to display the Firebase data in a textarea
  function displayData(data, prevChildKey) {
      const datapointt = data.val();
      document.getElementById("MicrobitData").value += datapointt.Final + "\n";
  }
  
  // A handler to display the Firebase data as a list
  function displayDataAsList(data, prevChildKey) {
  
      const datapoint = data.val();
    
      // create a new list item element and set its value
      const newListItem = document.createElement('li');
      newListItem.innerHTML = datapoint.Final;0

   
      // append the above list item to the ordered list identified by rows
      const rowList = document.getElementById('rows');
      rowList.appendChild(newListItem); 
    }