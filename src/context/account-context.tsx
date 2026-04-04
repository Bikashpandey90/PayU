import accountSvc from "@/services/account.service";
import React, { createContext, useEffect, useState } from "react";

export const AccountContext = createContext({});

export const AccountProvider = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    const [data, setData] = useState<any>();
    const getAccountInfo = async () => {
        try {
            const response = await accountSvc.account()
            setData(response.detail)
        } catch (exception) {
            console.error("Error fetching user:", exception);
        }

    }
    useEffect(() => {
        getAccountInfo()
    }, [])

    return (<>

        <AccountContext.Provider
            value={{
                accountinfo: data || null,
                setAccountInfo: setData,
                getAccountInfo
            }}>
            {children}
        </AccountContext.Provider>
    </>)
}

