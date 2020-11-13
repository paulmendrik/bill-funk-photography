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


<div id="comments">
    <button v-on:click="isHidden = !isHidden" class="uk-button uk-margin" type="button">Send Feedback</button>
    <div v-if="!isHidden" class="form uk-margin">
      <form  class="uk-grid-small uk-child-width-1-2@m uk-form-stacked" method="POST" action="https://formspree.io/f/xwkwqlge" uk-grid>
        <fieldset class="uk-fieldset">
          <legend class="uk-legend">Add Comment</legend>
        <div class="uk-margin">
          <label class="uk-form-label">Name</label>
          <div class="uk-form-controls">
          <input class="uk-input" type="text" name="name" id="full-name" placeholder="Name" required="">
          </div>
        </div>
        <div class="uk-margin">
          <label class="uk-form-label" for="form-stacked-select">Email</label>
          <div class="uk-form-controls">
          <input class="uk-input" type="email" name="_replyto" id="email-address" placeholder="Email Address" required="">
          </div>
        </div>
        <div class="uk-margin">
          <label class="uk-form-label">Comment</label>
          <div class="uk-form-controls">
          <textarea uk-textarea rows="5" name="message" id="message" placeholder="Comment" required=""></textarea>
          </div>
        </div>
          <input type="hidden" name="_subject" id="email-subject" value="Feedback Submission">
        <div class="uk-margin">
          <div class="uk-form-controls">
          <input class="uk-button" type="submit" value="Send">
          </div>
        </div>
        </fieldset>
      </form>
    </div>


  <div v-for="(slice, index) in slices" :key="'slice-' + index" >
    <template v-if="slice.slice_type === 'comments' " >
      <comments :slice="slice"/>
    </template>
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

import Comments from "~/components/Comments.vue";


export default {
  name: "Feedback",
  transition: "page",
  components: {Comments},
  head: {
    title: 'Bill Funk - Feedback',
  },
  data() {
    return {
      isHidden: true,
      slices: [],
    };
  },
  async asyncData({ $prismic, error }) {
    try {
      const feedback = (await $prismic.api.getSingle('feedback')).data
      const document = (await $prismic.api.getSingle('comments')).data

      return {
        feedback,
        slices: document.body,
      };
    } catch (e) {
      error({ statusCode: 404, message: "Page not found" });
    }
  }
}
</script>

<style>

</style>





