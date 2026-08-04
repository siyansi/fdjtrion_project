// "use client";

// import { useState } from "react";
// import * as motion from "framer-motion/client"; // Next.js 15+ compatible client wrapper
// import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
// import  PageShell  from "@/pages/hero";

// const offices = [
//   { city: "Bengaluru", addr: "Level 4, Prestige Tech Park, Sarjapur Rd, Bengaluru 560103", phone: "+91 80 4000 1234" },
//   { city: "Mumbai", addr: "Unit 902, Nirlon Knowledge Park, Goregaon East, Mumbai 400063", phone: "+91 22 4200 5678" },
//   { city: "Delhi NCR", addr: "Tower B, DLF Cyber City, Sector 25, Gurugram 122002", phone: "+91 124 500 4321" },
// ];

// export default function ContactPage() {
//   const [sent, setSent] = useState(false);
//   return (
//     <>
//       {/* Inline Metadata Handling for "use client" Pages */}
//       <title>Contact — JAS geomatics  India | Book a Demo</title>
//       <meta name="description" content="Talk to JAS geomatics  India — book a demo, request a quote, or connect with our team in Delhi, Mumbai and Bengaluru." />

//       <PageShell
//         eyebrow="Say hello"
//         title={<>Let's build the <span className="text-gradient">next scan</span> together.</>}
//         subtitle="Book a live demo, request pricing, or ask us anything about deploying Trion in your workflow."
//       >
//         <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
//           <motion.form
//             onSubmit={(e) => { e.preventDefault(); setSent(true); }}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="glass-strong rounded-3xl p-8 space-y-5"
//           >
//             <div className="grid gap-5 sm:grid-cols-2">
//               <Field label="Full name" placeholder="Aarav Sharma" />
//               <Field label="Company" placeholder="Bharat Surveys Pvt Ltd" />
//               <Field label="Work email" type="email" placeholder="you@company.in" />
//               <Field label="Phone" placeholder="+91 98xxx xxxxx" />
//             </div>
//             <div>
//               <label className="text-xs uppercase tracking-widest text-muted-foreground">Interested in</label>
//               <select className="mt-2 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand/50">
//                 <option>LiDAR Scanners</option>
//                 <option>GNSS Systems</option>
//                 <option>Machine Guidance</option>
//                 <option>Software & SDK</option>
//                 <option>Not sure yet</option>
//               </select>
//             </div>
//             <div>
//               <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
//               <textarea
//                 rows={4}
//                 placeholder="Tell us about your project…"
//                 className="mt-2 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand/50"
//               />
//             </div>
//             <motion.button
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               type="submit"
//               className="inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-brand)] px-7 py-3 font-medium text-background hover:glow-brand transition"
//             >
//               {sent ? "Thanks — we'll be in touch" : "Send message"}
//               <ArrowUpRight className="h-4 w-4" />
//             </motion.button>
//           </motion.form>

//           <div className="space-y-6">
//             <div className="glass rounded-3xl p-6">
//               <div className="flex items-center gap-3 text-brand">
//                 <Mail className="h-5 w-5" />
//                 <span className="text-xs uppercase tracking-widest">Email</span>
//               </div>
//               <div className="mt-3 font-display text-2xl">hello@jasgeomatrcs.in</div>
//             </div>
//             <div className="glass rounded-3xl p-6">
//               <div className="flex items-center gap-3 text-brand">
//                 <Phone className="h-5 w-5" />
//                 <span className="text-xs uppercase tracking-widest">Sales</span>
//               </div>
//               <div className="mt-3 font-display text-2xl">1800-121-TRION</div>
//             </div>
//             <div className="grid gap-4">
//               {offices.map((o, i) => (
//                 <motion.div
//                   key={o.city}
//                   initial={{ opacity: 0, x: 20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: i * 0.08 }}
//                   className="glass rounded-2xl p-5 hover:glass-strong transition"
//                 >
//                   <div className="flex items-start gap-3">
//                     <MapPin className="mt-1 h-4 w-4 text-brand shrink-0" />
//                     <div>
//                       <div className="font-display font-semibold">{o.city}</div>
//                       <div className="mt-1 text-sm text-muted-foreground">{o.addr}</div>
//                       <div className="mt-2 text-sm text-brand">{o.phone}</div>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </PageShell>
//     </>
//   );
// }

// function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
//   return (
//     <div>
//       <label className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
//       <input
//         {...rest}
//         className="mt-2 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand/50 placeholder:text-muted-foreground/50"
//       />
//     </div>
//   );
// }


"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Phone, Copy, Check, Send, Sparkles, MessageSquare, CheckCircle2, X } from "lucide-react";
import { useState } from "react";

