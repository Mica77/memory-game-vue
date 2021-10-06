import { createStore } from 'vuex';
import axios from 'axios';
import arrayUtils from '@/utils/arrayUtils.js'

export default createStore({
  state: () => ({
    cards: [],
    loadingComplete: false,
    selectedCard: null,
    isLockForOpenCard: false
  }),
  getters: {
    randomCards(state) {
      return arrayUtils.shuffle(state.cards);
    },
  },
  mutations: {
    setLoading(state, bool) {
      state.loadingComplete = bool;
    },
    setCards(state, value) {
      state.cards = value;
    },
    openCard(state, value) {

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
        state.selectedCard = value
      }
      else {

        state.isLockForOpenCard = true

        //если это вторая часть хода
        const DELAY = 1000 //задержка, прежде чем отреагировать в мс

        setTimeout(() => {

          this.state.isLockForOpenCard = false

          if (state.selectedCard.cardId == value.cardId) {
            //если открыли такую же каточку - отметим обе isDone
            this.state.selectedCard.isDone = true
            this.state.selectedCard = null
            value.isDone = true
          }
          else {
            //если открыли не такую же каточку - закраваем обе карточки
            this.state.selectedCard.isOpen = false
            this.state.selectedCard = null
            value.isOpen = false
          }
        }, DELAY)

      }
    }
  },
  actions: {
    async fetchCards({ state, commit }) {

      try {
        const response = await axios.get('cards.json');

        let doubledCards = [...response.data, ...arrayUtils.deepClone(response.data)]

        doubledCards = doubledCards.map((card, ind) => ({
          id: ind,
          cardId: card.id,
          imageUrl: card.imageUrl
        }));
        commit('setCards', doubledCards);
      } finally {
        commit('setLoading', true);
      }
    },
  },
  modules: {
  },
});
