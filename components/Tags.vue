<template>
<li uk-filter-control="filter: .{PrismicDOM.RichText.asText(tag.data.tag)}">
<a class="uk-link-toggle" href="">{PrismicDOM.RichText.asText(tag.data.name)}</a>
</li>
</template>

<script>

export default {
  props: ["tag"],
  name: "Tags",
};

</script>
