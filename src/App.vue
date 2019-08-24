<template>
  <div id="app">
    <!-- mutations -->
    <button @click="decrementCount({amount:2})">-</button>
    <span>{{count}}</span>
    <button @click="incrementCount">+</button>

    <!-- <p>App.vue:{{count}}</p>
    <p>{{completedTodos}}</p>
    <p>{{completedTodosCount}}</p>
    <p>{{getTodosById(2)}}</p>-->

    <!-- <Count /> -->
  </div>
</template>

<script>
import Count from "./components/Count";
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  name: "app",
  components: { Count },
  computed: mapGetters([
    "count",
    "completedTodos",
    "completedTodosCount",
    "getTodosById"
  ]),
  methods: mapMutations(["incrementCount", "decrementCount"])
  // methods: {
  //   increment() {
  //     // 调用mutations 里的 incrementCount
  //     this.$store.commit("incrementCount");
  //   },
  //   decrement(n) {
  //     // 调用mutations 里的 decrementCount
  //     this.$store.commit("decrementCount", n);
  //   }
  // }
  // 写法3
  // computed: mapState(["count", "todos"])

  // 写法2
  // computed: mapState({
  //   count: state => state.count,
  //   // count:function(state){
  //   //   return state.count
  //   // },
  //   todos: state => state.todos
  // })

  // 写法1
  // computed: {
  //   count() {
  //     return this.$store.getters.getCount;
  //   },
  //   computedTodos() {
  //     return this.$store.getters.completedTodos;
  //   },
  //   completedTodosCount() {
  //     return this.$store.getters.completedTodosCount;
  //   },
  //   getTodosById() {
  //     return this.$store.getters.getTodosById;
  //   }
  // }
};
</script>

<style>
</style>
