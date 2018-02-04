<template>
  <div class="aaa">
    <multi-select-sortable :items="items" @drag-end="dragEnd">
      <div slot="item" slot-scope="props">
        {{props.title}}
      </div>
    </multi-select-sortable>
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
          title: 'おはようございます',
          index: 0
        },
        1: {
          title: 'こんにちは',
          index: 1
        },
        2: {
          title: 'おつかれさまです',
          index: 2
        },
        3: {
          title: 'こんばんは',
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
