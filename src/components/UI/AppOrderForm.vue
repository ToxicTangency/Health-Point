<template>
  <div class="order__form w-full">
    <AppHeading class="my-14">
      <template #titleBack> cart </template>
      <template #title> Checkout </template>
    </AppHeading>
    <form class="flex flex-col">
      <div class="form__row flex flex-wrap md:flex-nowrap justify-between my-4">
        <div class="flex flex-col w-full mx-4">
          <label for="phone" class="">Phone</label>
          <input
            class="text-black rounded-xl p-3 my-1"
            type="phone"
            name="phone"
            id="phone"
            v-model="orderPhone"
            @change="setPhone"
            placeholder="Enter your phone"
            required
          />
        </div>
        <div class="flex flex-col w-full mx-4">
          <label for="name" class="">Name</label>
          <input
            class="text-black rounded-xl p-3 my-1"
            type="text"
            name="name"
            id="name"
            v-model="orderName"
            @change="setName"
            placeholder="Enter your name"
            required
          />
        </div>
      </div>
      <div class="form__row flex justify-between my-4">
        <div class="flex flex-col w-full mx-4">
          <label for="address" class="">Address</label>
          <input
            class="text-black rounded-xl p-3 my-1"
            type="text"
            name="address"
            id="address"
            v-model="orderAddress"
            @change="setAddress"
            placeholder="Enter your address"
            required
          />
        </div>
      </div>
      <div class="form__row flex justify-between my-4">
        <div class="flex flex-col mx-4 w-full">
          <label for="comment" class="">Comment</label>
          <textarea
            class="text-black rounded-xl p-3 my-1"
            name="comment"
            id="comment"
            cols="30"
            rows="10"
            v-model="orderComment"
            @change="setComment"
            placeholder="Text a comment, if it needed"
            required
          >
          </textarea>
        </div>
      </div>
      <!-- <div class="form__row flex justify-between">
        <input
          class=""
          type="radio"
          name="payment"
          id="card"
          value="card"
          v-model="orderPayment"
        />
        <input
          class=""
          type="radio"
          name="payment"
          id="cash"
          value="cash"
          v-model="orderPayment"
        />
      </div> -->
      <AppButton class="mx-auto my-14" @click.prevent="makeOrder">
        Make Order
      </AppButton>
    </form>
  </div>
</template>

<script setup>
import AppButton from "./AppButton.vue";
import Sclient from "../../lib/client";
import { ref, computed, watch } from "vue";
import { useCartStore } from "../../stores/cart";
import { useRouter } from "vue-router";
import AppHeading from "./AppHeading.vue";

const store = useCartStore();
const router = useRouter();
const orderPhone = ref("");
const orderName = ref("");
const orderAddress = ref("");
const orderComment = ref("");
const orderTotal = computed(() => {
  return ref(store.total);
});

const orderDishes = ref([]);
orderDishes.value = store.cart.map((item) => ({
  dish: item.title,
  quantity: item.quantity,
  _key: item._id,
}));
watch(store.cart, () => {
  orderDishes.value = store.cart.map((item) => ({
    dish: item.title,
    quantity: item.quantity,
    _key: item._id,
  }));
});

const client = Sclient.client;
const order = computed(() => {
  return ref({
    _type: "orders",
    status: "created",
    phone: orderPhone.value,
    name: orderName.value,
    address: orderAddress.value,
    comment: orderComment.value,
    payment: "card",
    total: orderTotal.value,
    dishes: orderDishes.value,
  });
});

const setPhone = () => {
  order.value.phone = orderPhone.value;
};
const setName = () => {
  order.value.name = orderName.value;
};
const setAddress = () => {
  order.value.address = orderAddress.value;
};
const setComment = () => {
  order.value.comment = orderComment.value;
};
const makeOrder = () => {
  if (order.value.value) {
    client.create(order.value.value).then((res) => {
      console.log(`Order was created, document ID is ${res._id}`);
      store.clear();
      router.push("/thank-you");
    });
  } else {
    alert("Phone missing");
  }
};
</script>

<style lang="scss" scoped></style>
