<template>
  <div>PropsEmit</div>
  <div>{{ setUpBooks }}</div>
  <div>{{ dataBooks }}</div>

  <ul>
    <li v-for="book in setUpBooks" :key="book.title">
      title: {{ book.title }}
      author: {{ book.author }}
    </li>
  </ul>
  <ul>
    <li v-for="book in dataBooks" :key="book.title">
      title: {{ book.title }}
      author: {{ book.author }}
    </li>
  </ul>
</template>

<script>
export default {
	props: {
		setUpBooks: Array,
		dataBooks: Array
	},
	setup(props) {
		console.log(props.setUpBooks);
		console.log(props.dataBooks);
	},
}
</script>

<style>

</style>