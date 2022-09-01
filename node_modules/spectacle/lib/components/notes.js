import ReactDOM from 'react-dom';
import { DeckContext } from './deck/deck';
import { SlideContext } from './slide/slide';
import { useContext } from 'react';
import { jsx as _jsx } from "react/jsx-runtime";

var Notes = function Notes(_ref) {
  var children = _ref.children;

  var _useContext = useContext(DeckContext),
      notePortalNode = _useContext.notePortalNode;

  var _useContext2 = useContext(SlideContext),
      isSlideActive = _useContext2.isSlideActive;

  if (!isSlideActive) return null;
  if (!notePortalNode) return null;
  return /*#__PURE__*/ReactDOM.createPortal( /*#__PURE__*/_jsx("div", {
    children: children
  }), notePortalNode);
};

export default Notes;