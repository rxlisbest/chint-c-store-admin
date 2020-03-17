<template>
  <div class="competitors-container">
    <template v-for="(v, k) in value">
      <el-row>
        <el-col :span="2">
          {{$t('messages.stores.input.competitors_children.name')}}
        </el-col>
        <el-col :span="2">
          {{$t('messages.stores.input.competitors_children.money')}}
        </el-col>
        <el-col :span="2">
          {{$t('messages.stores.input.competitors_children.introduce')}}
        </el-col>
        <el-col :span="2">
          {{$t('messages.stores.input.competitors_children.one_count')}}
        </el-col>
        <el-col :span="2">
          {{$t('messages.stores.input.competitors_children.two_count')}}
        </el-col>
        <el-col :span="2">
          {{$t('messages.stores.input.competitors_children.percent')}}
        </el-col>
        <el-col :span="6">
          {{$t('messages.stores.input.competitors_children.content')}}
        </el-col>
        <el-col :span="2">
          {{$t('messages.stores.input.competitors_children.outdoor')}}
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="2">
          <el-input
            v-model="v.name"
            :rows="3"
            type="textarea"
            class="article-textarea"
            autosize
          />
        </el-col>
        <el-col :span="2">
          <el-input
            v-model="v.money"
            :rows="3"
            type="textarea"
            class="article-textarea"
            autosize
          />
        </el-col>
        <el-col :span="2">
          <el-input
            v-model="v.introduce"
            :rows="3"
            type="textarea"
            class="article-textarea"
            autosize
          />
        </el-col>

        <el-col :span="2">
          <el-input
            v-model="v.one_count"
            :rows="3"
            type="textarea"
            class="article-textarea"
            autosize
          />
        </el-col>
        <el-col :span="2">
          <el-input
            v-model="v.two_count"
            :rows="3"
            type="textarea"
            class="article-textarea"
            autosize
          />
        </el-col>
        <el-col :span="2">
          <el-input
            v-model="v.percent"
            :rows="3"
            type="textarea"
            class="article-textarea"
            autosize
          />
        </el-col>
        <el-col :span="6">
          <el-input
            v-model="v.content"
            :rows="3"
            type="textarea"
            class="article-textarea"
            autosize
          />
        </el-col>
        <el-col :span="2">
          <el-input
            v-model="v.outdoor"
            :rows="3"
            type="textarea"
            class="article-textarea"
            autosize
          />
        </el-col>
        <el-col :span="1" :offset="1" v-if="k > 0">
          <el-button @click="removeItem(v)">
            <i class="el-icon-delete"></i>
          </el-button>
        </el-col>
      </el-row>
    </template>

    <el-row :gutter="50">
      <el-col :span="10">
        <el-button
          @click="addItem"
        >{{ $t('messages.button.create') }}{{$t('messages.stores.input.competitors')}}</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
const defaultItem = {
  name: "",
  money: "",
  introduce: ""
};

const defaultList = [Object.assign({}, defaultItem)];

export default {
  name: "Competitors",
  props: {
    value: {
      type: Array,
      default: undefined
    }
  },
  data() {
    return {};
  },
  computed: {},
  created() {
    if (!this.value) {
      this.emitInput(defaultList);
    }
  },
  watch: {},
  methods: {
    removeItem(item) {
      let list = Object.assign([], this.value);
      var index = list.indexOf(item);
      if (index !== -1) {
        list.splice(index, 1);
      }
      this.emitInput(list);
    },
    addItem() {
      let list = Object.assign([], this.value);
      list.push(Object.assign({}, defaultItem));
      this.emitInput(list);
    },
    emitInput(val) {
      this.$emit("input", val);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin.scss";
.competitors-container {
  width: 100%;
  position: relative;
  @include clearfix;
  .article-textarea /deep/ {
    textarea {
      padding-left: 0px;
      padding-right: 0px;
      width: 90%;
      margin-right: 10px;
      resize: none;
      border: none;
      border-radius: 0px;
      border-bottom: 1px solid #bfcbd9;
    }
  }
  .el-row {
    margin-top: 10px;
  }
}
</style>
