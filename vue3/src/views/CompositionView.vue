<template>
  <div>
	CompositionView
	<p>name: {{ name }}</p>
	<p>age: {{ age }}</p>
	<p>nameRef: {{ nameRef }}</p>
	<p>book.title: {{ book.title }}</p>
	<p>book.author: {{ book.author[0] }}</p>
	<button @click="btnClick">Click</button>
	<p>computed: {{ totalPrice }}</p>
	<div>watch:
		<input type="text" v-model="search"/>
	</div>
	<div>watchEffect:
		<input type="text" v-model="searchEffect"/>
	</div>
  </div>
</template>

<script>
import { ref, reactive, computed, watch, watchEffect, onMounted } from 'vue'
export default {
	data() {},
	setup() {
		console.log('setup');
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

		// setup 関数内でメソッドを定義
		const btnClick = (e) => {
			console.log(book.title);
			console.log(e);
		}

		// computed リアルタイムで変更したい内容
		const item = reactive({
			price: 100,
			number: 1
		})
		const totalPrice = computed(() => {
			return item.price * item.number
		});

		// watch -> 引数２個
		const search = ref('')
		watch(search, (newVal, oldVal) => {
			console.log(`watch: ${search.value}`);
			console.log(`new: ${newVal}`);
			console.log(`old: ${oldVal}`);
		})

		// watchEffect -> 引数1個
		const searchEffect = ref('')
		watchEffect(() => {
			console.log(`watchEffect: ${searchEffect.value}`);
		})

		// onMounted -> 少し遅れて実行される
		onMounted(() => {
			console.log('onMounted');
		})

		return {
			name,
			age,
			nameRef,
			book,
			btnClick,
			item,
			totalPrice,
			search,
			searchEffect,
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