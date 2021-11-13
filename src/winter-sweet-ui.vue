<template>
  <div class="winter-sweet-ui">
    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
    <el-table
      v-loading="parameter.loading"
      :data="parameter.tableData"
      height="600"
      border
      width="550"
      element-loading-text="正在加载中，请稍后..."
      element-loading-spinner="el-icon-loading"
    >
      <el-table-column
        v-for="(item, i) in parameter.fields"
        :key="i"
        :prop="item.prop"
        :label="item.label"
        min-width="100"
      />
      <slot></slot>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'WinterSweetUi',
  props: {
    parameter: Object
  },
  data() {
    return {}
  }
}
</script>

<style lang="less"></style>
