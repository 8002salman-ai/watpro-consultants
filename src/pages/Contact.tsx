import { useState } from 'react';
import { motion } from 'framer-motion';
import { founderProfile } from '../data/watproContent';
import { GlassCard, PageHero, SectionHeading, inputClassName, labelClassName, primaryButtonClass } from '../components/ui';
import { addMessage, addRegistration } from '../utils/store';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay },
});

function ConsultationForm() {
  const [form, setForm] = useState({ name: '', org: '', email: '', phone: '', service: '', message: '' });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    // Validation
    if (!form.name.trim() || !form.email.trim() || !form.service || !form.message.trim()) {
      setError('Please fill in all required fields.');
      return;
    }
    
    try {
      // Store in localStorage
      addMessage({
        fullName: form.name.trim(),
        organization: form.org.trim() || 'N/A',
        email: form.email.trim().toLowerCase(),
        interest: form.service,
        message: form.message.trim(),
      });
      
      // Show success
      setSent(true);
      
      // Reset form
      setForm({ name: '', org: '', email: '', phone: '', service: '', message: '' });
    } catch (err) {
      setError('Failed to submit. Please try again.');
    }
  };

  if (sent) {
    return (
      <div className="text-center py-12">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="text-xl font-bold text-white mb-2">Message Received</h3>
        <p className="text-slate-400 mb-4">Thank you! Our team will respond to your enquiry at <strong>info@watproconsultants.com</strong> within 24 hours.</p>
        <button onClick={() => setSent(false)} className="text-amber-400 hover:text-amber-300 text-sm font-semibold underline">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {error && (
        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 text-sm text-red-300">
          {error}
        </div>
      )}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClassName}>Full Name *</label>
          <input required className={inputClassName} placeholder="Dr. / Mr. / Ms. ..." value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
        </div>
        <div>
          <label className={labelClassName}>Company / Organisation</label>
          <input className={inputClassName} placeholder="Ministry / Company" value={form.org} onChange={e => setForm({ ...form, org: e.target.value })} />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClassName}>Email Address *</label>
          <input required type="email" className={inputClassName} placeholder="you@example.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
        </div>
        <div>
          <label className={labelClassName}>Phone Number</label>
          <input type="tel" className={inputClassName} placeholder="+92 ..." value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
        </div>
      </div>
      <div>
        <label className={labelClassName}>Service Required *</label>
        <select required className={inputClassName + ' bg-[#0a1728]'} value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}>
          <option value="">Select a service...</option>
          <option>PPP Advisory</option>
          <option>Project Management Consulting</option>
          <option>Procurement & Contract Management</option>
          <option>Infrastructure Development & Planning</option>
          <option>Sustainable Development Consulting</option>
          <option>Defence Acquisition Advisory</option>
          <option>Policy Development & Regulatory Reform</option>
          <option>Training & Capacity Building</option>
          <option>Other / Multiple Services</option>
        </select>
      </div>
      <div>
        <label className={labelClassName}>Your Message *</label>
        <textarea required rows={5} className={inputClassName + ' resize-none'} placeholder="Briefly describe your project, challenge, or requirements..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
      </div>
      <button type="submit" className={primaryButtonClass + ' w-full justify-center py-3.5 text-base'}>
        Send Enquiry to info@watproconsultants.com
      </button>
    </form>
  );
}

function TrainingForm() {
  const [form, setForm] = useState({ name: '', org: '', email: '', programme: '', participants: '', delivery: '', notes: '' });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    // Validation
    if (!form.name.trim() || !form.org.trim() || !form.email.trim() || !form.programme) {
      setError('Please fill in all required fields.');
      return;
    }
    
    try {
      // Store in localStorage
      addRegistration({
        fullName: form.name.trim(),
        organization: form.org.trim(),
        email: form.email.trim().toLowerCase(),
        phone: '',
        seats: form.participants || '1',
        program: form.programme,
        notes: form.notes.trim(),
      });
      
      // Show success
      setSent(true);
      
      // Reset form
      setForm({ name: '', org: '', email: '', programme: '', participants: '', delivery: '', notes: '' });
    } catch (err) {
      setError('Failed to submit. Please try again.');
    }
  };

  if (sent) {
    return (
      <div className="text-center py-12">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="text-xl font-bold text-white mb-2">Training Enquiry Received</h3>
        <p className="text-slate-400 mb-4">Thank you! Our Academy team will contact you at <strong>info@watproconsultants.com</strong> within 48 hours.</p>
        <button onClick={() => setSent(false)} className="text-amber-400 hover:text-amber-300 text-sm font-semibold underline">
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {error && (
        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 text-sm text-red-300">
          {error}
        </div>
      )}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClassName}>Contact Name *</label>
          <input required className={inputClassName} placeholder="Your name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
        </div>
        <div>
          <label className={labelClassName}>Organisation *</label>
          <input required className={inputClassName} placeholder="Ministry / Dept / Company" value={form.org} onChange={e => setForm({ ...form, org: e.target.value })} />
        </div>
      </div>
      <div>
        <label className={labelClassName}>Email Address *</label>
        <input required type="email" className={inputClassName} placeholder="you@example.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
      </div>
      <div>
        <label className={labelClassName}>Programme Interest *</label>
        <select required className={inputClassName + ' bg-[#0a1728]'} value={form.programme} onChange={e => setForm({ ...form, programme: e.target.value })}>
          <option value="">Select programme...</option>
          <option>PPP Foundation Programme</option>
          <option>PPP Professional Certificate</option>
          <option>Project Management Professional Programme</option>
          <option>Risk & Quality Management</option>
          <option>Procurement & Contract Management Masterclass</option>
          <option>System Acquisition Process (SAP)</option>
          <option>Custom / Bespoke Programme</option>
        </select>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClassName}>No. of Participants</label>
          <input type="number" min="1" className={inputClassName} placeholder="e.g. 20" value={form.participants} onChange={e => setForm({ ...form, participants: e.target.value })} />
        </div>
        <div>
          <label className={labelClassName}>Preferred Delivery</label>
          <select className={inputClassName + ' bg-[#0a1728]'} value={form.delivery} onChange={e => setForm({ ...form, delivery: e.target.value })}>
            <option value="">Select...</option>
            <option>In-Person (Islamabad)</option>
            <option>In-Person (Lahore)</option>
            <option>In-Person (Karachi)</option>
            <option>In-House at My Location</option>
            <option>Virtual / Online</option>
          </select>
        </div>
      </div>
      <div>
        <label className={labelClassName}>Additional Notes</label>
        <textarea rows={3} className={inputClassName + ' resize-none'} placeholder="Preferred dates, specific topics, or any customisation needs..." value={form.notes} onChange={e => setForm({ ...form, notes: e.target.value })} />
      </div>
      <button type="submit" className={primaryButtonClass + ' w-full justify-center py-3.5 text-base'}>
        Submit Training Enquiry
      </button>
    </form>
  );
}

