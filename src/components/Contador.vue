<template>
    <div>
      <p>Contador: {{ count }}</p>
      <button class="incrementar" @click="increment">Incrementar</button>
      <button class="decrementar" @click="decrement">Decrementar</button>
    </div>
</template>
  
  <script>
  export default {
    computed: {
      count() {
        return this.$store.state.count;
      },
    },
    methods: {
      increment() {
        this.$store.commit('increment');
      },
      decrement() {
        this.$store.commit('decrement');
      },
    },
  };
  </script>
  