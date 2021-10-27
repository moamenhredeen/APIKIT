<script>
	import { Tabs, Tab, TabPanel, TabList } from '../shared/Tabs/tabs.js';
	import { AutoCompleteInput } from '../shared/Controls/controls';
	import { headersKeysKeywords, headersValuesKeywords } from '../utils/AutoCompleteKeyWords';
	import Console from '../shared/Console.svelte';


	let requestUrl = '';
	let response = '';
	let headerList = [
		{ key: '', value: '' },
	];

	const submitHandler = (e) => {
		e.preventDefault();
		fetch(requestUrl)
			.then(res => {
				res.json().then(data => {
					console.log(data);
					response = data;
				});
			});
	};

	const tabHandler = (index) => {
		if (index === headerList.length - 1) {
			headerList = [...headerList, { key: '', value: '' }];
		}
	};

	const deleteHandler = (index) => {
		if (headerList.length <= 1) {
			return;
		}
		headerList = [
			...headerList.filter((el, i) => i !== index),
		];
	};
</script>


<form on:submit={submitHandler}>
	<!-- request url 	-->
	<div class='request-url'>
		<select class='btn'>
			<option value='get'>GET</option>
			<option value='post'>POST</option>
			<option value='put'>PUT</option>
			<option value='delete'>DELETE</option>
		</select>
		<input bind:value={requestUrl} type='text' placeholder='url ...'>
		<button type='submit' class='btn'>SEND</button>
	</div>

	<!-- request info -->
	<div class='request-info'>

		<div class='headers'>
			<h3 >Headers</h3>
			<div class=' header-list'>
				{#each headerList as headerItem, index}
					<div class='header'>
						<div class='control header-key'>
							<AutoCompleteInput placeHolder='key ...' keywords={headersKeysKeywords}
											   bind:value={headerItem.key} />
						</div>
						<div class='control header-value'>
							<AutoCompleteInput placeHolder='value ...' keywords={headersValuesKeywords}
											   bind:value={headerItem.value} on:tab-pressed={() => tabHandler(index)} />
						</div>
						<div class='control header-delete'>
							<img src='/static/icons/delete.svg' alt='delete button'
								 on:click={() => {deleteHandler(index)}}>
						</div>
					</div>
				{/each}
			</div>
		</div>

		<div class='body'>
			<h3>Body</h3>
			<div class='body-content'>
				<textarea/>
			</div>
		</div>

	</div>
</form>


<style lang='scss'>

  form {
    right: 0;

    .request-url {
      padding: 25px;
      display: flex;
      width: 100%;
      justify-content: space-between;

      input {
        padding: 10px 10px;
        outline: none;
        font-size: 1.1rem;
        width: 100%;
        border-radius: 5px;
        border: none;
        background-color: var(--gray-light);
        margin: 0 25px;

        &:focus {
          box-shadow: 0 0 0 1px white, 0 0 0 3px var(--blue-light);
        }
      }

      .btn {
        cursor: pointer;
        padding: 10px 15px;
        font-size: 1.1rem;
        background-color: var(--blue-light);
        border-radius: 5px;
        border: none;
        outline: none;

        &:hover,
        &:active {
          box-shadow: 0 0 0 1px white, 0 0 0 3px var(--blue-light);
        }
      }
    }

  }

  .request-info{
	display: flex;

  }

  .headers {
    width: 50%;
    margin: 10px 25px;
    background-color: var(--blue-20);
    border-radius: 5px;

	h3{
      border-radius: 5px 5px 0 0;
      background-color: var(--blue-dark);
      color: white;
      text-align: center;
    }
    .header-list {
      padding: 10px;
      .header {
        display: flex;

        .control {
          margin: 4px 10px 4px 0;
        }

        .header-key {
          width: 40%;
        }

        .header-value {
          width: 40%;
        }

        .header-delete {
          display: flex;
          align-items: center;

          img {
            cursor: pointer;
          }
        }
      }
    }
  }

  .body{
    width: 50%;
    margin: 10px 25px;
    border-radius: 5px;
	h3{
      border-radius: 5px 5px 0 0;
      background-color: var(--blue-dark);
      color: white;
      text-align: center;
	}
	.body-content{
	  height: 100%;
	  textarea{
		width: 100%;
		min-height: 150px;
		border-radius: 5px;
		border:none;
		outline: none;
	  }
	}
  }
</style>