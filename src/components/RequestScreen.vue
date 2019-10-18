<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <h1>Request Record</h1>
        <request-table :requests="requestList"></request-table>
      </v-layout>
    </v-slide-y-transition>
  </v-container>

</template>

<script>
  import RequestTable from '@/components/RequestTable'

  // todo baserouter extends
  export default {
    components: {
     RequestTable
    },
    props: {},
    name: 'RequestScreen',
    data () {
      return {}
    },
    created () {
      this.$store.dispatch('getRequestListFromServer', {"page": 0}).then(() => {
      })
    },
    computed: {
      requestList () {
        return this.$store.getters.getRequestList
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
