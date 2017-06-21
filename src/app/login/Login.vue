<template>
    <Row class="loginBox">
        <Col span="24">
            <h3 class="loginBox__header">
                登录
            </h3>
            <Form class="loginBox__form" ref="formInline" :model="form" :rules="rule">
                <Form-item class="form__item" prop="user">
                    <Input type="text" v-model="form.user" size="large" placeholder="用户名">
                        <Icon type="ios-person-outline" slot="prepend"></Icon>
                    </Input>
                </Form-item>
                <Form-item class="form__item" prop="password">
                    <Input type="password" v-model="form.password" size="large" placeholder="密码">
                        <Icon type="ios-locked-outline" slot="prepend"></Icon>
                    </Input>
                </Form-item>
                <Form-item>
                    <Checkbox v-model="form.checked"> 记住密码 </Checkbox>
                </Form-item>
                <Form-item>
                    <Button type="primary" size="large" long @click="login()">登录</Button>
                </Form-item>
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
                    password: '',
                    checked: false
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
        mounted: function() {
            this.loadAccountInfo()
        },
        methods: {
          login(){
             this.$ajax.get('/static/admin.json').then((res) => {
               var array = res.data.admin
                var admin = array.filter((value, index, arr) => {
                  return value.uid === this.form.user
                })
                if (admin.length === 1 && admin[0].uid === this.form.user && admin[0].password === this.form.password) {
                  var accountInfo = "";  
                  accountInfo = this.form.user + "&" + this.form.password;
                  // 登录成功后，则把账号信息写入 localStorage
                  if (this.form.checked){  
                        // 勾选了记住密码，现在开始写入 localStorage  
                        localStorage.accountInfo = accountInfo;  
                    }  
                    else{  
                        // 没有勾选记住密码，现在开始删除账号 localStorage  
                        localStorage.removeItem('accountInfo');  
                    } 

                    this.$store.commit(types.LOGIN, admin[0])
                    let redirect = decodeURIComponent(this.$route.query.redirect || '/home');
                    this.$router.push({
                      path: redirect
                    })
                }
             })
          },
          loadAccountInfo: function(){ // 自动填充密码  
            let accountInfo = window.localStorage.getItem('accountInfo');  

            //如果 localStorge 里没有账号信息  
            if(Boolean(accountInfo) == false){  
                return false;  
            }  
            else{  
                //如果 localStorge 里有账号信息  
                let userName = "";  
                let passWord = "";  
                let index = accountInfo.indexOf("&");  

                userName = accountInfo.substring(0,index);  
                passWord = accountInfo.substring(index+1);  

                this.form.user = userName;  
                this.form.password = passWord;  
                this.form.checked = true;  
            }  
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
</style>

