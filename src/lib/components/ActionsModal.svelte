<script>
    import {ModalState} from "../Stores/UIState";
    import ActionStore from "../Stores/ActionStore";
    import {afterUpdate} from 'svelte'

    let actionList;
    let isModalOpen

    ActionStore.subscribe(items => actionList = items);
    ModalState.subscribe(state => isModalOpen = state);

    let searchKeyWord = '';
    let searchResults = actionList;

    const searchHandler = () => {
        searchResults = actionList.filter(el => el.displayName.includes(searchKeyWord.trim()))
    }

    let actionSearchInput;
    afterUpdate(() => {
        actionSearchInput.focus();
    })

</script>


<div class="backdrop" class:hide={!isModalOpen} ></div>
<div class="actions-modal" class:hide={!isModalOpen}>
    <input bind:value={searchKeyWord}
           class="action-search"
           on:input={searchHandler}
           type="text"
            bind:this={actionSearchInput}>

    <ul class="actions">
        {#each searchResults as el}
           <li class="action">
               <div class="action-name">
                   {el.displayName}
               </div>
               <div class="action-shortcut">
                   {el.shortcut}
               </div>
           </li>
        {/each}
    </ul>

</div>

<style>
    .backdrop {
        background-color: rgba(0, 0, 0, 0.2);
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 100;
    }

    .actions-modal {
        position: fixed;
        left: 50%;
        transform: translate(-50%);
        top: 10%;
        width: 50%;
        height: 300px;
        z-index: 200;
        border-radius: 5px;
        background-color: white;
        padding: 10px;
    }

    .action-search {
        border-radius: 5px;
        border: 2px solid var(--gray-light);
        width: 100%;
        padding: 4px 10px;
        outline: none;
    }

    .actions{
        margin: 10px 0 ;
        padding: 5px 0 ;
        overflow-y:auto;
        max-height: 230px;
    }

    .action{
        background-color: var(--gray-light);
        margin: 5px 0;
        border-radius: 4px;
        padding: 8px;
        display: flex;
        justify-content: space-between;
    }

    .action-name{

    }

    .action-shortcut{
        color: gray;
    }

    .hide{
        display: none;
    }

</style>
