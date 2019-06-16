<template>
  <div>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      dialogVisible: false
    };
  },
  computed: {},
  mounted() {},
  methods: {
    open() {
      this.dialogVisible = true;
    }
  }
};
</script>

<style scoped>
</style>
