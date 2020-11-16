<template>
<div>

<div uk-sticky="show-on-up: true; animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
<nav class="uk-navbar-container uk-navbar-transparent" >
<div class="uk-container uk-container-expand">
<div uk-navbar="dropbar: true; dropbar-anchor: !.uk-navbar-container">
<div class="uk-navbar-left"><a href="/" class="uk-navbar-item uk-logo"><h1>Bill Funk</h1></a></div>
<div class="uk-navbar-right"><a href="" uk-toggle="target: #offcanvas"><span uk-icon="icon: menu; ratio: 2"></span></a></div>
</div>
</div>
</nav>
</div>

</div>
</template>

<script>

export default {
  name: 'Header',
}

</script>

