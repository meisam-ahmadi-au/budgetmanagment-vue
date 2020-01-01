<template>
  <div class="contianer">
    <h1>The Home Page</h1>
    <p>id is: {{ id }}</p>
    <ul class="nav nav-pills">
      <router-link to="/user/1" tag="li" active-class="active" exact
        ><a>User1</a></router-link
      >
      <router-link to="/user" tag="li" active-class="active" exact
        ><a>UserWithout ID</a></router-link
      >
      <router-link to="/user/2" tag="li" active-class="active" exact
        ><a>User2</a></router-link
      >
      <router-link to="/" tag="li" active-class="active" exact
        ><a>Home</a></router-link
      >
    </ul>
    <hr />
    <router-view />
    <hr />
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur
      laudantium vero nam fugit odit neque, sunt, quibusdam mollitia enim cumque
      temporibus, ducimus cupiditate aliquam illum accusantium ullam impedit
      fuga molestiae?
    </p>
    <button @click="navigateToHome">navigate to home</button>
  </div>
</template>

<script>
export default {
  data() {
    return {id: this.$route.params.id};
  },
  methods: {
    navigateToHome() {
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 90%;
  margin: auto;
  border: 1px solid black;
  /* text-align: center;  */
}

.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: all 1s;
}

.fade-leave {
}

.fade-leave-active {
  transition: all 1s;
}

.fade-leave-active {
  opacity: 0;
}
</style>
