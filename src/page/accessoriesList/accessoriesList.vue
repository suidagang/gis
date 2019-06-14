<template>
    <div class="live-content">
        <div class="head">配件出库</div>
        <el-button type="primary">主要按钮</el-button>
        <el-select v-model="value" placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
        </el-select>
    </div>
</template>

<script>
   
    export default {
        components: {
           
        },
        data() {
            return {
                options: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                value: ''
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
