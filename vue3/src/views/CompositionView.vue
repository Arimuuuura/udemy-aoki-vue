<template>
  <div>
	CompositionView
	<p>name: {{ name }}</p>
	<p>age: {{ age }}</p>
	<p>nameRef: {{ nameRef }}</p>
	<p>book.title: {{ book.title }}</p>
	<p>book.author: {{ book.author[0] }}</p>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'
export default {
	data() {},
	setup() {
		// console.log('setup');
		const name = '大谷'
		const age = 30

		// ref
		const nameRef = ref('有村');
		// script 内で扱う場合は .value で繋ぐ
		console.log(nameRef.value);

		// reactive
		const book = reactive({
			title: '本のタイトル',
			author: ['山田', '坂本']
		})
		console.table(book);

		return {
			name,
			age,
			nameRef,
			book,
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