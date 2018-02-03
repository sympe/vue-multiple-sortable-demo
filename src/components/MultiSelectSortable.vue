<template>
  <ul>
    <li :class="{ selected: item.isSelected }" v-for="item in orderedItems" :key="item.index" draggable="true" @dragstart="dragstart(item, $event)" @dragend="dragend" @dragenter="dragenter(item, $event)" @click="select(item)">
      {{'【' + item.title + '】' + item.text}}
    </li>
  </ul>
</template>

<script>
import _ from 'lodash';

export default {
  name: 'multi-select-sortable',
  props: ['items'],
  data: function () {
    return {
      selectedItems: {},
      beforeY: 0
    };
  },
  computed: {
    orderedItems: function () {
      return _.orderBy(this.items, 'index');
    }
  },
  methods: {
    select: function (item) {
      // すでに選択されていたアイテムの場合は選択を外す
      if (this.selectedItems[item.index]) {
        this.deleteSelectedItems(item);
        return;
      }
      // 選択済みアイテムの最大のインデックスと最小のインデックスを取得
      var minIndexInSelectedItems = Math.min.apply(null, Object.keys(this.selectedItems));
      var maxIndexInSelectedItems = Math.max.apply(null, Object.keys(this.selectedItems));

      // インデックスが続いていない要素の場合は選択できないようにする
      if ((item.index !== minIndexInSelectedItems - 1) && (item.index !== maxIndexInSelectedItems + 1) && Object.keys(this.selectedItems).length !== 0) {
        return;
      }

      this.addSelectedItems(item);
    },
    addSelectedItems: function (item) {
      this.selectedItems[item.index] = item;
      this.items[item.index].isSelected = true;
    },
    deleteSelectedItems: function (item) {
      this.items[item.index].isSelected = false;
      delete this.selectedItems[item.index];
    },
    collapse: function () {
      this.isActive = false;
    },
    show: function () {
      this.isActive = true;
    },
    dragstart: function (item, event) {
      // 選択した要素以外をドラッグした場合の処理
      if (!(item.index in this.selectedItems)) {
        for (var key in this.selectedItems) {
          this.deleteSelectedItems(this.selectedItems[key]);
        }
        this.addSelectedItems(item);
      }

      // ドラッグ開始時の座標取得
      this.beforeY = event.pageY;
    },
    dragenter: function (item, event) {
      // その要素自身だった場合は何もしない
      for (let key in this.selectedItems) {
        if (this.selectedItems[key].index === item.index) {
          return;
        }
      }

      // マウス移動方向によって処理を変える
      if (event.pageY < this.beforeY) {
        item.index += Object.keys(this.selectedItems).length;
        for (let key in this.selectedItems) {
          this.selectedItems[key].index -= 1;
        }
      } else {
        item.index -= Object.keys(this.selectedItems).length;
        for (let key in this.selectedItems) {
          this.selectedItems[key].index += 1;
        }
      }

      this.beforeY = event.pageY;
    },
    dragend: function (event) {
      this.$emit('drag-end', this.orderedItems);
      // ドロップ時にselectedをすべて外す
      for (var key in this.selectedItems) {
        this.items[key].isSelected = false;
      }
      this.selectedItems = {};
    }
  }
};
</script>

<style>
.selected {
  border: medium solid #4F99C6;
}
</style>
