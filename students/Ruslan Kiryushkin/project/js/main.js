const app = new Vue ({
    el: "#app",
    methods: {
        getJSON (url) {
            return fetch (url)
                    .then(data => data.json())
                    .catch(() => alert(`Проблемы с получением данных с сервера`));
        },
    }
});