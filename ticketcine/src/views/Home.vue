<template>
  <div class="home">
    <Header />
    <Search />
    <Categories />
    <FilmsList />
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from  '@/components/Home/Header.vue'
import Search from '@/components/Home/Search.vue'
import Categories from '@/components/Home/Categories.vue'
import FilmsList from '@/components/Home/FilmsList.vue'

export default {
  name: "Home",
  components: {
    Header,
    Search,
    Categories,
    FilmsList
  }
};
</script>
