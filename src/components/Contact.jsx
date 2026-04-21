import "./contact.css";
function Contact() {
  return (
    <>
    <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <p>For inquiries, please contact us </p>
        <form className="contact-form"
        onSubmit={(e) => {
            e.preventDefault();
        alert("Message sent! We will get back to you soon.");
        }}>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>
            <button type="submit">Send Message</button>
        </form>
    </section>
    </>
  );
}

export default Contact;