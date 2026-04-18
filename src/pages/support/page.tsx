import {
  ChevronRight,
  Facebook,
  Mail,
  MessageCircle,
  Phone,
  RefreshCcw,
  Search,
  ShieldCheck,
  Store,
  User,
  Verified,
  Wallet,
} from "lucide-react";

const SupportPage = () => {
  return (
    <main>
      <section className="relative pt-14 pb-32 hero-gradient">
        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Support Center
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-on-surface mb-10 leading-[1.1]">
            How can we help <br />
            <span className="text-primary">you today?</span>
          </h1>
          <div className="max-w-3xl">
            <div className="relative group">
              <div className="absolute -inset-1 bg-primary rounded-[2.5rem] blur opacity-20 group-focus-within:opacity-40 transition duration-1000 group-focus-within:duration-200"></div>
              <div className="relative flex items-center bg-surface-container-lowest rounded-[2rem] shadow-xl overflow-hidden p-2">
                <span className="material-symbols-outlined ml-6 text-outline group-focus-within:text-primary transition-colors text-2xl">
                  <Search className="h-5 w-5" />
                </span>
                <input
                  className="flex-1 py-5 pl-4 pr-6 bg-transparent border-none focus:ring-0 text-xl font-medium placeholder:text-outline/50"
                  placeholder="Search articles, guides, or keywords..."
                  type="text"
                />
                <button className="bg-primary text-white px-8 py-4 rounded-[1.5rem] font-bold shadow-lg shadow-primary/25 hover:bg-on-primary-fixed-variant transition-all active:scale-95">
                  Search
                </button>
              </div>
            </div>
            <div className="mt-8 flex gap-4 flex-wrap items-center justify-center md:justify-start">
              <span className="text-sm text-on-surface-variant font-semibold">
                Popular searches:
              </span>
              <div className="flex flex-wrap gap-2">
                <a
                  className="px-4 py-2 rounded-full bg-surface-container-high/50 hover:bg-primary/10 text-on-surface-variant hover:text-primary transition-all text-xs font-bold border border-transparent hover:border-primary/20"
                  href="#"
                >
                  Reset Password
                </a>
                <a
                  className="px-4 py-2 rounded-full bg-surface-container-high/50 hover:bg-primary/10 text-on-surface-variant hover:text-primary transition-all text-xs font-bold border border-transparent hover:border-primary/20"
                  href="#"
                >
                  Transaction Limit
                </a>
                <a
                  className="px-4 py-2 rounded-full bg-surface-container-high/50 hover:bg-primary/10 text-on-surface-variant hover:text-primary transition-all text-xs font-bold border border-transparent hover:border-primary/20"
                  href="#"
                >
                  New Card
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-6 -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="support-card bg-surface-container-lowest p-8 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_25px_60px_rgba(46,91,255,0.12)] transition-all duration-500 flex flex-col items-start border border-outline-variant/20">
            <div className="icon-box w-16 h-16 rounded-[1.25rem] bg-primary/10 flex items-center justify-center text-primary mb-8 transition-transform duration-500">
              <span className="material-symbols-outlined text-3xl">
                <MessageCircle className="h-6 w-6" />
              </span>
            </div>
            <h3 className="text-2xl font-extrabold mb-3">Live Chat</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-8 flex-1">
              Instant support from our concierge team, available around the
              clock.
            </p>
            <button className="w-full py-4 bg-primary text-white rounded-2xl font-bold text-sm hover:translate-y-[-2px] hover:shadow-lg hover:shadow-primary/30 transition-all active:scale-95">
              Start Chat
            </button>
          </div>
          <div className="support-card bg-surface-container-lowest p-8 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_25px_60px_rgba(46,91,255,0.12)] transition-all duration-500 flex flex-col items-start border border-outline-variant/20">
            <div className="icon-box w-16 h-16 rounded-[1.25rem] bg-secondary-container/50 flex items-center justify-center text-secondary mb-8 transition-transform duration-500">
              <span className="material-symbols-outlined text-3xl">
                <Mail className="h-6 w-6" />
              </span>
            </div>
            <h3 className="text-2xl font-extrabold mb-3">Email Us</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-8 flex-1">
              Get detailed assistance within 24 hours from our specialists.
            </p>
            <button className="w-full py-4 bg-surface-container-high text-on-surface font-bold text-sm rounded-2xl hover:bg-outline-variant transition-all">
              Send Email
            </button>
          </div>
          <div className="support-card bg-surface-container-lowest p-8 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_25px_60px_rgba(46,91,255,0.12)] transition-all duration-500 flex flex-col items-start border border-outline-variant/20">
            <div className="icon-box w-16 h-16 rounded-[1.25rem] bg-tertiary/10 flex items-center justify-center text-tertiary mb-8 transition-transform duration-500">
              <span className="material-symbols-outlined text-3xl">
                <Phone className="h-6 w-6" />
              </span>
            </div>
            <h3 className="text-2xl font-extrabold mb-3">Phone Line</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-8 flex-1">
              Prefer to talk? Call our dedicated priority line for quick
              resolution.
            </p>
            <button className="w-full py-4 bg-surface-container-high text-on-surface font-bold text-sm rounded-2xl hover:bg-outline-variant transition-all">
              Call now
            </button>
          </div>
          <div className="support-card bg-surface-container-lowest p-8 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_25px_60px_rgba(46,91,255,0.12)] transition-all duration-500 flex flex-col items-start border border-outline-variant/20">
            <div className="icon-box w-16 h-16 rounded-[1.25rem] bg-primary-container/20 flex items-center justify-center text-primary-container mb-8 transition-transform duration-500">
              <span className="material-symbols-outlined text-3xl">
                <Facebook className="h-6 w-6" />
              </span>
            </div>
            <h3 className="text-2xl font-extrabold mb-3">Community</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-8 flex-1">
              Follow us for updates or message us on your favorite platform.
            </p>
            <div className="flex gap-3 w-full">
              <button className="w-full py-4 bg-surface-container-high text-on-surface font-bold text-sm rounded-2xl hover:bg-outline-variant transition-all">
                Follow us
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-32 max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-extrabold tracking-tight mb-4">
              Popular Help Topics
            </h2>
            <p className="text-on-surface-variant text-lg max-w-lg">
              Everything you need to know about managing your VaultPay
              experience efficiently.
            </p>
          </div>
          <a
            className="group flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
            href="#"
          >
            Browse all documentation{" "}
            <span className="material-symbols-outlined">
              <ChevronRight className="h-5 w-5" />
            </span>
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          <a
            className="group flex flex-col items-center justify-center p-10 bg-surface-container-low rounded-[2.5rem] text-center hover:bg-primary hover:scale-[1.02] hover:-translate-y-2 transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-primary/20"
            href="#"
          >
            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
              <span className="material-symbols-outlined text-3xl text-primary group-hover:text-white">
                <User className="h-6 w-6" />
              </span>
            </div>
            <span className="font-bold text-sm tracking-tight group-hover:text-white transition-colors">
              Account Access
            </span>
          </a>
          <a
            className="group flex flex-col items-center justify-center p-10 bg-surface-container-low rounded-[2.5rem] text-center hover:bg-primary hover:scale-[1.02] hover:-translate-y-2 transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-primary/20"
            href="#"
          >
            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
              <span className="material-symbols-outlined text-3xl text-primary group-hover:text-white">
                <RefreshCcw className="h-6 w-6" />
              </span>
            </div>
            <span className="font-bold text-sm tracking-tight group-hover:text-white transition-colors">
              Transaction Issues
            </span>
          </a>
          <a
            className="group flex flex-col items-center justify-center p-10 bg-surface-container-low rounded-[2.5rem] text-center hover:bg-primary hover:scale-[1.02] hover:-translate-y-2 transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-primary/20"
            href="#"
          >
            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
              <span className="material-symbols-outlined text-3xl text-primary group-hover:text-white">
                <Verified className="h-6 w-6" />
              </span>
            </div>
            <span className="font-bold text-sm tracking-tight group-hover:text-white transition-colors">
              KYC Verification
            </span>
          </a>
          <a
            className="group flex flex-col items-center justify-center p-10 bg-surface-container-low rounded-[2.5rem] text-center hover:bg-primary hover:scale-[1.02] hover:-translate-y-2 transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-primary/20"
            href="#"
          >
            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
              <span className="material-symbols-outlined text-3xl text-primary group-hover:text-white">
                <Wallet className="h-6 w-6" />
              </span>
            </div>
            <span className="font-bold text-sm tracking-tight group-hover:text-white transition-colors">
              Wallet Limits
            </span>
          </a>
          <a
            className="group flex flex-col items-center justify-center p-10 bg-surface-container-low rounded-[2.5rem] text-center hover:bg-primary hover:scale-[1.02] hover:-translate-y-2 transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-primary/20"
            href="#"
          >
            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
              <span className="material-symbols-outlined text-3xl text-primary group-hover:text-white">
                <ShieldCheck className="h-6 w-6" />
              </span>
            </div>
            <span className="font-bold text-sm tracking-tight group-hover:text-white transition-colors">
              Security Concerns
            </span>
          </a>
          <a
            className="group flex flex-col items-center justify-center p-10 bg-surface-container-low rounded-[2.5rem] text-center hover:bg-primary hover:scale-[1.02] hover:-translate-y-2 transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-primary/20"
            href="#"
          >
            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
              <span className="material-symbols-outlined text-3xl text-primary group-hover:text-white">
                <Store className="h-6 w-6" />
              </span>
            </div>
            <span className="font-bold text-sm tracking-tight group-hover:text-white transition-colors">
              Merchant Payments
            </span>
          </a>
        </div>
      </section>

      <section className="py-32 max-w-6xl mx-auto px-6">
        <div className="relative bg-primary rounded-[3rem] p-12 md:p-24 overflow-hidden text-center">
          <div className="relative z-10">
            <div className="inline-block px-5 py-2 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-widest mb-8 border border-white/20">
              Stay Secure
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Protect your vault with <br />
              regular security updates.
            </h2>
            <p className="text-blue-100 max-w-xl mx-auto mb-12 text-lg">
              We never ask for your PIN or password via email. Subscribe for the
              latest security alerts and best practices for e-wallet safety.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto bg-white/10 p-2 rounded-[2rem] border border-white/20 backdrop-blur-sm">
              <input
                className="flex-1 bg-transparent border-none px-6 py-4 focus:ring-0 text-white placeholder:text-blue-200"
                placeholder="Enter your email"
                required
                type="email"
              />
              <button className="bg-white text-primary font-bold py-4 px-10 rounded-[1.5rem] hover:bg-blue-50 transition-all shadow-xl shadow-black/10 active:scale-95">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SupportPage;
