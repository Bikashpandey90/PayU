import { FC, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
// import SignInPage from "@/pages/login/login";
import LoginPage from "@/pages/login/login";
import SignInPage from "@/pages/signup/signinpage";
import ForgotPasswordPage from "@/pages/forgot-password/forgot";
import HomeLayout from "@/pages/layout/homelayout";
import TravelPage from "@/pages/travel/page";
import FlightPage from "@/pages/flight/page";
import TransactPage from "@/pages/transact/page";
import { AuthProvider } from "@/context/auth-context";
import LoadPage from "@/pages/load/page";
import { AccountProvider } from "@/context/account-context";
import ServicesPage from "@/pages/services/page";
import IndexPage from "@/pages/index/page";
import TransacitonPage from "@/pages/transactions/page";
import SettingsPage from "@/pages/settings/page";
import TransactionDetail from "@/pages/transactions/detail";
import SuccessPage from "@/pages/payment/successPage";
import FailurePage from "@/pages/payment/failurePage";
import ProfilePage from "@/pages/profile/page";
import SecurityPage from "@/pages/security/page";
import TopUpPage from "@/pages/topup/page";
import ZooPage from "@/pages/zoo/page";
import CableCarPage from "@/pages/cablecar/page";
import AntiVirusPage from "@/pages/antivirus/page";
import GovernmentPage from "@/pages/government/page";
import ElecPayPage from "@/pages/electricity/payment";
import CommunityElectricityPage from "@/pages/electricity/page";
import BlueBookPage from "@/pages/bluebook/page";
import MeroSharePage from "@/pages/meroshare/page";
import MeroSharePayment from "@/pages/meroshare/payment";
import WasteManagementPage from "@/pages/waste/page";
import WasteManagementPaymentPage from "@/pages/waste/payment";
import DataPacksPage from "@/pages/datapack/page";
import NotFoundPage from "@/pages/notfound/page";



const Routing: FC = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <HomeLayout />,
            children: [
                {

                    index: true,
                    element: <IndexPage />,
                },
                {
                    path: 'travel',
                    element: <TravelPage />
                }, {
                    path: 'flights',
                    element: <FlightPage />
                }, {
                    path: 'send',
                    element: <TransactPage />
                }, {
                    path: 'load',
                    element: <LoadPage />
                }, {
                    path: 'services',
                    element: <ServicesPage />
                }, {
                    path: 'transactions',
                    element: <TransacitonPage />
                }, {
                    path: 'settings',
                    element: <SettingsPage />
                }, {
                    path: 'transactions/:id',
                    element: <TransactionDetail />
                }, {
                    path: 'payment/success',
                    element: <SuccessPage />
                }, {
                    path: 'payment/failure',
                    element: <FailurePage />
                }, {
                    path: 'profile',
                    element: <ProfilePage />
                }, {
                    path: 'security',
                    element: <SecurityPage />
                }, {
                    path: 'topup',
                    element: <TopUpPage />
                }, {
                    path: "zoo",
                    element: <ZooPage />
                }, {
                    path: 'cable-car',
                    element: <CableCarPage />
                }, {
                    path: 'anti-virus',
                    element: <AntiVirusPage />
                }, {
                    path: 'government',
                    element: <GovernmentPage />
                }, {
                    path: 'community-electricity',
                    element: <CommunityElectricityPage />
                }, {
                    path: 'community-electricity/:provider',
                    element: <ElecPayPage />
                }, {
                    path: 'bluebook',
                    element: <BlueBookPage />
                }, {
                    path: 'meroshare',
                    element: <MeroSharePage />
                }, {
                    path: 'meroshare-payment',
                    element: <MeroSharePayment />
                }, {
                    path: 'waste-management',
                    element: <WasteManagementPage />
                }, {
                    path: 'waste-payment',
                    element: <WasteManagementPaymentPage />
                }, {
                    path: 'data-packs',
                    element: <DataPacksPage />
                }
            ]
        },

        {
            path: '*',
            element: <NotFoundPage />
        },


        {
            path: "login",
            element: <LoginPage />,
            index: true
        }, {
            path: "sign-in",
            element: <SignInPage />
        }, {
            path: "forgot-password",
            element: <ForgotPasswordPage />
        }

    ])

    const [queryClient] = useState(() => new QueryClient())
    return (<>
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <AccountProvider>
                    <RouterProvider router={router} />
                </AccountProvider>
            </AuthProvider>
        </QueryClientProvider>
    </>)
}

export default Routing