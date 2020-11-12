<template>

<div class="uk-container">
<div class="uk-container uk-grid-collapse uk-child-width-1-1 uk-flex-middle" uk-grid>

<div class="details">
  <h1 class="cat">{{ document.tag }}</h1>
  <h1>{{ $prismic.asText(document.title) }}</h1>
  <prismic-rich-text :field="document.content" />
</div>

<div class="image uk-margin-large-top" uk-lightbox>
  <prismic-link :field="document.photo">
  <prismic-image :field="document.photo"/>
  </prismic-link>
</div>

</div>
</div>

</template>

<script>



export default {
  name: "Photo",
  transition: "page",
  layout: "details",
  head () {
    return {
      title: 'Bill Funk Photo Gallery',
    }
  },
  async asyncData({ $prismic, params, error }) {
    try {
      const post = (await $prismic.api.getByUID('photo', params.uid)).data


      return {
        document: post,
      };
    } catch (e) {
      error({ statusCode: 404, message: "Page not found" });
    }
  }
};

</script>
