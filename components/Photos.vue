<template>
<a  :href="'/gallery/' + photo.uid"  uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay: 800; repeat: true">
<div class="uk-card uk-transition-toggle">
<div class="uk-card-media-top">
<prismic-image :field="photo.data.photo.small"/>
</div>
<div class="uk-transition-fade uk-position-cover uk-overlay uk-overlay-primary uk-flex uk-flex-center uk-flex-middle">
<span class="uk-transition-fade" uk-overlay-icon="icon: plus; ratio: 2"></span>
</div>
</div>
<h3>{{ $prismic.asText(photo.data.title) }}</h3>
</a>
</template>
<script>

export default {
  props: ['photo'],
  name: "photos",
}
</script>
