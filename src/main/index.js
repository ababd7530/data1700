// Array for å lagre billettobjekter
let billetter = [];

// Legg til en hendelseslytter for skjemainnsending
document.getElementById("billettSkjema").addEventListener("submit", function(event) {
    // Hindre standard oppførsel ved skjemainnsending
    event.preventDefault();

    // Hent verdier fra inputfeltene
    let antall = document.getElementById("antall").value.trim();
    let fornavn = document.getElementById("fornavn").value.trim();
    let etternavn = document.getElementById("etternavn").value.trim();
    let telefon = document.getElementById("telefon").value.trim();
    let email = document.getElementById("email").value.trim();

    // Valider input
    if (!antall || !fornavn || !etternavn || !telefon || !email) {
        alert("Alle felt må fylles ut");
        return;
    }

    // Valider telefonnummer og e-postadresse
    if (!validatePhoneNumber(telefon) || !validateEmail(email)) {
        alert("Ugyldig telefonnummer eller e-postadresse");
        return;
    }

    // Legg til billettobjekt i arrayet
    billetter.push({ antall, fornavn, etternavn, telefon, email });

    // Vis alle billetter på nytt
    visAlleBilletter();

    // Tøm inputfeltene
    resetInputFields();
});

// Slett alle billetter
function slettAlleBilletter() {
    billetter = [];
    visAlleBilletter();
}

// Vis alle billetter på siden
function visAlleBilletter() {
    let output = "";
    billetter.forEach(billett => {
        output += `<p>Antall: ${billett.antall}, Navn: ${billett.fornavn} ${billett.etternavn}, Telefon: ${billett.telefon}, E-post: ${billett.email}</p>`;
    });
    document.getElementById("alleBilletter").innerHTML = output;
}

// Tøm inputfeltene etter billettkjøp
function resetInputFields() {
    document.getElementById("antall").value = "";
    document.getElementById("fornavn").value = "";
    document.getElementById("etternavn").value = "";
    document.getElementById("telefon").value = "";
    document.getElementById("email").value = "";
}

// Valider telefonnummer
function validatePhoneNumber(phoneNumber) {
    let phoneRegex = /^[0-9]{8}$/;
    return phoneRegex.test(phoneNumber);
}

// Valider e-postadresse
function validateEmail(email) {
    let emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
}
