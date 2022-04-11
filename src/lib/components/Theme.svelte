<script>

	let darkmode = false;

	function toggle() {
		darkmode = !darkmode;
		window.document.body.classList.toggle('dark-mode')
	}
</script>

<button class='theme-toggler' on:click={toggle}>
	<img
		src={darkmode ? '/icons/dark-mode.svg' : '/icons/light-mode.svg' }
		alt='menu icon'>
</button >

<style lang='scss'>
    :global(body) {
		--bg0:#fbf1c7;
		--bg1:#ebdbb2;
        --bg2:#d5c4a1;
        --bg3:#bdae93;
		--fg0:#282828;
        --fg1:#3c3836;
		--fg2:white;
		--base1:#98971a;
        --base2:#d79921;
        --base3:#b16286;
        --base4:#458588;
        --base5:#689d6a;
        --base6:#cc241d;
		background: var(--bg0);
    }
    :global(body.dark-mode) {
        --bg0:#282828;
        --bg1:#3c3836;
        --bg2:#504945;
        --bg3:#665c54;
        --fg0:#fbf1c7;
        --fg1:#ebdbb2;
        --base1:#79740e;
        --base2:#b57614;
        --base3:#b16286;
        --base4:#458588;
        --base5:#689d6a;
        --base6:#cc241d;
    }

	.theme-toggler{
		border: none;
		outline: none;
		background: none;
		cursor: pointer;
	  display: flex;
	  align-items: center;
      img{
        width: 17px;
      }
	}

</style>