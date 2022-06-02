<template>
  <div class="red-b">
    Testです
    {{ testData }}
  </div>
</template>

<script>
export default {
	name: 'TestComponent',
	data() {
		return {
			testData: 'Test data です'
		}
	}
}
</script>

<style scoped>
.red-b {
	border: 1px red solid;
}
</style>