import formatUtils from '@/utils/formatUtils.js'

export const resultsModule = {
    state: () => ({
        resultsArray: []
    }),
    getters: {
        results(state) {
            return [...state.resultsArray].reverse()
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
