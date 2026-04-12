import HttpService from "./http.service";



class TransactionService extends HttpService {


    create = async (data: { to: string, amount: number, idempotencyKey: string }) => {
        try {
            const response = await this.postRequest('/transaction/create', data, { auth: true })
            return response

        } catch (exception) {
            console.log(exception)
        }
    }

    loadWallet = async (data: { amount: Number, provider: string }) => {
        try {
            const response = await this.postRequest('/transaction/load', data, { auth: true })
            return response
        } catch (exception) {
            console.log(exception)
        }
    }

    listTransactions = async (page = 1, limit = 20, type: string = '') => {
        try {
            const response = await this.getRequest('/transaction/list', {
                auth: true, params: {
                    page: page,
                    limit: limit,
                    type: type
                }
            })
            return response.data
        }
        catch (exception) {
            console.log(exception)
        }
    }

    fetchDetail = async (id: string) => {
        try {
            const response = await this.getRequest('/transaction/detail/' + id, { auth: true })
            return response.data
        } catch (exception) {
            console.log(exception)
        }
    }

    verifyEsewa = async (data: any) => {
        try {
            const response = await this.postRequest('/transaction/verify', data, { auth: true })
            return response.data

        } catch (exception) {
            console.log(exception)

        }
    }

    download = async (id: string) => {
        try {
            const response = await this.getRequest('/transaction/request-receipt/' + id, { auth: true })
            return response.data

        } catch (exception) {
            console.log(exception)
        }
    }
    statement = async (data?: { start: Date, end: Date }) => {
        try {
            const response = await this.postRequest('/transaction/request-statement/', data, { auth: true })
            return response.data

        } catch (exception) {
            console.log(exception)
        }
    }




    fetchRoutes = async () => {
        try {
            const response = await this.getRequest('/transaction/bus-routes/', { auth: false })
            return response.data

        } catch (exception) {
            console.log(exception)
        }
    }

    getBuses = async (data: { from: string, to: string, date: string }) => {
        try {
            const response = await this.postRequest('/transaction/buses/', data, { auth: false })
            return response.data

        } catch (exception) {
            console.log(exception)
        }

    }

    getSeats = async (data: { bus_id: string }) => {
        try {
            const response = await this.postRequest('/transaction/seats/', data, { auth: false })
            return response.data
        } catch (exception) {
            console.log(exception)
        }
    }

    topupBalance = async (data: { number: string, amount: string }) => {
        try {
            const response = await this.postRequest('/transaction/topup', data, { auth: true })
            return response.data

        } catch (exception) {
            console.log(exception)
        }
    }
    fetchZooDetails = async () => {
        try {
            const response = await this.getRequest('/transaction/zoo', { auth: false })
            return response.data

        } catch (exception) {
            console.log(exception)
        }
    }

    fetchCableCarDetails = async (data: any) => {
        try {
            console.log(data)
            const response = await this.getRequest('/transaction/cable-car', { auth: false })
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
            const response = await this.postRequest('/transaction/antivirus-details', data, { auth: false })
            return response.data
        } catch (exception) {
            console.log(exception)
        }
    }

    purchaseItem = async (data: any) => {
        try {
            const response = await this.postRequest('/transaction/antivirus-purchase', data, { auth: true })
            return response.data
        } catch (exception) {
            console.log(exception)
        }
    }

    getSpendingAnal = async (type: string) => {
        try {
            const response = await this.getRequest('/transaction/get-anal', {
                auth: true,
                params: {
                    type: type
                }
            })
            return response.data

        } catch (exception) {
            console.log(exception)
        }
    }
}

const transactSvc = new TransactionService()
export default transactSvc