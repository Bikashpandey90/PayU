import { AxiosCustomResponse } from "@/config/axios.config";
import HttpService from "./http.service";

export interface UserType {
    name: string;
    email: string;
    role?: string;
    _id: string;
    image?: string
}

class AuthService extends HttpService {

    login = async (data: { email: string, password: string }): Promise<UserType> => {
        try {
            const response: AxiosCustomResponse = await this.postRequest('/auth/login', data);
            localStorage.setItem("token", response.data.detail.accessToken);
            localStorage.setItem("refToken", response.data.detail.refreshToken)
            return response.data.detail.user;

        }
        catch (exception) {
            console.error(exception);
            throw exception
        }
    }
    register = async (data: any) => {
        try {
            const response: AxiosCustomResponse = await this.postRequest('/auth/register', data, {
                file: true,
            })
            return response.data
        }
        catch (exception) {
            throw exception
        }
    }
    activateUserAccount = async (data: any) => {
        try {
            const response = await this.postRequest('/auth/activate', data)
            return response.data
        } catch (exception) {
            throw exception
        }

    }

    resendOtp = async (data: { email: string }) => {
        try {
            const response = await this.postRequest('/auth/resend-otp', data)
            return response.data
        } catch (exception) {
            throw exception
        }
    }
    update = async (data: any) => {
        try {
            const response = await this.patchRequest('/auth/update', data, { auth: true, file: true })
            return response.data

        } catch (exception) {
            console.log(exception)
        }
    }
    profile = async () => {
        try {
            const response = await this.getRequest('/auth/me', { auth: true })
            return response.data

        } catch (exception) {
            console.log(exception)
        }
    }
    forgot = async (data: { email: string }) => {
        try {
            const response = await this.postRequest('/auth/forgot-password', data, { auth: false })
            return response.data

        } catch (exception) {
            console.log(exception)
        }
    }
    verifyResetCode = async (data: { email: string, otp: string }) => {
        try {
            const response = await this.postRequest('/auth/verify-resetcode', data, { auth: false })
            return response.data
        } catch (exception) {
            throw exception
        }

    }

    resetPassword = async (data: { password: string, confirmPassword: string }) => {
        try {
            const response = await this.postRequest('/auth/reset-password', data, { auth: true })
            return response.data

        } catch (exception) {
            console.log(exception)
        }
    }

    fetchUsers = async (page = 1, limit = 3, search = '') => {
        try {
            const response = await this.getRequest('/auth/list', {
                auth: true,
                params: {
                    page: page,
                    limit: limit,
                    search: search
                }
            })
            return response.data

        } catch (response) {
            console.log(response)
        }
    }
    getUserById = async (id: string) => {
        try {
            const response = await this.getRequest('/auth/user/' + id, { auth: true })
            return response.data

        } catch (exception) {
            console.log(exception)
        }
    }

}

const authSvc = new AuthService()
export default authSvc