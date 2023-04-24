# 其他常用方法


<script setup>

  const arr = [
    {
      fnName:"getClient",
      name:"获取客户端环境",
      list:[]
    },
    {
      fnName:"isUrl",
      name:"判断是否是URL",
      list:[
        {prop:"url",type:"String",required:true,remark:""},
      ]
    },
    {
      fnName:"convertUrlToBase64",
      name:"图片地址转 Base64",
      list:[
        {prop:"url",type:"String",required:true,remark:"图片地址"},
      ]
    },
    {
      fnName:"base64ToBlob",
      name:"Base64 转 Blob",
      list:[
        {prop:"base64",type:"String",required:true,remark:"base64源"},
      ]
    },
    {
      fnName:"downloadUrl",
      name:"在浏览器中根据URL下载文件",
      list:[
        {prop:"url",type:"String",required:true,remark:"文件地址"},
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