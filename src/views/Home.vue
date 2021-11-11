<template>
  <div>
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide>
        <img class="w-100" src="../assets/image/5144b0c7dd4166962e38d86e7e20a156.jpeg" />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/image/9577c2c585946e6ab69ddc6e1932db68.jpeg" />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/image/7063b374313d158af41a79bd8b97c6e5.jpeg" />
      </swiper-slide>
      <div class="swiper-pagination pagination-home text-right" slot="pagination"></div>
    </swiper>

    <div class="nav-icons bg-white mt-4 text-center pt-3 text-dark-1">
      <div class="d-flex flex-wrap">
        <div class="nav-item mb-3 py-1">
          <i class="sprite sprite-news"></i>
          <div class="py-1">爆料站</div>
        </div>
        <div class="nav-item mb-3 py-1">
          <i class="sprite sprite-story"></i>
          <div class="py-1">故事站</div>
        </div>
        <div class="nav-item mb-3 py-1">
          <i class="sprite sprite-shop"></i>
          <div class="py-1">周边商城</div>
        </div>
        <div class="nav-item mb-3 py-1">
          <i class="sprite sprite-experence"></i>
          <div class="py-1">体验服</div>
        </div>
        <div class="nav-item mb-3 py-1">
          <i class="sprite sprite-xinrenzhuanqu"></i>
          <div class="py-1">新人专区</div>
        </div>
        <div class="nav-item mb-3 py-1">
          <i class="sprite sprite-honor"></i>
          <div class="py-1">荣耀·传承</div>
        </div>
        <div class="nav-item mb-3 py-1">
          <i class="sprite sprite-campsite"></i>
          <div class="py-1">王者营地</div>
        </div>
        <div class="nav-item mb-3 py-1">
          <i class="sprite sprite-gongzhonghao"></i>
          <div class="py-1">公众号</div>
        </div>
      </div>
      <div class="bg-light py-2 fs-sm jc-center">
        <i class="sprite sprite-arrow mr-1"></i>
        <span>收起</span>
      </div>
    </div>

    <m-list-card icon="Menu" title="新闻资讯" :categories="newsCats">
      <template #items="{category}">
        <router-link tag="div" :to="`/articles/${news._id}`" class="py-2 fs-lg d-flex" v-for="(news, i) in category.newsList" :key="i">
          <span class="text-info">[{{news.categoryName}}]</span>
          <span class="px-2">|</span>
          <span class="flex-1 text-dark-1 text-ellipsis pr-2">{{news.title}}</span>
          <span class="text-grey-1 fs-sm">{{news.createdAt | date}}</span>
        </router-link>
      </template>
    </m-list-card>

    <m-list-card icon="card-hero" title="英雄列表" :categories="heroCats">
      <template #items="{category}">
        <div class="d-flex flex-wrap" style="margin: 0 -0.5rem">
          <router-link tag="div" :to="`/heroes/${hero._id}`" class="p-2 text-center" style="width: 20%;" v-for="(hero, i) in category.heroList" :key="i">
            <img :src="hero.avatar" class="w-100" />
            <div>{{hero.name}}</div>
          </router-link>
        </div>
      </template>
    </m-list-card>

    <m-card icon="Menu" title="精彩视频"></m-card>

    <!-- <div class="card bg-white p-3 mt-3">
      <div class="card-header d-flex ai-center">
        <i class="iconfont icon-Menu"></i>
        <div class="fs-xl flex-1 px-2">新闻资讯</div>
        <i class="iconfont icon-menu"></i>
      </div>
    </div>-->
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import dayjs from "dayjs";
export default {
  name: "Home",
  filters: {
    date(val) {
      return dayjs(val).format("MM/DD");
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  // directives: {
  //   swiper: directive
  // },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".pagination-home"
        }
        // Some Swiper option/callback...
      },
      newsCats: [],
      heroCats: []
    };
  },
  created() {
    this.fetchNewsCats();
    this.fetchHeroCats();
  },
  methods: {
    async fetchNewsCats() {
      const res = await this.$http.get("news/list");
      this.newsCats = res.data;
    },
    async fetchHeroCats() {
      const res = await this.$http.get("heroes/list");
      this.heroCats = res.data;
    }
  }
};
</script>

<style lang="scss">
@import "../assets/scss/variables";
.swiper-pagination {
  position: relative !important;
}
.pagination-home {
  margin-top: -1.8461rem; //-24px
  z-index: 10;
  opacity: 1;
  .swiper-pagination-bullet {
    background: map-get($colors, "white");
    border-radius: 0.1538rem !important; //2px
    &.swiper-pagination-bullet-active {
      background: map-get($colors, "info");
    }
    margin-right: 0.6154rem !important; //8px
  }
}
.nav-icons {
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
  .nav-item {
    width: 25%;
    border-left: 1px solid $border-color;
    &:nth-child(4n + 1) {
      // 序号除4余1 => 1 5
      border-left: none;
    }
  }
}
</style>
