# 数组常用方法


<script setup>

  const arr = [
    {
      fnName:"isArray",
      name:"判断是否是Array",
      list:[
        {prop:"array",type:"Any",required:true,remark:""},
      ]
    },
    {
      fnName:"arrayRef",
      name:"数组去重",
      list:[
        {prop:"array",type:"Array",required:true,remark:""},
      ]
    },
  ]

</script>

<style>
table {
    border-collapse: collapse;
    width: 100%;
    background-color: #fff;
    font-size: 14px;
    margin-bottom: 45px;
    line-height: 1.5em;
    display: table;
    border-collapse: separate;
    box-sizing: border-box;
    text-indent: initial;
    border-spacing: 2px;
    border-color: gray;
}
table td:first-child, table th:first-child {
    padding-left: 10px;
}
table td {
    color: #606266;
}
table td,table th {
    border-bottom: 1px solid #dcdfe6;
    padding: 15px;
    max-width: 250px;
    min-width:100px;
    width:200px;
}
</style>

<div v-for="item in arr" >
  <h2>
    <span>{{ item.fnName }}</span>
    |
    <span>{{ item.name }}</span>
  </h2>
  <table>
    <tr>
        <th >参数</th>
        <th >类型</th>
        <th >是否必填</th>
        <th >说明</th>
    </tr>
    <tr v-for="row in item.list" >
        <td >{{ row.prop }}</td>
        <td >
          {{ row.type }}
        </td>
        <td >{{ row.required }}</td>
        <td >{{ row.remark }}</td>
    </tr>
  </table>
</div>