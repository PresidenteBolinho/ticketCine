<template>
  <div>
    <Room />
    <Checkout />
  </div>
</template>

<script>
import Room from "@/components/Tickets/Room.vue";
import Checkout from "@/components/Tickets/Checkout.vue";

export default {
  name: "Tickets",
  components: {
    Room,
    Checkout,
  },
};
</script>