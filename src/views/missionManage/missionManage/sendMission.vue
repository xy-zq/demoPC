<template>
	<div class="sendMission">
		
		<!-- 下派任务 -->
		<div class="sendMsg">
			<div class="sendMsg_headBar">
				<span class="sendMsg_headBar_line"></span>
				<span class="sendMsg_headBar_text">下派任务</span>
			</div>
			<div class="sendMsg_infoContent">
				<el-form 
				:model="ruleForm" 
				:rules="rules" 
				size="small"
				ref="ruleForm" 
				label-width="100px" 
				class="demo-ruleForm">
				<div class="df aic jfsb mb10">
					<el-form-item label="姓名" prop="name">
					  <el-input v-model="ruleForm.name"></el-input>
					</el-form-item>
					<el-form-item label="职位" prop="name">
					  <el-input v-model="ruleForm.name"></el-input>
					</el-form-item>
					<el-form-item label="到达时间" prop="name">
					  <el-date-picker
					  type="date"
					  placeholder="选择日期">
					  </el-date-picker>
					</el-form-item>
					<el-form-item label="下达时间" prop="name">
					  <el-date-picker
					  type="date"
					  placeholder="选择日期">
					  </el-date-picker>
					</el-form-item>
				</div>
				<div class="df jfsb">
					<div class="textArea">
						<el-form-item label="任务内容" prop="name">
						  <el-input v-model="ruleForm.name" type="textarea"></el-input>
						</el-form-item>
					</div>
					<div class="sendBtn">
						<el-button type="info">下达命令</el-button>
					</div>
				</div>
				</el-form>
			</div>
		</div>
		
		<!-- 任务记录 -->
		<div class="sendMsg">
			<div class="sendMsg_headBar">
				<span class="sendMsg_headBar_line"></span>
				<span class="sendMsg_headBar_text">任务记录</span>
			</div>
			
			<!-- 表格展示 -->
			<el-table :data="tableData" style="width: 100%" border class="mt20">
				<el-table-column align="center" prop="date" label="姓名"></el-table-column>
				<el-table-column align="center" prop="date" label="职位"></el-table-column>
				<el-table-column align="center" prop="date" label="到达时间"></el-table-column>
				<el-table-column align="center" prop="date" label="下达时间"></el-table-column>
				<el-table-column align="center" prop="date" label="任务内容"></el-table-column>
			</el-table>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'sendMission',
		data() {
			return {
				ruleForm: {
					
				},
				rules: {
					name: [{ required: true, message: '请输入姓名', trigger: 'blur' }]
				},
				tableData: [{}, {}]
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
	.sendMission {
		padding: 20px;
		
		.sendMsg {
			
			.sendMsg_headBar {
				display: flex;
				align-items: center;
				
				.sendMsg_headBar_line {
					display: block;
					background-color: #0066cc;
					width: 5px;
					height: 20px;
					margin-right: 10px;
				}
				
				.sendMsg_headBar_text {
					font-size: 15px;
					font-weight: bold;
					color: #5d5d5d;
				}
			}
			
			.sendMsg_infoContent {
				margin-top: 20px;
				
				.textArea {
					flex: 4;
				}
				
				.sendBtn {
					flex: 1;		
					display: flex;
					align-items: flex-end;
					justify-content: flex-start;
					padding-left: 25px;
					margin-bottom: 20px;
				}
				
			}
		}
	}
</style>

<style lang="scss">
	.sendMission {
		
		.el-textarea__inner {
			height: 120px;
		}
		
		
	}
</style>
