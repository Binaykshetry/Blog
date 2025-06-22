function showSection(id) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => section.classList.remove('active'));

    const target = document.getElementById(id);
    if (target) {
        target.classList.add('active');
    }

    // Scroll to top smoothly when section changes
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Highlight the active nav link
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => link.classList.remove('selected'));
    const activeLink = document.querySelector(`nav a[onclick*="${id}"]`);
    if (activeLink) activeLink.classList.add('selected');
}

function submitForm() {
    const name = document.getElementById("userName").value.trim();
    const email = document.getElementById("userEmail").value.trim();
    const response = document.getElementById("response");

    if (name && email) {
        response.textContent = `Thank you, ${name}. We will contact you at ${email}.`;
        response.style.color = "green";

        // Clear input fields
        document.getElementById("userName").value = "";
        document.getElementById("userEmail").value = "";
    } else {
        response.textContent = "Please enter both name and email.";
        response.style.color = "red";
    }
}



