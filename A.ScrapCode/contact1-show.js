console.log('Contacts log');

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIfCgIaWJ4aMrgF6KbMvyE07VFQVAYDtE",
  authDomain: "my-email-project-2.firebaseapp.com",
  databaseURL: "https://my-email-project-2-default-rtdb.firebaseio.com",
  projectId: "my-email-project-2",
  storageBucket: "my-email-project-2.appspot.com",
  messagingSenderId: "292846689539",
  appId: "1:292846689539:web:300f8b8133c39515829d36",
  measurementId: "G-KMEC35JER1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

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