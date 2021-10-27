<script lang="ts">
	import { onMount } from 'svelte';
	import KeyBinding from '../lib/utils/KeyBinding.svelte';
	import ActionsModal from '../lib/components/ActionsModal.svelte';
	import ActivityBar from '../lib/components/ActivityBar.svelte';
	import SideBar from '../lib/components/SideBar.svelte';
	import '../app.scss'

	let ready: boolean = false;
	onMount(() => (ready = true));


	import {SideBarState} from "../lib/Stores/UIState";
	let isSideBarOpen;
	SideBarState.subscribe(state => isSideBarOpen = state);

</script>


<KeyBinding/>
<ActionsModal/>
<ActivityBar/>
<SideBar/>
{#if ready}
	<section class="pages" class:pages-small={isSideBarOpen}>
		<slot />
	</section>
{/if}

<style lang="scss">
  .pages{
    position: absolute;
    left: 75px;
    right: 0;
  }

  .pages-small{
    left:275px;
  }
</style>
