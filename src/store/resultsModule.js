import formatUtils from '@/utils/formatUtils.js'

export const resultsModule = {
    state: () => ({
        resultsArray: []
    }),
    getters: {
        results(state) {
            return state.resultsArray
        },
        bestTimerValue(state) {
            const valuesArray = state.resultsArray.map((item) => item.timerValue)
            return Math.min(...valuesArray)
        }
    },
    mutations: {
        add(state, value) {
            state.resultsArray.push(value)
        }
    },
    actions: {
        addResult({ state, commit }, value) {

            const result = {
                id: state.resultsArray.length + 1,
                timerValue: value,
                timerText: formatUtils.formatTimer(value)
            }

            commit('add', result)
        }
    }
}
