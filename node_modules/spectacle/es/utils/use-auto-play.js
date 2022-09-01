import { useEffect, useRef } from 'react';
export var useAutoPlay = function useAutoPlay(_ref) {
  var _ref$enabled = _ref.enabled,
      enabled = _ref$enabled === void 0 ? false : _ref$enabled,
      _ref$loop = _ref.loop,
      loop = _ref$loop === void 0 ? false : _ref$loop,
      navigation = _ref.navigation,
      _ref$interval = _ref.interval,
      interval = _ref$interval === void 0 ? 1000 : _ref$interval;
  var savedCallback = useRef(function () {
    if (navigation.isFinalSlide && loop) {
      navigation.skipTo({
        slideIndex: 0,
        stepIndex: 0
      });
    } else {
      navigation.stepForward();
    }
  });
  useEffect(function () {
    if (enabled) {
      var id = setInterval(savedCallback.current, interval);
      return function () {
        return clearInterval(id);
      };
    }
  }, [enabled, interval]);
};