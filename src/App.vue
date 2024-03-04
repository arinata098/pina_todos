<template>
  <main>

    <!-- heading -->
    <header>
      <img src="./assets/pinia-logo.svg" alt="Pinia Logo">
      <h1>Pinia Todos</h1>
    </header>

    <!-- new task form -->
    <div class="new-task-form">
      <TaskForm />
    </div>

    <!-- filter -->
    <nav class="filter">
      <button @click="filter = 'all'">All Task</button>
      <button @click="filter = 'favs'">Fav Task</button>
    </nav>

    <!-- loading -->
    <div class="loading" v-if="taskStore.loading">
      Loading tasks...
    </div>

    <!-- task list -->
    <div class="task-list" v-if="filter === 'all'">
      <p>Your Have {{ taskStore.totalCount }} tasks left to do</p>
      <div v-for="task in taskStore.tasks" :key="task.id">
        <TaskDetail :task="task" />
      </div>
    </div>
    <div class="task-list" v-if="filter === 'favs'">
      <p>Your Have {{ taskStore.favCount }} favs left to do</p>
      <div v-for="task in taskStore.favs" :key="task.id">
        <TaskDetail :task="task" />
      </div>
    </div>

    <div class="center">
      <button class="reset" @click="taskStore.$reset">reset state</button>
    </div>


  </main>
</template>

<script>
import { ref } from 'vue'
import TaskDetail from './components/TaskDetail.vue'
import TaskForm from './components/TaskForm.vue'
import { useTaskStore } from './stores/TaskStore'
import { storeToRefs } from 'pinia';

  export default {
    components: {
      TaskDetail,
      TaskForm
    },
    setup () {
      const taskStore = useTaskStore()

      const { tasks, loading, favs, totalCount, favCount } = storeToRefs(taskStore)

      // fetch data tasks
      taskStore.getTask()

      const filter = ref('all')

      return { taskStore, filter, tasks, loading, favs, totalCount, favCount }
    }
  }
</script>