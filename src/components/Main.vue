<template>
  <div class="aaa">
      <multi-select-sortable :items="items" @drag-end="dragEnd"></multi-select-sortable>
  </div>
</template>

<script>
import MultiSelectSortable from './MultiSelectSortable.vue';

export default {
  components: {
    MultiSelectSortable
  },
  data: function () {
    return {
      items: {
        0: {
          title: '1',
          text: '1',
          index: 0,
          isSelected: false
        },
        1: {
          title: '2',
          text: '2',
          index: 1,
          isSelected: false
        },
        2: {
          title: '3',
          text: '3',
          index: 2,
          isSelected: false
        },
        3: {
          title: '4',
          text: '4',
          index: 3,
          isSelected: false
        }
      }
    };
  },
  methods: {
    dragEnd: function (items) {
      this.items = items;
    }
  }
};
</script>
