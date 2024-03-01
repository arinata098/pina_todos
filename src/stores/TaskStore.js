import { defineStore } from "pinia"

export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks: [
            {id: 1, title: "buy some milk", isFaf: false},
            {id: 2, title: "watery plant", isFaf: true},
        ],
        name: 'Bagus Arinata',
    })
})