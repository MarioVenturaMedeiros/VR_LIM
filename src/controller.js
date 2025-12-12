// -------- COMPONENT: QUEST PICK-UP (A button or Right Trigger) --------
AFRAME.registerComponent('quest-grab', {
  init: function () {
    this.isHolding = false;
    this.heldObject = null;

    // Bind functions
    this.onPress = this.onPress.bind(this);
    this.onRelease = this.onRelease.bind(this);

    // Meta Quest input events:
    // Right trigger
    this.el.addEventListener('triggerdown', this.onPress);
    this.el.addEventListener('triggerup', this.onRelease);

    // A button
    this.el.addEventListener('abuttondown', this.onPress);
    this.el.addEventListener('abuttonup', this.onRelease);
  },

  onPress: function () {
    // If already holding something, ignore
    if (this.isHolding) return;

    // Perform raycast → find clickable object
    const raycaster = this.el.components.raycaster;
    if (!raycaster) return;

    const intersections = raycaster.intersections;
    if (!intersections || intersections.length === 0) return;

    const target = intersections[0].object.el;
    if (!target || !target.classList.contains('clickable')) return;

    // HOLD object
    this.isHolding = true;
    this.heldObject = target;

    target.setAttribute("arrastavel", ""); // activate dragging logic
  },

  onRelease: function () {
    if (!this.isHolding) return;

    // DROP object
    this.isHolding = false;

    if (this.heldObject) {
      this.heldObject.removeAttribute("arrastavel");
      this.heldObject = null;
    }
  }
});
