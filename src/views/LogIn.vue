<template>
    <div class="log_in_page">
<h1> Log In </h1>
<form @submit.prevent="submitForm">
    <label>Username:</label>
    <input type= "email" name="username" v-model="username"> <br><br>
    <label>Password:</label>
    <input type= "password" name="password" v-model="password"> <br><br>
    <button type="submit">Log In</button>
</form>
</div>

</template>


<script>
import axios from 'axios'

export default {
    name: 'LogIn',
    data() {
        return{
            username:'',
            password:''
        }
    },
    methods: {
        submitForm(e) {
            // axios.defaults.headers.common['Authorization'] = ''
            // localStorage.removeItem("token")

            const formData = {
                username: this.username,
                password: this.password
            }
            axios
                .post('/api/v1/token/login', formData)
                .then(response => {
                    console.log(response)

                    const token =  response.data.auth_token

                    this.$store.commit('setToken', token)

                    axios.defaults.headers.common['Authorization'] = "Token" + token

                    localStorage.setItem("token", token)

                    this.$router.push("/")
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
}

</script>