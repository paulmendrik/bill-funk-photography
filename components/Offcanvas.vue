<template>

<div>
<div id="offcanvas" uk-offcanvas="mode: push; overlay: true" class="uk-offcanvas">
<div class="uk-offcanvas-bar uk-flex uk-flex-column">
<button class="uk-offcanvas-close" type="button" uk-close></button>
<ul class="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
<li><a href="/">Intro</a></li>
<li><a href="/gallery" >Gallery</a></li>
<li><a href="/about" >About</a></li>
<li><a href="/feedback" >Feedback</a></li>
</ul>
</div>
</div>

</div>
</template>

<script>


export default {
  props: ['slice'],
  name: 'offcanvas',
}

</script>

