<script>
	import { base } from "$app/paths";

</script>

<section>
    <a href="{base}/">Portfolio</a>
    <a href="{base}/PCTO">PCTO</a>
</section>

<style>
    section {
        position: relative;
        margin-left: 85%;    
        margin-top: 1%;
        display: flex;
        flex-direction: row;
    }
    a {
        border-radius: 5px;
        padding: 1vh;
        text-decoration: none;
        color: white;
        margin-left: 1vh;
        transition: transform 0.2s ease;
    }
    a:hover {
        background-color: gray;
        transform: scale(1.2);
    }
</style>