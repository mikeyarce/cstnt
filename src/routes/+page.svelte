<script>
    import fetchStore from './fetch.js'
    const [data, loading, error, get, currentCity] = fetchStore();
    import Toggle from './Toggle.svelte';   

    function selectCity(city) {
        get(city);
    }

    $: cityTitle = $currentCity.charAt(0).toUpperCase() + $currentCity.slice(1);
</script>

<h1>cstnt</h1>

<Toggle />

<div class="cities">
    <button 
        on:click={() => selectCity("vernon")} 
        class:active={$currentCity === "vernon"}>
        Vernon
    </button>
    <button 
        on:click={() => selectCity("kelowna")} 
        class:active={$currentCity === "kelowna"}>
        Kelowna
    </button>
    <button 
        on:click={() => selectCity("penticton")} 
        class:active={$currentCity === "penticton"}>
        Penticton
    </button>
    <button 
        on:click={() => selectCity("kamloops")} 
        class:active={$currentCity === "kamloops"}>
        Kamloops
    </button>
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
    button {
        padding: 4px;
        margin-right: 8px;
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