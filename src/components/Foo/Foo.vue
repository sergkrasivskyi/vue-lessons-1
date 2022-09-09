<template src="./template.html"></template>

<script setup>
let isToggle = true;
</script>
<script>
export default {
  name: "Foo",
  data() {
    return {
      title: "Im Foo component",
      // toggled: true,
    };
  },
};
</script>

<style lang="scss" scoped src="./style.scss"></style>
<style lang="scss" module="classes">
.title {
	color: tomato;
  background-color: mediumspringgreen;
}
.titleinvert {
  background-color: tomato;
  color: mediumspringgreen;
}
</style>
<style module="fonts"	>
	.titleinvert {
		font-size: 7rem;
	}
	.title {
		font-size: 5rem;
	}
</style>