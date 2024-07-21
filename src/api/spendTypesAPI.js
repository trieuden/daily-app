import axios from 'axios';
import { SERVER_IP } from '../config/config';

class SpendTypesAPI {
    constructor(apiUrl) {
        this.ip = SERVER_IP;
        this.apiUrl = 'http://' + this.ip + ':3306/spendTypes/';
    }

    async getAllSpendTypes() {
        try {
            const response = await axios.get(this.apiUrl + 'getAllSpendTypes');
            return response.data;
        } catch (error) {
            console.error('Error fetching spendTypes:', error);
            throw new Error('Error fetching spendTypes from the API');
        }
    }
    async getSpendTypeById(id) {
        try {
            const response = await axios.get(this.apiUrl + 'getSpendTypeById?id=' + id);
            return response.data;
        } catch (error) {
            console.error('Error fetching spendTypes:', error);
            throw new Error('Error fetching spendTypes from the API');
        }
    }  
}

export default SpendTypesAPI;
