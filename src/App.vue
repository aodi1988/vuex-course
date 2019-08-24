<template>
  <div id="app">
    <p>App.vue:{{count}}</p>
    <p>{{completedTodos}}</p>
    <p>{{completedTodosCount}}</p>
    <p>{{getTodosById(2)}}</p>

    <Count />
  </div>
</template>

<script>
import Count from "./components/Count";
import { mapState, mapGetters } from "vuex";
export default {
  name: "app",
  components: { Count },
  computed: mapGetters([
    "count",
    "completedTodos",
    "completedTodosCount",
    "getTodosById"
  ])
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
