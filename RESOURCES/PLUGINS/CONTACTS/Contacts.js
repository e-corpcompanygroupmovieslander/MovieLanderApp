//CONTACTS
const CONTACTS=()=>{

    // Call the native Android function to retrieve contacts
    var contacts = Android.getContactList();

    // Display contacts
    if (contacts !== "") {
        // Split contacts by newline character
        var contactsArray = contacts.split('\n');
        
        // Loop through contacts and display each contact
        for (var i = 0; i < contactsArray.length; i++) {
            alert(contactsArray[i])
        }
    } else {
        alert("No contacts found.");
    }

}

export{CONTACTS}