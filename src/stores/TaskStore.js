import { defineStore } from "pinia"

export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks: [
            {id: 1, title: "buy some milk", isFav: false},
            {id: 2, title: "watery plant", isFav: true},
        ],
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
        addTask(task) {
            this.tasks.push(task)
        },
        deleteTask(id) {
            this.tasks = this.tasks.filter(t => {
                return t.id !== id
            })
        },
        toggleFav(id){
            const task = this.tasks.find(t => t.id === id)
            task.isFav = !task.isFav
        }
        
    }
})