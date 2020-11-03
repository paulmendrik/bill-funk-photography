<template>

<div>

<div class="uk-section">
<div class="uk-container  uk-position-relative">

<div class="uk-flex-middle" uk-grid>
<div class="uk-width-1-2@m text">
<h3 class="title"><prismic-rich-text :field="about.title"/></h3>
<prismic-rich-text :field="about.text"/>
</div>
<div class="uk-width-1-2@m uk-flex-first">
<img :data-src="about.image.url" width="" height="" uk-img>
</div>
</div>

</div>
</div>

<div class="sidebar-left">
<ul class="uk-nav uk-nav-default">
<li><a href="/">Intro</a></li>
<li><a href="/gallery" >Gallery</a></li>
<li><a href="/about" >About</a></li>
<li><a href="/feedback" >Feedback</a></li>
</ul>
</div>

<div id="offcanvas" uk-offcanvas="mode: push; overlay: true" class="uk-offcanvas">
<div class="uk-offcanvas-bar">
<button class="uk-offcanvas-close" type="button" uk-close></button>
<div class="uk-panel">
<ul class="uk-nav uk-nav-default">
<li><a href="/">Intro</a></li>
<li><a href="/gallery" >Gallery</a></li>
<li><a href="/about" >About</a></li>
<li><a href="/feedback" >Feedback</a></li>
</ul>
</div>
</div>
</div>


</div>
</template>

<script>

export default {
  name: "About",
  transition: "page",
  head () {
    return {
      title: 'Bill Funk - About Me',
    }
  },
  data () {
    return {
      slices: []
    }
  },
  async asyncData({ $prismic, error }) {
    try {
      const about = (await $prismic.api.getSingle('about')).data

      return {
        about
      };
    } catch (e) {
      error({ statusCode: 404, message: "Page not found" });
    }
  }
};
</script>


