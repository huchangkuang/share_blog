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
                    <div class="actions">
                        <router-link :to="`/edit/${blog.id}`">编辑</router-link>
                        <a href="#" @click.prevent="onDelete(blog.id)">删除</a>
                    </div>
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
    name: "My",
    components: {Layout},
    data(){
      return {
        total: "",
        page: 1,
        blogs: []
      }
    },
    methods: {
      onPageChange() {
        console.log("当前页面改变")
      },
      onDelete(id){
        console.log(id)
      }
    }
  }
</script>

<style lang="scss" scoped>
    @import "~@/assets/style/helper.scss";

    #my,#user {

        .user-info {
            display: grid;
            grid: auto auto / 80px 1fr;

            margin-top: 30px;
            padding-bottom: 20px;
            border-bottom: 1px solid #ebebeb;

            .avatar {
                grid-column: 1;
                grid-row: 1 / span 2;
                width: 60px;
                height: 60px;
                border-radius: 50%;
            }

            h3 {
                grid-column: 2;
                grid-row: 1;
                margin-top: 10px;
            }
        }

        .item {
            display: grid;
            grid: auto  auto auto / 80px 1fr;
            margin: 20px 0;

            .date {
                grid-column: 1;
                grid-row: 1 / span 3;
                justify-self: center;
                text-align: center;

                span {
                    display: block;
                    color: $textLighterColor;
                }

                .day {
                    font-size: 40px;
                }
            }

            h3 {
                grid-column: 2;
                grid-row: 1;
            }

            p {
                grid-column: 2;
                grid-row: 2;
                margin-top: 0;
            }

            .actions {
                grid-column: 2;
                grid-row: 3;
                font-size: 12px;

                a {
                    color: $themeLighterColor;
                }

            }

        }

    }
</style>
