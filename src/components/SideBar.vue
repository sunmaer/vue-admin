<template>
    <Menu class="sideBar" theme="dark" accordion width="auto"> 
        <router-link to="/">
            <Menu-item class="sideBar__item" name="1">
                <Icon type="person-stalker" size="18"></Icon>
                用户列表
            </Menu-item>
        </router-link>
        <router-link to="/addUser">
            <Menu-item class="sideBar__item" name="2">
                <Icon type="person-add" size="18"></Icon>
                添加用户
            </Menu-item>
        </router-link>
        
    </Menu>
</template>

<style lang="scss">
    .sideBar {
        background-color: #2d3545;
    }
    .sideBar__item {
        border-bottom: 1px solid #1c2438;
    }
</style>
