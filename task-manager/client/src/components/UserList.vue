<template>
  <b-container>
    <b-row class="justify-content-center">
      <b-col cols="12" md="6">
        <b-table striped hover :items="users" :fields="fields">

          <template v-slot:cell(view)="data">
            <router-link v-bind:to="{name: 'UserView', params: {id: data.item._id}}">User View</router-link>
          </template>
        </b-table>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12" md="6">
        <router-link v-bind:to="{name: 'UserRegister'}">Registration</router-link>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
    // eslint-disable-next-line
    /* eslint-disable */

    import UserService from "@/services/UserService";

    export default {
        name: "UserList",
        data() {
            return {
                fields: [
                      {
                          key: 'name',
                          label: 'User Name',
                          sortable: true
                      },
                      {
                          key: 'email',
                          label: 'Email',
                          sortable: true
                      },
                      {
                          key: 'age',
                          label: 'Age',
                          sortable: true
                      },
                      {
                          key: 'view',
                          label: 'View'
                      }
                    ],
                users: []
                }
        },
        mounted() {
            this.getUsers()

        },
        methods: {
            async getUsers() {
                const response = await UserService.getUsers();
                console.log(response);
                this.users = response.data.users;
            }
        }
    }
</script>

<style scoped>

</style>
