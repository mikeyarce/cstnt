<script>
    import fetchStore from './fetch.js'
    const [data, loading, error, get, currentCity] = fetchStore();
    import Toggle from './Toggle.svelte';   

    const cities = [
        { slug: 'vernon', label: 'Vernon' },
        { slug: 'kelowna', label: 'Kelowna' },
        { slug: 'penticton', label: 'Penticton' },
        { slug: 'kamloops', label: 'Kamloops' },
        { slug: 'salmon-arm', label: 'Salmon Arm' },
        { slug: 'oliver-osoyoos', label: 'Oliver/Osoyoos' },
        { slug: 'west-kootenay', label: 'West Kootenay' }
    ];
</script>

<h1>cstnt</h1>

<Toggle />

<div class="cities" role="group" aria-label="Editions">
    {#each cities as { slug, label } (slug)}
        <button
            type="button"
            on:click={() => get(slug)}
            class:active={$currentCity === slug}
            aria-pressed={$currentCity === slug}>
            {label}
        </button>
    {/each}
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
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin-left: 2em;
        margin-bottom: 25px;
    }
    button {
        padding: 4px;
        min-block-size: 24px;
        min-inline-size: 24px;
        border: 1px solid #ccc;
        border-radius: 4px;
        cursor: pointer;
        background-color: #f0f0f0;
    }
    button.active {
        background-color: #007bff;
        color: white;
        border-color: #0069d9;
    }
    :global(body.dark-mode) button {
        background-color: #333;
        color: #fff;
        border-color: #666;
    }
    :global(body.dark-mode) button.active {
        background-color: #0056b3;
        border-color: #004085;
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