<template>
	<div class="content">
		<div class="sidebar-container">
			<el-menu class="side-bar-box" mode="vertical" :show-timeout="200" active-background-color="red" background-color="#304156" text-color="#bfcbd9" active-text-color="#409EFF" :unique-opened="true">
				<SidebarItem ref="siderBarItem" @openModal="openModal" @openNewLayerModal="openNewLayerModal"></SidebarItem>
			</el-menu>
		</div>
		<div class="main-map">
			<div style="height:2000px;width:100px;"></div>
		</div>
		<!-- <SetModal @closeSet="closeSet" ref="setModal"></SetModal> -->
		<NewLayerModal ref="newLayerModal" @sureChoiceTemplate="sureChoiceTemplate"></NewLayerModal>
		<MapSpecificSettings ref="mapSpecificSettings" class="map-set-box" @closeSet = "closeSet" @showGroupChioceTem= "showGroupChioceTem" @showSet ="showSet"></MapSpecificSettings>
		<MapTemplateGroup ref="mapTemplateGroup" @confirmGroupChoiceTem = "confirmGroupChoiceTem"></MapTemplateGroup>
		<MapSet ref="mapSet"></MapSet>
	</div>
</template>

<script>
	import SidebarItem from "@/components/accessoriesList/siderBarItem.vue";
	import SetModal from "@/components/accessoriesList/setModal.vue";
	import NewLayerModal from "@/components/accessoriesList/newLayerModal.vue";
	import MapSpecificSettings from "@/components/accessoriesList/mapSpecificSettings.vue";
	import MapTemplateGroup from "@/components/accessoriesList/mapTemplateGroup.vue";
	import MapSet from "@/components/accessoriesList/mapSet.vue";
	export default {
		components: {
			SidebarItem,
			SetModal,
			NewLayerModal,
			MapSpecificSettings,
			MapTemplateGroup,
			MapSet
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
				this.$refs.mapSet.close();
			},
			openModal() {
				this.$refs.mapSpecificSettings.open();
			},
			openNewLayerModal() {
				this.$refs.newLayerModal.open();
			},
			sureChoiceTemplate(obj) {
				console.log("到这里");
				this.$refs.siderBarItem.addOneLayer(obj);
			},
			showGroupChioceTem(){
				this.$refs.mapTemplateGroup.open();
			},
			confirmGroupChoiceTem(){
				this.$refs.mapSpecificSettings.addGroup()
			},
			showSet(){
				this.$refs.mapSet.open()
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
	.map-set-box{
		position: fixed;
		top: 0;
		left: 180px;
	}
</style>
