<script>

	import { SideBarState } from '../Stores/UIState';
	import Theme from '$lib/components/Theme.svelte';

	let isSideBarOpen;
	SideBarState.subscribe(state => isSideBarOpen = state);
</script>


<div class='tool-bar' class:tool-bar-small={isSideBarOpen}>
	<div class='action'>
		<img src='/static/icons/save.svg' alt=''>
	</div>
	<div class='action'>
		<img src='/static/icons/open.svg' alt=''>
	</div>
	<div class='action'>
		<img src='/static/icons/clear.svg' alt=''>
	</div>
	<div class='action'>
		<Theme/>
	</div>

</div>


<style lang='scss'>
  .tool-bar {
	background: var(--bg1);
    display: flex;
	width: 100%;
	height: 100%;
	justify-content: flex-end;
  }

  .tool-bar-small {
    //left: 250px;
  }

  .action {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    cursor: pointer;
	padding: 10px;

	img{
	  width: 15px;
	}

    &:hover {
      background-color: var(--base2);
    }
  }
</style>