export default function Contact() {
  const [activeTab, setActiveTab] = useState<'consultation' | 'training'>('consultation');

  return (
    <div style={{ background: '#07111e' }}>
      <PageHero
        eyebrow="Contact WATPRO"
        title="Let's Start the Conversation"
        subtitle="Whether you need advisory, training, or policy support — every engagement begins with a conversation. Reach out directly to Dr. Tipu."
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10">

            {/* Contact info */}
            <div className="md:col-span-1">
              <motion.div {...fadeUp(0)} className="flex flex-col gap-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-4">Direct Contact</p>
                  {[
                    { icon: '📧', label: 'Email', value: founderProfile.email, href: `mailto:${founderProfile.email}` },
                    { icon: '📞', label: 'Phone / WhatsApp', value: founderProfile.phone, href: `tel:${founderProfile.phone}` },
                    { icon: '📍', label: 'Location', value: 'Islamabad, Pakistan', href: null },
                  ].map(c => (
                    <div key={c.label} className="flex items-start gap-3 p-4 mb-3 rounded-xl border border-white/8 bg-white/[0.04]">
                      <span className="text-xl flex-shrink-0">{c.icon}</span>
                      <div>
                        <p className="text-xs text-slate-500 uppercase tracking-wider mb-0.5">{c.label}</p>
                        {c.href ? (
                          <a href={c.href} className="text-sm font-semibold text-white hover:text-amber-400 transition-colors">{c.value}</a>
                        ) : (
                          <p className="text-sm font-semibold text-white">{c.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <GlassCard premium className="p-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3">Connect Online</p>
                  <div className="flex flex-col gap-2">
                    <a href={founderProfile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-slate-300 hover:text-amber-400 transition-colors">
                      <span className="w-7 h-7 rounded bg-white/5 border border-white/10 flex items-center justify-center text-xs font-bold">in</span>
                      LinkedIn Profile
                    </a>
                    <a href={founderProfile.scholar} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-slate-300 hover:text-amber-400 transition-colors">
                      <span className="w-7 h-7 rounded bg-white/5 border border-white/10 flex items-center justify-center text-xs font-bold">GS</span>
                      Google Scholar
                    </a>
                  </div>
                </GlassCard>

                <GlassCard className="p-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-2">Response Time</p>
                  <p className="text-sm text-slate-300">Consultations: within 24 hrs<br />Training enquiries: within 48 hrs</p>
                </GlassCard>
              </motion.div>
            </div>

            {/* Forms */}
            <div className="md:col-span-2">
              <motion.div {...fadeUp(0.1)}>
                {/* Tab switcher */}
                <div className="flex gap-1 p-1 rounded-xl border border-white/10 bg-white/[0.04] mb-6 w-fit">
                  {[
                    { key: 'consultation', label: 'Request Consultation' },
                    { key: 'training', label: 'Training Enquiry' },
                  ].map(tab => (
                    <button
                      key={tab.key}
                      onClick={() => setActiveTab(tab.key as 'consultation' | 'training')}
                      className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                        activeTab === tab.key
                          ? 'bg-amber-400 text-slate-900 shadow-lg'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                <GlassCard premium className="p-8">
                  {activeTab === 'consultation' ? (
                    <>
                      <SectionHeading
                        eyebrow="Consulting Enquiry"
                        title="Book a Discovery Consultation"
                      />
                      <p className="text-slate-400 text-sm mb-6">
                        Tell us about your project or challenge. Dr. Tipu will review your brief and
                        suggest the most appropriate advisory approach.
                      </p>
                      <ConsultationForm />
                    </>
                  ) : (
                    <>
                      <SectionHeading
                        eyebrow="Academy Enquiry"
                        title="Register Interest in Training"
                      />
                      <p className="text-slate-400 text-sm mb-6">
                        Interested in open-enrolment or in-house training? Complete this form and the
                        WATPRO Academy team will send you a detailed programme outline and pricing.
                      </p>
                      <TrainingForm />
                    </>
                  )}
                </GlassCard>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
