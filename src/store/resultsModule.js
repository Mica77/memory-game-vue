import formatUtils from '@/utils/formatUtils.js'

export const resultsModule = {
    state: () => ({
        resultsArray: []
    }),
    getters: {
        reversedResults(state) {
            return [...state.resultsArray].reverse()
        }
    },
    mutations: {
        addResult(state, value) {
            state.resultsArray.push(value)
            console.log(state.resultsArray)
            localStorage.setItem('results', JSON.stringify(state.resultsArray))
        }
    },
    actions: {
        addResult({ state, commit }, value) {

            const result = {
                id: state.resultsArray.length + 1,
                timerValue: value,
                timerText: formatUtils.formatTimer(value)
            }

            commit('addResult', result)
        },
        fetchResults({ state, commit }) {
            let results = localStorage.getItem('results');
            if (results) {
                try {
                    let arr = JSON.parse(results)
                    if (Array.isArray(arr))
                        state.resultsArray = arr
                }
                catch { }
            }
        }
    }
}
