<template>
    <div>
        <template v-for="items in barMenu" >
            <el-submenu  :index="items.name" v-if="items.children.length>0" class="el-menu-title-box">
                <template slot="title" @click="goRouter(items)">
                    <i class="el-icon-share" @click.stop.prevent = "hideLayer(items,items.show)" v-show='items.show'></i>
                    <i class="el-icon-delete" @click.stop.prevent = "hideLayer(items,items.show)" v-show='!items.show'></i>
                    <span>{{items.name}}</span>
              </template>
                <template v-for = "item in items.children" >
                    <el-menu-item :index="item.name" v-if="item.children.length<=0" :class="{ active:item.active}" @click="goRouter(item)">
                        <i class="el-icon-share" @click.stop.prevent = "hideLayer(item,item.show)" v-show='item.show'></i>
                        <i class="el-icon-delete" @click.stop.prevent = "hideLayer(item,item.show)" v-show='!item.show'></i>
                        <span>{{item.name}}</span>
                    </el-menu-item>
                    <!-- <el-submenu class="boxs" :index="item.name" v-if="item.children.length>0">
                        <template slot="title">
                            <i class="el-icon-share" @click.stop.prevent = "hideLayer(item,item.show)" v-show='item.show'></i>
                            <i class="el-icon-delete" @click.stop.prevent = "hideLayer(item,item.show)" v-show='!item.show'></i>
                            <span>{{item.name}}</span>
                        </template>
                        <template v-for="list in item.children">
                            <el-menu-item :index="list.name" v-if="list.children.length<=0" @click="goRouter(item)">
                                <i class="el-icon-share" @click.stop.prevent = "hideLayer(list,list.show)" v-show='list.show'></i>
                                <i class="el-icon-delete" @click.stop.prevent = "hideLayer(list,list.show)" v-show='!list.show'></i>
                                <span>{{list.name}}</span>
                            </el-menu-item>
                        </template>
                    </el-submenu> -->
                </template>
            </el-submenu>
            <el-menu-item :index="items.name" class="submenu-title-noDropdown"  :class="{ active:items.active}" v-if="items.children.length<=0" @click="goRouter(items)">
                <i class="el-icon-share" @click.stop.prevent = "hideLayer(items,items.show)" v-show='items.show'></i>
                <i class="el-icon-delete" @click.stop.prevent = "hideLayer(items,items.show)" v-show='!items.show'></i>
                <span slot="title">{{items.name}}</span>
            </el-menu-item>
        </template>
    </div>
</template>

<script>
    export default {
        name: 'honePage',
        data() {
            return {
                barMenu:[
                    {
                        "name": "首页","icons":"el-icon-share",active:false,show:true,children: []
                    },
                    {
                        "name": "组件","icons":"el-icon-share",active:false,show:true,children:[
                        {
                            "name": "按钮","icons":"el-icon-share",active:false,show:true,children:[]
                        },
                        {
                            "name": "表格","icons":"el-icon-share",active:false,show:true,children:[]
                        },
                        {
                            "name": "单选框","icons":"el-icon-share",active:false,show:true, children: []
                        },
                        {
                            "name": "多选框","icons":"el-icon-share",active:false,show:true,children:[]
                        }]
                    },
                    {
                        "name": "开关","icons":"el-icon-share",active:false,show:true,children:[
                            {
                                "name": "开关1","icons":"el-icon-share",active:false,show:true,children:[]
                            },
                            {
                                "name": "开关2","icons":"el-icon-share",active:false,show:true, children: []
                            }
                        ]
                    },
                    {
                        "name": "图标","icons":"el-icon-share",active:false,show:true,children:[]
                    },
                ]
            }
        },

        computed: {
           

        },
        methods:{
            hideLayer (obj,show) {
                //如果下面有子集
                if(obj.children && obj.children.length>0){
                    obj.children.map((item) => {
                        return item.show = !show;
                    })
                };
                obj.show = !show;
            },
            noActive(){
                this.barMenu.map((item) =>{
                    if(item.children && item.children.length>0){
                        item.children.map((items)=>{
                            return items.active = false;
                        })
                    };
                    return item.active = false;
                })
            },
            goRouter (obj,objs) {
                //其他active样式去掉
                this.noActive();
                obj.active = true;
                let that = this;
            }
        }
    }
</script>

<style type="text/css" lang="less" scoped>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }
    .side-icons{
        display: inline-block;
        margin-right: 5px;
        width: 24px;
        text-align: center;
        font-size: 18px;
        vertical-align: middle;
        color: #fff;
    }
    .active{
        background:red!important;
    }
</style>
