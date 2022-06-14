<template>
  <div>
	CompositionView
	<p>name: {{ name }}</p>
	<p>age: {{ age }}</p>
  </div>
</template>

<script>
export default {
	data() {},
	setup() {
		// console.log('setup');
		const name = '大谷'
		const age = 30

		return {
			name,
			age
		}
	},
	created() {
		console.log('created');
	},
	mounted() {
		console.log('mounted');
	},
}
</script>

<style>

</style>