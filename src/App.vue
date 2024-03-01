<template>
  <main>

    <!-- heading -->
    <header>
      <img src="./assets/pinia-logo.svg" alt="Pinia Logo">
      <h1>Pinia Todos</h1>
    </header>

    <!-- filter -->
    <nav class="filter">
      <button @click="filter = 'all'">All Task</button>
      <button @click="filter = 'favs'">Fav Task</button>
    </nav>

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

  </main>
</template>

<script>
import { ref } from 'vue'
import TaskDetail from './components/TaskDetail.vue'
import { useTaskStore } from './stores/TaskStore'

  export default {
    components: {
      TaskDetail
    },
    setup () {
      const taskStore = useTaskStore()

      const filter = ref('all')

      return { taskStore, filter }
    }
  }
</script>