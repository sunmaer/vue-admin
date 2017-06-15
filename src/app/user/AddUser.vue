<template>
    <Row>
        <headTop></headTop>
        <Row>
            <Col class="left" span="4">
                <sideBar></sideBar> 
            </Col>
            <Col class="right" span="20" offset="4">
                <div id="addUser">
                <div class="title">
                    <h1 class="title__h1">添加用户</h1>
                    <router-link to="/user/userList">
                        <Button @click="returnList" class="title__button" type="primary" icon="reply">返回列表</Button>
                    </router-link>
                </div>
                <div class="addUser__form">
                    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="100">
                        <Form-item label="姓名" prop="name">
                            <Input v-model="formValidate.name" placeholder="请输入姓名"></Input>
                        </Form-item>
                        <Form-item label="性别" prop="gender">
                            <Radio-group v-model="formValidate.gender">
                                <Radio label="male">男</Radio>
                                <Radio label="female">女</Radio>
                            </Radio-group>
                        </Form-item>
                        <Form-item label="年龄" prop="age">
                            <Input v-model="formValidate.age" placeholder="请输入年龄"></Input>
                        </Form-item>
                        <Form-item label="工作" prop="job">
                            <Input v-model="formValidate.job" placeholder="请输入工作"></Input>
                        </Form-item>
                        <Form-item label="手机号码" prop="tel">
                            <Input v-model="formValidate.tel" placeholder="请输入手机号码"></Input>
                        </Form-item>
                        <Form-item label="地址" prop="address">
                            <Input v-model="formValidate.address" placeholder="请输入地址"></Input>
                        </Form-item>
                        <Form-item>
                            <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
                            <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
                        </Form-item>
                    </Form>
                </div>
            </div>
            </Col>
        </Row>
    </Row>
</template>
<script>
    import headTop from '../../components/header/HeadTop'
    import sideBar from '../../components/sideBar/SideBar'

    export default {
        data () {
            return {
                formValidate: {
                    name: '',
                    gender: '',
                    age: '',
                    job: '',
                    tel: '',
                    address: ''
                },
                ruleValidate: {
                    name: [
                        { required: true, message: '姓名不能为空', trigger: 'blur' }
                    ],
                    gender: [
                        { required: true, message: '请选择性别', trigger: 'change' }
                    ],
                    age: [
                        { required: true, message: '年龄不能为空', trigger: 'blur' },
                    ],
                    job: [
                        { required: true, message: '工作不能为空', trigger: 'blur' }
                    ],
                    tel: [
                        { required: true, message: '手机号码不能为空', trigger: 'blur' }
                    ],
                    address: [
                        { required: true, message: '地址不能为空', trigger: 'blur' }
                    ]
                }
            }
        },
        components: {
            headTop,
            sideBar
        },
        methods: {
            returnList() {
                this.$store.state.activeName = "2"
            },
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('提交成功!');
                    } else {
                        this.$Message.error('表单验证失败!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            }
        }
    }
</script>

<style lang="scss">
    @import '../../style/common.css';

    #addUser {
        box-sizing: border-box;
        padding: 20px;
    }
    .addUser__form {
        margin: 30px 0;
        width: 500px;
    }
</style>
