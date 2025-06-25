<script>
	import { onMount } from "svelte";

    let { media } = $props();
    $inspect(media);
</script>

<div>
    {#if media.type === "yt"}
        <iframe src={media.src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    {:else if media.type === "doc"}
        <iframe id="doc" src={media.src} title="document"></iframe>
    {:else if media.type === "pptx"}
        <iframe src={media.src} title="powerpoint" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
    {:else if media.type === "img"}
        <img src={media.src} alt={media.alt}>
    {:else if media.type === "audio"}
        <img src={media.cover} alt={media.alt}>
        <audio controls>
            <source src={media.src} type="audio/mpeg">
            Your browser does not support the audio tag.
        </audio>
    {:else}
        <video controls>
            <source src={media.src} type="video/mp4">
            <source src={media.src} type="video/ogg">
            <track kind="captions">
            Your browser does not support the video tag.
        </video>
    {/if}
</div>

<style>
    div iframe {
        width: 100%;
        height: 40vh;
        border-radius: 24px;
    }
</style>