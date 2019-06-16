<template>
  <div class="content">
    <div class="sidebar-container">
      <el-menu
        class="side-bar-box"
        mode="vertical"
        :show-timeout="200"
        active-background-color="red"
        background-color="#304156"
        text-color="#bfcbd9"
        active-text-color="#409EFF"
        :unique-opened="true"
      >
        <SidebarItem
          ref="siderBarItem"
          @openModal="openModal"
          @openNewLayerModal="openNewLayerModal"
        ></SidebarItem>
      </el-menu>
    </div>
    <div class="main-map"></div>
    <SetModal @closeSet="closeSet" ref="setModal"></SetModal>
    <NewLayerModal ref="newLayerModal" @sureChoiceTemplate="sureChoiceTemplate"></NewLayerModal>
  </div>
</template>

<script>
import SidebarItem from "@/component/accessoriesList/siderBarItem.vue";
import SetModal from "@/component/accessoriesList/setModal.vue";
import NewLayerModal from "@/component/accessoriesList/newLayerModal.vue";
export default {
  components: {
    SidebarItem,
    SetModal,
    NewLayerModal
  },
  data() {
    return {
      dialogVisible: false
    };
  },
  computed: {},
  mounted() {},
  methods: {
    closeSet() {
		this.$refs.siderBarItem.clearActive();
	},
    openModal() {
      this.$refs.setModal.open();
    },
    openNewLayerModal() {
      this.$refs.newLayerModal.open();
    },
    sureChoiceTemplate(obj) {
      console.log("到这里");
      this.$refs.siderBarItem.addOneLayer(obj);
    }
  }
};
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
html,
body,
div,
.content {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow-y: auto;
}
.main-map {
  margin-left: 180px;
  min-height: 100%;
  z-index: 9999;
  background: pink;
  overflow: hidden;
}
</style>
