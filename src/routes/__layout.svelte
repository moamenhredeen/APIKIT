<script lang="ts">
	import { onMount } from 'svelte';
	import KeyBinding from '../lib/utils/KeyBinding.svelte';
	import ActionsModal from '../lib/components/ActionsModal.svelte';
	import ActivityBar from '../lib/components/ActivityBar.svelte';
	import SideBar from '../lib/components/SideBar.svelte';
	import '../app.scss';
	import { SideBarState } from '../lib/Stores/UIState';
	import ToolBar from '../lib/components/ToolBar.svelte';


	let ready: boolean = false;
	onMount(() => (ready = true));


	let isSideBarOpen;
	SideBarState.subscribe(state => isSideBarOpen = state);

</script>


<KeyBinding/>
<ActionsModal/>
<ToolBar/>
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
	top: 50px;
    left: 75px;
    right: 0;
  }

  .pages-small{
    top: 50px;
    left:275px;
  }
</style>
