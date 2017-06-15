<template>
    <Row class="loginBox">
        <Col span="24">
            <Card style="width:350px">
                <p slot="title">
                    <Icon type="ios-film-outline"></Icon>
                    经典电影
                </p>
            </Card>
        </Col>
    </Row>
</template>

<style lang="scss" scoped>
    .loginBox {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-200px, -50%); // 实现水平垂直居中
        width: 400px;
    }
</style>

