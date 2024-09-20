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
});

export const useFootballStore = defineStore('football', {
    state: ()=>{
        return {
            data: [
                {
                    name: 'Eagles',
                    bye: '5',
                    schedule: [
                        {
                            week: '4',
                            opp: 'TB',
                            oppRank: '9',
                            rankColor: 'red'
                        },
                        {
                            week: '5',
                            opp: '',
                            oppRank: '',
                            rankColor: 'bye'
                        },
                        {
                            week: '6',
                            opp: 'CLE',
                            oppRank: '28',
                            rankColor: 'green'
                        },
                        {
                            week: '7',
                            opp: 'NYG',
                            oppRank: '30',
                            rankColor: 'green'
                        },
                        {
                            week: '8',
                            opp: 'CIN',
                            oppRank: '29',
                            rankColor: 'green'
                        },
                    ]
                },
                {
                    team: 'Packers',
                    bye: '10',
                    schedule: [
                        {
                            week: '3',
                            opp: 'TEN',
                            oppRank: '32',
                            rankColor: 'green'
                        },
                        {
                            week: '4',
                            opp: 'MIN',
                            oppRank: '18',
                            rankColor: ''
                        },
                        {
                            week: '5',
                            opp: 'LAR',
                            oppRank: '21',
                            rankColor: ''
                        },
                        {
                            week: '6',
                            opp: 'ARI',
                            oppRank: '11',
                            rankColor: ''
                        },
                    ]
                }
            ]
        }
    }
});