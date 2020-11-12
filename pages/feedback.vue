<template>

<div>

<div class="uk-section">
<div class="uk-container  uk-position-relative">

<h1 class="uk-heading-medium uk-width-1-1 uk-text-left"><prismic-rich-text :field="feedback.title"/></h1>

<div class="uk-flex-middle uk-grid-small" uk-grid>
<div class="uk-width-1-1@m content">
<prismic-rich-text :field="feedback.text"/>
</div>
<div class="uk-width-1-1@m uk-flex-first uk-margin-medium-bottom">
<img :data-src="feedback.image.url" width="100%" height="" uk-img>
</div>
</div>


<div id="comments"></div>
<div id="graphcomment"></div>

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
  name: "Feedback",
  transition: "page",
  head: {
    title: 'Bill Funk - Feedback',
  },
  mounted() {
    window.gc_params = {
      graphcomment_id: 'Bill-Funk',
      fixed_header_height: 100,
    };
    (function() {
      var gc = document.createElement('script'); gc.type = 'text/javascript'; gc.async = true;
      gc.src = 'https://graphcomment.com/js/integration.js?' + Math.round(Math.random() * 1e8);
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(gc);
    })();
  },
  async asyncData({ $prismic, error }) {
    try {
      const feedback = (await $prismic.api.getSingle('feedback')).data

      return {
        feedback
      };
    } catch (e) {
      error({ statusCode: 404, message: "Page not found" });
    }
  }
}
</script>





