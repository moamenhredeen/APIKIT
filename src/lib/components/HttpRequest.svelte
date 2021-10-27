<script>
    let requestUrl = '';
    let response = '';

    const submitHandler = (e) => {
        e.preventDefault();
        fetch(requestUrl)
            .then(res => {
                res.json().then(data => {
                    console.log(data)
                    response = data
                })
            })
    }

</script>


<form on:submit={submitHandler} >
    <!-- request url 	-->
    <div class="request-url">
        <select class="btn">
            <option value="get">GET</option>
            <option value="post">POST</option>
            <option value="put">PUT</option>
            <option value="delete">DELETE</option>
        </select>
        <input bind:value={requestUrl} type="text" placeholder="url ...">
        <button type="submit" class="btn">SEND</button>
    </div>

    <!-- request info -->

</form>


<style lang="scss">

  form {
    padding: 25px;
    right: 0;

    .request-url {
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

</style>