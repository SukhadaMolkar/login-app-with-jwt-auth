<template>
<div class = "sign_up_page">
<h1> Sign Up </h1>
<form @submit.prevent="submitForm">
    <label>Username:</label>
    <input type= "email" name="username" v-model="username"> <br><br>
    <label>Password:</label>
    <input type= "password" name="password" v-model="password"> <br><br>
    <button type="submit">Sign Up</button>
</form>

</div>

</template>


<script>
import axios from 'axios'

export default {
    name: 'SignUp',
    data() {
        return{
            username:'',
            password:'',
            email:''
        }
    },
    methods: {
        submitForm(e) {
            const formData = {
                username: this.username,
                password: this.password,
                email: this.email
            }
            axios
                .post('/api/v1/users/', formData)
                .then(response =>{
                    console.log(response)
                    this.$router.push('/log_in')
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
}
</script>