<script>
    import {ModalState} from "../Stores/UIState";

    const keyDownHandler = (event) => {
        if(event.key === 'p' && event.ctrlKey === true) {
            ModalState.set(true);
        }

        if (event.key === 'Escape') {
            ModalState.set(false);
        }
    }

</script>

<!-- key listener -->
<svelte:body on:keydown={keyDownHandler}/>

