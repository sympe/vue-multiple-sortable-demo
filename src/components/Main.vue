<template>
  <div class="aaa">
    <multi-select-sortable :items="items" @drag="drag">
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
          title: 'Michael'
        },
        {
          id: 32,
          title: 'John'
        },
        {
          id: 41,
          title: 'Daniel'
        },
        {
          id: 29,
          title: 'Andrew'
        }
      ]
    };
  },
  methods: {
    drag: function (items) {
      this.items = items;
    }
  }
};
</script>
