基本用法

```vue
<template>
  <winter-sweet-ui :parameter="pars">
    <el-table-column
      fixed="right"
      label="操作"
    >
      <template slot-scope="scope">
        <el-button @click="viewDetail(scope.row)" type="text" size="small">详情</el-button>
        <el-button type="text" size="small">文件</el-button>
        <el-button type="text" size="small">图片</el-button>
      </template>
    </el-table-column>
  </winter-sweet-ui>
</template>

<script>
export default {
  data() {
    return {
      pars: {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        fields: [
          {
            label: '日期',
            prop: 'date'
          },
          {
            label: '姓名',
            prop: 'name'
          },
          {
            label: '地址',
            prop: 'address'
          }
        ],
         height: '800'
      },

    }
  },
  methods:{
    viewDetail(row) {
      //保存id
      this.$store.commit('setid', row.id)

      this.showDataTable = false;
      this.showDetail = true;
    }
  }
}
</script>
```