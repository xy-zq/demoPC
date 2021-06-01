<template>
	<div class="myMission">
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
				<el-table-column align="center" prop="date" label="下派人"></el-table-column>
				<el-table-column align="center" prop="date" label="下派时间"></el-table-column>
				<el-table-column align="center" prop="date" label="内容"></el-table-column>
				<el-table-column align="center" prop="date" label="操作" width="80">
					<template slot-scope="scope">
						<el-button type="text" size="mini" @click="dialogVisible = true">接受任务</el-button>
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
		
		<!-- 接受任务弹窗 -->
		<el-dialog
		  title="接收处理"
		  :visible.sync="dialogVisible"
		  :close-on-click-modal="false"
		  center
		  width="320px">
		  <div class="dialogContent">
			  <div class="radio">
				<el-radio v-model="radio" label="1">接受</el-radio>
				<el-radio v-model="radio" label="2">拒绝</el-radio>
			  </div>
			  <div class="tips">
				  <div class="text">
					  任务接收后不要忘记去 '我的项目' 制定、查看任务计划。
					  按时完成工作内容哦！
				  </div>
			  </div>
		  </div>
		  <span slot="footer" class="dialog-footer">
		    <el-button @click="dialogVisible = false">取 消</el-button>
		    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
		  </span>
		</el-dialog>
	</div>
</template>

<script>
	import { turnPage } from '@/mixins/turnPage.js'
	
	export default {
		name: 'myMission',
		mixins: [turnPage],
		data() {
			return {
				tableData: [{}, {}],
				searchInfo: {
					pageNum: 1,
					pageSize: 10
				},
				totalPage: 1,
				dialogVisible: false,
				radio: '1'
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
				this.$router.push(`/myMission/sendMission/${ 1 }`);
			},
		},
	}
</script>

<style lang="scss" scoped>
	.myMission {
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
		
		.dialogContent {
			
			.radio {
				display: flex;
				justify-content: center;
			}
			
			.tips {
				
				margin-top: 20px;
				display: flex;
				justify-content: center;
				font-size: 14px;
				
				.text {
					text-align: center;
					color: #b8b8b8;
				}
			}
		}
	}
</style>

<style lang="scss">
	.myMission {
	
	}
</style>
