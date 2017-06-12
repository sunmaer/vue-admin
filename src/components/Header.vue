<template>
    <header>
        <Row>
            <Col class="header-logo" span="4">
                <a href="" class="header-logo__a">
                    <Icon class="header-logo__a__icon" type="social-windows" color="#ffffff"></Icon> 
                    用户中心
                </a>
            </Col>
            <Col class="header-menu" span="8" offset="12">
                <ul class="header-menu__ul">
                    <li class="header-menu__ul__li"><a class="li__a" href="">注销登录</a></li>
                    <li class="header-menu__ul__li"><a class="li__a" href="">注册</a></li>
                    <li class="header-menu__ul__li"><a class="li__a" href="">登录</a></li>
                    <li class="header-menu__ul__li">您好，Admin</li>
                </ul>
            </Col>
        </Row>
    </header>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
    $header-bg : #1c2438;

    header {
        position: fixed;
        width: 100%;
        height: 60px;
        background-color: $header-bg;
    }
    .header-logo {
        background-color: #5b6270;
    }
    .header-logo__a {
        position: relative;
        box-sizing: border-box;
        padding: 0 0 0 60px;
        display: block;
        line-height: 60px;
        color: white;
    }
    .header-logo__a__icon {
        position: absolute;
        top: 15px;
        left: 20px;
        font-size: 30px;
    }
    .header-menu__ul {
        overflow: hidden;
    }
    .header-menu__ul__li {
        float: right;
        margin-right: 10px;
        line-height: 60px;
        color: #ffffff;
    }
    .li__a {
        font-size: 13px;
        color: #ffffff;
        &:hover {
            color: #2d8cf0;
        }
    }
</style>
