<script>
	import ContentBox from "$lib/components /ContentBox.svelte";
	import MediaBox from "$lib/components /MediaBox.svelte";
	import NotFound from "$lib/components /NotFound.svelte";
    import { page } from '$app/stores';
    import { derived } from 'svelte/store';
	import { onMount } from "svelte";
    
    let args = $state();
    const subject = derived(page, ($page) => $page.params.subject);

    $inspect($subject);

    onMount(async () => {
        const data = await fetch(`/${$subject}/arguments.json`);
        args = await data.json();
    })
</script>
{#if args}
    <div>
        <section>
            {#each Object.entries(args) as [k, v]}
                <article>
                    <h1>{v.header}</h1>
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
{:else}
    <NotFound/>
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
</style>