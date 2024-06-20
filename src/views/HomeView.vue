<template>
  <div class="home">
    <Parent />
  </div>
</template>

<script>
// @ is an alias to /src
import Parent from '@/components/Parent.vue';

export default {
  name: 'HomeView',
  components: {
    Parent
}
}
</script>
