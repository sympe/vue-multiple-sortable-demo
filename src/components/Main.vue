<template>
  <div class="aaa">
    <multi-select-sortable :items="items" @drag-move="dragMove">
      <div slot="item" slot-scope="props">
        {{ ' 【' + props.id + '】' +  props.title }}
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
      items: [
        {
          id: 53,
          title: 'おはようございます'
        },
        {
          id: 32,
          title: 'こんにちは'
        },
        {
          id: 41,
          title: 'おつかれさまです'
        },
        {
          id: 29,
          title: 'こんばんは'
        }
      ]
    };
  },
  methods: {
    dragMove: function (items) {
      this.items = items;
    }
  }
};
</script>
