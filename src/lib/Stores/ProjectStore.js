
import {writable} from 'svelte/store';

const projectStore = writable([
        {
            id:0,
            name: "first Project",
            requests: [
                {
                    method: "get",
                    url: "https://jsonplaceholder.typicode.com/posts"
                },
                {
                    method: "get",
                    url: "https://jsonplaceholder.typicode.com/posts/1"
                }
            ]
        },
        {
            id:1,
            name: "second Project",
            requests: [
                {
                    method: "get",
                    url: "https://jsonplaceholder.typicode.com/posts"
                },
                {
                    method: "get",
                    url: "https://jsonplaceholder.typicode.com/posts"
                },
                {
                    method: "get",
                    url: "https://jsonplaceholder.typicode.com/posts"
                },
                {
                    method: "get",
                    url: "https://jsonplaceholder.typicode.com/posts"
                },
                {
                    method: "get",
                    url: "https://jsonplaceholder.typicode.com/posts"
                },
                {
                    method: "get",
                    url: "https://jsonplaceholder.typicode.com/posts"
                },
                {
                    method: "get",
                    url: "https://jsonplaceholder.typicode.com/posts/1"
                }
            ]
        }
    ]);

export default projectStore;
