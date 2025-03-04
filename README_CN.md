# Uniface 筛选条件面板

这个筛选面板组件包括三种类型的面板，包括**筛选面板**和**动态组合筛选面板**。  
适用于多种需要用户输入查询条件的场景，以下是一些具体的使用场景：

## 使用场景
1. **数据表格筛选**：  
在展示大量数据的表格页面中，用户可以使用筛选面板快速定位所需数据。
例如，在一个员工信息表格中，用户可以通过姓名、部门、职位等条件进行筛选，快速找到目标员工。
2. **列表页面筛选**：  
在展示商品、文章、任务等列表页面中，用户可以使用筛选面板缩小搜索范围。
例如，在一个电商网站的商品列表中，用户可以通过价格范围、品牌、颜色等条件进行筛选，找到心仪的商品。
3. **搜索页面高级筛选**：  
在搜索结果页面中，用户可以使用筛选面板进一步细化搜索条件。
例如，在一个新闻搜索网站中，用户可以通过时间范围、新闻来源、关键词等条件进行筛选，获取更精确的搜索结果。
4. **报表筛选**：  
在数据报表展示页面中，用户可以使用筛选面板动态调整报表数据。
例如，在一个销售报表页面中，用户可以通过时间段、地区、产品类别等条件进行筛选，查看特定条件下的销售数据。
5. **管理后台数据筛选**：  
在管理后台的各种数据管理页面中，管理员可以使用筛选面板快速查找和管理数据。
例如，在一个用户管理页面中，管理员可以通过用户名、注册时间、用户状态等条件进行筛选，管理特定用户。
组件的特点使其在以下情况下尤其有用：

* 需要多种筛选条件： 组件支持自定义筛选条件，可以满足复杂的数据筛选需求。
* 需要重置和搜索操作： 组件内置重置和搜索按钮，方便用户进行常用操作。
* 需要高级筛选功能： 组件提供高级筛选按钮，可以扩展更复杂的筛选逻辑。
* 需要自定义操作： 组件支持添加自定义操作按钮，满足特定的业务需求。
* 需要统一的筛选面板样式： 组件提供统一的样式，方便在多个页面中使用。
* 通过使用这个筛选面板组件，可以提高用户在各种数据展示和管理场景中的操作效率和体验。

## 面板类别

### 筛选面板 `FilterPanel`

通过插槽来定义筛选面板中的内容，实现检索查询功能。详细请参考[筛选面板](./FILTER_PANEL_CN.md)

### 动态筛选面板 `DynamicFilterPanel`

通过定义筛选面板中的字段列表，可以动态渲染成筛选面板，实现检索查询功能。详细请参考[动态筛选面板](./DYNAMIC_FILTER_PANEL_CN.md)


## 安装
```shell
npm install @ticatec/uniface-filter-panel
```

## 使用方法

本组组件支持I18N多语言，默认语言为英语，可以动态切换目标语言，切换前首先需要加载响应的语言包。本组件中包括的i18n keys: 

| 键值 | 说明         | 默认 |  
|-----|------------|-----|
|uniface.filter_panel.btnReset | 重置按钮       | Reset |
|uniface.filter_panel.btnSearch | 查询按钮       | Search |
|uniface.filter_panel.btnMoreCriteria | 更多检索条件文字按钮 | More Criteria |

### 示例
```sveltehtml
import "@ticatec/uniface-filter-panel/FilterPanel" //加载普通筛选面板
import "@ticatec/uniface-filter-panel/DynamicFilterPanel" //加载动态筛选面板
```

### 关联文档

* [Uniface Element](https://github.com/henryfeng/uniface-element)

## 依赖

* [Uniface Element](https://github.com/henryfeng/uniface-element)

## 贡献

欢迎提交 issue 和 pull request。

## 版权信息

Copyright © 2023 Ticatec。保留所有权利。

本类库遵循 MIT 许可证发布。有关许可证的详细信息，请参阅 [LICENSE](LICENSE) 文件。

## 联系方式

huili.f@gmail.com

https://github.com/henryfeng/filter-panel
