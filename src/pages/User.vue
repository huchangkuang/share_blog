<template>
    <Layout>
        <div id="user">
            <section class="user-info">
                <img alt="" src="" class="avatar">
                <h3></h3>
            </section>
            <section>
                <router-link class="item" v-for="blog in blogs" :key="blog.id" :to="`/detail/${blog.id}`">
                    <div class="date">
                        <span class="day"></span>
                        <span class="month"></span>
                        <span class="year"></span>
                    </div>
                    <h3>{{blog.title}}</h3>
                    <p>{{blog.description}}</p>
                </router-link>
            </section>
            <section class="pagination">
                <el-pagination
                        layout="prev, pager, next"
                        :total="total"
                        :current-page="page"
                        @current-change="onPageChange">
                </el-pagination>
            </section>
        </div>
    </Layout>
</template>

<script>

  import Layout from "@/components/Layout.vue";

  export default {
    name: "User",
    components: {Layout},
    data() {
      return {
        total: "",
        page: 1,
        blogs: []
      }
    },
    methods: {
      onPageChange(){
        console.log("当前页面改变")
      }
    }
  };
</script>

<style lang="scss" scoped>
    #login {
        color: red;
    }
</style>
