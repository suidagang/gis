<template>
    <div>
        <div>多页面单路由(contactUs)</div>
        <button @click = "goAdress">跳转adress页面</button>
        <button @click = "goOtherPage">跳转另外一个多页</button>
    </div>
    
</template>

<script>
    export default {
        name: "login",
        methods: {
            goAdress(){
                this.$router.push("/adress")
            },
            goOtherPage () {
                window.location = "./accessoriesList.html"
            },
        }
    }
</script>

<style scoped>

</style>