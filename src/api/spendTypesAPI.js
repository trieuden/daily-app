import axios from 'axios';

class SpendTypesAPI {
    constructor(apiUrl) {
        this.ip = process.env.SERVER_IP || '10.10.0.63';
        this.apiUrl = 'http://' + this.ip + ':3306/spendTypes/';
    }

    async getAllSpendTypes() {
        try {
            const response = await axios.get(this.apiUrl + 'getAllSpendTypes');
            return response.data;
        } catch (error) {
            console.error('Error fetching spend types:', error);
            throw new Error('Error fetching roles from the API');
        }
    }
    async getSpendTypeById(id) {
        try {
            const response = await axios.get(this.apiUrl + 'getSpendTypeById?id=' + id);
            return response.data;
        } catch (error) {
            console.error('Error fetching roles:', error);
            throw new Error('Error fetching roles from the API');
        }
    }  
}

export default SpendTypesAPI;
