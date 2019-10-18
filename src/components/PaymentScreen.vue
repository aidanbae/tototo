<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
          <h1>Payment List</h1>
          <book-table :books="bookList"></book-table>
      </v-layout>
    </v-slide-y-transition>
  </v-container>

</template>

<script>
  import BookTable from '@/components/BookTable'

  // todo baserouter extends
  export default {
    components: {
      BookTable
    },
    props: {},
    name: 'PaymentScreen',
    data () {
      return {}
    },
    created () {
      this.$store.dispatch('getBookListFromServer', {"page": 0}).then(() => {
      })
    },
    computed: {
      bookList () {
        return this.$store.getters.getBookList
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
