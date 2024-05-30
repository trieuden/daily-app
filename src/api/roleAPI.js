import axios from 'axios';

class RolesAPI {
    constructor(apiUrl) {
        this.ip = process.env.SERVER_IP || '10.10.0.63';
        this.apiUrl = 'http://' + this.ip + ':3306/roles/';
    }

    async getAllRoles() {
        try {
            const response = await axios.get(this.apiUrl + 'getAllRoles');
            return response.data;
        } catch (error) {
            console.error('Error fetching roles:', error);
            throw new Error('Error fetching roles from the API');
        }
    }

    async getRoleById(id) {
        try {
            const response = await axios.get(this.apiUrl + 'getRoleById?id=' + id);
            return response.data;
        } catch (error) {
            console.error('Error fetching roles:', error);
            throw new Error('Error fetching roles from the API');
        }
    }  
    async addRole(name) {
        try {
            await axios.post(this.apiUrl + 'addRole', {
                name: name
            });

        } catch (error) {
            console.error('Error adding role:', error);
            throw new Error('Error adding role via the API');
        }
    }
    async deleteRole(id) {
        try {
            await axios.post(this.apiUrl + 'deleteRole', {
                id: id
            });

        } catch (error) {
            console.error('Error delete role:', error);
            throw new Error('Error delete role via the API');
        }
    }
    
}

export default RolesAPI;
