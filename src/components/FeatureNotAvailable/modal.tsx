import { BellRing, Hammer, Rocket } from "lucide-react";
import { useEffect } from "react";

interface FeatureTypes {
  isOpen: Boolean;
  onClose: () => void;
  onNotify: () => void;
}

const FeatureNotAvailableModal = ({
  isOpen,
  onClose,
  onNotify,
}: FeatureTypes) => {
  useEffect(() => {
    const handleEsc = (e: any) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
    }

    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[60] bg-on-background/10 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-surface-container-lowest max-w-md w-full rounded-[2rem] p-8 md:p-12 shadow-[0_32px_64px_-12px_rgba(0,64,224,0.12)] relative overflow-hidden text-center">
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="relative mb-10 inline-flex items-center justify-center">
          <div className="absolute inset-0 bg-primary/10 rounded-full scale-150 blur-xl"></div>
          <div className="relative bg-primary w-24 h-24 rounded-3xl rotate-12 flex items-center justify-center shadow-lg">
            <span
              className="material-symbols-outlined text-white text-5xl -rotate-12"
              data-weight="fill"
            >
              <Rocket className="h-10 w-10" />
            </span>
          </div>
          <div className="absolute -top-2 -right-4 bg-tertiary-container text-white px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">
            Coming Soon
          </div>
          <div className="absolute bottom-0 -left-6 bg-surface-container-high p-2 rounded-xl shadow-sm">
            <span className="material-symbols-outlined text-primary text-xl">
              <Hammer className="h-6 w-6" />
            </span>
          </div>
        </div>
        <div className="space-y-4 relative z-10">
          <h2 className="text-3xl font-extrabold tracking-tight text-on-surface headline-sm">
            Exciting Things Are Coming
          </h2>
          <p className="text-on-surface-variant body-lg leading-relaxed px-2">
            We're currently building this feature to enhance your e-wallet
            experience. Stay tuned!
          </p>
        </div>
        <div className="mt-10 space-y-3 relative z-10">
          <button
            onClick={onNotify}
            className="w-full py-4 bg-primary text-on-primary font-bold rounded-xl shadow-[0_4px_12px_rgba(0,64,224,0.3)] hover:shadow-[0_8px_20px_rgba(0,64,224,0.4)] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
            Notify Me When Ready
            <span className="material-symbols-outlined text-lg">
              <BellRing className="h-5 w-5" />
            </span>
          </button>
          <button
            onClick={onClose}
            className="w-full py-4 bg-surface-container-high text-primary font-bold rounded-xl hover:bg-surface-container-highest active:scale-[0.98] transition-all"
          >
            Back to Dashboard
          </button>
        </div>
        <div className="mt-12 flex items-center justify-center gap-2">
          <div className="h-1.5 w-8 bg-primary rounded-full"></div>
          <div className="h-1.5 w-1.5 bg-outline-variant rounded-full"></div>
          <div className="h-1.5 w-1.5 bg-outline-variant rounded-full"></div>
        </div>
        <p className="mt-6 text-[11px] font-bold tracking-wider text-outline uppercase">
          PayU Wallet Beta v2.4
        </p>
      </div>
    </div>
  );
};

export default FeatureNotAvailableModal;
