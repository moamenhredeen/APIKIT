<script lang="ts">
	import { onMount } from 'svelte';
	import KeyBinding from '../lib/utils/KeyBinding.svelte';
	import ActionsModal from '../lib/components/ActionsModal.svelte';
	import ActivityBar from '../lib/components/ActivityBar.svelte';
	import SideBar from '../lib/components/SideBar.svelte';
	import '../app.scss';
	import { SideBarState } from '../lib/Stores/UIState';
	import ToolBar from '../lib/components/ToolBar.svelte';
 // import Theme from '$lib/components/Theme.svelte';
	import FoldingBar from '$lib/components/FoldingBar.svelte';


	let ready: boolean = false;
	onMount(() => (ready = true));


	let isSideBarOpen;
	SideBarState.subscribe(state => isSideBarOpen = state);

</script>

<div id='main'>
	<KeyBinding/>
	<ActionsModal/>
<!--	<div class='theme-toggler'>-->
<!--		<Theme/>-->
<!--	</div>-->
	<div class='fold-bar'>
		<FoldingBar/>
	</div>
	<div class='tool-bar'>
		<ToolBar/>
	</div>
	<div class='activity-bar'>
		<ActivityBar/>
	</div>
	<SideBar/>
	{#if ready}
		<section class="pages" class:pages-small={isSideBarOpen}>
			<slot />
		</section>
	{/if}
</div>

<style lang="scss">

  #main{
	background: var(--bg0);
  }

  .fold-bar{
	position: fixed;
	width: 20px;
	bottom: 0;
	right: 0;
	top: 30px;
	z-index: 10;
    box-shadow: 0 0 1px 0 var(--fg0);
  }

  //.theme-toggler{
	//position: fixed;
	//right: 5px;
  //  top: 5px;
  //  z-index: 10;
  //}

  .tool-bar{
	position: fixed;
	left: 50px;
	top: 0;
	right: 0;
	height: 30px;
	box-shadow: 0 0 1px 0 var(--fg0);
  }

  .activity-bar{
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	width: 50px;
  }

  .pages{
    position: absolute;
	top: 30px;
    left: 50px;
    right: 20px;
  }

  .pages-small{
    top: 50px;
    left:275px;
  }
</style>
