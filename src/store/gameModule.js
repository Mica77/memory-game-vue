import formatUtils from '@/utils/formatUtils.js'

export const gameModule = {
    state: () => ({
        timerValue: 0,
        gameIsStarted: false
    }),
    getters: {
        timerText(state) {
            return formatUtils.formatTimer(state.timerValue)
        },
        allowStartGame(state) {
            return !state.gameIsStarted || state.gameIsOver
        }
    },
    mutations: {
        setTimerValue(state, value) {
            state.timerValue = value
        },
        setGameIsStarted(state, value) {
            state.gameIsStarted = value
        }
    },
    actions: {
        startGame({ state, commit, dispatch, rootGetters, }) {

            if (rootGetters.gameIsOver) {
                //если предыдущая игра закончена
                dispatch('shuffleCards')
            }

            commit('setTimerValue', 0);
            commit('setGameIsStarted', true);


            let timer = setInterval(function () {

                commit('setTimerValue', state.timerValue + 1);

                if (rootGetters.gameIsOver) {
                    // Игра закончилась
                    clearInterval(timer)
                    dispatch('stopGame')
                }
            }, 1000)
        },
        stopGame({ state, commit, dispatch }) {
            commit('setGameIsStarted', false);
            dispatch('addResult', state.timerValue);
        }
    }
}
