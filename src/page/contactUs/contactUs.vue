<template>
    <div class="contact-us">
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        name: 'contactUs',
        components: {
           
        },
        data() {
            return {
            
            }
        },
        created() {
           
        },
        mounted() {
           
        },
        methods: {
           
        }
    }
</script>

<style scoped>
    .contact-us{
        width: 100%;
        overflow: hidden;
    }
    .box-list{
        overflow: hidden;
        margin-top: 10px;
        padding: 0 5%;
    }
    .box-name{
        height: 30px;
        line-height: 30px;
        font-weight: bold;
    }
    .box-flex{
        width: 100%;
        display: flex;
    }
    .box-flex div{
        line-height: 25px;
    }
    .list-left{
        font-size: 13px;
        width: 40px;
    }
    .list-right{
        flex: 1;
    }
    .number{
        color: blue;
    }
    .fen{
        height: 0;
        width: 90%;
        margin: 10px auto 0;
        border-top:1px solid #ccc;
    }
</style>

