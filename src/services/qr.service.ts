import QRCodeStyling from "qr-code-styling";
import { UserType } from "./auth.service";

class QrService {
    createSelfQr = (user: UserType) => {
        const paymentLink = `${import.meta.env.VITE_APP_BASE_URL}/send?user=${user._id}`;

        const qrCode = new QRCodeStyling({
            width: 200,
            height: 200,
            data: paymentLink,

            image: "",

            dotsOptions: {
                color: "#BBCBD3",
                type: "rounded",
            },

            backgroundOptions: {
                color: "#ffffff",
            },

            cornersSquareOptions: {
                type: "extra-rounded",
                color: "#89A3B2",
            },

            cornersDotOptions: {
                type: "dot",
                color: "#89A3B2",
            },

            qrOptions: {
                errorCorrectionLevel: "M",
            },
        });

        return qrCode;
    };
}

const qrSvc = new QrService();
export default qrSvc;