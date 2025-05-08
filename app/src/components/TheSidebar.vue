<template>
  <div id="app">
    <div class="topbar"></div>

    <aside class="sidebar" :class="{ show: isSidebarVisible }">
      <a href="#">
        <img src="@/assets/SUNX-DA-AMAZONIA.png" alt="Logo Sunx" />
        <span class="icon-text">Início</span>
      </a>
      <a v-for="item in menuItems" :key="item.text" href="#">
        <i :class="item.icon"></i>
        <span class="icon-text">{{ item.text }}</span>
      </a>
    </aside>

    <div class="content p-4">
      

    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isSidebarVisible: true,
      menuItems: [
        { icon: 'fas fa-shopping-cart', text: 'Compras' },
        { icon: 'fas fa-rocket', text: 'Lançamentos' },
        { icon: 'fas fa-chart-bar', text: 'Relatórios' },
        { icon: 'fas fa-gift', text: 'Presentes' },
        { icon: 'fas fa-user', text: 'Perfil' },
        { icon: 'fas fa-cog', text: 'Configurações' },
        { icon: 'fas fa-map-marker-alt', text: 'Localização' }
      ]
    }
  }
}
</script>

<style scoped>
@import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.4/dist/css/bootstrap.min.css";
@import "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css";
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css";
/* Espaço no topo da página */
body {
  padding-top: 70px;
}

/* Topbar fixa */
.topbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: #323435ca;
  z-index: 1030;
}

/* Sidebar padrão */
.sidebar {
  position: fixed;
  top: 60px; /* abaixo da topbar */
  left: 0;
  height: calc(100% - 60px);
  width: 100px;
  background-color: #323435ca;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  z-index: 1000;
  transition: width 0.3s ease;
}

/* Sidebar expandida */
.sidebar.show {
  width: 130px;
  align-items: flex-start;
  padding-left: 20px;
}

/* Logo da sidebar */
.sidebar img {
  width: 40px;
  height: 40px;
  margin-bottom: 30px;
  transition: transform 0.3s ease;
}

/* Links da sidebar */
.sidebar a {
  color: #00ff84;
  text-decoration: none;
  font-size: 22px;
  margin: 15px 0;
  padding: 5px 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  transition: color 0.3s ease, transform 0.3s ease;
}

.sidebar.show a {
  justify-content: center;
  align-items: center;
}

/* Hover nos links */
.sidebar a:hover {
  color: #ffffff;
  background-color: #1c262b;
  border-radius: 8px;
}

.sidebar a:hover i,
.sidebar a:hover img {
  transform: scale(1.5);
}

/* Texto descritivo (inicialmente escondido) */
.sidebar .icon-text {
  font-size: 12px;
  margin-top: 5px;
  color: white;
  display: none;
}

/* Mostrar texto quando sidebar estiver expandida */
.sidebar.show .icon-text {
  display: inline;
  margin-top: 0;
}

/* Conteúdo principal */
.content {
  margin-left: 20px;
  margin-top: 60px;
  transition: margin-left 0.3s ease;
}

/* Quando sidebar expandida, desloca o conteúdo */
.sidebar.show ~ .content {
  margin-left: 130px;
}
</style>
