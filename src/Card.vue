<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<script>
export default {
  name: "Card",
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    incrementCount() {
      return (this.count += 1);
    },
		clearCount() {
			return (this.count = 0);

		}
  },
	computed: {
		
	},
};
</script>
<template>
  <div>
    <p class="text" @click="incrementCount">
      You clicked me "{{ count }}" times
    </p>
    <p class="text" @click="clearCount">Click to clear count</p>
  </div>
</template>
<style scoped>
.text {
  font-size: 20px;
  color: tomato;
}
</style>
