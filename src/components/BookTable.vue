<template>
  <v-container grid-list-xl>
    <div class="bookList">
      <v-data-table
        :headers="headers"
        :items="books"
        class="elevation-1"
      >
        <template slot="items" slot-scope="props">
          <td class="text-xs">
            <v-layout>
              <v-flex row>
              <v-icon :style="getStatusColor(props.item.State)">home</v-icon>
              {{ getStatus(props.item.State)}}
              </v-flex>
            </v-layout>
          </td>
          <td>{{ props.item.player_id }}</td>
          <td class="text-xs">{{ props.item.product_id }}</td>
          <td class="text-xs">{{ props.item.price }}</td>
          <td class="text-xs">{{ props.item.issued_at }}</td>
          <td class="text-xs">{{ props.item.Created }}</td>
          <td class="text-xs">{{ props.item.PurchasedAt }}</td>
          <td class="text-xs">{{ props.item.CompletedAt }}</td>

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
      books: null,
    },
    name: 'BookList',
    data () {
      return {
        headers: [
          { text: 'state', value: 'state', sortable: false },
          {
            text: 'PlayerId',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Product', value: 'product_id', sortable: false },
          { text: 'Price', value: 'price', sortable: false },
          { text: 'IssueTime', value: 'issued', sortable: false },
          { text: 'Created', value: 'created', sortable: false },
          { text: 'Purchased', value: 'purchased', sortable: false },
          { text: 'Completed', value: 'completed', sortable: false },
        ]
      }
    },
    methods: {
      timeConverter(issuetime) {
        let a = new Date(issuetime * 1000);
        let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        let year = a.getFullYear();
        let month = months[a.getMonth()];
        let date = a.getDate();
        let hour = a.getHours();
        let min = a.getMinutes();
        let sec = a.getSeconds();
        let time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
        return time;
      },
      getStatus(state) {
        switch (state) {
          case 0 :
            return "prepared"
          case 1 :
            return "purchased"
          case 2 :
            return "completed"
        }
      },
      getStatusColor(state) {
        switch (state) {
          case 0 :
            return {"color":'grey'}
          case 1 :
            return {"color":'#ecef4f'}
          case 2 :
            return {"color":'#7cef4f'}
        }
      },
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
