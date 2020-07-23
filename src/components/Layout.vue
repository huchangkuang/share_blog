<template>
    <div class="layout">
        <Header class="header"/>
        <main class="content">
            <slot/>
        </main>
        <Footer class="footer"/>
    </div>
</template>

<script>
  import Header from "@/components/Header";
  import Footer from "@/components/Footer";

  export default {
    name: "Layout",
    components: {Footer, Header}
  };
</script>

<style lang="scss" scoped>
    .layout {
        height: 100vh;
        display: grid;
        grid-template-columns: 12% auto 12%;
        grid-template-rows: auto 1fr auto;
        grid-template-areas: "header header header"
                       ".      main  ."
                       "footer footer footer";
        .header {
            grid-area: header;
            padding-left: 12%;
            padding-right: 12%;
        }
        .content {
            grid-area: main;
        }
        .footer {
            grid-area: footer;
            padding-left: 12%;
            padding-right: 12%;
        }
    }
    @media (max-width: 768px) {
        .layout {
            grid-template-columns: 10px auto 10px;
            .header, .footer {
                padding-left: 10px;
                padding-right: 10px;
            }
        }

    }
</style>
