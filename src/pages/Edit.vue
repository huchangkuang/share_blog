<template>
    <Layout>
        <div id="edit">
            <h1>编辑文章</h1>
            <h3>文章标题</h3>
            <el-input v-model="title"></el-input>
            <p class="msg">限30个字</p>
            <h3>内容简介</h3>
            <el-input type="textarea" v-model="description"  :autosize="{ minRows: 2, maxRows: 6}"></el-input>
            <p class="msg">限30个字</p>
            <h3>文章内容</h3>
            <el-input type="textarea" v-model="content" :autosize="{ minRows: 4, maxRows: 30}"></el-input>
            <p class="msg">限30个字</p>
            <p>
                <label>是否展示到首页</label>
                <el-switch v-model="atIndex" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
            </p>
            <el-button @click="onEdit">确定</el-button>
        </div>
    </Layout>
</template>

<script>

  import Layout from "@/components/Layout.vue";
  export default {
    name: "Edit",
    components: {Layout},
    data(){
      return {
        title:"",
        description:"",
        content:"",
        atIndex:false
      }
    },
    methods:{
      onEdit(){
        console.log("编辑")
      }
    }
  }
</script>

<style lang="scss" scoped>
    @import "~@/assets/style/helper.scss";
    #edit, #create {
        padding-bottom: 30px;

        h1 {
            text-align: center;
        }

        .msg {
            text-align: right;
            font-size: 12px;
            color: $textLighterColor;
        }
    }
</style>
