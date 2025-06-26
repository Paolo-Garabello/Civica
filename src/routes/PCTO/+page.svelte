<script>
	import Subjects from "$lib/components /Subjects.svelte";
    import { writable } from 'svelte/store';
    
    const subject = writable("PCTO");
</script>

<Subjects subject={subject}/>