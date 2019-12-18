 import Api from '@/services/Api'

 export default {

  getUsers() {
    return Api().get('/users');
  },

   getUser(params) {
     return Api().get('/users/' + params.id);
   },

   register(params) {
     return Api().post('/users', params)
   },

   login(params) {
     return Api().post('/users/login', params)
   },

   logout(params, config) {
     return Api().post('/users/logout', params, config)
   },

   update(params) {
      return Api().patch('/users/' + params.id, params);
   },

 }

