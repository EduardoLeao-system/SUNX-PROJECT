const { createApp } = Vue;

createApp({
    data() {
        return {
            
            logoPath: '../assets/images/logo.png',
            isSidebarVisible: true
        };
    },
    methods: {
        toggleSidebar() {
            this.isSidebarVisible = !this.isSidebarVisible;
        }
    }
}).mount('#app');