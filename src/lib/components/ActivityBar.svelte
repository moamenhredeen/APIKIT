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
        background-color: var(--base1);
        display: flex;
        flex-direction: column;
        align-items: center;
		width: 100%;
		height: 100%;

    }

    .icon {
        width: 100%;
        padding: 10px;
        text-align: center;
        cursor: pointer;
    }


    .icon:hover {
        background-color: var(--base2);
    }

    img {
        width: 50%;
    }
</style>