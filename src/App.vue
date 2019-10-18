<template>
  <v-app id="inspire">
    <v-navigation-drawer
            v-model="drawer"
            app
    >
      <v-list dense>
        <v-list-item
                     v-for="(item, i) in items"
                     :key="i"
                     :to="item.path== '#' ? '' : item.path"
        >
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{item.title}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
            app
            color="indigo"
            dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>{{name}}</v-toolbar-title>
    </v-app-bar>

    <v-content>
          <router-view/>
    </v-content>
    <v-footer
            color="indigo"
            app
    >
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
      name: "Devops Admin",
      items: [{
        icon: 'bubble_chart',
        title: '페이크페이',
        path: '/'
      },
        {
          icon: 'bubble_chart',
          title: '요청리스트페이지',
          path: '/request'
        }],
    }),
  }
</script>