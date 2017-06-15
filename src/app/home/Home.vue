<template>
    <div id="index">
        <div class="title">
            <h1 class="title__h1">用户分析</h1>
            <router-link to="/user/userList">
                <Button @click="returnList" class="title__button" type="primary" icon="forward">用户列表</Button>
            </router-link>
        </div>
        <Row>
            <Col span="12">
                <div id="barChart"></div>
            </Col>
            <Col span="12">
                <div id="lineChart"></div>
            </Col>
        </Row>
        
    </div>
</template>

<script>
    export default {
        name: 'index',
        data() {
            return {
                job: ["学生", "老师", "工人", "运动员", "演员", "歌手", "司机", "程序员"]
            }
        },
        mounted() {
            this.drawLine()
        },
        methods: {
            returnList() {
                this.$store.state.activeName = "2"
            },
            // 图表
            drawLine() {
                // 基于准备好的dom，初始化echarts实例
                let barChart = this.$echarts.init(document.getElementById("barChart"))
                let lineChart = this.$echarts.init(document.getElementById("lineChart"))
                // 绘制柱状图
                barChart.setOption({
                    color: ['#3398DB'],
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    grid: {
                        left: '5%',
                        right: '5%',
                        bottom: '5%',
                        containLabel: true
                    },
                    xAxis:
                    [  
                        {
                            type: 'category',
                            data: this.job,
                            axisTick: {
                                alignWidthLabel: true
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value'
                        }
                    ],
                    series: [{
                        name: '人数',
                        type: 'bar',
                        barWidth: '40%',
                        data: [5, 20, 36, 10, 10, 20, 30, 20]
                    }]
                })
                // 绘制折线图
                var colors = ['#5793f3', "#d144a61", "#675bba"]
                lineChart.setOption({
                    color: colors,
                    tooltip: {
                        trigger: 'none',
                        axisPointer: {
                            type: 'cross'
                        }
                    },
                    grid: {
                        left: '5%',
                        right: '5%',
                        bottom: '5%',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'category',
                            axisTick: {
                                alignWidthLabel: true
                            },
                            axisLine: {
                                onZero: false,
                                lineStyle: {
                                    color: colors[1]
                                }
                            },
                            axisPointer: {
                                label: {
                                    formatter: function(params) {
                                        return '年龄 '+params.value
                                            + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                                    }
                                }
                            },
                            data: ["1-15", "16-25", "26-35", "36-45", "46-55", "56-65", ">65"]
                        },
                    ],
                    yAxis: [
                        {
                            type: 'value'
                        }
                    ],
                    series: [
                        {
                            name: '数量',
                            type: 'line',
                            xAsisIndex: 1,
                            smooth: true,
                            data: [5,  30, 70, 150, 48, 18, 7]
                        }
                    ]
                })
            }
        }
    }
</script>

<style lang="scss">
    #index {
        box-sizing: border-box;
        padding: 20px;
    }
    .title {
        line-height: 40px;
        overflow: hidden;
        border-bottom: 1px solid #e9eaec;
    }
    .title__h1 {
        float: left;
        width: 200px;
        font-size: 15px;
        color: #495060;
    }
    .title__button {
        float: right;
    }
    #barChart,#lineChart {
        width: 100%;
        height: 450px;
    }
</style>

