import axios from 'axios';

class SpendsAPI {
    constructor(apiUrl) {
        this.ip = process.env.SERVER_IP || '10.10.0.63';
        this.apiUrl = 'http://' + this.ip + ':3306/spends/';
    }

    async getAllSpends() {
        try {
            const response = await axios.get(this.apiUrl + 'getAllSpends');
            return response.data;
        } catch (error) {
            console.error('Error fetching roles:', error);
            throw new Error('Error fetching roles from the API');
        }
    }

    async getSpendById(id) {
        try {
            const response = await axios.get(this.apiUrl + 'getSpendById?id=' + id);
            return response.data;
        } catch (error) {
            console.error('Error fetching roles:', error);
            throw new Error('Error fetching roles from the API');
        }
    }  
    async addSpend(spend) {
        try {
            await axios.post(this.apiUrl + 'addSpend', {
                data: spend
            });

        } catch (error) {
            console.error('Error adding role:', error);
            throw new Error('Error adding role via the API');
        }
    }
    async deleteSpend(id) {
        try {
            await axios.post(this.apiUrl + 'deleteSpend', {
                id: id
            });

        } catch (error) {
            console.error('Error delete role:', error);
            throw new Error('Error delete role via the API');
        }
    }
    
}

export default SpendsAPI;
