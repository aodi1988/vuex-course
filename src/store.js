import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 属性
    count: 0,
    todos: [
      { id: 1, title: "todo item 1", completed: false },
      { id: 2, title: "todo item 2", completed: false },
      { id: 3, title: "todo item 3", completed: true }

    ]
  },
  getters: {
    count: state => state.count,
    completedTodos: state => state.todos.filter(todo => todo.completed),
    completedTodosCount: (state, getters) => getters.completedTodos.length,
    getTodosById: state => id => state.todos.find(todo => todo.id == id),
    // getTodosById: function (state) {
    //   //处理东西
    //   (function (id) {
    //     return state.todos.find(function (todo) {
    //       return todo.id == id;
    //     })
    //   })(id)
    // }
    // count(state) {
    //   return ++state.count
    // }
  },
  mutations: {
    incrementCount: state => state.count++,
    decrementCount: (state, payload) => state.count -= payload.amount,
    setTodos: (state, todos) => state.todos = todos

  },
  actions: {
    incrementCountAsync: ({ commit }) => {
      setTimeout(() => {
        // 解构
        const object = {
          name: "misitewu",
          age: 32
        }
        const { name, age } = object;
        /** = this.$store */
        commit("incrementCount")
      }, 2000)
    },
    decrementCountAsync: (context, payload) => {
      setTimeout(() => {
        context/** = this.$store */.commit("decrementCount", payload)
      }, 1000)
    },
    async fetchDataAsync(context) {
      const response = await axios.get("http://jsonplaceholder.typicode.com/todos");
      // console.log(response);
      context.commit("setTodos", response.data)
    }
  }
})
