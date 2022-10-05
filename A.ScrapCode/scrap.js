//Broken contact us javascript

console.log('Contacts log');

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBa2nQnKSuaXo_1bBMzRiIADnENXwSUMUY",
  authDomain: "computer-science-project-2.firebaseapp.com",
  databaseURL: "https://computer-science-project-2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "computer-science-project-2",
  storageBucket: "computer-science-project-2.appspot.com",
  messagingSenderId: "635804484795",
  appId: "1:635804484795:web:74d89b8dcfb0c1a23d559e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Retrieve the database handle
const myDBCxn = firebase.database().ref('/contacts');

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
  alert(emailFieldValue)

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
    newListItem.innerHTML = datapoint.email;
 
    // append the above list item to the ordered list identified by rows
    const rowList = document.getElementById('rows');
    rowList.appendChild(newListItem);  

}
