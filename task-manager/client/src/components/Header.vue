<template>
  <b-container>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">NavBar</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/user/list">Users</b-nav-item>
          <b-nav-item-dropdown text="TaskManager">
            <b-dropdown-item href="/task/list">My Tasks</b-dropdown-item>
            <b-dropdown-item href="/task/new">New Task</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown text="User">
            <b-dropdown-item href="/user/userboard">Profile</b-dropdown-item>
            <b-dropdown-item href="/user/login">Login</b-dropdown-item>
            <b-dropdown-item href="/user/logout">Logout</b-dropdown-item>
            <b-dropdown-item href="/user/register">Registration</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>



        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </b-container>
</template>

<script>
    export default {
        name: "Header",

    }
</script>

<style scoped>

</style>
