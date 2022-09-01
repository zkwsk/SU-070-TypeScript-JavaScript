var STAGE_RIGHT = 'translateX(-100%)';
var CENTER_STAGE = 'translateX(0%)';
var STAGE_LEFT = 'translateX(100%)';
export var fadeTransition = {
  from: {
    opacity: 0
  },
  enter: {
    opacity: 1
  },
  leave: {
    opacity: 0
  }
};
export var slideTransition = {
  from: {
    transform: STAGE_LEFT
  },
  enter: {
    transform: CENTER_STAGE
  },
  leave: {
    transform: STAGE_RIGHT
  }
};
export var defaultTransition = slideTransition;