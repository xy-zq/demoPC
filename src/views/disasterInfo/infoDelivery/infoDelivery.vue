<template>
	<div class="infoDelivery">
		<el-tabs type="border-card">
			<el-tab-pane label="再审发布消息">
				<!-- 表格展示 -->
				<div class="table">

					<!-- 检索工具 -->
					<div class="toolBar">
						<div class="toolBar_left dfc">
							<div class="toolBar_left_timePicker dfc mr20">
								<span class="label mr10">
									创建时间
								</span>
								<div>
									<el-date-picker type="date" size="small" placeholder="选择日期">
									</el-date-picker>
								</div>
							</div>
							<div class="toolBar_left_searchBox dfc">
								<div class="mr10">
									<el-input size="small" placeholder="请输入查询内容"></el-input>
								</div>
								<div>
									<el-button type="primary" size="small">查询</el-button>
								</div>
							</div>
						</div>

						<div class="toolBar_right">
							<el-button type="info" size="small">添加</el-button>
						</div>
					</div>

					<el-table :data="tableData" style="width: 100%" border>
						<el-table-column align="center" label="序号" type="index" width="60"></el-table-column>
						<el-table-column align="center" prop="date" label="文件名称"></el-table-column>
						<el-table-column align="center" prop="date" label="发布地址"></el-table-column>
						<el-table-column align="center" prop="date" label="上传者"></el-table-column>
						<el-table-column align="center" prop="date" label="文件大小"></el-table-column>
						<el-table-column align="center" prop="date" label="创建时间"></el-table-column>
						<el-table-column align="center" prop="date" label="审核状态"></el-table-column>
						<el-table-column align="center" prop="date" label="审核人员"></el-table-column>
						<el-table-column align="center" prop="date" label="操作" width="160">
							<template slot-scope="scope">
								<el-button type="info" size="mini">评审</el-button>
								<el-button size="mini">预览</el-button>
							</template>
						</el-table-column>
					</el-table>
				</div>
			</el-tab-pane>
			<el-tab-pane label="未发布消息"></el-tab-pane>
			<el-tab-pane label="发布历史"></el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
	export default {
		name: 'infoDelivery',
		data() {
			return {
				tableData: [{}, {}, {}],
			}
		},
		mounted() {
			this.init();
		},
		methods: {
			// 初始化
			init() {

			},

		},
	}
</script>

<style lang="scss" scoped>
	.infoDelivery {
		padding: 20px;
		
		.label {
			color: #4d4d4d;
			font-size: 14px;
		}
		
		.toolBar {
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-bottom: 20px;
		}
		
		.table {
			margin: 20px 0;
			width: 100%;
		}
	}
</style>

<style lang="scss">
	.infoDelivery {}
</style>
