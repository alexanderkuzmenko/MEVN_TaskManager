<template>
  <b-container>
    <b-row class="justify-content-center">
      <b-col cols="12" md="6">
        <h1>Add Task</h1>
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
            <b-button variant="success" @click="addTask()">Button</b-button>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
    import TaskService from "../services/TaskService";
    export default {
        name: 'TaskNew',
        data () {
            return {
                title: '',
                description: ''
            }
        },
        methods: {

                async addTask () {
                    try {
                      await TaskService.addTask({
                          title: this.title,
                          description: this.description
                      })
                      this.$router.push({ name: 'TaskList' })
                    } catch(err) {
                        console.log(err.message)
                    }
                }


        }
    }
</script>
