<template>
    <Menu class="sideBar" theme="dark" accordion width="auto" :active-name="navselected" @on-select="selectItems"> 
        <router-link to="/home">
            <Menu-item class="sideBar__item" name="1">
                <Icon type="ios-home" size="18"></Icon>
                系统首页
            </Menu-item>
        </router-link>
        <router-link to="/user/userList">
            <Menu-item class="sideBar__item" name="2">
                <Icon type="person-stalker" size="18"></Icon>
                用户列表
            </Menu-item>
        </router-link>
        <router-link to="/user/addUser">
            <Menu-item class="sideBar__item" name="3">
                <Icon type="person-add" size="18"></Icon>
                添加用户
            </Menu-item>
        </router-link>
        
    </Menu>
</template>

<script>
    export default {
        data() {
            return {
                navselected: ''
            }
        },
        mounted: function() {
            this.navselected = this.$store.state.activeName
        },
        methods: {
            getNavType() {
                // store.state.activeName 变化时，设置 navselected
                this.navselected = this.$store.state.activeName
            },
            selectItems(index) {
                // 选中之后设置当前的 index 为store里的值
                this.$store.state.activeName = index
            }
        },
        watch: {
            // 监测 store.state
            '$store.state.activeName': 'getNavType'
        }
    }
</script>

<style lang="scss">
    .sideBar {
        background-color: #2d3545;
    }
    .sideBar__item {
        border-bottom: 1px solid #1c2438;
    }
</style>
