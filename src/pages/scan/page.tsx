import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const ScanPage = () => {
    const navigate = useNavigate();

    const scannedRef = useRef(false);
    const scannerRef = useRef<Html5QrcodeScanner | null>(null);
    const initializedRef = useRef(false); // ✅ REAL GUARD

    useEffect(() => {

        // 🚨 prevents StrictMode double init
        if (initializedRef.current) return;
        initializedRef.current = true;

        const readerId = "reader";

        // 🧹 HARD CLEAN before init
        const existing = document.getElementById(readerId);
        if (existing) existing.innerHTML = "";

        const scanner = new Html5QrcodeScanner(
            readerId,
            {
                fps: 10,
                qrbox: { width: 300, height: 300 },
                aspectRatio: 1.0,
            },
            false
        );

        scannerRef.current = scanner;

        scanner.render(
            (decodedText) => {
                if (scannedRef.current) return;
                scannedRef.current = true;

                try {
                    const url = new URL(decodedText);
                    const userId = url.searchParams.get("user");

                    if (userId) {
                        scanner.clear().then(() => {
                            navigate(`/send?user=${userId}`);
                        });
                    }
                } catch {
                    console.log("Invalid QR");
                }
            },
            () => { }
        );

        return () => {
            scanner.clear().catch(() => { });
            scannerRef.current = null;
            initializedRef.current = false;

            const el = document.getElementById(readerId);
            if (el) el.innerHTML = "";
        };
    }, []);

    return (
        <div className="flex flex-col items-center w-full">
            <div className="relative w-full max-w-sm">
                <div id="reader" className="rounded-2xl overflow-hidden shadow-xl" />
            </div>

            <p className="text-sm text-gray-500 mt-4">
                Align QR code inside the frame
            </p>
        </div>
    );
};

export default ScanPage;