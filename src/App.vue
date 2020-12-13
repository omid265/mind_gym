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
  mounted() {
    // if ("serviceWorker" in navigator) {
    //   navigator.serviceWorker
    //     .register("./registerServiceWorker.js", { scope: "." })
    //     .then((result) => {
    //       console.log('Service worker registerd!',result);
    //     })
    //     .catch((err) => {
    //       console.log('service worker registerd has Error', err);
    //     });
    // }
    // window.addEventListener("beforeinstallprompt", function (event) {
    //   console.log('beforeinstallprompt fired', event);
    //   event.preventDefault();
    //   let deferredPrompt = event;
    //   console.log('beforeinstallprompt fired - deferredPrompt', deferredPrompt);

    //   return false;
    // });
  },
};
</script>
