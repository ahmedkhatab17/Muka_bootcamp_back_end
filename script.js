console.log("JavaScript is working!");


document.getElementById("updateAboutMe").addEventListener("click", function() {
    document.getElementById("aboutMe").innerText = "I Love JavaScript  -_-";
}); 



document.getElementById("contactForm").addEventListener("submit", function(event) {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let errorMessage = document.getElementById("errorMessage");

    if (name === "" || email === "") {
        event.preventDefault();
        errorMessage.innerText = "Please fill out both fields.";
    } else if (!email.includes("@")) {
        event.preventDefault();
        errorMessage.innerText = "Enter a valid email.";
    } else {
        errorMessage.innerText = "Form submitted successfully!";
    }
});



document.getElementById("themeToggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
});

if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
}
