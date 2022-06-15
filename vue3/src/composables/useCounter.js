import { computed } from 'vue'

// モジュール化
export default function useCounter (item) {
	const increment = () => {
		item.amount++
	}
	const decrement = () => {
		item.amount--
	}
	const totalPrice = computed(() => {
		return item.price * item.amount
	})

	return {
		increment,
		decrement,
		totalPrice
	}
}