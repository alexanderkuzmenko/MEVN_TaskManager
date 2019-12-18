<template>
<div>
  <h2>Logout</h2>
</div>
</template>

<script>
  import UserService from "@/services/UserService";
  import UserLogin from "./UserLogin";
  export default {
      name: "UserLogout",
      mounted() {
          this.logout();
      },
      methods: {
          async logout() {
              if (localStorage.getItem("jwt") != null) {
                  let params = {};
                  let config = {
                      headers: {
                          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
                      }
                  };

                  await UserService.logout(params, config);
                  localStorage.removeItem("jwt");
              }
              this.$router.push({name: "UserLogin"});

          }
      }
  }
</script>

<style scoped>

</style>
