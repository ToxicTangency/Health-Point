import { ref, computed, watch } from "vue";
import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", () => {
  const cart = ref([]);
  const quantity = computed(() => cart.value.length);

  const total = computed(() => {
    let sum = 0;
    cart.value.forEach((item) => {
      sum += item.price * item.quantity;
    });
    return sum;
  });

  if (localStorage.getItem("cart")) {
    cart.value = JSON.parse(localStorage.getItem("cart"));
  }

  watch(
    cart,
    (cart) => {
      localStorage.setItem("cart", JSON.stringify(cart));
    },
    { deep: true }
  );

  function add(dish) {
    const item = cart.value.find((item) => item._id === dish._id);
    if (item) {
      item.quantity += 1;
    } else {
      cart.value.push({ ...dish, quantity: 1 });
    }
  }

  function decrement(dish) {
    const item = cart.value.find((item) => item._id === dish._id);
    if (dish.quantity === 1) {
      const index = cart.value.findIndex((item) => item._id === dish._id);
      cart.value.splice(index, 1);
    } else {
      item.quantity--;
    }
  }

  function remove(dish) {
    const index = cart.value.findIndex((item) => item._id === dish._id);
    cart.value.splice(index, 1);
  }

  function clear() {
    cart.value.length = 0;
  }

  return { cart, quantity, total, add, decrement, remove, clear };
});
