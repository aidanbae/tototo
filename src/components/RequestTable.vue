<template>
  <v-container grid-list-xl>
    <div class="requestList">
      <v-data-table
        :headers="headers"
        :items="requests"
        class="elevation-1"
      >
        <template slot="items" slot-scope="props">
          <td>{{ props.item.type }}</td>
          <td>{{ props.item.body }}</td>
          <td class="text-xs">{{ props.item.isSuccess}}</td>
          <td class="text-xs">{{ props.item.error }}</td>
        </template>
      </v-data-table>
    </div>
  </v-container>
</template>

<script>

  export default {
    components: {

    },
    props: {
      requests: null,
    },
    name: 'RequestList',
    data () {
      return {
        headers: [
          {
            text: 'Type',
            align: 'left',
            sortable: false,
            value: 'type'
          },
          { text: 'body', value: 'body', sortable: false },
          { text: 'isSuccess', value: 'isSuccess', sortable: false },
          { text: 'error', value: 'error', sortable: false }
        ]
      }
    },
    methods: {
        decomposeSignature(signature) {
          let s = signature.split(".")[1]
          return decodeURIComponent(atob(s).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
          }).join(''));
        }
    },
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
