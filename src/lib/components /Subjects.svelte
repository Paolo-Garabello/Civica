<script>
	import { base } from "$app/paths";
	import ContentBox from "$lib/components /ContentBox.svelte";
	import MediaBox from "$lib/components /MediaBox.svelte";
	import { onMount } from "svelte";
    
    let args = $state();
    let { subject } = $props()
    
    onMount(async () => {
        const data = await fetch(`${base}/${$subject}/arguments.json`);
        args = await data.json();
    })

    $inspect(subject);
</script>

{#if args}
    <div>
        <section>
            {#each Object.entries(args) as [k, v]}
                <article>
                    {#if v.header}
                        <h1>{v.header}</h1>
                    {:else if v.link}
                        <a href="{v.link.src}"><h1>{v.link.name}</h1></a>
                    {/if}
                    {#if v.media}
                        <MediaBox media={v.media}/>
                    {/if}
                    {#if v.content}
                        <ContentBox content={v.content}/>
                    {/if}    
                </article>
            {/each}
        </section>
    </div>
{/if}

<style>
    div {
        width: 100vw;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    section {
        background-color: white;
        border-radius: 20px;
        width: 45vw;
        padding: 2.5vw;
        color: black;
    }
    article {
        width: 100%;
    }
    h1 {
        font-size: 25px;
    }
    a {
        text-decoration: none;
        color: black;
    }
    a:hover h1 {
        text-decoration: underline 2px;
    
    }
</style>