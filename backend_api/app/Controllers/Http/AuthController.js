'use strict'

const User = use("App/Models/User");

class AuthController {
    async create ({ request }) {
        const data = request.all();
        const user = await User.create(data);
        return user;
    }
    async authenticate({request,auth}){
        const {email, password} = request.all();
        const token = await auth.attempt(email,password);
        return token;
    }
}

module.exports = AuthController
