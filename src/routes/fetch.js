import { writable, get as getStoreValue } from 'svelte/store'

export default function () {
	const loading = writable(false)
	const error = writable(false)
	const data = writable({})
	const currentCity = writable('vernon') // Default city
	
	// Check if we're in a browser environment
	const isBrowser = typeof window !== 'undefined'
	
	// Initialize from localStorage if available
	if (isBrowser) {
		const savedCity = localStorage.getItem('selectedCity')
		if (savedCity) {
			currentCity.set(savedCity)
		}
	}
	
	async function get(city = null) {
		// If a city is provided, update currentCity and localStorage
		if (city) {
			currentCity.set(city)
			if (isBrowser) {
				localStorage.setItem('selectedCity', city)
			}
		}
		
		// Use either the provided city or the current one from the store
		const cityToFetch = city || getStoreValue(currentCity)
        let url = `https://myarmstrong.mystagingwebsite.com/wp-json/castanet/${cityToFetch}`

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
	
	// Initial fetch using the current city from localStorage or default
	get()
	
	return [ data, loading, error, get, currentCity]
}