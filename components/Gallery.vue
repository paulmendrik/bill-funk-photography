<template>

<div class="gallery uk-container uk-grid uk-grid-medium uk-child-width-1-2@s uk-child-width-1-3@m  uk-flex-center uk-text-center uk-grid-match   js-filter" data-uk-grid="masonry: true">
<a  v-for="(item, i) in slice.items" :key="i" :href="'#slice-' + i"  :class="item.tag" uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay: 800; repeat: true" uk-toggle>
<div class="uk-card uk-card uk-card-default uk-transition-toggle uk-light">
<div class="uk-card-media-top">
<img :data-src="item.image.url" width="" height="" uk-img>
</div>
<div class="uk-card-body">
<h3 class="uk-card-title"><prismic-rich-text :field="item.caption"/></h3>
</div>
<div class="uk-transition-fade uk-position-cover uk-overlay uk-overlay-primary uk-flex uk-flex-center uk-flex-middle">
<span class="uk-transition-fade" uk-overlay-icon="icon: plus; ratio: 2"></span>
</div>
</div>

</a>

</div>
</template>


<script>
export default {
props: ['slice'],
name: 'gallery'
}
</script>




