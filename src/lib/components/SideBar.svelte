<script>
	import ProjectStore from '../Stores/ProjectStore';
	import { SideBarState } from '../Stores/UIState';

	let isSideBarOpen;
	SideBarState.subscribe(state => isSideBarOpen = state);

	// TODO : unsubscribe on destroy
</script>


<div class:openSideBar={isSideBarOpen} class:closedSideBar={!isSideBarOpen}>
	{#each $ProjectStore as project}
		<a class='project' href="/projects/{project.id}"> {project.name}</a>
	{/each}
</div>


<style lang='scss'>

  .openSideBar {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 75px;
    width: 200px;
    background-color: var(--yellow-light);
    transition: width ease-out 200ms;

    .project {
      display: block;
	  text-decoration: none;
	  color: black;
      border-bottom: 1px solid var(--gray-light);
      padding: 10px;
      cursor: pointer;

      &:hover {
        background-color: var(--yellow-dark);
      }
    }
  }


  .closedSideBar {
    display: none;
    width: 0;
    transition: width ease-out 200ms;
  }
</style>