// Full list of products extracted from your reference list
const PRODUCT_LIST = [
  "FJD Trion V1 Series RTK Rover",
  "FJD Trion DC100 3D Dozer Automatic Control System",
  "FJD Trion EC100 Excavator Guidance System",
  "FJD Trion EG10 Excavator Guidance System",
  "FJD Trion GC100 3D Grader Automatic Control System",
  "FJD Trion GC100L 3D Grader Automatic Guidance System",
  "FJD Trion N10 CORS System",
  "FJD Trion SG10 Snow Removal Guidance System",
  "FJD Trion Survey",
  "FJD Trion V1 Rover Station",
  "FJD Trion V10a Rover Station",
  "FJD Trion V10i Rover Station",
  "FJD Trion V10L Rover Station",
  "FJD Trion V1t Base Station",
  "FJD Trion V1t Rover Station",
  "FJD Trion P2 LiDAR Scanner",
  "FJD Trion S2 LiDAR Scanner",
  "FJD Trion Model Point Cloud Processing Software",
  "FJD Trion P1 LiDAR Scanner",
  "FJD Trion S1 3D LiDAR Scanner",
];

export default function ContactPage() {
  const [copied, setCopied] = useState<string | null>(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    country: "India",
    category: "All Categories",
    selectedProduct: PRODUCT_LIST[0],
    message: "",
  });

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Send payload directly via Mailto link to jasgeomatics2026@gmail.com
    const subject = encodeURIComponent(`Product Inquiry: ${formData.selectedProduct} - ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nCountry: ${formData.country}\nCategory: ${formData.category}\nSelected Product: ${formData.selectedProduct}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:siyansimon246@gmail.com?subject=${subject}&body=${body}`;
    
    // Show smooth animated confirmation modal
    setShowSuccessModal(true);
  };

  const contactDetails = [
    {
      id: "address",
      title: "Visit Our Office",
      emoji: "📍",
      value: "Shop # 61-B2, First Floor, DKG Complex, Salai Vinayagar St, next to DAWN SHIKSHALAYA PUBLIC SCHOOL, Gandhi Nagar, Dharmapuri, Tamil Nadu 636701",
      icon: MapPin,
      gradient: "from-cyan-500/20 via-blue-500/20 to-indigo-500/20",
      borderHover: "group-hover:border-cyan-400/50",
      glowColor: "group-hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]",
    },
    {
      id: "phone",
      title: "Call / WhatsApp",
      emoji: "📞",
      value: "+91 91507 64647",
      href: "tel:+919150764647",
      icon: Phone,
      gradient: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
      borderHover: "group-hover:border-emerald-400/50",
      glowColor: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]",
    },
    {
      id: "email",
      title: "Email Us",
      emoji: "✉️",
      value: "jasgeomatics2026@gmail.com",
      href: "mailto:jasgeomatics2026@gmail.com",
      icon: Mail,
      gradient: "from-purple-500/20 via-fuchsia-500/20 to-pink-500/20",
      borderHover: "group-hover:border-fuchsia-400/50",
      glowColor: "group-hover:shadow-[0_0_30px_rgba(217,70,239,0.3)]",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#060913] text-white overflow-hidden py-20 px-6">
      {/* Background Lighting & Glows */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-gradient-to-r from-cyan-500/15 via-purple-500/15 to-blue-500/15 blur-[140px]" />
        <div className="absolute inset-0 bg-grid opacity-20" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-md text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Sparkles className="h-4 w-4 text-cyan-400 animate-pulse" />
            Get In Touch
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-bold tracking-tight"
          >
            Let's Start Your <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500 bg-clip-text text-transparent">Project</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-gray-400 text-lg"
          >
            Select products and submit your inquiry to jasgeomatics2026@gmail.com.
          </motion.p>
        </div>

        {/* Info Cards */}
        <div className="grid gap-6 md:grid-cols-3 mb-16">
          {contactDetails.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative"
              >
                <div
                  className={`h-full flex flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 transition-all duration-500 hover:-translate-y-2 ${item.borderHover} ${item.glowColor}`}
                >
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${item.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100 -z-10`} />

                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-cyan-400">
                          <Icon className="h-6 w-6" />
                        </div>
                        <h3 className="font-semibold text-lg text-white">{item.title}</h3>
                      </div>

                      <motion.span
                        className="text-3xl inline-block cursor-pointer select-none"
                        whileHover={{ scale: 1.4, rotate: [0, -15, 15, -10, 0] }}
                        transition={{ duration: 0.4 }}
                      >
                        {item.emoji}
                      </motion.span>
                    </div>

                    <p className="text-gray-300 text-sm leading-relaxed mb-6">
                      {item.value}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                    {item.href && (
                      <a
                        href={item.href}
                        className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500/20 border border-cyan-500/30 px-4 py-2.5 text-xs font-semibold text-cyan-300 transition-all hover:bg-cyan-500 hover:text-black"
                      >
                        <span>Connect Directly</span>
                      </a>
                    )}

                    <button
                      onClick={() => copyToClipboard(item.value, item.id)}
                      className="inline-flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-4 py-2.5 text-xs font-semibold text-gray-300 transition-all hover:bg-white/15 hover:text-white"
                      title="Copy to clipboard"
                    >
                      {copied === item.id ? (
                        <>
                          <Check className="h-4 w-4 text-emerald-400" />
                          <span className="text-emerald-400">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Contact Form & Map */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-2xl p-8 sm:p-10 relative overflow-hidden"
          >
            <div className="flex items-center gap-3 mb-6">
              <MessageSquare className="h-6 w-6 text-cyan-400" />
              <h2 className="text-2xl font-bold">Product Inquiry Form</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Name"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-all focus:border-cyan-400 focus:bg-white/10 focus:ring-2 focus:ring-cyan-400/20"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 91507 64647"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-all focus:border-cyan-400 focus:bg-white/10 focus:ring-2 focus:ring-cyan-400/20"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-all focus:border-cyan-400 focus:bg-white/10 focus:ring-2 focus:ring-cyan-400/20"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">
                    Country *
                  </label>
                  <select
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full rounded-2xl border border-white/10 bg-[#0e1322] px-4 py-3 text-sm text-white outline-none transition-all focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                  >
                    <option value="India">India</option>
                    <option value="United States">United States</option>
                    <option value="United Arab Emirates">United Arab Emirates</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* Product Category Dropdown */}
              <div>
                <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">
                  Products *
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full rounded-2xl border border-white/10 bg-[#0e1322] px-4 py-3 text-sm text-white outline-none transition-all focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 mb-3"
                >
                  <option value="All Categories">All Categories</option>
                  <option value="RTK Rovers & Stations">RTK Rovers & Stations</option>
                  <option value="3D Machine Control Systems">3D Machine Control Systems</option>
                  <option value="LiDAR Scanners">LiDAR Scanners</option>
                  <option value="Software Solutions">Software Solutions</option>
                </select>

                {/* All Products List Dropdown matching screenshot */}
                <select
                  value={formData.selectedProduct}
                  onChange={(e) => setFormData({ ...formData, selectedProduct: e.target.value })}
                  className="w-full rounded-2xl border border-white/10 bg-[#0e1322] px-4 py-3 text-sm text-white outline-none transition-all focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 max-h-48 overflow-y-auto"
                >
                  {PRODUCT_LIST.map((product, idx) => (
                    <option key={idx} value={product} className="py-2 bg-[#0e1322] text-white">
                      {product}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">
                  Messages
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your requirement..."
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-all focus:border-cyan-400 focus:bg-white/10 focus:ring-2 focus:ring-cyan-400/20 resize-none"
                />
              </div>

              <button
                type="submit"
                className="group relative w-full inline-flex items-center cursor-pointer justify-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-500 via-sky-400 to-blue-600 px-8 py-4 text-sm font-bold text-white shadow-[0_10px_30px_rgba(6,182,212,0.3)] transition-all hover:scale-[1.02] hover:shadow-[0_15px_40px_rgba(6,182,212,0.5)]"
              >
                <span>Submit & Send Email</span>
                <Send className="h-4 w-4 transition-transform duration-300  group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </form>
          </motion.div>

          {/* Map Location */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 h-full min-h-[400px] rounded-3xl border border-white/10 overflow-hidden relative group"
          >
            <iframe
              title="Office Location"
              src="https://maps.google.com/maps?q=Gandhi%20Nagar%20Dharmapuri%20Dawn%20Shikshalaya%20Public%20School&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[560px] filter grayscale contrast-125 opacity-80 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>

      {/* Submission Success Confirmation Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-md w-full rounded-3xl border border-cyan-500/30 bg-[#090d1a] p-8 text-center shadow-[0_0_50px_rgba(6,182,212,0.3)]"
            >
              <button
                onClick={() => setShowSuccessModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-cyan-500/20 border border-cyan-400 text-cyan-400 mb-4 animate-bounce">
                <CheckCircle2 className="h-8 w-8" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">Email Sent Successfully! 🎉</h3>
              <p className="text-gray-300 text-sm mb-6">
                Your request regarding <span className="text-cyan-400 font-semibold">{formData.selectedProduct}</span> has been processed and forwarded to <span className="text-cyan-400">jasgeomatics2026@gmail.com</span>.
              </p>

              <button
                onClick={() => setShowSuccessModal(false)}
                className="w-full rounded-xl bg-cyan-500 py-3 font-semibold text-black transition-all hover:bg-cyan-400"
              >
                Done
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}