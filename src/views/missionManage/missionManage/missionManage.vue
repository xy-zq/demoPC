<template>
	<div class="missionManage">
		<!-- 检索工具 -->
		<div class="toolBar">
			<div class="toolBar_left dfc">
				<div class="toolBar_left_timePicker dfc mr20">
					<span class="label mr10">
						灾情时间
					</span>
					<div>
						<el-date-picker
						type="daterange"
						size="small"
						range-separator="-"
						start-placeholder="开始日期"
						end-placeholder="结束日期">
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
		</div>
		
		<!-- 表格展示 -->
		<div class="table">
			<el-table :data="tableData" style="width: 100%" border>
				<el-table-column align="center" prop="date" label="主管机构"></el-table-column>
				<el-table-column align="center" prop="date" label="灾情时间"></el-table-column>
				<el-table-column align="center" prop="date" label="案发地址"></el-table-column>
				<el-table-column align="center" prop="date" label="案件类型"></el-table-column>
				<el-table-column align="center" prop="date" label="报警方式"></el-table-column>
				<el-table-column align="center" prop="date" label="接警员"></el-table-column>
				<el-table-column align="center" prop="date" label="操作" width="80">
					<template slot-scope="scope">
						<el-button type="text" size="mini" @click="sendMission(scope.row)">下派任务</el-button>
					</template>
				</el-table-column>
			</el-table>
		</div>
		
		<!-- 翻页 -->
		<div class="pageTurn">
			<el-pagination
			@size-change="handleSizeChange"
			@current-change="handleCurrentChange"
			:current-page="searchInfo.pageNum"
			:page-size="searchInfo.pageSize"
			:page-sizes="[10, 20, 50, 100]"
			:total="totalPage"
			background
			layout="sizes, prev, pager, next, jumper">
			</el-pagination>
		</div>
	</div>
</template>

<script>
	import { turnPage } from '@/mixins/turnPage.js'
	
	export default {
		name: 'missionManage',
		mixins: [turnPage],
		data() {
			return {
				tableData: [{}, {}],
				searchInfo: {
					pageNum: 1,
					pageSize: 10
				},
				totalPage: 1
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
			sendMission(row) {
				this.$router.push(`/missionManage/sendMission/${ 1 }`);
			},
		},
	}
</script>

<style lang="scss" scoped>
	.missionManage {
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
		
		.pageTurn {
			margin-top: 20px;
			text-align: right;
		}
	}
</style>

<style lang="scss">
	.missionManage {
	
	}
</style>
