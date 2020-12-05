<template>
    <div class="icons">
        <swiper>
            <swiper-slide v-for="(page, index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl">
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'HomeIcons',
    data () {
        return{
            iconList: [{
                id: '0001',
                imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/557ba25df01d7dbf1419b095a11d1319.png',
                desc: "景点门票"
            },{
                id: '0002',
                imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/557ba25df01d7dbf1419b095a11d1319.png',
                desc: "滑雪季2"
            },{
                id: '0003',
                imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/557ba25df01d7dbf1419b095a11d1319.png',
                desc: "滑雪季3"
            },{
                id: '0004',
                imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/557ba25df01d7dbf1419b095a11d1319.png',
                desc: "滑雪季4"
            },{
                id: '0005',
                imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/557ba25df01d7dbf1419b095a11d1319.png',
                desc: "滑雪季5"
            },{
                id: '0006',
                imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/557ba25df01d7dbf1419b095a11d1319.png',
                desc: "景点门票6"
            },{
                id: '0007',
                imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/557ba25df01d7dbf1419b095a11d1319.png',
                desc: "滑雪季7"
            },{
                id: '0008',
                imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/557ba25df01d7dbf1419b095a11d1319.png',
                desc: "滑雪季8"
            },{
                id: '0009',
                imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/557ba25df01d7dbf1419b095a11d1319.png',
                desc: "滑雪季9"
            },{
                id: '0010',
                imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/557ba25df01d7dbf1419b095a11d1319.png',
                desc: "滑雪季10"
            }]
        }
    },
    computed:{
        pages (){
            const pages = []
            this.iconList.forEach((item, index) => {
                const page = Math.floor(index / 8)
                if(!pages[page]){
                    pages[page] = []
                }
                pages[page].push(item)
                console.log("item")
            })
            return pages
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl';
    @import '~styles/mixins.styl';
    .icons >>> .swiper-container
        height: 0;
        padding-bottom 50%
    .icons
        martop .1rem
        .icon
            width: 25%
            height: 0;
            float: left;
            padding-bottom 25%
            overflow :hidden
            position: relative;
            .icon-img
                position :absolute
                top: 0
                right: 0
                left: 0
                bottom: .44rem
                box-sizing : border-box
                padding : .05rem
                .icon-img-content
                    height :100%
                    display :block
                    margin : 0 auto
            .icon-desc
                position :absolute
                right: 0
                left: 0
                bottom: 0
                line-height .44rem
                height .44rem
                color $darkTextColor
                text-align center
                ellipsis()
        
</style>