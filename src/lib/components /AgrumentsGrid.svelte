<script>
	import { base } from "$app/paths";
	import { onMount } from "svelte";
    let subjects = {};

    onMount(async () => {
        const res = await fetch(`${base}/Subjects.json`);
        subjects = await res.json();
    })
</script>

<section>
    {#each Object.entries(subjects) as [k, v]}
        <a href="{base}/{v.link}">
            <img src="{base}/{v.image}" alt="">
            <p><b>{k}</b></p>
        </a>
    {/each}
</section>

<style>
    section {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        width: 70vw;
        column-gap: 1vw;
        row-gap: 2vh;
        margin-left: 15vw;
    }
    a {
        text-decoration: none;
        color: white;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 22vw;
        height: 20vh;
    }
    p {
        position: absolute;
        font-size: 30px;
    }
    a:hover img {
        transform: scale(1.1);
        transition: transform 0.2s ease;
        filter: blur(0px);
    }
    img {
        border-radius: 20px;
        width: 22vw;
        height: 20vh;
        filter: blur(2px);
    }
</style>