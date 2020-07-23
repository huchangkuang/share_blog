<template>
    <Layout>
        <div id="detail">
            <section class="user-info">
                <img alt="" src="" class="avatar">
                <h3>{{title}}</h3>
                <p>
                    <router-link :to="`/user`"></router-link>
                    发布于{{createdAt}}
                </p>
            </section>
            <section class="article" v-html="markdown"></section>
        </div>
    </Layout>
</template>

<script>

  import Layout from "@/components/Layout.vue";

  export default {
    name: "Detail",
    components: {Layout},
    data(){
      return{
        createdAt:"",
        markdown: ""
      }
    }
  };
</script>

<style lang="scss" scoped>
    @import "~@/assets/style/helper.scss";

    #detail {
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
                margin: 5px 0;
            }

            p {
                grid-column: 2;
                grid-row: 2;
                margin-top: 0;
                font-size: 12px;
                color: $textLighterColor;

                a {
                    color: $themeColor;
                    text-decoration: none;
                }
            }
        }

        .article {
            padding: 30px 0;
        }
    }
</style>
