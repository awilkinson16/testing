// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABdUNhn7XURX4EMa7Xa_MlDmZo6x6DVYc",
  authDomain: "thonnytesting1.firebaseapp.com",
  databaseURL: "https://thonnytesting1-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "thonnytesting1",
  storageBucket: "thonnytesting1.appspot.com",
  messagingSenderId: "529694762153",
  appId: "1:529694762153:web:f6f0ee9efe90977906f5b8"
};

console.log('Contacts log');

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Retrieve the database handle------------------------------------------------------
const myDBCxn = firebase.database().ref('/contacts');   //1


myDBCxn.on("child_added", displayData); // displayDataAsList


// Tell JavaScript to call saveContacts when SUBMIT button is clicked
const btn = document.getElementById("submit-data");
btn.addEventListener("click", saveContacts);

// Submit clicked so save the data on Firebase
function saveContacts() {
  //alert("SUBMIT clicked!!!");

  // read the data from the email field
  const emailField = document.getElementById("email");
  const emailFieldValue = emailField.value;
  //alert(emailFieldValue)

  // reset form 
  emailField.value = ''; // clear the field
  emailField.focus(); // set the focus
  
  // code to save the data to Firebase GOES HERE!
  const data = myDBCxn.push();
  data.set( {email: emailFieldValue
            });

  console.log("Contacts SAVED!!!");
}


// A handler to display the Firebase data in a textarea
function displayData(data, prevChildKey) {
    const datapoint = data.val();
    document.getElementById("contacts").value += datapoint.email + "\n";;
}

// A handler to display the Firebase data as a list
function displayDataAsList(data, prevChildKey) {

    const datapoint = data.val();
  
    // create a new list item element and set its value to the email address
    const newListItem = document.createElement('li');
    newListItem.innerHTML = datapoint.email;0
      
 
    // append the above list item to the ordered list identified by rows
    const rowList = document.getElementById('rows');
    rowList.appendChild(newListItem);  }