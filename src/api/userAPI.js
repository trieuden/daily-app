import axios from 'axios';

class UsersAPI {
    constructor(apiUrl) {
        this.ip = process.env.SERVER_IP || '10.10.0.63';
        this.apiUrl = 'http://' + this.ip + ':3306/users/';
    }

    async getAllUsers() {
        try {
            const response = await axios.get(this.apiUrl + 'getAllUsers');
            return response.data;
        } catch (error) {
            console.error('Error fetching roles:', error);
            throw new Error('Error fetching roles from the API');
        }
    }

    async getUserById(id) {
        try {
            const response = await axios.get(this.apiUrl + 'getUserById?id=' + id);
            return response.data;
        } catch (error) {
            console.error('Error fetching roles:', error);
            throw new Error('Error fetching roles from the API');
        }
    }  
    async addUser(user) {
        try {
            await axios.post(this.apiUrl + 'addUser', {
                data: user
            });

        } catch (error) {
            console.error('Error adding role:', error);
            throw new Error('Error adding role via the API');
        }
    }
    async deleteUser(id) {
        try {
            await axios.post(this.apiUrl + 'deleteUser', {
                id: id
            });

        } catch (error) {
            console.error('Error delete role:', error);
            throw new Error('Error delete role via the API');
        }
    }
    
}

export default UsersAPI;
