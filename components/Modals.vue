<template>
<div>
<div  v-for="(item, i) in slice.items" :key="i" v-bind:id="'slice-' + i" class="uk-modal-container" uk-modal>
<div class="uk-modal-dialog uk-modal-body">
<button class="uk-modal-close-full uk-close-large" type="button" uk-close></button>
<div class="uk-card">
<div class="uk-card-body">
<h1 class="cat">{{item.tag}}</h1>
<h1><prismic-rich-text :field="item.caption"/></h1>
<prismic-rich-text :field="item.details"/>
</div>
<div class="uk-card-media-bottom">
<div class="uk-flex uk-flex-center main">
<a :href="item.image.url"><img :data-src="item.image.url" width="" height="" uk-img></a>
</div>
</div>
</div>

</div>
</div>
</div>
</template>

<script>
export default {
  props: ['slice'],
  name: 'modals'
}
</script>

