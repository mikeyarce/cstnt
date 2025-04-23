<script>
    import { onMount } from "svelte";
    import { page } from '$app/stores';
    
    let darkmode = false;
    
    onMount(() => {
        // Check localStorage first
        const storedPreference = localStorage.getItem('darkmode');
        if (storedPreference !== null) {
            darkmode = storedPreference === 'true';
            if (darkmode) {
                window.document.body.classList.add('dark-mode');
            }
        } else {
            // Fall back to URL param if no localStorage value
            darkmode = $page.url.searchParams.has('dark');
            if (darkmode) {
                window.document.body.classList.add('dark-mode');
            }
        }
    });

    function toggle() {
        darkmode = !darkmode;
        window.document.body.classList.toggle('dark-mode');
        // Save preference to localStorage
        localStorage.setItem('darkmode', darkmode.toString());
    }
</script>

<button on:click={toggle}>
    {#if darkmode }
		light mode
	{:else}
		dark mode
	{/if}
</button>

<style>
    button {
        background-color: black;
        color: white;
        border: none;
        border-radius: 4px;
        padding: 0.4rem;
        position: absolute;
        top: 30px;
        right: 30px;
    }
    :global(body.dark-mode) button {
        background-color: rgb(255, 252, 252);
        color: rgb(0, 0, 0);
    }
</style>