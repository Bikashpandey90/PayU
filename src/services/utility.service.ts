import HttpService from "./http.service";

class UtilityService extends HttpService {

    fetchRoutes = async () => {
        try {
            const response = await this.getRequest('/utility/bus-routes/', { auth: false })
            return response.data

        } catch (exception) {
            console.log(exception)
        }
    }

    getBuses = async (data: { from: string, to: string, date: string }) => {
        try {
            const response = await this.postRequest('/utility/buses/', data, { auth: false })
            return response.data

        } catch (exception) {
            console.log(exception)
        }

    }

    getSeats = async (data: { bus_id: string }) => {
        try {
            const response = await this.postRequest('/utility/seats/', data, { auth: false })
            return response.data
        } catch (exception) {
            console.log(exception)
        }
    }

    topupBalance = async (data: { number: string, amount: string }) => {
        try {
            const response = await this.postRequest('/utility/topup', data, { auth: true })
            return response.data

        } catch (exception) {
            console.log(exception)
        }
    }
    fetchZooDetails = async () => {
        try {
            const response = await this.getRequest('/utility/zoo', { auth: false })
            return response.data

        } catch (exception) {
            console.log(exception)
        }
    }

    fetchCableCarDetails = async (data: any) => {
        try {
            console.log(data)
            const response = await this.getRequest('/utility/cable-car', { auth: false })
            return response.data

        } catch (exception) {
            console.log(exception)
        }
    }
    commitCableCar = (data: any) => {
        console.log(data)
    }

    fetchAntiDetails = async (data: { antivirus: string }) => {
        try {
            const response = await this.postRequest('/utility/antivirus-details', data, { auth: false })
            return response.data
        } catch (exception) {
            console.log(exception)
        }
    }

    purchaseItem = async (data: any) => {
        try {
            const response = await this.postRequest('/utility/antivirus-purchase', data, { auth: true })
            return response.data
        } catch (exception) {
            console.log(exception)
        }
    }


}

const utilitySvc = new UtilityService()
export default utilitySvc