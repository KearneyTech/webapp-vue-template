import { defineStore } from 'pinia'

export const useQuestionsStore = defineStore('questions', {
    state: ()=>({
        text: "",
        select: "",
        radio: ""
    }),
    getters: {
        getText: (state) => state.text,
        getSelect: (state) => state.select,
        getRadio: (state) => state.radio        
    },
    actions: {
        setText(value: any) {
            this.text = value;
        },        
        setSelect(value: any) {
            this.select = value;
        },
        setRadio(value: any) {
            this.radio = value;
        }        
    }
});

export const useDebugStore = defineStore('debug', {
    state: ()=>{
        return {output: ""}
    },
    getters: {},
    actions: {
        log(input: any) {
            this.output = `${this.output} ${input}`
        }
    }
})