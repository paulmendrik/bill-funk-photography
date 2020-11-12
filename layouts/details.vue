<template>
<div>
<div class="uk-navbar-container uk-navbar-transparent" uk-sticky>
<div class="uk-container uk-container-expand">
<nav class="uk-navbar">
<div class="uk-navbar-left"><a href="/" class="uk-navbar-item uk-logo"><h1>Bill Funk</h1></a></div>
<div class="uk-navbar-right close">
  <a @click="$router.go(-1)" ><span uk-icon="icon: close; ratio: 2"></span></a>
</div>
</nav>
</div>
</div>
<Nuxt />
<Footer/>
</div>
</template>

<script>

import Footer from "~/components/Footer";

export default {
  components: {Footer},
}

</script>
