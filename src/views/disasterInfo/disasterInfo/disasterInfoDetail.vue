<template>
	<div class="disasterInfoDetail">
		<div class="backBtn">
			<el-button type="primary" size="small" @click="backPage">返回</el-button>
		</div>
		
		<!-- 基础信息 -->
		<div class="baseInfo">
			<div class="baseInfo_headBar">
				<span class="baseInfo_headBar_line"></span>
				<span class="baseInfo_headBar_text">基础信息</span>
			</div>
			<div class="baseInfo_infoContent">
				<div class="baseInfo_infoContent_item">
					<div>
						灾情类型：<span>火灾</span>
					</div>
					<div>
						灾情时间：<span>2021年4月26日 17:25:47</span>
					</div>
					<div>
						灾情地点：<span>重庆市×××地点</span>
					</div>
					<div>
						受灾人数：<span>2</span>
					</div>
				</div>
				<div class="baseInfo_infoContent_item">
					<div>
						人员伤亡：<span>火灾</span>
					</div>
					<div>
						倒塌和损坏房屋：<span>2021年4月26日 17:25:47</span>
					</div>
					<div>
						损失面积：<span>重庆市×××地点</span>
					</div>
					<div>
						经济损失：<span>1个亿</span>
					</div>
				</div>
			</div>
		</div>
		
		<!-- 文件资料 -->
		<div class="fileInfo">
			<div class="baseInfo_headBar">
				<span class="baseInfo_headBar_line"></span>
				<span class="baseInfo_headBar_text">文件资料</span>
			</div>
			
			<div class="fileInfoContainer">
				
				<!-- 卡片 -->
				<el-tabs type="border-card">
				  <el-tab-pane label="动员信息">
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
										<el-date-picker
										  type="date"
										  size="small"
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
						</div>
						  
					  	<el-table :data="tableData" style="width: 100%" border>
					  		<el-table-column align="center" label="序号" type="index" width="60"></el-table-column>
					  		<el-table-column align="center" prop="date" label="文件名称"></el-table-column>
					  		<el-table-column align="center" prop="date" label="上传者"></el-table-column>
					  		<el-table-column align="center" prop="date" label="文件大小"></el-table-column>
					  		<el-table-column align="center" prop="date" label="创建时间"></el-table-column>
					  		<el-table-column align="center" prop="date" label="审核状态"></el-table-column>
					  		<el-table-column align="center" prop="date" label="审核人员"></el-table-column>
					  		<el-table-column align="center" prop="date" label="操作" width="80">
					  			<template slot-scope="scope">
					  				<el-button type="info" size="mini" @click="turnDetail(scope.row)">预览</el-button>
					  			</template>
					  		</el-table-column>
					  	</el-table>
					  </div>
				  </el-tab-pane>
				  <el-tab-pane label="应急信息">

				  </el-tab-pane>
				</el-tabs>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'disasterInfoDetail',
		data() {
			return {
				tableData: [{}],
			}
		},
		mounted() {
			this.init();
		},
		methods: {
			// 初始化
			init() {
				
			},
			
			// 返回主页
			backPage() {
				this.$router.go(-1);
			},
		},
	}
</script>

<style lang="scss" scoped>
	.disasterInfoDetail {
		padding: 20px;
		
		.label {
			color: #4d4d4d;
			font-size: 14px;
		}
		
		.backBtn {
			text-align: right;
		}
		
		.baseInfo {
			
			.baseInfo_headBar {
				display: flex;
				align-items: center;
				
				.baseInfo_headBar_line {
					display: block;
					background-color: #0066cc;
					width: 5px;
					height: 20px;
					margin-right: 10px;
				}
				
				.baseInfo_headBar_text {
					font-size: 15px;
					font-weight: bold;
					color: #5d5d5d;
				}
			}
			
			.baseInfo_infoContent {
				padding: 10px 20px;
				font-size: 14px;
				color: #707070;
				
				.baseInfo_infoContent_item {
					display: flex;
					align-items: center;
					justify-content: space-between;
					margin: 10px 0;
					
					> div {
						flex: 1;
					}
				}
			}
		}
		
		.fileInfo {
			@extend .baseInfo
		}
		
		.fileInfo {
			
			.fileInfoContainer {
				margin-top: 20px;
			}
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
	.disasterInfoDetail {
	
	}
</style>
