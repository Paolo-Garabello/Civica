<script>
	import Subjects from "$lib/components /Subjects.svelte";

    import { page } from '$app/stores';
    import { derived } from 'svelte/store';
    
    const subject = derived(page, ($page) => $page.params.subject);

</script>

<Subjects subject={ subject }/>