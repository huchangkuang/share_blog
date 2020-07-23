<template>
    <div class="layout">
        <Header/>
        <div class="content">
            <slot/>
        </div>
        <Footer/>
    </div>
</template>

<script>
  import Header from "@/components/Header";
  import Footer from "@/components/Footer";
  export default{
      name: "Layout",
      components: {Footer, Header}
  }
</script>

<style lang="scss" scoped>
 .layout {
     display: flex;
     flex-direction: column;
     height: 100vh;
     justify-content: space-between;
     align-items: center;
     .content {
         flex-grow: 1;
     }
 }
</style>
