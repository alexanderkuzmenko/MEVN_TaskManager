<template>
  <b-container>
    <b-row class="justify-content-center">
      <b-col cols="12" md="6">
        <h1>User Register</h1>
        <div class="form">
          <div class="m-3">
            <b-form-input v-model="name" placeholder="NAME"></b-form-input>
          </div>
          <div class="m-3">
            <b-form-input v-model="email" placeholder="EMAIL"></b-form-input>
          </div>
          <div class="m-3">
            <b-form-input v-model="age" placeholder="AGE"></b-form-input>
          </div>
          <div class="m-3">
            <b-form-input v-model="password" placeholder="PASSWORD"></b-form-input>
          </div>

          <div class="m-3">
            <b-button variant="success" @click="register()">Register</b-button>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
    import UserService from "@/services/UserService";
    export default {
        name: 'UserRegister',
        data () {
            return {
                name: '',
                email: '',
                age: '',
                password: '',

            }
        },
        methods: {

                async register () {
                    try {
                      let response = await UserService.register({
                          name: this.name,
                          email: this.email,
                          age: this.age,
                          password: this.password,
                        });
                        localStorage.setItem('user',JSON.stringify(response.data.user))
                        localStorage.setItem('jwt',response.data.token)
                        if (localStorage.getItem('jwt') != null) {
                            if(this.$route.params.nextUrl != null){
                                this.$router.push(this.$route.params.nextUrl)
                            } else {
                                this.$router.push({ name: 'UserBoard'} )
                            }
                        } else {
                            this.$router.push('/')
                        }

                    } catch(err) {
                        console.log(err.message)
                    }
                }


        }
    }
</script>
