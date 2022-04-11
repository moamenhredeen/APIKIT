<script>
	import { getContext } from 'svelte';
	import { TABS } from './Tabs.svelte';

	const tab = {};
	const { registerTab, selectTab, selectedTab } = getContext(TABS);

	registerTab(tab);
</script>

<style lang='scss'>
	button {
		//background-color: var(--base5);
	  	background: transparent;
		border: none;
		border-radius: 0;
		outline: none;
		//width: 100%;
	  	//padding: 4px 0;
		cursor: pointer;
	  	margin: 0 5px;

	  &:hover{
		//background: var(--base4);
		text-decoration: underline;
	  }
	}


	.selected {
	  text-decoration: underline;
		//background-color: var(--base4);
		//border-bottom: 2px solid var(--base5);
	}
</style>

<button class:selected="{$selectedTab === tab}" on:click="{() => selectTab(tab)}">
	<slot></slot>
</button>