function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import { useState, useContext, useRef, useEffect } from 'react';
import { ulid } from 'ulid';
import { SlideContext } from '../components/slide/slide';
import sortByKeyComparator from '../utils/sort-by';
import clamp from '../utils/clamp';
import { jsx as _jsx } from "react/jsx-runtime";
var PLACEHOLDER_CLASS_NAME = 'step-placeholder';
/*
 * This hook is used to create components which can 'participate' in a presentation.
 * When a component uses this hook, it passes numSteps, which "reserves" that many steps within the slide progression.
 * Returns the stepId, whether or not the step is active, the relative step
 * number and the DOM placeholder.
 */

export function useSteps() {
  var numSteps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      userProvidedId = _ref.id,
      priority = _ref.priority,
      stepIndex = _ref.stepIndex;

  var _useState = useState(userProvidedId || ulid),
      _useState2 = _slicedToArray(_useState, 1),
      stepId = _useState2[0];

  var _useContext = useContext(SlideContext),
      activeStepIndex = _useContext.activeStepIndex,
      activationThresholds = _useContext.activationThresholds;

  var relStep;

  if (activationThresholds === null) {
    // We won't have a set of activation thresholds during the very first render
    // pass for a <Slide> element, so we make sure the stepper isn't activated
    // at all.
    relStep = 0;
  } else {
    // Otherwise, we just need to convert the 'absolute step' to a 'relative
    // step' to provide to the hook consumer.
    var threshold = activationThresholds[stepId];
    relStep = activeStepIndex - threshold;
    relStep = clamp(relStep, -1, numSteps - 1);
  }

  var isActive = relStep >= 0; // Animated steppers are visible for a short period of time as they're
  // disappearing, which could cause a "flash of incorrect step". To avoid this,
  // we clamp to the "first visible step" if we're exiting.
  // const visibleStep = (isActive ? relStep : 1);
  // Helpful hints for the developer.

  var placeholderRef = useRef(null);
  useEffect(function () {
    if (!placeholderRef.current) {
      console.warn("A placeholder ref does not appear to be present in the DOM for stepper element with id '".concat(stepId, "'. (Did you forget to render it?)"));
    }
  });
  var placeholderProps = {
    ref: placeholderRef,
    className: PLACEHOLDER_CLASS_NAME,
    style: {
      display: 'none'
    },
    'data-step-id': stepId,
    'data-step-count': numSteps
  };

  if (priority !== undefined) {
    placeholderProps['data-priority'] = priority;
  } else if (stepIndex !== undefined) {
    console.warn('`options.stepIndex` option to `useSteps` is deprecated- please use `priority` option instead.');
    placeholderProps['data-priority'] = stepIndex;
  }

  return {
    stepId: stepId,
    isActive: isActive,
    step: relStep,
    placeholder: /*#__PURE__*/_jsx("div", _objectSpread({}, placeholderProps))
  };
}
// Similar to <Deck>, this is where we go looking for "step placeholder"
// elements. The main difference here is that slide placeholders are 1:1 with
// slides, whereas step placeholders may represent multiple steps. So, the
// keys of 'activationThresholds' represent the IDs of stepper elements, and
// the values represent the _first step at which they should appear_.
export function useCollectSteps() {
  var _useState3 = useState(),
      _useState4 = _slicedToArray(_useState3, 2),
      stepContainer = _useState4[0],
      setStepContainer = _useState4[1];

  var _useState5 = useState({}),
      _useState6 = _slicedToArray(_useState5, 2),
      activationThresholds = _useState6[0],
      setActivationThresholds = _useState6[1];

  var _useState7 = useState(0),
      _useState8 = _slicedToArray(_useState7, 2),
      finalStepIndex = _useState8[0],
      setFinalStepIndex = _useState8[1];

  useEffect(function () {
    if (!stepContainer) return;
    var placeholderNodes = stepContainer.getElementsByClassName(PLACEHOLDER_CLASS_NAME);

    var _map$concat$sort$redu = _toConsumableArray(placeholderNodes).map(function (node, index) {
      var dataset = node.dataset;
      var id = dataset.stepId;
      var stepCount = Number(dataset.stepCount);

      if (isNaN(stepCount)) {
        stepCount = 1;
      }

      var priority = Number(dataset.priority);

      if (isNaN(priority)) {
        priority = index;
      }

      return {
        id: id,
        count: stepCount,
        priority: priority
      };
    }).concat().sort(sortByKeyComparator('priority')).reduce(function (memo, el) {
      var _memo = _slicedToArray(memo, 2),
          thresholds = _memo[0],
          nextThreshold = _memo[1];

      var id = el.id,
          count = el.count;
      thresholds[id] = nextThreshold;
      return [thresholds, nextThreshold + count];
    }, [{}, 1]),
        _map$concat$sort$redu2 = _slicedToArray(_map$concat$sort$redu, 2),
        thresholds = _map$concat$sort$redu2[0],
        numSteps = _map$concat$sort$redu2[1];

    setActivationThresholds(thresholds);
    setFinalStepIndex(numSteps - 1);
  }, [stepContainer]);
  return {
    setStepContainer: setStepContainer,
    activationThresholds: activationThresholds,
    finalStepIndex: finalStepIndex
  };
}