<template>
    <div class="contact-us">
        <template v-for="item in list">
            <div class="box-list">
                <div class="box-name">{{item.storeName}}</div>      
                <div class="box-flex">
                    <div class="list-left">地址:</div>
                    <div class="list-right">{{item.adress}}</div>    
                </div>  
                <div class="box-flex" v-if="item.tel">
                    <div  class="list-left">电话:</div>
                    <a class="list-right" :href="item.tel">{{item.number}}</a>   
                </div>
            </div>
            <div class="fen"></div>
        </template>
        
    </div>
</template>
<script>
    export default {
        name: 'contactUs',
        components: {
           
        },
        data() {
            return {
                list:[{
                    storeName:"贝森店",
                    adress:"成都市青羊区贝森路384-386号",
                    number:"028-86643689",
                    tel:"tel:028-86643689"
                },
                {
                    storeName:"时代锦绣店",
                    adress:"成都市武侯大道文昌段55号时代锦绣",
                    number:"028-85040557",
                    tel:"tel:028-85040557"
                },
                {
                    storeName:"九里堤店",
                    adress:"成都市金牛区九里堤南路84号附17-19号",
                    number:"028-87784887",
                    tel:"tel:028-87784887"
                },
                {
                    storeName:"高新区石羊店",
                    adress:"成都市高新区益新大道288号石羊工业园5号",
                    number:"028-85365774",
                    tel:"tel:028-85365774"
                },
                {
                    storeName:"魅城店",
                    adress:"成都市成华区万科路19号1栋1层附25号-29号",
                    number:"028-62093373",
                    tel:"tel:028-62093373"
                },
                {
                    storeName:"府华二路店",
                    adress:"成都市成华区府华二路68号2栋附4号 ",
                    number:"",
                    tel:""
                }]
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

