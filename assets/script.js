const { createApp } = Vue;

createApp({
    data() {
        return {
            
            isSidebarVisible: true, //icones visiveis no sidebar
            menuItems: [ //icones do sidebar
                { icon: 'fas fa-shopping-cart', text: 'Compras' },
                { icon: 'fas fa-rocket', text: 'Lançamentos' },
                { icon: 'fas fa-chart-bar', text: 'Relatórios' },
                { icon: 'fas fa-gift', text: 'Presentes' },
                { icon: 'fas fa-user', text: 'Perfil' },
                { icon: 'fas fa-cog', text: 'Configurações' },
                { icon: 'fas fa-map-marker-alt', text: 'Localização' }
            ]
        };
    },
    methods: {
        toggleSidebar() {
            this.isSidebarVisible = !this.isSidebarVisible;
            this.updateSidebarVisibility();
        }
    }
}).mount('#app');
