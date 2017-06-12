<template>
    <div id="sideBar">
        <Menu theme="dark" accordion width="auto"> 
            <Submenu name="1">
                <template slot="title">
                    <Icon type="person" size="18"></Icon>
                    用户管理
                </template>
                <Menu-item name="1-1">用户列表</Menu-item>
                <Menu-item name="1-2">用户列表</Menu-item>
                <Menu-item name="1-3">用户列表</Menu-item>
            </Submenu>
            <Submenu name="2">
                <template slot="title">
                    <Icon type="ios-home" size="18"></Icon>
                    用户管理
                </template>
                <Menu-item name="2-1">用户列表</Menu-item>
                <Menu-item name="2-2">用户列表</Menu-item>
            </Submenu>
            <Submenu name="3">
                <template slot="title">
                    <Icon type="ios-gear" size="18"></Icon>
                    用户管理
                </template>
                <Menu-item name="3-1">用户列表</Menu-item>
                <Menu-item name="3-2">用户列表</Menu-item>
            </Submenu>
        </Menu>
    </div>
</template>
