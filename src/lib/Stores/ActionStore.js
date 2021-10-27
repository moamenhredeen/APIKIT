import {writable} from 'svelte/store';

const actionStore = writable([
    {displayName: "first action", action: "do something" , shortcut:"ctrl+o"},
    {displayName: "second action", action: "do something" , shortcut:"ctrl+o"},
    {displayName: "third action", action: "do something" , shortcut:"ctrl+o"},
    {displayName: "fourth action", action: "do something" , shortcut:"ctrl+o"},
    {displayName: "fifth action", action: "do something" , shortcut:"ctrl+o"}
]);

const customActionStore = {
    subscribe: actionStore.subscribe
}

export default customActionStore;