<template>
  <div id="nav">
    <b-navbar toggleable="md"
              type="dark"
              variant="dark"
              fixed="top">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <!-- <b-navbar-brand href="/">Vue Demo App</b-navbar-brand> -->
      <router-link :to="{ path: '/' }"
                   class="navbar-brand">Vue Demo App</router-link>
      <b-collapse is-nav
                  id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item-dropdown text="Vue套件範例"
                               right>
            <router-link :to="{ path: '/axios' }"
                         class="dropdown-item">axios</router-link>
            <router-link :to="{ path: '/validation' }"
                         class="dropdown-item">vee-validate</router-link>
          </b-nav-item-dropdown>
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item-dropdown text="Vue範例"
                               right>
            <router-link :to="{ path: '/mixin' }"
                         class="dropdown-item">Mixin</router-link>
            <router-link :to="{ path: '/component' }"
                         class="dropdown-item">Component</router-link>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: "Nav"
};
</script>
