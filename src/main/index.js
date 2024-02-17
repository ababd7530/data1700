// Array to store ticket objects
let billetter = [];

// Add an event listener for form submission
document.getElementById("billettSkjema").addEventListener("submit", function(event) {

    // Hindre standard oppførsel ved skjemainnsending
    event.preventDefault();

    // Retrieve values from input fields

    let antall = document.getElementById("antall").value.trim();
    let fornavn = document.getElementById("fornavn").value.trim();
    let etternavn = document.getElementById("etternavn").value.trim();
    let telefon = document.getElementById("telefon").value.trim();
    let email = document.getElementById("email").value.trim();

    // Validate input

    if (!antall || !fornavn || !etternavn || !telefon || !email) {
        alert("Alle felt må fylles ut");
        return;
    }

    // Validate phone number and email adress

    if (!validatePhoneNumber(telefon) || !validateEmail(email)) {
        alert("Ugyldig telefonnummer eller e-postadresse");
        return;
    }

    // Add ticket object to the array
    billetter.push({ antall, fornavn, etternavn, telefon, email });

    // Dispalay all tickets again
    visAlleBilletter();

    // Reset input fields
    resetInputFields();
});

// Delete all tickets

function slettAlleBilletter() {
    billetter = [];
    visAlleBilletter();
}

// Display all tickets on the page

function visAlleBilletter() {
    let output = "";
    billetter.forEach(billett => {
        output += `<p>Antall: ${billett.antall}, Navn: ${billett.fornavn} ${billett.etternavn}, Telefon: ${billett.telefon}, E-post: ${billett.email}</p>`;
    });
    document.getElementById("alleBilletter").innerHTML = output;
}

// Reset input fields after ticket purchase

function resetInputFields() {
    document.getElementById("antall").value = "";
    document.getElementById("fornavn").value = "";
    document.getElementById("etternavn").value = "";
    document.getElementById("telefon").value = "";
    document.getElementById("email").value = "";
}

// Validate phone number

function validatePhoneNumber(phoneNumber) {
    let phoneRegex = /^[0-9]{8}$/;
    return phoneRegex.test(phoneNumber);
}

// Validdate e-mail

function validateEmail(email) {
    let emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
}
