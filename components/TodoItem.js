app.component("todo-item", {
  props: {
    todo: Object,
    required: true,
    default: null,
  },
  data: function () {
    return {
      strikeThrough: false,
    };
  },
  methods: {
    updateStrikeThrough: function () {
      this.strikeThrough
        ? (this.strikeThrough = false)
        : (this.strikeThrough = true);
    },
  },
  template:
    /*html*/
    `
  <ul class="list-group mb-2">
    <li
      class="list-group-item d-flex justify-content-start"
    >
      <div class="ms-2">      
        <div class="fw-bold">
        <input class="form-check-input me-3" type="checkbox" v-on:click="updateStrikeThrough">
        <s v-if="strikeThrough">{{ todo.content }}</s>
        <span v-else> {{ todo.content }}</span></div>
      </div>
    </li>
  </ul>
  `,
});
