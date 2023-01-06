import { writable } from 'svelte/store'

export default function () {

	const loading = writable(false)
	const error = writable(false)
	const data = writable({})
	
	async function get(city = 'vernon') {
        let url = `https://myarmstrong.mystagingwebsite.com/wp-json/castanet/${city}`

		loading.set(true)
		error.set(false)
		try {
			const response = await fetch(url)
			data.set(await response.json())
		} catch(e) {
			error.set(e)
		}
		loading.set(false)
	}
	
	get()
	
	return [ data, loading, error, get]
}