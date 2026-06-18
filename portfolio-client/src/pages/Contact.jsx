import { useState } from "react";
import { toast } from "react-toastify";
import api from "../api/axios";

const initialForm = { name: "", email: "", subject: "", message: "" };

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);

  const updateField = (event) => setForm({ ...form, [event.target.name]: event.target.value });

  const validate = () => {
    if (Object.values(form).some((value) => !value.trim())) return "All fields are required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return "Enter a valid email address.";
    if (form.message.trim().length < 10) return "Message must be at least 10 characters.";
    return "";
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const error = validate();
    if (error) return toast.error(error);
    setSubmitting(true);
    try {
      await api.post("/contact", form);
      toast.success("Message sent successfully");
      setForm(initialForm);
    } catch (err) {
      toast.error(err.response?.data?.message || "Message could not be sent");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="section page-section contact-layout">
      <div className="section-title">
        <span className="eyebrow">Contact</span>
        <h1>Let's build something useful</h1>
        <p>Send a project note, collaboration idea, or hiring inquiry.</p>
      </div>
      <form className="glass-card form-card" onSubmit={handleSubmit}>
        <input name="name" value={form.name} onChange={updateField} placeholder="Name" />
        <input name="email" value={form.email} onChange={updateField} placeholder="Email" />
        <input name="subject" value={form.subject} onChange={updateField} placeholder="Subject" />
        <textarea name="message" value={form.message} onChange={updateField} placeholder="Message" rows="6" />
        <button className="btn primary" disabled={submitting}>{submitting ? "Sending..." : "Send Message"}</button>
      </form>
    </section>
  );
}

export default Contact;
