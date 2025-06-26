<script>
	import { base } from "$app/paths";
	import { onMount } from "svelte";

    let { media } = $props();

    console.log(media.src);
</script>

<div>
    {#if media.type === "yt"}
        <iframe src={media.src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    {:else if media.type === "doc"}
        <iframe id="doc" src={media.src} title="document"></iframe>
    {:else if media.type === "pptx"}
        <iframe src="{media.src}" title="powerpoint" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
    {:else if media.type === "img"}
        <img src="{base}/{media.src}" alt={media.alt}>
    {:else if media.type === "audio"}
        <img src="{base}/{media.cover}" alt={media.alt}>
        <audio controls>
            <source src={base/media.src} type="audio/mpeg">
            Your browser does not support the audio tag.
        </audio>
    {:else if media.type === "link"}
        <a href="{media.src}">
            <img src="{base}/{media.image}" alt="">
            <p>{media.text}</p>
        </a>
    {:else}
        <video controls>
            <source src="{base}/{media.src}" type="video/mp4">
            <source src="{base}/{media.src}" type="video/ogg">
            <track kind="captions">
            Your browser does not support the video tag.
        </video>
    {/if}
</div>

<style>
    div iframe, img {
        width: 100%;
        height: 40vh;
        border-radius: 24px;
    }
    video {
        width: 100%;
    }
    a {
        display: flex;
        flex-direction: row;
        align-items: end;
        justify-content: start;
    }
    p {
        color: black;
        position: absolute;
        font-size: 30px;
        margin-left: 1vw;
    }
    a:hover img{
        transform: scale(1.1);
        transition: transform 0.2s ease;
    }
    a:hover p {
        text-decoration: underline;
        transition: transform 0.2s ease;
        transform: scale(1.1);
    }
</style>