import axios from 'axios';

class SpendItemsAPI {
    constructor(apiUrl) {
        this.ip = process.env.SERVER_IP || '10.10.0.63';
        this.apiUrl = 'http://' + this.ip + ':3306/spendItems/';
    }

    async getAllSpendItems() {
        try {
            const response = await axios.get(this.apiUrl + 'getAllSpendItems');
            return response.data;
        } catch (error) {
            console.error('Error fetching roles:', error);
            throw new Error('Error fetching roles from the API');
        }
    }

    async getSpendItemById(id) {
        try {
            const response = await axios.get(this.apiUrl + 'getSpendItemById?id=' + id);
            return response.data;
        } catch (error) {
            console.error('Error fetching roles:', error);
            throw new Error('Error fetching roles from the API');
        }
    }  
    async addSpendItem(spendItem) {
        try {
            await axios.post(this.apiUrl + 'addSpendItem', {
                data: spendItem
            });

        } catch (error) {
            console.error('Error adding role:', error);
            throw new Error('Error adding role via the API');
        }
    }
    async deleteSpendItem(id) {
        try {
            await axios.post(this.apiUrl + 'deleteSpendItem', {
                id: id
            });

        } catch (error) {
            console.error('Error delete role:', error);
            throw new Error('Error delete role via the API');
        }
    }
    
}

export default SpendItemsAPI;
