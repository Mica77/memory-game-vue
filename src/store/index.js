import { createStore } from 'vuex';
import { cardsModule } from './cardsModule'
import { gameModule } from './gameModule';
import { resultsModule } from './resultsModule';

export default createStore({
  modules: {
    cards: cardsModule,
    game: gameModule,
    results: resultsModule
  }
})
