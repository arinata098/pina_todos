import { defineStore } from "pinia"

export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks: [
            {id: 1, title: "buy some milk", isFaf: false},
            {id: 2, title: "watery plant", isFaf: true},
        ],
        name: 'Bagus Arinata',
    }),

    getters: {
        // fungsi untuk menmfilter taks favorite
        favs() {
            return this.tasks.filter(t => t.isFaf)
        },
        // ga ngerti fungsinya T_T
        favCount() {
            return this.tasks.reduce((p, c) => {
                return c.isFaf ? p + 1 : p
            }, 0)
        },
        // menghitung seluruh data yang berada pada state tasks
        totalCount: (state) => {
            return state.tasks.length
        }
    }
})