<template>
  <v-app id="layout">
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item link to="/">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/student">
          <v-list-item-action>
            <v-icon>mdi-archive</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Students</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="#0091DD" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Vue App Template</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col class="text-center">
            <router-view />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-footer color="#0091DD" app>
      <span class="white--text"
        >&copy; {{ new Date().getFullYear() }} - Martin Kovacs</span
      >
    </v-footer>
  </v-app>
</template>
<script>
export default {
  name: "App",
  data: () => ({
    drawer: null,
  }),
};
</script>
