<template>

    <form class="md-layout" method="POST">
        <md-card class="md-layout-item">
            <md-card-header>
                <div class="md-title">Login</div>
            </md-card-header>

            <md-card-content>
                <div class="md-layout-item md-small-size-100 input">
                    <md-field class="input">
                        <label>Username</label>
                        <md-input type="text" v-model="username" class="inputText"/>
                    </md-field>
                </div>

                <div class="md-layout-item md-small-size-100 input">
                    <md-field class="input">
                        <label>Password</label>
                        <md-input type="password" v-model="password" class="inputText"/>
                    </md-field>
                </div>
            </md-card-content>

            <md-card-actions>
                <md-button type="button" class="md-dense md-raised md-primary" id="submitButton" @click=loginMethod()>
                    Login
                </md-button>
            </md-card-actions>
            <p id="responseData">{{ responseData }}</p>
        </md-card>
    </form>
</template>

<script>
import api from "../../Services/api";

export default {
    data() {
        return {
            username: '',
            password: '',
            responseData: '',
            crypto: ''
        }
    },
    methods: {
        //Login method
        loginMethod() {
            api.login(this.username, this.password)
                .then((response) => {
                    console.log(response)
                })
        }
    },
}
</script>

<style scoped>
* {
    margin: 0px;
    padding: 0px;
}

form {
    width: 23%;
    height: 500px;
    margin: 0 auto;
    position: relative;
    top: 10vw;
}

.input {
    display: block;
    width: 90%;
    margin: 0 auto;
}

.md-title {
    text-align: center;
}

#submitButton {
    margin: 0 auto;
    width: 80%;
    margin-top: 10px;
}

.inputText {
    position: relative;
    top: 15px;
}

#responseData {
    text-align: center;
    position: relative;
    top: 10px;
}

@media only screen and (max-width: 575px) {
    form {
        height: 100vh;
        width: 100vw;
        top: 0px;
    }
}
</style>
