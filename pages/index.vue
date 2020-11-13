<template>
<div class="overlay" :class="{ toggle: clicked }">
<div class="uk-navbar-container uk-navbar-transparent" uk-sticky>
<div class="uk-container uk-container-expand">
<nav class="uk-navbar">
<div class="uk-navbar-left"><a href="/" class="uk-navbar-item uk-logo"><h1>Bill Funk</h1></a></div>
<div class="uk-navbar-right">
</div>
</nav>
</div>
</div>
<div class="bottom">
  <p>"This is not a virus. It’s a highly contagious Shutterbug. And I got bitten."</p>
<a href="/gallery" class="uk-button" @click="clicked = !clicked">Enter</a>
</div>
</div>
</template>

<script>

export default {
  name: "Intro",
  transition: "page",
  layout: "home",
  head() {
    return {
      script: [
        { src: 'https://imouse.net/js/tools.js', defer: true,},
        { src: 'https://imouse.net/js/script.js', defer: true}
      ],
    }
  },
  data () {
    return {
      clicked: false
    }
  }
}

</script>
