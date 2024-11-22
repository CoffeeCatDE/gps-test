import { defineStore } from 'pinia';

export const useCounterStore = defineStore('maineStore', {
    state: () => ({ count: 0, name: 'Bitte gebe deinen Namen ein' }),
    getters: {
      // countLengthOfWord: (state) => state.count * 2,
    },
    actions: {
      countLengthOfWord() {
        this.count = this.name.length;
      },
       clearInputField () {
        console.log("clear");
        this.name = "";
        this.count = 0;
      }
      
    },
  })