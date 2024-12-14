let contacts = [
    {name: 'Fred', address: '37 Street', number: '555-123-1123'},
    {name: 'Anthony', address: '38 Lane', number: '555-987-2343'},
    {name: 'Tony', address: '23 Boulevard', number: '555-975-7533'}
]
 function displayContacts(){
    contacts.forEach(item => {
        console.log('Contact name: ' + item.name + ', Contact address: ' + item.address + ', Contact number: ' + item.number);
    });
 }

 function addContact(){
    let newName = prompt('Please enter their name:');
    let newAddress = prompt('Please enter their address:');
    let newNumber = prompt('Please enter their phone number:');
    contacts.push({name: newName, address: newAddress, number: newNumber});
 }

 function orderContacts(){
    contacts.sort((a,b) =>{
        return a.name.localeCompare(b.name);
    })
 }

 function manageStudents(){
    let addMoreContacts = true;
    while(addMoreContacts && contacts.length < 10) {
        addContact();
        orderContacts(); 
        displayContacts();
        if (contacts.length >= 10) {
            alert("Contact list is full. Can not add any more");
            addMoreContacts = false;
        }
     else {
        addMoreContacts = confirm('Would you like to add another contact?');
    }
}
    if(contacts.length >= 10) {
        console.log('Contact book is full. No more can be added.')
    } else {
        console.log('Exited the contact management program')
    }
}

manageStudents();
  
    