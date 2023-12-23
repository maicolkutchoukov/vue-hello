const { createApp} = Vue;

createApp({
    data() {
        return {
            message: 'Hello World!',
            img: 'https://nomadicsoft.io/wp-content/uploads/2023/03/vue-blog-cover-2.png'
        }
    }
}).mount('#app');
