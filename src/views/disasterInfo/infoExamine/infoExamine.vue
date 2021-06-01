<template>
	<div class="infoExamine">
		<!-- 检索工具 -->
		<div class="toolBar">
			<div class="toolBar_left dfc">
				<div class="toolBar_left_selectStatus dfc mr20">
					<span class="label mr10">
						状态
					</span>
					<div class="wd160">
						<el-select v-model="status" size="small">
							<el-option :value="1" :label="1"></el-option>
						</el-select>
					</div>
				</div>
				<div class="toolBar_left_timePicker dfc mr20">
					<span class="label mr10">
						创建时间
					</span>
					<div>
						<el-date-picker
						size="small"
						type="date"
						placeholder="选择日期">
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
				<el-button type="primary" size="small">添加</el-button>
			</div>
		</div>
		
		<!-- 表格展示 -->
		<div class="table">
			<el-table :data="tableData" style="width: 100%" border>
				<el-table-column align="center" label="序号" type="index" width="60"></el-table-column>
				<el-table-column align="center" prop="date" label="灾情编号"></el-table-column>
				<el-table-column align="center" prop="date" label="灾情事故名称"></el-table-column>
				<el-table-column align="center" prop="date" label="地点位置"></el-table-column>
				<el-table-column align="center" prop="date" label="灾情事故类型"></el-table-column>
				<el-table-column align="center" prop="date" label="信息整理"></el-table-column>
				<el-table-column align="center" prop="date" label="信息审核"></el-table-column>
				<el-table-column align="center" prop="date" label="创建时间"></el-table-column>
				<el-table-column align="center" prop="date" label="操作" width="80">
					<template slot-scope="scope">
						<el-button type="text" size="mini" @click="turnDetail(scope.row)">详情</el-button>
					</template>
				</el-table-column>
			</el-table>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'infoExamine',
		data() {
			return {
				tableData: [{}]
			}
		},
		mounted() {
			this.init();
		},
		methods: {
			// 初始化
			init() {
				
			},
			
			// 跳转详情
			turnDetail(row) {
				this.$router.push(`/infoExamine/infoExamineDetail/${ 1 }`);
			}
		},
	}
</script>

<style lang="scss" scoped>
	.infoExamine {
		padding: 20px;
		
		.label {
			color: #4d4d4d;
			font-size: 14px;
		}
		
		.toolBar {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
		
		.table {
			margin-top: 20px;
			width: 100%;
		}
	}
</style>

<style lang="scss">
	.infoExamine {
	
	}
</style>
