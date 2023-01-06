<script>
    import fetchStore from './fetch.js'
    const [data, loading, error, get] = fetchStore();
    import Toggle from './Toggle.svelte';   

</script>

<h1>cstnt</h1>

<Toggle />

<div class="cities">
    <button on:click={() => get("vernon")}>Vernon</button>
    <button on:click={() => get("kelowna")}>Kelowna</button>
    <button on:click={() => get("penticton")}>Penticton</button>
    <button on:click={() => get("kamloops")}>Kamloops</button>
</div>

    {#if $loading}
    <p>Loading... </p>
    {:else if $error}
        Error: {$error}
    {:else}
    <ul>
        {#each $data as { title, link, byline }}
        <li>
            <a href={link} target="_blank" rel="noreferrer noopener">
                {title}
            </a>
            <span>{byline}</span>
        </li>
        {/each}
    </ul>
{/if}


<style>
    h1 {
        margin-left: 1em;
    }
    .cities {
        margin-left: 2em;
        margin-bottom: 25px;
    }
    li {
        list-style: decimal;
        margin-bottom: 18px;
        font-family: 'Gill Sans';
    }
    li a {
        color: rgb(0, 0, 0);
        font-size: 1rem;
        font-weight: 500;
        text-decoration: none;
    }
    li span{
        /* display: grid;    */
        font-size: .9em;
        color: grey;        
    }
    :global(body.dark-mode) {
        background-color: black;
        color: white;
    }
    :global(body.dark-mode li a ) {
        color: white !important;
    }
</style>