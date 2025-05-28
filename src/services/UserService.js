
export default class UserService {

    constructor(){
        this.fetchUrl = 'https://jsonplaceholder.typicode.com/users';
    }

    async getUsers () {
        try{
            const response = await fetch(this.fetchUrl);
            if (!response.ok) throw new Error('Error al obtener usuarios');
            return response.json();
        }
        catch  (error) {
            throw error;
        }
    }

    async getUserById (id) {
        try{
            const response = await fetch(`${this.fetchUrl}/${id}`);
            if (!response.ok) throw new Error('Error al obtener usuario');
            return response.json();
        }
        catch  (error) {
            throw error;
        }
    }

    async updateUser (id, user) {
        try{
            const response = await fetch(`${this.fetchUrl}/${id}}`, 
                {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(user)
                }
            );
            if (!response.ok) throw new Error('Error al actualizar usuario');
            return response.json();
        }
        catch  (error) {
            throw error;
        }
    }

    async createUser(user) {
        try{
            const response = await fetch(this.fetchUrl,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(user)
                }
            );
            if (!response.ok) throw new Error('Error al obtener usuarios');
            return response.json();
        }
        catch  (error) {
            throw error;
        }

    }
}