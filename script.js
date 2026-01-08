(function () {
    emailjs.init("angEhMGskXk7Hsdu0"); // Public Key
})();

function submitGender() {
    const selectedGender = document.querySelector('input[name="gender"]:checked');
    const result = document.getElementById("result");

    if (!selectedGender) {
        result.textContent = "❌ Please select a gender.";
        return;
    }

    result.textContent = "Sending email...";

    emailjs.send(
        "service_wmnq1hu",     // Service ID
        "template_bzl3bkd",    // Template ID
        {
            subject: "Gender Selection Response",
            name: "TEST USER",
            email: "emailme12908@gmail.com",
            message: "Your gender: " + selectedGender.value
        }
    ).then(
        () => result.textContent = "✅ Email sent successfully!",
        (error) => result.textContent = "❌ Error: " + error.text
    );
}
