<template>
  <div class="hello">
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    <a href="#">hello</a>
    <el-button :plain="true" @click="success">成功</el-button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return{
      input: ""
    }
  },
  methods:{
    success(){
      this.$message({
        message:"这是一条消息",
        type:"success"
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
