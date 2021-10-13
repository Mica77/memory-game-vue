import axios from 'axios';
import arrayUtils from '@/utils/arrayUtils.js'

export const cardsModule = {
  state: () => ({
    initialCards: [],
    loadingComplete: false,
    selectedCard: null,
    isLockForOpenCard: false,
    cards: [],
    cardFaceDownUrl: './img/cardFaceDown.JFIF'
  }),
  getters: {
    gameIsOver(state) {
      return !state.cards.some((card) => !card.isDone)
    }
  },
  mutations: {
    setLoadingComplete(state, value) {
      state.loadingComplete = value;
    },
    setIinitialCards(state, value) {
      state.initialCards = value;
    },
    setSelectedCard(state, value) {
      state.selectedCard = value
    },
    setIsLockForOpenCard(state, value) {
      state.isLockForOpenCard = value
    },
    setCards(state, value) {
      state.cards = value
    }
  },
  actions: {
    async fetchCards({ state, commit, dispatch }) {

      try {
        const response = await axios.get('cards.json')

        commit('setIinitialCards', response.data)
        dispatch('shuffleCards')
      } finally {
        commit('setLoadingComplete', true);
      }
    },
    openCard({ state, commit, dispatch, rootState }, value) {

      if (!rootState.game.gameIsStarted) {
        dispatch('startGame')
      }

      if (state.isLockForOpenCard) {
        //пока находимся в ожидании реакции на предыдущее действие - игнорируем
        return
      }

      if (value.isDone) {
        //если карточка уже проигралась - игнорируем
        return
      }

      value.isOpen = true

      if (!state.selectedCard) {
        //если это начало хода, то запомним открытую карточку
        commit('setSelectedCard', value)
      }
      else {

        commit('setIsLockForOpenCard', true)

        //если это вторая часть хода
        const DELAY = 1000 //задержка, прежде чем отреагировать

        setTimeout(() => {

          commit('setIsLockForOpenCard', false)

          if (state.selectedCard.cardId == value.cardId) {
            //если открыли такую же карточку - отметим обе isDone
            state.selectedCard.isDone = true
            value.isDone = true
          }
          else {
            //если открыли не такую же карточку - закрываем обе карточки
            state.selectedCard.isOpen = false
            value.isOpen = false
          }

          commit('setSelectedCard', null)
        }, DELAY)

      }
    },
    shuffleCards({ state, commit, dispatch }) {

      let doubledCards = [...state.initialCards, ...arrayUtils.deepClone(state.initialCards)]

      doubledCards = doubledCards.map((card, ind) => ({
        id: ind,
        cardId: card.id,
        imageUrl: card.imageUrl
      }));

      doubledCards = arrayUtils.shuffle(doubledCards)
      commit('setCards', doubledCards);
    }
  }
}
