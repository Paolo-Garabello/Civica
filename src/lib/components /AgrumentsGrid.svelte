<script>
	import { onMount } from "svelte";
    let subjects = {};

    onMount(async () => {
        const res = await fetch('/Subjects.json');
        subjects = await res.json();
        console.log(subjects);
    })
</script>

<section>
    {#each Object.entries(subjects) as [k, v]}
        <a href="/{k}">
            <img src="{v.image}" alt="">
            <p><b>{k}</b></p>
        </a>
    {/each}
</section>

<style>
    section {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1vh;
        width: 70vw;
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
        filter: blur(0px);
    }
    img {
        border-radius: 20px;
        width: 22vw;
        height: 20vh;
        filter: blur(2px);
    }
</style>