<template>
  <b-container>
    <b-row class="justify-content-center">
      <b-col cols="12" md="6">
        <h1>Edit Task</h1>
        <div class="form">
          <div class="m-3">
            <b-form-input v-model="title" placeholder="TITLE"></b-form-input>
          </div>
          <div class="m-3">
            <b-form-textarea
              v-model="description"
              placeholder="Description..."
              rows="10"
              max-rows="10"
            ></b-form-textarea>
          </div>
          <div class="m-3">
            <b-button variant="success" @click="updateTask()">Button</b-button>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
    import TaskService from "../services/TaskService";
    export default {
        name: 'TaskEdit',
        data () {
            return {
                title: '',
                description: ''
            }
        },
        mounted() {
          this.getTask();
        },
        methods: {
            async getTask() {
                try {
                    var id = this.$route.params.id;
                    var response = await TaskService.getTask({id});
                    this.title = response.data.title;
                    this.description = response.data.description;
                } catch(err) {
                    console.log(err.message);
                }
            },
            async updateTask () {
                try {
                    await TaskService.updateTask({
                        id: this.$route.params.id,
                        title: this.title,
                        description: this.description
                    })
                    await this.$router.push({ name: 'TaskList' })
                } catch(err) {
                    console.log(err.message)
                }
            },
        }
    }
</script>
