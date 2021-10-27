<script>
    import {fade} from 'svelte/transition';

    const menuItems = [
        {displayName: "first item "},
        {displayName: "second item "},
        {displayName: "third item "}
    ]

    let contextMenuOpen = false;
    let x = 0;
    let y = 0;
    const onRightClick = (e) => {
        x = e.clientX
        y = e.clientY;
        contextMenuOpen = true;
    }

    // whenever x and y is changed, restrict box to be within bounds
    let menuEl;
    $: (() => {
        if (!menuEl) return;

        const rect = menuEl.getBoundingClientRect();
        x = Math.min(window.innerWidth - rect.width, x);
        if (y > window.innerHeight - rect.height) y -= rect.height;
    })(x, y);

</script>


<svelte:body on:contextmenu|preventDefault={onRightClick}/>
<div class={contextMenuOpen ? "container": "hide"} transition:fade={{ duration: 100 }} bind:this={menuEl}
     style="top: {y}px; left: {x}px;">
    {#each menuItems as item, index}
        <div class="menu-item">
            {item.displayName}
        </div>
        {#if (index !== menuItems.length - 1)}
            <div class="sep">
                <hr class="sep-line"/>
            </div>
        {/if}
    {/each}
</div>


<style>
    .container {
        box-shadow: 0 0 5px 0 var(--gray-light);
        border-radius: 5px;
        width: 200px;
        position: fixed;
    }

    .menu-item {
        padding: 10px;
    }

    .menu-item:hover{
        background-color: lightcyan;
    }

    .sep {
        margin: 0 10px;
    }

    hr{
        border-top: var(--gray-light);
    }

    .hide {
        display: none;
    }
</style>