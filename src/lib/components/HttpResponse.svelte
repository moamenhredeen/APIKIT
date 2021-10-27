<script>
	import { Tabs, Tab, TabPanel, TabList } from '../shared/Tabs/tabs.js';
</script>

<div class='http-response'>
	<Tabs>
		<TabList>
			<Tab>Headers</Tab>
			<Tab>Body</Tab>
			<Tab>three</Tab>
			<Tab>Four</Tab>
		</TabList>

		<TabPanel>
			<h2>First panel</h2>
		</TabPanel>

		<TabPanel>
			<h2>Second panel</h2>
		</TabPanel>

		<TabPanel>
			<h2>Third panel</h2>
		</TabPanel>
		<TabPanel>
			<h2>four panel</h2>
		</TabPanel>
	</Tabs>
</div>

<style>
	.http-response{
		margin: 10px 25px;
	}
</style>