<template>
  <b-container>
    <b-row class="justify-content-center">
      <b-col cols="12" md="6">
        <b-table striped hover :items="tasks" :fields="fields">

          <template v-slot:cell(edit)="data">
            <router-link v-bind:to="{name: 'TaskEdit', params: {id: data.item._id}}">Edit Task</router-link>
            <a href="#" @click="deleteTask(data.item._id)">Delete</a>
          </template>
        </b-table>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12" md="6">
        <router-link v-bind:to="{name: 'TaskNew'}">Add Task</router-link>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
    // eslint-disable-next-line
    /* eslint-disable */

    import TaskService from "@/services/TaskService";

    export default {
        name: "TaskList",
        data() {
            return {
                fields: [
                      {
                          key: 'title',
                          label: 'Task Title',
                          sortable: true
                      },
                      {
                          key: 'description',
                          label: 'Task Description',
                          sortable: true
                      },
                      {
                          key: 'completed',
                          sortable: true
                      },
                      {
                          key: 'edit',
                          label: 'Edit'
                      }
                    ],
                tasks: []
                }
        },
        mounted() {
            this.getTasks()

        },
        methods: {
            async getTasks() {
                const response = await TaskService.fetchTasks();
                this.tasks = response.data.tasks;
            },
            async deleteTask(id) {
                try {
                    await TaskService.deleteTask({id});
                    this.getTasks();
                } catch(err) {
                    console.log(err.message);
                }
            }
        }
    }
</script>

<style scoped>

</style>
