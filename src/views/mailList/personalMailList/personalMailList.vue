<template>
	<div class="personalMailList">
		
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
				<div class="toolBar_left_group dfc mr20">
					<span class="label mr10">
						分组
					</span>
					<div class="wd160">
						<el-select v-model="group" size="small">
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
				<el-button type="info" @click="addMailList" size="small">添加通讯录</el-button>
			</div>
		</div>
		
		<!-- 表格展示 -->
		<div class="table">
			<el-table :data="tableData" style="width: 100%" border>
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
				<el-table-column align="center" prop="date" label="操作" width="240">
					<template slot-scope="scope">
						<el-button type="info" size="mini">修改</el-button>
						<el-button type="warning" size="mini">编辑</el-button>
						<el-button type="danger" size="mini">删除</el-button>
					</template>
				</el-table-column>
			</el-table>
		</div>
		
		<!-- 添加通讯录弹窗 -->
		<el-dialog
		  title="添加"
		  :visible.sync="showDialog"
		  :close-on-click-modal="false"
		  width="500px">
		  <div class="dialogContainer">
			  <el-form 
			  :model="ruleForm" 
			  label-position="left"
			  :rules="rules" 
			  ref="ruleForm" 
			  label-width="100px" 
			  class="demo-ruleForm">
			    <el-form-item label="姓名" prop="name">
			      <el-input v-model="ruleForm.name"></el-input>
			    </el-form-item>
				<el-form-item label="分组" prop="name">
				  <el-select class="formSelect"></el-select>
				</el-form-item>
				<el-form-item label="性别" prop="name">
				    <el-radio v-model="ruleForm.radio" label="1">备选项</el-radio>
				    <el-radio v-model="ruleForm.radio" label="2">备选项</el-radio>
				</el-form-item>
				<el-form-item label="手机号" prop="name">
				  <el-input v-model="ruleForm.name"></el-input>
				</el-form-item>
				<el-form-item label="邮箱" prop="name">
				  <el-input v-model="ruleForm.name"></el-input>
				</el-form-item>
				<el-form-item label="QQ号" prop="name">
				  <el-input v-model="ruleForm.name"></el-input>
				</el-form-item>
				<el-form-item label="公司名称" prop="name">
				  <el-input v-model="ruleForm.name"></el-input>
				</el-form-item>
				<el-form-item label="职位" prop="name">
				  <el-input v-model="ruleForm.name"></el-input>
				</el-form-item>
			  </el-form>
		  </div>
		  <span slot="footer" class="dialog-footer">
		    <el-button @click="showDialog = false">取 消</el-button>
		    <el-button type="info" @click="showDialog = false">确 定</el-button>
		  </span>
		</el-dialog>
	</div>
</template>

<script>
	export default {
		name: 'personalMailList',
		data() {
			return {
				status: '',
				group: '',
				tableData: [{}, {}],
				showDialog: false,
				ruleForm: {
					name: ''
				},
				rules: {
					name: [{ required: true, message: '请输入姓名', trigger: 'blur' }]
				},
			}
		},
		mounted() {
			this.init();
		},
		methods: {
			// 初始化
			init() {

			},
			
			// 添加通讯录
			addMailList() {
				this.showDialog = true;
			},
		},
	}
</script>

<style lang="scss" scoped>
	.personalMailList {
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
			width: 100%;
			margin-top: 20px;
		}
		
		.dialogContainer {
			
			.formSelect {
				width: 100%;
			}
		}
	}
</style>

<style lang="scss">
	.personalMailList {
		
		.el-dialog__footer {
			text-align: center;
		}
		
		.el-dialog__body {
			padding: 10px 20px;
		}
		
		
		.dialogContainer {
			

			.el-form-item {
				height: 30px;
			}
			
			.el-form-item__label {
				height: 100%;
			}
			
			.el-form-item__content {
				height: 32px;
			}
			
			.el-input {
				height: 100%;
				
				.el-input__inner {
					height: 100%;
					border-radius: 0 !important;
				}
			}
			
			.el-input.el-input--suffix {
				.el-input__inner {
					height: 35px;
				}
			}
			
			.el-form-item__error {
				padding-top: 8px;
			}
		}
	}
</style>
