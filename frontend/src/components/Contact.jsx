import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', content: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL || ''}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if(data.success) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', content: '' });
      } else {
        setStatus('Failed to send message.');
      }
    } catch(err) {
      console.error(err);
      setStatus('Error sending message.');
    }
  };

  return (
    <>
      <section className="contact-section" id="contact">
        <div className="contact-card">
          <div className="contact-info">
            <h2>Contact & Chat</h2>
            <p>Get in touch with me or chat in real-time. Whether it's a project, job opportunity, or just a chat, feel free to reach out!</p>
            <div className="social-links">
              <a href="https://github.com/RAJA-RAFAY174" className="btn btn-primary"><img src="https://cdn.simpleicons.org/github/white" alt="GitHub" /> GitHub</a>
              <a href="https://www.linkedin.com/in/rafay-ali-40627a367" className="btn btn-primary"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/linkedin.svg" alt="LinkedIn" style={{filter: 'invert(1)'}} /> LinkedIn</a>
              <a href="https://www.instagram.com/rafayali____" className="btn btn-primary"><img src="https://cdn.simpleicons.org/instagram/white" alt="Instagram" /> Instagram</a>
            </div>
            <p className="subscribe-msg">Maybe we won't see each other again. Subscribe so you don't lose me.</p>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Rafay Ali" required />
            </div>
            <div className="input-group">
              <label>Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="rafay@example.com" required />
            </div>
            <div className="input-group">
              <label>Message</label>
              <textarea name="content" value={formData.content} onChange={handleChange} placeholder="Hello, I'd like to talk about..." required></textarea>
            </div>
            <button type="submit" className="btn btn-primary submit-btn">
              {status ? status : 'Send Message'}
            </button>
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <p>© 2026 Rafay. All rights reserved.</p>
      </footer>
    </>
  );
}
