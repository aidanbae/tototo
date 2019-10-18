/**
 * Created by aidan on 2018. 6. 19..
 */
<template>
  <nav aria-label="dodo">
    <ul class="pagination" >
      <li class="page-item" v-for="index in pageCount">
        <a class="page-link" v-on:click="callBookList(index)">{{index}}</a>
      </li>
    </ul>
  </nav>
</template>
<!--<template>-->
  <!--<div class="text-xs-center">-->
    <!--<v-pagination :length="pageCount" v-model="currentPage"></v-pagination>-->
  <!--</div>-->
<!--</template>-->

<script>

export default {
  components: {
  },
  props: {
      bookCount: 0,
  },
  name: 'Pagination',
  data () {
    return {
        currentPage: 0,
    }
  },
  created () {

  },
    methods: {
      callBookList (index) {
          this.$store.dispatch('getBookListFromServer', { "page": index - 1 }).then(() => {
              this.currentPage = index - 1
          })
      }
    },
    computed: {
      pageCount () {
          return Math.floor(this.bookCount / 5) + 1
      }
    }
}
</script>

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
.disable {
    color: #000000;
  }
</style>
