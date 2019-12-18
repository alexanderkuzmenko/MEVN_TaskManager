 import Api from '@/services/Api'

 export default {
   fetchTasks() {
     return Api().get("/tasks")
   },

   addTask(params) {
     return Api().post('/tasks', params)
   },

   getTask(params) {
     return Api().get('/tasks/' + params.id)
   },

   updateTask(params) {
      return Api().patch('/tasks/' + params.id, params);
   },

   deleteTask(params) {
      return Api().delete('/tasks/' + params.id);
   }

 }

