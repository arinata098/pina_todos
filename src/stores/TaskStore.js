import { defineStore } from "pinia"

export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks: [],
        loading: false,
        name: 'Bagus Arinata',
    }),

    getters: {
        // fungsi untuk menmfilter taks favorite
        favs() {
            return this.tasks.filter(t => t.isFav)
        },
        // ga ngerti fungsinya T_T
        favCount() {
            return this.tasks.reduce((p, c) => {
                return c.isFav ? p + 1 : p
            }, 0)
        },
        // menghitung seluruh data yang berada pada state tasks
        totalCount: (state) => {
            return state.tasks.length
        }
    },

    actions: {
        async getTask(){
            this.loading = true

            const res = await fetch('http://localhost:3000/tasks')
            const data = await res.json()

            this.tasks = data

            this.loading = false
        },
        async addTask(task) {
            this.tasks.push(task)

            const res = await fetch('http://localhost:3000/tasks', {
                method: 'POST',
                body: JSON.stringify(task),
                headers: {'Content-Type': 'application/json'}
            })

            if (res.error){
                console.log(res.error)
            }

        },
        async deleteTask(id) {
            this.tasks = this.tasks.filter(t => {
                return t.id !== id
            })

            const res = await fetch('http://localhost:3000/tasks/' + id, {
                method: 'DELETE',
            })

            if (res.error){
                console.log(res.error)
            }
        },
        async toggleFav(id){
            const task = this.tasks.find(t => t.id === id)
            task.isFav = !task.isFav

            const res = await fetch('http://localhost:3000/tasks/' + id, {
                method: 'PATCH',
                body: JSON.stringify({ isFav: task.isFav}),
                headers: {'Content-Type': 'application/json'}
            })

            if (res.error){
                console.log(res.error)
            }
        }
        
    }
})