<script>
	import { getContext } from 'svelte';
	import { TABS } from './Tabs.svelte';

	const tab = {};
	const { registerTab, selectTab, selectedTab } = getContext(TABS);

	registerTab(tab);
</script>

<style>
	button {
		background-color: var(--gray-light);
		border: none;
		border-bottom: 2px solid transparent;
		border-radius: 0;
		margin: 0;
		padding: 10px 0;
		outline: none;
		width: 100%;
		font-size: 1.1rem;
		cursor: pointer;
	}
	
	.selected {
		background-color: var(--blue-light);
		border-bottom: 2px solid var(--blue-dark);
	}
</style>

<button class:selected="{$selectedTab === tab}" on:click="{() => selectTab(tab)}">
	<slot></slot>
</button>