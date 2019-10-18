import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import Vuex from 'vuex'
import axios from 'axios'
import router from './router'

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userId: 0,
    userName: '',
    bookCount: 0,
    bookList: [],
    requestList: []
  },
  mutations: {
    initBookList (state, data) {
      state.bookList = data
    },
    initRequestList (state, data) {
      state.requestList = data
    },
    addBook (state, data) {
      data.Name = state.userName
      state.bookList.unshift(data)
    },
    deleteBook (state, data) {
      state.bookList.splice(state.bookList.indexOf(data), 1)
    },
    setUsername (state, nickname) {
      state.userName = nickname
    },
    setUserId (state, id) {
      state.userId = id
      axios.defaults.headers.common['User_id'] = id
    },
    setBookCount (state, count) {
      state.bookCount = count
    }
  },
  getters: {
    getBookList (state) {
      return state.bookList
    },
    getRequestList (state) {
      return state.requestList
    },
    getUserName (state) {
      return state.userName
    },
    getAuth (state) {
      return state.userId !== 0
    },
    getUserId (state) {
      return state.userId
    },
    getBookCount (state) {
      return state.bookCount
    }
  },
  actions: {
    getBookListFromServer (context, payload) {
      return new Promise((resolve, reject) => {
        if (!payload.page) {
          payload.page = ''
        }
        axios.get(`/v1/payments/list?page=${payload.page}`).then((res) => {
          console.log('북리스트 가져오기 성공', res)
          context.commit('initBookList', res.data.list)
          resolve(res.data)
        }).catch((res) => {
          console.log('북리스트 가져오기 실패')
          reject(res)
        })
      })
    },
    getRequestListFromServer (context, payload) {
      return new Promise((resolve, reject) => {
        if (!payload.page) {
          payload.page = ''
        }
        axios.get(`/v1/payments/request_list?page=${payload.page}`).then((res) => {
          console.log('요청리스트 가져오기 성공', res)
          context.commit('initRequestList', res.data.list)
          resolve(res.data)
        }).catch((res) => {
          console.log('요청리스트 가져오기 실패')
          reject(res)
        })
      })
    }
  }
});


new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
