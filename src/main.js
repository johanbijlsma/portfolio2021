import 'styles.scss';

import App from './App.svelte';
import client from './sanityClient';

const app = new App({
    target: document.body,
    props: {},
});

console.log(client);

export default app;