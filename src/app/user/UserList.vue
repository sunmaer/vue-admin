<template>
    <Row>
        <headTop></headTop>
        <Row>
            <Col class="left" span="4">
                <sideBar></sideBar> 
            </Col>
            <Col class="right" span="20" offset="4">
                <div id="userList">
                    <div class="title">
                        <h1 class="title__h1">用户列表</h1>
                        <router-link to="/user/addUser">
                            <Button @click="addUser" class="title__button" type="primary" icon="plus-round">添加用户</Button>
                        </router-link>
                    </div>
                    <Table class="userList__table" border :columns="columns" :data="data"></Table>
                    <Page class="userList__page" :total="50" show-total size="small"></Page>
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
                columns: [
                    {
                        title: '#',
                        key: 'uid',
                        width: '60',
                        align: 'center'
                    },
                    {
                        title: '姓名',
                        key: 'name',
                        align: 'center'
                    },
                    {
                        title: '性别',
                        key: 'gender',
                        align: 'center'
                    },
                    {
                        title: '年龄',
                        key: 'age',
                        align: 'center'
                    },
                    {
                        title: '工作',
                        key: 'job',
                        align: 'center'
                    },
                    {
                        title: '手机号码',
                        key: 'tel',
                        align: 'center'
                    },
                    {
                        title: '地址',
                        key: 'address',
                        align: 'center'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, '查看'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, '删除')
                            ])
                        }
                    }
                ],
                data: []
            }
        },
        components: {
            headTop,
            sideBar
        },
        mounted: function() {
            this.getUser()
        },
        methods: {
            addUser() {
                this.$store.state.activeName = "3"
            },
            // 获取用户数据
            getUser() {
                this.$ajax.get('/static/data.json').then((res) => {
                    this.data = res.data.data
                })
            },
            // 查看用户信息
            show(index) {
                this.$Modal.info({
                    title: '用户信息',
                    content: `姓名：${this.data[index].name}<br>
                              性别: ${this.data[index].gender}<br>
                              年龄：${this.data[index].age}<br>
                              工作：${this.data[index].job}<br>
                              手机号码：${this.data[index].tel}<br>
                              地址：${this.data[index].address}<br>`
                })
            },
            // 删除用户
            remove(index) {
                this.data.splice(index, 1);
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../style/common.css';

    #userList {
        box-sizing: border-box;
        padding: 20px;
    }
    .userList__table {
        margin: 10px 0;
    }
    .userList__page {
        float: right;
    }
</style>
