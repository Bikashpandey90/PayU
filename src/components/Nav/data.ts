

export const TEST_CREDENTIALS: Record<
    string,
    { title: string; items: { label: string; value: string }[] }
> = {
    "/login": {
        title: "Login",
        items: [
            { label: "Email", value: "testuser@demo.com" },
            { label: "Password", value: "Test@1234" },
        ],
    },

    "/load": {
        title: "Wallets",
        items: [
            { label: "eSewa ID", value: "9841XXXXXX" },
            { label: "Khalti ID", value: "9801XXXXXX" },
        ],
    },

    "/topup": {
        title: "Topup",
        items: [
            { label: "User", value: "demo@shop.com" },
            { label: "Coupon", value: "TEST50" },
        ],
    },
};