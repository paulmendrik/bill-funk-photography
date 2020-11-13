<template>
<div>
<ul class="uk-comment-list">
  <h3>Comments</h3>
<div v-for="(item, i) in slice.items" :key="i" >
<li>
<article class="uk-comment uk-visible-toggle" tabindex="-1">
<header class="uk-comment-header uk-position-relative">
<div class="uk-grid-medium uk-flex-middle" uk-grid>
<div class="uk-width-auto">
<img class="uk-comment-avatar" src="/icon.png" width="80" height="80" alt="icon">
</div>
<div class="uk-width-expand">
<h4 class="uk-comment-title uk-margin-remove"><a class="uk-link-reset" href="#"><prismic-rich-text :field="item.name" /></a></h4>
<p class="uk-comment-meta uk-margin-remove-top"><a class="uk-link-reset" href="#">{{ Intl.DateTimeFormat('en-GB', dateOptions).format(new Date(item.date)) }}</a></p>
</div>
</div>
</header>
<div class="uk-comment-body">
  <p class="uk-heading-medium">Comment</p>
<prismic-rich-text :field="item.comment" />
  <p class="uk-heading-medium">Response</p>
<prismic-rich-text :field="item.reply" />
</div>
</article>
</li>
</div>
</ul>
</div>
</template>

<script>


export default {
  props: ['slice'],
  name: 'comments',
  data () {
    return {
      dateOptions: { year: 'numeric', month: 'short', day: '2-digit' },
    }
  },
}


</script>
