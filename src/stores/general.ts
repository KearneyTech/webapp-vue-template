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
                    rank: '19',
                    schedule: [
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
                        {
                            week: '14',
                            opp: 'CAR',
                            oppRank: '31',
                            rankColor: 'green'
                        },
                    ]
                },
                {
                    team: 'Packers',
                    bye: '10',
                    rank: '17',
                    schedule: [
                        {
                            week: '3',
                            opp: 'TEN',
                            oppRank: '32',
                            rankColor: 'green'
                        },
                        {
                            week: '10',
                            opp: '',
                            oppRank: '',
                            rankColor: 'bye'
                        },
                        {
                            week: '11',
                            opp: '@CHI',
                            oppRank: '24',
                            rankColor: 'Green'
                        },
                        {
                            week: '12',
                            opp: 'SF',
                            oppRank: '23',
                            rankColor: 'Green'
                        },
                        {
                            week: '13',
                            opp: 'MIA',
                            oppRank: '27',
                            rankColor: 'Green'
                        }
                    ]
                },
                {
                    team: 'Saints',
                    bye: '12',
                    rank: '20',
                    schedule: [
                        {
                            week: '7',
                            opp: 'DEN',
                            oppRank: '28',
                            rankColor: 'Green'
                        },
                        {
                            week: '9',
                            opp: '@CAR',
                            oppRank: '29',
                            rankColor: 'Green'
                        },
                        {
                            week: '11',
                            opp: 'CLE',
                            oppRank: '29',
                            rankColor: 'Green'
                        },
                        {
                            week: '12',
                            opp: '',
                            oppRank: '',
                            rankColor: 'Bye'
                        },
                        {
                            week: '14',
                            opp: '@NYG',
                            oppRank: '30',
                            rankColor: 'Green'
                        }
                    ]
                },
                {
                    team: 'Seahawks',
                    bye: '10',
                    rank: '8',
                    schedule: [
                        {
                            week: '3',
                            opp: 'MIA',
                            oppRank: '26',
                            rankColor: 'Green'
                        },
                        {
                            week: '5',
                            opp: 'NYG',
                            oppRank: '30',
                            rankColor: 'Green'
                        },
                        {
                            week: '6',
                            opp: 'SF',
                            oppRank: '23',
                            rankColor: 'Green'
                        },
                        {
                            week: '10',
                            opp: '',
                            oppRank: '',
                            rankColor: 'Bye'
                        },
                        {
                            week: '11',
                            opp: 'SF',
                            oppRank: '23',
                            rankColor: 'Green'
                        }
                    ]
                }
            ]
        }
    }
});