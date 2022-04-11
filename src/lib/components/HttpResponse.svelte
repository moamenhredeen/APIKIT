<script>
	import { Tabs, Tab, TabPanel, TabList } from '../shared/Tabs/tabs.js';

	function resize(node){
		let active = false;
		let initialRect = null;

		function onMousedown(e) {
			active = true
			initialRect = node.getBoundingClientRect()
		}

		function onMove(e) {
			if (!active) return
			node.style.height = initialRect.height - (e.pageY - initialRect.y) + 'px'
		}
		const toggler = node.querySelector('#resize-toggler')
		toggler.addEventListener('mousedown', onMousedown)
		document.addEventListener('mousemove', onMove)
		document.addEventListener('mouseup', _ => {active = false})

		return{
			destroy(){
				toggler.removeAllListeners()
			}
		}
	}

	function toggler(e){
		e.target.parentElement.parentElement.style.display= 'none'
	}

</script>

<div id='http-response' use:resize>
	<div id='resize-toggler'></div>
	<div id='toggler' on:click={toggler}>
		<img src='static/icons/clear.svg' alt=''>
	</div>
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

<style lang='scss'>
  #http-response {
    position: fixed;
    background: var(--bg1);
    height: 100px;
	left: 50px;
	right: 20px;
	bottom: 0;
  }

  #toggler{
	position: absolute;
	right: 0;
	padding: 0 5px;
	cursor: pointer;
	img{
	  height: 15px;
	}
  }

  #resize-toggler {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: var(--base2);
    cursor: row-resize;

    //&:hover {
    //}
  }

</style>