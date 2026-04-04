import HttpService from "./http.service";

export interface UserType {
    name: string;
    email: string;
    role?: string;
    _id: string;
    image?: string
}

class AccountService extends HttpService {


    account = async () => {
        try {
            const response = await this.getRequest('/account/my-account', { auth: true })
            return response.data

        } catch (exception) {
            console.log(exception)
        }
    }


}

const accountSvc = new AccountService()
export default accountSvc