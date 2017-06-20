<template>
    <Row class="loginBox">
        <Col span="24">
            <h3 class="loginBox__header">
                登录
            </h3>
            <Form class="loginBox__form" ref="formInline" :model="form" :rules="rule">
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
                <Button type="primary" long @click="login()">登录</Button>
            </Form>
        </Col>
    </Row>
</template>

<script>
    import * as types from '../../store/types'
    export default {
        data () {
            return {
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
          login(){
             this.$ajax.get('/static/admin.json').then((res) => {
               var array = res.data.admin
                var admin = array.filter((value, index, arr) => {
                  return value.uid === this.form.user
                })
                if (admin.length === 1 && admin[0].uid === this.form.user && admin[0].password === this.form.password) {
                  this.$store.commit(types.LOGIN, admin[0])
                  let redirect = decodeURIComponent(this.$route.query.redirect || '/home');
                  this.$router.push({
                    path: redirect
                  })
                }
             })
          }
        }
    }
</script>

<style lang="scss" scoped>
    .loginBox {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-200px, -50%); // 实现水平垂直居中
        width: 400px;
        border-radius: 5px;
        border: 1px solid #e9eaec;
        background-color: #fff;
    }
    .loginBox__header {
        height: 50px;
        line-height: 50px;
        box-sizing: border-box;
        padding-left: 35px;
        border-bottom: 1px solid #e9eaec;
    }
    .loginBox__form {
        box-sizing: border-box;
        padding: 20px 30px;
    }
    .form__item {
        height: 32px;
    }
</style>

