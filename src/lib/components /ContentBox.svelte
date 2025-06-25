<script>
    let { content } = $props();

</script>

<div>
    {#if content.type == "p"}
        <p>{content.src}</p>
    {/if}
</div>