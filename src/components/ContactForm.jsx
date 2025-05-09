// src/components/ContactForm.jsx
const ContactForm = () => (
  <section className="contact-form" id="contact">
    <h2>Contact Us</h2>
    <form>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" required />
      </div>
      <div className="form-group">
        <label htmlFor="company">Company</label>
        <input type="text" id="company" required />
      </div>
      <div className="form-group">
        <label htmlFor="license">License Type</label>
        <select id="license" required>
          <option value="software">Software</option>
          <option value="tool">Tool</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea id="message" required></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  </section>
);

export default ContactForm;
