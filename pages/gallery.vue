<template>

<div class="uk-section" uk-filter="target: .js-filter">
<div class="uk-container">

<div  v-for="(slice, index) in slices" :key="'slice-' + index" >
<template v-if="slice.slice_type === 'images'">
<gallery :slice="slice" />
<modals :slice="slice" />
</template>
  <template v-if="slice.slice_type === 'tags'">
    <sidebar :slice="slice"/>
    <offcanvas :slice="slice"/>
  </template>
</div>

</div>
</div>
</template>



<script>

import Gallery from "~/components/Gallery.vue";
import Modals from "~/components/Modals.vue";
import Sidebar from "~/components/Sidebar.vue";
import Offcanvas from "~/components/Offcanvas.vue";


export default {
name: "Home",
transition: "page",
props: ['slice' ],
components: {
Gallery, Modals, Sidebar, Offcanvas
},
head () {
return {
title: 'Bill Funk',
}
},
data () {
return {
slices: []
}
},
async asyncData({ $prismic, error }) {
try {
const document = (await $prismic.api.getSingle('gallery')).data

return {
  slices: document.body
};
} catch (e) {
error({ statusCode: 404, message: "Page not found" });
}
}
};
</script>





