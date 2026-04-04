import HomePage from "@/pages/home/page";
import DashPage from "@/pages/dash/page";
import { useContext } from "react";
import { AuthContext } from "@/context/auth-context";
import { UserType } from "@/services/auth.service";

const IndexPage = () => {
    const auth = useContext(AuthContext) as { loggedInUser: UserType }

    if (auth?.loggedInUser) {
        return <DashPage />;
    }

    return <HomePage />;
};

export default IndexPage;