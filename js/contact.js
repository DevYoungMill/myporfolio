// Email JS Feature
const contactForm = document.getElementById("contact-form"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  // ServiceID - TemplateID - #Form - PublicKey
  emailjs
    .sendForm(
      "service_b1ubp3u",
      "template_7ke8x9c",
      "#contact-form",
      "daEztzKy6NsVQ3T_Q"
    )
    .then(
      () => {
        // Show sent message
        contactMessage.textContent = "Message Sent Successfully ✔";

        // Remove message after 5 seconds
        setTimeout(() => {
          contactMessage.textContent = "";
        }, 5000);

        // Clear input fields
        contactForm.reset();
      },
      () => {
        // Show error message
        contactMessage.textContent = "Message not sent (service error) ❌";
      }
    );
};

contactForm.addEventListener("submit", sendEmail);
