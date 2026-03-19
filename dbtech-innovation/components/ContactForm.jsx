"use client";

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const body = `Nom: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
    window.location.href = `mailto:services@dbtech-innovation.com?subject=${subject || 'Contact depuis le site Web'}&body=${body}`;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="reveal scale-in glass-panel" style={{ padding: '48px', borderRadius: 'var(--radius-xl)' }}>
      <h3 className="text-2xl" style={{ marginBottom: '24px' }}>Envoyez-nous un message</h3>
      <form 
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '20px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label htmlFor="name" style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--ink-soft)' }}>Nom complet</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required 
              value={formData.name}
              onChange={handleChange}
              style={{ padding: '14px 16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--line)', outline: 'none', background: 'var(--bg-soft)', fontSize: '1rem', transition: 'border-color 0.2s' }} 
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label htmlFor="email" style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--ink-soft)' }}>Adresse Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required 
              value={formData.email}
              onChange={handleChange}
              style={{ padding: '14px 16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--line)', outline: 'none', background: 'var(--bg-soft)', fontSize: '1rem', transition: 'border-color 0.2s' }} 
            />
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <label htmlFor="subject" style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--ink-soft)' }}>Sujet du message</label>
          <input 
            type="text" 
            id="subject" 
            name="subject" 
            required 
            value={formData.subject}
            onChange={handleChange}
            style={{ padding: '14px 16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--line)', outline: 'none', background: 'var(--bg-soft)', fontSize: '1rem', transition: 'border-color 0.2s' }} 
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <label htmlFor="message" style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--ink-soft)' }}>Votre Message</label>
          <textarea 
            id="message" 
            name="message" 
            rows={5} 
            required 
            value={formData.message}
            onChange={handleChange}
            style={{ padding: '14px 16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--line)', outline: 'none', background: 'var(--bg-soft)', fontSize: '1rem', resize: 'vertical', transition: 'border-color 0.2s' }}
          ></textarea>
        </div>

        <button type="submit" className="btn btn--primary btn--large" style={{ width: '100%', marginTop: '8px', padding: '16px', fontSize: '1.0625rem' }}>
          Envoyer le message
        </button>
      </form>
    </div>
  );
}
