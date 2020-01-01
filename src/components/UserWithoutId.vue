<template>
  <div>User User without id is loading...: {{ this.id }}</div>
</template>
<script>
export default {
  data() {
    return {id: this.$route.params.id};
  },
  watch: {
    $route(to, from) {
      if (from.params.id === this.id) this.id = to.params.id;
    },
  },
};
</script>
