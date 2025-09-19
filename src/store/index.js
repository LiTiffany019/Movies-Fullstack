import { defineStore } from "pinia";

//stores purchased movie information
export const useMovieStore = defineStore("store", {
  state: () => ({
    movies: [],
    cart: [],
  }),
  actions: {
    addToCart(poster, title) {
      this.cart.push({
        poster,
        title,
      });
    },
  },
});
