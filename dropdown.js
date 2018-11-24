/**
 * Example:
 *     var items = document.getElementById("dropdown").children;
 *     var dropdown = new Dropdown(items);
 */
(function (window) {

  "use strict";

  class Dropdown {
    constructor(items) {
      this.items = items;
      this.activeClass = 'active';
      this.initEventHandlers();
    }
    show(item) {
      item.classList.add(this.activeClass);
    }
    hide(item) {
      item.classList.remove(this.activeClass);
    }
    initEventHandlers() {
      const _this = this;
      
      for (let i = 0, len = this.items.length; i < len; i += 1) {
        const item = this.items[i];

        item.addEventListener('click', function(e) {
          e.preventDefault();
          if (this.classList.contains(_this.activeClass)) {
            _this.hide(this);
          } else {
            _this.show(this);
          }
        });
      }
    }
  }

  window.Dropdown = Dropdown;

}(window));
