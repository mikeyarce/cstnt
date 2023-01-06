<script>
    let darkmode = false;
    import { onMount } from "svelte";

    import { page } from '$app/stores';
    const isDark = $page.url.searchParams.has('dark');

    if ( isDark) {
        onMount(async () => {
            toggle();
        });
    }

    function toggle() {
        darkmode = !darkmode;
        window.document.body.classList.toggle('dark-mode')
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