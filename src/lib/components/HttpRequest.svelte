<script>
	import { AutoCompleteInput } from '../shared/Controls/controls';
	import { headersKeysKeywords, headersValuesKeywords } from '../utils/AutoCompleteKeyWords';
	// import { JSONEditor } from 'svelte-jsoneditor';

	// let content = {
	// 	text: undefined, // used when in code mode
	// 	json: {
	// 		array: [1, 2, 3],
	// 		boolean: true,
	// 		color: '#82b92c',
	// 		null: null,
	// 		number: 123,
	// 		object: { a: 'b', c: 'd' },
	// 		string: 'Hello World'
	// 	}
	// }

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
			<span class='section-heading'>Headers</span>
			<div class='header-list'>
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
			<span class='section-heading'>Body</span>
			<div class='body-content'>
				<textarea/>
<!--				<JSONEditor/>-->
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
        padding: 5px 10px;
        outline: none;
        width: 100%;
        border-radius: 2px;
        border: none;
        background-color: var(--bg1);
        margin: 0 25px;

        &:focus {
          box-shadow: 0 0 0 1px white, 0 0 0 3px var(--base2);
        }
      }

      .btn {
        cursor: pointer;
        padding: 5px 10px;
        background-color: var(--base3);
		color: var(--fg2);
        border-radius: 2px;
        border: none;
        outline: none;

        &:hover,
        &:active {
          box-shadow: 0 0 0 1px white, 0 0 0 3px var(--base3);
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
    background-color: var(--bg1);
    border-radius: 2px;

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
    border-radius: 2px;
	.body-content{
	  height: 100%;
	  textarea{
		width: 100%;
		min-height: 150px;
		border-radius: 5px;
		border:none;
		outline: none;
		background: var(--bg1);
	  }
	}
  }


  .section-heading{
    display: block;
    border-radius: 2px;
    background-color: var(--base2);
    color: white;
    text-align: center;
  }
</style>