<template>
  <div class="page-article" v-if="model">
    <div class="d-flex py-2 border-bottom ai-center">
      <div class="text-blue icon-Back" @click="back">&lt;</div>
      <strong class="flex-1 fs-lg text-ellipsis px-2 py-1 text-blue">
        {{model.title}}
      </strong>
      <div class="text-grey fs-xs px-4">
        2021/09/14
      </div>
    </div>
    <div v-html="model.body" class="px-3 body fs-xl"></div>
    <div class="px-3 border-top py-3">
      <div class="d-flex ai-center">
        <i class="iconfont icon-Menu"></i>
        <strong class="text-blue fs-lg ml-1">相关咨询</strong>
      </div>
      <div class="pt-2">
        <router-link class="py-1" v-for="item in model.related" tag="div" :key="item._id" :to="`/articles/${item._id}`"> 
        {{item.title}}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: { required: true }
  },
  data() {
    return {
      model: null
    }
  },
  created() {
    this.fetch()
  },
  watch: {
    // 当id变化时执行fetch
    id() {
      this.fetch()
    }
  },
  methods: {
    async fetch() {
      const res = await this.$http.get(`articles/${this.id}`)
      this.model = res.data
      console.log(this.model);
    },
    back() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss">
  .page-article {
    .icon-Back {
      font-size: 20px;
    }
    .body {
      img {
        max-width: 100%;
        height: auto;
      }
      iframe {
        width: 100%;
        height: auto;
      }
    }
  }
</style>