import ProfileComponent from './modules/ProfileComponent.js';

(() => {
    let router = new VueRouter({
        routes: [
            {path: '/', component: ProfileComponent}
        ]
    });

    const vm = new Vue({
        created: function() {
            console.log("Application Created");
        },

        methods: {

        },

        router: router
    }).$mount("#app")
})();