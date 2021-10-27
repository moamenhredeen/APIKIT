<script>

	import {createEventDispatcher} from 'svelte';

	export let keywords = [];
	export let placeHolder = '';
	export let value;

	let suggestions = [];
	const inputHandler = () => {
		if (value.trim().length > 0) {
			suggestions = keywords.filter(el => el.startsWith(value.trim()));
		} else {
			suggestions = [];
		}
	};


	let inputEl;
	const completeHandler = (sugg) => {
		value = sugg;
		suggestions = [];
		selectedItem = 0;
		inputEl.focus();
	};

	const dispatch = createEventDispatcher();
	let selectedItem = 0;
	const selectHandler = (e) => {
		if (e.keyCode === 38) { // arrow up
			selectedItem = selectedItem === 0 ? selectedItem : --selectedItem;
		} else if (e.keyCode === 40) { // arrow down
			selectedItem = selectedItem === suggestions.length - 1 ? selectedItem : ++selectedItem;
		} else if (e.keyCode === 13) {
			completeHandler(suggestions[selectedItem]);
		}else if(e.shiftKey === false &&  e.keyCode === 9) {
			dispatch("tab-pressed")
		}
	};

	const focusOutHandler = (e) => {
		// TODO : find better solution
		setTimeout(() => {
			suggestions = [];
		}, 100);
	};


</script>

<div class='container'>
	<input type='text'
		   bind:this={inputEl}
		   placeholder={placeHolder}
		   bind:value={value}
		   on:input={inputHandler}
		   on:keydown={selectHandler}
		   on:focusout={focusOutHandler}>

	{#if suggestions.length > 0 }
		<ul class='suggestions'>
			{#each suggestions as suggestion, index}
				<li class='suggestion' class:selected={index === selectedItem}
					on:click={() => completeHandler(suggestion)}>{suggestion}</li>
				{#if (index < suggestions.length - 1) }
					<div class='sep'></div>
				{/if}
			{/each}
		</ul>
	{/if}
</div>

<style lang='scss'>
  .container {
    width: 100%;
    position: relative;
  }

  input {
    width: 100%;
    padding: 5px;
    border-radius: 5px;
    outline: none;
    border: 2px solid var(--gray-light)
  }

  .suggestions {
	z-index: 100;
    position: absolute;
    cursor: pointer;
    left: 0;
    right: 0;
    background-color: white;
    border-radius: 5px;
    list-style: none;
    /* TODO : render only the elements fit in the suggestions div */
    max-height: 400px;
    overflow-y: auto;

    .suggestion {
      padding: 4px 10px;

      &:hover {
        background-color: var(--yellow-light);
      }
    }

    .selected {
      background-color: var(--yellow-dark);
    }

    .sep {
      border-top: 1px solid var(--gray-light);
      margin: 0 5px;
    }
  }


</style>