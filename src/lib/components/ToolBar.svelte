<script>

	import { SideBarState } from '../Stores/UIState';

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
		<img src='/static/icons/clear.svg' alt=''>
	</div>
	<div class='action'>
		<img src='/static/icons/clear.svg' alt=''>
	</div>
	<div class='action'>
		<img src='/static/icons/clear.svg' alt=''>
	</div>
	<div class='action'>
		<img src='/static/icons/clear.svg' alt=''>
	</div>
	<div class='action'>
		<img src='/static/icons/clear.svg' alt=''>
	</div>
	<div class='action'>
		<img src='/static/icons/clear.svg' alt=''>
	</div>
	<div class='action'>
		<img src='/static/icons/clear.svg' alt=''>
	</div>
	<div class='action'>
		<img src='/static/icons/clear.svg' alt=''>
	</div>
</div>


<style lang='scss'>
  .tool-bar {
    position: fixed;
    top: 0;
    right: 0;
    left: 75px;
    height: 50px;
    box-shadow: 0 1px 4px 0 lightgray;
    display: flex;
  }

  .tool-bar-small {
    left: 275px;
  }

  .action {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    cursor: pointer;
	flex-grow: 1;

    &:hover {
      background-color: var(--yellow-light);
    }
  }
</style>