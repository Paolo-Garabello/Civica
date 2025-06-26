<script>
    let { content } = $props();

</script>

<div>
    {#if content.type == "p"}
        <p>{content.src}</p>
    {:else if content.type == "[p]"}
        {#each content.src as p}
            <p>{p}</p>
        {/each}
    {/if}
</div>