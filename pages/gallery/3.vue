<template>

<div class="gallery uk-container" uk-filter="target: .js-filter">
<div class="gallery uk-grid uk-grid-medium uk-child-width-1-2@s uk-child-width-1-3@m  uk-text-center  js-filter" data-uk-grid="masonry: true">

<div v-for="photo in photos" :key="photo.id" :class="photo.data.tag">
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
</div>

</div>

<div v-for="(slice, index) in slices" :key="'slice-' + index" >
<template v-if="slice.slice_type === 'tags' " >
<sidebar :slice="slice"/>
<offcanvas :slice="slice"/>
</template>
</div>
  <ul class="uk-pagination uk-flex-center" uk-margin>
    <li><a href="/gallery">1</a></li>
    <li><a href="/gallery/2">2</a></li>
    <li><a class="uk-active" href="/gallery/3">3</a></li>
    <li><a href="/gallery/4">4</a></li>
  </ul>

</div>
</template>

<script>

import Sidebar from "~/components/Sidebar.vue";
import Offcanvas from "~/components/Offcanvas.vue";



export default {
name: "Gallery",
transition: "page",
components: {Sidebar, Offcanvas},
head () {
return {
title: 'Bill Funk Photo Gallery',
}
},
data() {
  return {
    slices: [],
  };
},
async asyncData({ $prismic, error }) {
try {

  const document = (await $prismic.api.getSingle('gallery')).data


  const galleryPhotos = await $prismic.api.query(

    $prismic.predicates.at("document.type", "photo"),
    { orderings : '[document.last_publication_date desc]' , pageSize : 25, page : 3},
  )

return {
  slices: document.body,
  photos: galleryPhotos.results,
};
} catch (e) {
error({ statusCode: 404, message: "Page not found" });
}
}
};

</script>
