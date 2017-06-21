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
                    <li class="header-menu__ul__li" @click="logout">注销登录</li>
                    <li class="header-menu__ul__li" @click="showAdmin">您好，{{ adminName }}</li>
                </ul>
            </Col>
        </Row>
    </header>
</template>

<script>
    import * as types from '../../store/types'
    export default {
        data () {
            return {
                adminName: ''
            }
        },
        mounted: function() {
            this.adminName = this.$store.state.admin.name
        },
        methods: {
            showAdmin() {
                this.$Modal.info({
                    title: '个人信息',
                    content: `姓名：${this.$store.state.admin.name}<br>
                                性别: ${this.$store.state.admin.gender}<br>
                                年龄：${this.$store.state.admin.age}<br>
                                工作：${this.$store.state.admin.job}<br>
                                手机号码：${this.$store.state.admin.tel}<br>
                                地址：${this.$store.state.admin.address}<br>`
                })
            },
            logout(){
            this.$store.commit(types.LOGOUT)
            this.$router.push({
              path: '/'
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
</style>
