<script>
	import { SideBarState } from '../Stores/UIState';

	const toggleSideBar = () => {
		SideBarState.update(state => !state);
	};

	const closeSideBar = () => {
		SideBarState.set(false);
	};
</script>


<div class='activity-bar'>

	<a class='icon' href='/RequestForm' on:click={closeSideBar}>
		<img src='/icons/home.svg' alt='menu icon'>
	</a>

	<div class='icon' on:click={toggleSideBar}>
		<img src='/icons/project.svg' alt='menu icon'>
	</div>
	<div class='icon'>
		<img src='/icons/statistics.svg' alt='menu icon'>
	</div>
	<div class='icon'>
		<img src='/icons/plus.svg' alt='menu icon'>
	</div>
</div>

<style>

    .activity-bar {
        background-color: var(--yellow-dark);
        position: fixed;
        width: 75px;
        top: 0;
        bottom: 0;
        display: flex;
        flex-direction: column;
        align-items: center;

    }

    .icon {
        width: 100%;
        padding: 15px;
        text-align: center;
        cursor: pointer;


    }

    .icon:hover {
        background-color: var(--yellow-light);
    }

    img {
        width: 50%;
    }
</style>