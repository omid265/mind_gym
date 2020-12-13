<template>
  <v-app>
    <!-- <AppBar/> -->

    <v-main>
      <div style="max-width: 600px" class="mx-auto">
        <router-view></router-view>
      </div>
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
// // import AppBar from './components/AppBar'

export default {
  name: "App",

  components: {
    // HelloWorld,
    // AppBar
  },

  data: () => ({
    //
  }),
};
</script>
