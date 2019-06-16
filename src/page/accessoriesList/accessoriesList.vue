<template>
    <div class="sidebar-container ">
        <el-menu class="side-bar-box"
                 mode="vertical"
                 :show-timeout="200"
                 active-background-color = "red"
                 background-color= "#304156"
                 text-color="#bfcbd9"
                 active-text-color="#409EFF"
                 :unique-opened="true"
                 >
            <SidebarItem></SidebarItem>
        </el-menu>
    </div>
</template>

<script>
   import SidebarItem from '@/component/siderBarItem.vue'
    export default {
        components: {
           SidebarItem
        },
        data() {
            return {
                
            }
        },
        computed: {
        },
        mounted() {
        },
        methods: {
        }
    }
</script>

<style scoped>
    .head {
        height: 50px;
        width: 100%;
        line-height: 50px;
        text-align: center;
        font-size: 20px;
        color: black;
        border-bottom: 1px solid #ccc;
    }
</style>
