<template>
	<div class="mailGroup">
		
		<!-- 检索工具 -->
		<div class="toolBar">
			<div class="toolBar_left dfc">
				<div class="toolBar_left_selectStatus dfc mr20">
					<span class="label mr10">
						使用状态
					</span>
					<div class="wd160">
						<el-select v-model="status" size="small">
							<el-option :value="1" :label="1"></el-option>
						</el-select>
					</div>
				</div>
				<div class="toolBar_left_searchBox dfc">
					<div class="mr10">
						<el-input size="small"></el-input>
					</div>
					<div>
						<el-button type="primary" size="small">查询</el-button>
					</div>
				</div>
			</div>
			<div class="toolBar_right">
				<el-button type="info" size="small" @click="addGroup">添加分组</el-button>
			</div>
		</div>
		
		<!-- 表格展示 -->
		<div class="groupCardContainer">
			<div class="groupCard_item" v-for="(item, index) in groupList" :key="index">
				<div class="groupCard_item_groupName">
					<span class="line">
						
					</span>
					<span class="groupName mr10">
						江北支队人员
					</span>
					<div class="totalNum mr10">
						共<span class="FontColorNormal"> 125</span>人
					</div>
					<el-button size="mini" type="info" plain>添加人员</el-button>
				</div>
				<div class="groupCard_item_table">
					<el-table :data="item" style="width: 100%" border>
						<el-table-column align="center" label="序号" type="index" width="60"></el-table-column>
						<el-table-column align="center" prop="date" label="姓名"></el-table-column>
						<el-table-column align="center" prop="date" label="性别"></el-table-column>
						<el-table-column align="center" prop="date" label="手机号"></el-table-column>
						<el-table-column align="center" prop="date" label="邮箱"></el-table-column>
						<el-table-column align="center" prop="date" label="QQ号"></el-table-column>
						<el-table-column align="center" prop="date" label="机构"></el-table-column>
						<el-table-column align="center" prop="date" label="职位"></el-table-column>
						<el-table-column align="center" prop="date" label="创建人"></el-table-column>
						<el-table-column align="center" prop="date" label="创建时间"></el-table-column>
						<el-table-column align="center" prop="date" label="操作" width="260">
							<template slot-scope="scope">
								<el-button type="info" size="mini">修改</el-button>
								<el-button type="danger" size="mini">删除</el-button>
								<el-select placeholder="移动至" class="tableSelectWith" size="mini"></el-select>
							</template>
						</el-table-column>
					</el-table>
				</div>
			</div>
		</div>
		
		<!-- 添加分组弹窗 -->
		<el-dialog
		  title="添加分组"
		  center
		  :visible.sync="showDialog_addGroup"
		  :close-on-click-modal="false"
		  width="320px">
		  <div class="dialogContainer_addGroup">
			<div class="tips">
				清输入新的分组名称
			</div>
			<div class="input mt20">
				<el-input placeholder="请输入分组名"></el-input>
			</div>
		  </div>
		  <span slot="footer" class="dialog-footer">
		    <el-button @click="showDialog_addGroup = false">取 消</el-button>
		    <el-button type="info" @click="showDialog_addGroup = false">确 定</el-button>
		  </span>
		</el-dialog>
	</div>
</template>

<script>
	export default {
		name: 'mailGroup',
		data() {
			return {
				status: '',
				groupList: [[{}], [{}], []],
				showDialog_addGroup: false
			}
		},
		mounted() {
			
		},
		methods: {
			// 初始化
			init() {
				
			},
			
			// 添加分组
			addGroup() {
				this.showDialog_addGroup = true;
			}
		},
	}
</script>

<style lang="scss" scoped>
	.mailGroup {
		padding: 20px;
		
		.label {
			color: #4d4d4d;
			font-size: 14px;
		}
		
		.toolBar {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding-bottom: 25px;
			border-bottom: 1px solid #d8d8d8;
		}
		
		.groupCardContainer {
			margin-top: 20px;
			
			.groupCard_item {
				
				.groupCard_item_groupName {
					display: flex;
					align-items: center;
					
					.line {
						height: 20px;
						display: block;
						width: 5px;
						background-color: #0066cc;
						margin-right: 10px;
					}
					
					.groupName, .totalNum {
						color: #888888;
						font-size: 15px;
					}
				}
				
				.groupCard_item_table {
					margin: 20px 0;
					
					.tableSelectWith {
						width: 100px;
						margin-left: 10px;
					}
				}
			}
		}
		
		.dialogContainer_addGroup {
			
			.tips {
				width: 100%;
				text-align: center;
			}
		}
	}
</style>

<style lang="scss">
	.mailGroup {
		
		.el-dialog__body {
			padding: 10px 20px;
		}
		
		.el-dialog.el-dialog--center {
			margin-top: 30vh !important;
		}
	}
</style>
