<template>
    <div class="map-set" v-show="isShowSetting">
        <i class="el-icon-close close-icon" @click="closeSetting"></i>
    </div>
</template>
<script>
    export default {
        name: 'mapSpecificSettings',
        components: {
        },
        data() {
            return {
                isShowSetting: false
            }
        },
        created() {
        },
        mounted() {
        },
        methods: {
            open() {
                this.isShowSetting = true;
            },
            closeSetting() {
                this.isShowSetting = false;
                this.$emit("closeSet")
            }
        }
    }
</script>

<style scoped>
    .map-set {
        width: 180px;
        min-height: 100%;
        background: #32bced;
        overflow-y: auto;
    }
    .close-icon {
        position: absolute;
        top: 8px;
        right: 8px;
        color: #fff;
        font-size: 24px;
    }
</style>

