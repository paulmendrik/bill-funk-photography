<template>
<a href={photo.data.uid}   class="{photo.data.tag} uk-transition-toggle" uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay: 800; repeat: true" >
<div class="uk-card">
<div class="uk-card-media-top">
  <prismic-image :field="photo.data.photo"/>
</div>
<div class="uk-transition-fade uk-position-cover uk-overlay uk-overlay-primary uk-flex uk-flex-center uk-flex-middle">
<span class="uk-transition-fade" uk-overlay-icon="icon: plus; ratio: 2"></span>
</div>
</div>
  <h3>{{ $prismic.asText(photo.data.title) }}</h3>
</a>
</template>
<script>
import LinkResolver from "~/plugins/link-resolver.js";

export default {
  props: ['photo'],
  name: "photos",
  data: function() {
    return {
      link: "",
    }
  },
  created() {
    this.link = LinkResolver(this.photo)
  }
};

</script>
