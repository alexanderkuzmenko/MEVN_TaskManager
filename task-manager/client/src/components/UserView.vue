<template>
  <b-container>
    <b-row class="justify-content-center">
      <b-col cols="12" md="3">
        <b-card
          :title="user.name"
          img-src="https://picsum.photos/100/50/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          class="mb-2"
        >
          <b-card-text>
            <p>
              <strong>Email:</strong> {{user.email}}
            </p>
            <p>
              <strong>Age:</strong> {{user.age}}
            </p>

          </b-card-text>

          <b-button href="#" variant="primary">Message</b-button>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import UserService from "@/services/UserService";
    export default {
        name: "UserView",
        data () {
            return {
                user: {
                    name: "",
                    email: "",
                    age: 0
                }
            }
        },
        mounted() {
            this.getUser();
        },
        methods: {
            async getUser() {
                try {
                    var id = this.$route.params.id;
                    var response = await UserService.getUser({id});
                    this.user.name = response.data.name;
                    this.user.email = response.data.email;
                    this.user.age = response.data.age;
                } catch(err) {
                    console.log(err.message);
                }
            }
        }
    }
</script>

<style scoped>

</style>
