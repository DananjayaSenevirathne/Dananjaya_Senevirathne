import { Github, Linkedin, Mail, Phone, Send } from "lucide-react";

const LINKS = [
  {
    icon: Github,
    href: "https://github.com/DananjayaSenevirathne",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/dananjaya-senevirathne/",
  },
  {
    icon: Mail,
    href: "mailto:dananjayasenevirathne674@gmail.com",
  },
  {
    icon: Phone,
    href: "tel:+94769417133",
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0b0d1f] px-6 py-32 text-white md:px-12 md:py-40"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[var(--signal)]/10 blur-[180px]" />

      <div className="relative z-10 grid items-center gap-20 lg:grid-cols-2">
        {/* LEFT */}
        <div>
          <span className="mb-8 block font-mono text-xs uppercase tracking-[0.3em] text-white/50">
            (09) Contact
          </span>

          <h2 className="max-w-xl text-6xl font-bold leading-[1.05] md:text-8xl">
            Let's build
            <br />
            something
            <br />
            extraordinary.
          </h2>

          <p className="mt-10 max-w-lg text-lg leading-relaxed text-white/60">
            Whether you have a project in mind or just want to say hi,
            I'm always open to discussing new ideas, collaborations,
            and internship opportunities.
          </p>

          <div className="mt-14">
            <h4 className="mb-6 text-xl font-medium">
              Connect
            </h4>

            <div className="flex gap-4">
              {LINKS.map((item, index) => {
                const Icon = item.icon;

                return (
                  <a
                    key={index}
                    href={item.href}
                    className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-black"
                  >
                    <Icon size={22} />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="mt-16 text-white/40">
            Based in Sri Lanka | © 2026 Dananjaya
            Senevirathne
          </div>
        </div>

        {/* RIGHT */}
        <div className="rounded-[40px] border border-white/10 bg-black/20 p-10 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.5)] md:p-14">
          <h3 className="mb-10 text-4xl font-bold">
            Send a Message
          </h3>

          <form className="space-y-8">
            <div>
              <label className="mb-3 block text-white/60">
                Name
              </label>

              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-4 outline-none transition-all focus:border-white/30"
              />
            </div>

            <div>
              <label className="mb-3 block text-white/60">
                Email
              </label>

              <input
                type="email"
                placeholder="your@email.com"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-4 outline-none transition-all focus:border-white/30"
              />
            </div>

            <div>
              <label className="mb-3 block text-white/60">
                Message
              </label>

              <textarea
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-6 py-4 outline-none transition-all focus:border-white/30"
              />
            </div>

            <button
             type="submit"
             className="flex w-full items-center justify-center gap-3 rounded-full bg-[#E63946] py-5 font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-[#D62839]"
            >
             Send Message
             <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}