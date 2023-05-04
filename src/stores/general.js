import { defineStore } from 'pinia'

export const useDebugStore = defineStore('debug', {
    state: ()=>{
        return {output: ""}
    },
    getters: {},
    actions: {
        log(input) {
            this.output = `${this.output} ${input}`
        }
    }
})