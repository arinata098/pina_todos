<template>
  <main>

    <!-- heading -->
    <header>
      <img src="./assets/pinia-logo.svg" alt="Pinia Logo">
      <h1>Pinia Todos</h1>
    </header>

    <!-- task list -->
    <div class="task-list">
      <div v-for="task in taskStore.tasks" :key="task.id">
        <TaskDetail :task="task" />
      </div>
    </div>

  </main>
</template>

<script>
import TaskDetail from './components/TaskDetail.vue'
import { useTaskStore } from './stores/TaskStore'

  export default {
    components: {
      TaskDetail
    },
    setup () {
      const taskStore = useTaskStore()

      return { taskStore }
    }
  }
</script>