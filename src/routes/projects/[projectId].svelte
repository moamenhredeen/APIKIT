<script>
	import { page } from '$app/stores';
	import ProjectStore from '$lib/Stores/ProjectStore';
	import { onDestroy } from 'svelte';


	let projectId;
	let project;

	let unsubscribePage;
	let unsubscribeProject;

	unsubscribePage = page.subscribe(page => {
		unsubscribeProject = ProjectStore.subscribe(projects => {
			project = projects.filter(el => el.id === +page.params.projectId)[0];
		});
	});

	onDestroy(() => {
		unsubscribePage();
		unsubscribeProject();
	});

</script>

<div class='project'>
	<div class='header'>
		<h1>{project.name}</h1>
		<img class='run-icon' src='/static/icons/run.svg' alt=''>
	</div>
	<div class='requests'>
		{#each project.requests as request}
			<div class='request'>
				<div class='method'>{request.method}</div>
				<div class='url'>{request.url}</div>
				<img class='run-icon' src='/static/icons/run.svg' alt=''>
			</div>
		{/each}
	</div>
</div>


<style lang='scss'>
  .project {
  }

  .header{
    background-color: var(--blue-dark);
    display: flex;

    h1 {
	  width: 100%;
      text-align: center;
      color: white;
      text-transform: uppercase;
      padding: 10px 0;
    }

  }

  .requests{
	padding: 10px;

    .request{
      background-color: var(--yellow-light);
	  margin: 15px 0;
      box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
	  border-radius: 5px;
	  overflow: hidden;
	  display: flex;

	  .method{
		padding: 15px;
        background-color: var(--blue-light);
	  }

	  .url{
		width: 100%;
		padding: 15px;
		background:none;
	  }
	}
  }

  .run-icon{
    margin:0 15px;
    cursor: pointer;
    &:hover{
      transform: scale(1.05);
    }
  }



</style>