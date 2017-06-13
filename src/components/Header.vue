<template>
    <header>
        <Row>
            <Col class="header-logo" span="4">
                <a href="" class="header-logo__a">
                    <Icon class="logo__icon" size="20" type="leaf"></Icon>
                    UserManage
                </a>
            </Col>
            <Col class="header-menu" span="8" offset="12">
                <ul class="header-menu__ul">
                    <li class="header-menu__ul__li">注销登录</li>
                    <li class="header-menu__ul__li" @click="modal = true">登录</li>
                    <li class="header-menu__ul__li" @click="showAdmin">您好，Admin</li>
                </ul>
            </Col>
            <Modal 
                v-model="modal"
                title="登录"
                width="416">
                <Form class="form" ref="formInline" :model="form" :rules="rule">
                    <Form-item class="form__item" prop="user">
                        <Input type="text" v-model="form.user" placeholder="用户名">
                            <Icon type="ios-person-outline" slot="prepend"></Icon>
                        </Input>
                    </Form-item>
                    <Form-item class="form__item" prop="password">
                        <Input type="password" v-model="form.password" placeholder="密码">
                            <Icon type="ios-locked-outline" slot="prepend"></Icon>
                        </Input>
                    </Form-item>
                    <Button type="primary" size="large" long @click="handleSubmit('form')">登录</Button>
                </Form>
                <div slot="footer">
                    
                </div>
            </Modal>
        </Row>
    </header>
</template>

<script>
    export default {
        data () {
            return {
                modal: false,
                form: {
                    user: '',
                    password: ''
                },
                rule: {
                    user: [
                        { required: true, message: '请填写用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请填写密码', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            showAdmin() {
            this.$Modal.info({
                title: '个人信息',
                content: `姓名：Admin<br>
                            性别: 男<br>
                            年龄：16<br>
                            工作：老师<br>
                            手机号码：15927366830<br>
                            地址：光谷软件园<br>`
            })
            },
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('提交成功!');
                    } else {
                        this.$Message.error('表单验证失败!');
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    $header-bg : #1c2438;
    $header-hight: 60px;

    header {
        position: fixed;
        z-index: 999;
        width: 100%;
        height: $header-hight;
        background-color: $header-bg;
    }
    .header-logo__a {
        line-height: 60px;
        color: #ffffff;
        letter-spacing: 1px;
    }
    .logo__icon {
        margin: 0 10px 0 20px;
        color: #19be6b;
    }
    .header-menu__ul {
        overflow: hidden;
    }
    .header-menu__ul__li {
        float: right;
        margin-right: 10px;
        line-height: $header-hight;
        font-size: 13px;
        color: #ffffff;
        cursor: pointer;
        &:hover {
            color: #2d8cf0;
        }
    }
    .form {
        box-sizing: border-box;
        padding: 0 30px;
    }
</style>
