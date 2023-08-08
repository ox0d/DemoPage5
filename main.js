const app = Vue.createApp({
  data: function () {
    return {
      // Exercise 1
      message:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo itaque facilis sint saepe? Repellat voluptatem excepturi quae provident necessitatibus ducimus id, voluptas, velit et, in minus accusantium aspernatur laborum perferendis!",
      // Exercise 2
      counter: 0,
      triggerCounterError: false,
      // Exercise 3
      inputValue: "",
      // Exercise 4
      imageStatus: true,
      // Exercise 5
      items: [
        { id: 1, name: "Item 1", description: "Description for Item 1" },
        { id: 2, name: "Item 2", description: "Description for Item 2" },
        { id: 3, name: "Item 3", description: "Description for Item 3" },
      ],
      // Exercise 6
      todos: [
        { id: 1, content: "Buy groceries" },
        { id: 2, content: "Clean the house" },
        { id: 3, content: "Finish homework" },
      ],
      // Exercise 7
      width: "",
      height: "",
      // Exercise 8
      buttonState: true,
      primary: "btn-primary",
      secondary: "btn-secondary",
      userFontSize: "14px",
    };
  },
  methods: {
    // Exercise 2
    addToCounter: function () {
      this.triggerCounterError = false;
      this.counter += 1;
    },
    subtractFromCounter: function () {
      if (this.counter <= 0) {
        this.triggerCounterError = true;
        return;
      }
      this.counter -= 1;
    },
    // Exercise 4
    showImage: function () {
      this.imageStatus = true;
    },
    hideImage: function () {
      this.imageStatus = false;
    },
    // Exercise 8
    updateButtonState: function () {
      this.buttonState ? (this.buttonState = false) : (this.buttonState = true);
    },
  },
  // Exercise 7
  computed: {
    area: function () {
      total = this.width * this.height;
      return total.toFixed(2);
    },
  },
});
