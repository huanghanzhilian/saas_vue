(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.videojsSettingsMenu = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){

/**
 * @file settings-menu-button.js
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _videoJs = (typeof window !== "undefined" ? window['videojs'] : typeof global !== "undefined" ? global['videojs'] : null);

var _videoJs2 = _interopRequireDefault(_videoJs);

var _settingsMenuItemJs = require('./settings-menu-item.js');

var _settingsMenuItemJs2 = _interopRequireDefault(_settingsMenuItemJs);

var MenuButton = _videoJs2['default'].getComponent('MenuButton');
var Menu = _videoJs2['default'].getComponent('Menu');
var Component = _videoJs2['default'].getComponent('Component');

/**
 * The component for controlling the settings menu
 *
 * @param {Player|Object} player
 * @param {Object=} options
 * @extends MenuButton
 * @class SettingsMenuButton
 */

var SettingsMenuButton = (function (_MenuButton) {
  _inherits(SettingsMenuButton, _MenuButton);

  function SettingsMenuButton(player, options) {
    _classCallCheck(this, SettingsMenuButton);

    _get(Object.getPrototypeOf(SettingsMenuButton.prototype), 'constructor', this).call(this, player, options);

    this.el_.setAttribute('aria-label', 'Settings Menu');

    this.on('mouseleave', _videoJs2['default'].bind(this, this.hideChildren));
  }

  /**
   * Allow sub components to stack CSS class names
   *
   * @return {String} The constructed class name
   * @method buildCSSClass
   */

  _createClass(SettingsMenuButton, [{
    key: 'buildCSSClass',
    value: function buildCSSClass() {
      // vjs-icon-cog can be removed when the settings menu is integrated in video.js
      return 'vjs-settings-menu vjs-icon-cog ' + _get(Object.getPrototypeOf(SettingsMenuButton.prototype), 'buildCSSClass', this).call(this);
    }

    /**
     * Create the settings menu
     *
     * @return {Menu} Menu object populated with items
     * @method createMenu
     */
  }, {
    key: 'createMenu',
    value: function createMenu() {
      var menu = new Menu(this.player());
      var entries = this.options_.entries;

      if (entries) {

        var openSubMenu = function openSubMenu() {

          if (_videoJs2['default'].hasClass(this.el_, 'open')) {
            _videoJs2['default'].removeClass(this.el_, 'open');
          } else {
            _videoJs2['default'].addClass(this.el_, 'open');
          }
        };

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = entries[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var entry = _step.value;

            var settingsMenuItem = new _settingsMenuItemJs2['default'](this.player(), this.options_, entry);

            menu.addChild(settingsMenuItem);

            // Hide children to avoid sub menus stacking on top of each other
            // or having multiple menus open
            settingsMenuItem.on('click', _videoJs2['default'].bind(this, this.hideChildren));

            // Wether to add or remove selected class on the settings sub menu element
            settingsMenuItem.on('click', openSubMenu);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator['return']) {
              _iterator['return']();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }

      return menu;
    }

    /**
     * Hide all the sub menus
     */
  }, {
    key: 'hideChildren',
    value: function hideChildren() {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.menu.children()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var menuChild = _step2.value;

          menuChild.hideSubMenu();
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2['return']) {
            _iterator2['return']();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  }]);

  return SettingsMenuButton;
})(MenuButton);

SettingsMenuButton.prototype.controlText_ = 'Settings Menu';

Component.registerComponent('SettingsMenuButton', SettingsMenuButton);
exports['default'] = SettingsMenuButton;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./settings-menu-item.js":2}],2:[function(require,module,exports){
(function (global){
/**
 * @file settings-menu-item.js
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _videoJs = (typeof window !== "undefined" ? window['videojs'] : typeof global !== "undefined" ? global['videojs'] : null);

var _videoJs2 = _interopRequireDefault(_videoJs);

var MenuItem = _videoJs2['default'].getComponent('MenuItem');
var playbackRateMenuButton = _videoJs2['default'].getComponent('PlaybackRateMenuButton');
var component = _videoJs2['default'].getComponent('Component');

var toTitleCase = function toTitleCase(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

/**
 * The specific menu item type for selecting a setting
 *
 * @param {Player|Object} player
 * @param {Object=} options
 * @param {String=} entry
 * @extends MenuItem
 * @class SettingsMenuItem
 */

var SettingsMenuItem = (function (_MenuItem) {
  _inherits(SettingsMenuItem, _MenuItem);

  function SettingsMenuItem(player, options, entry) {
    _classCallCheck(this, SettingsMenuItem);

    _get(Object.getPrototypeOf(SettingsMenuItem.prototype), 'constructor', this).call(this, player, options);

    var subMenuName = toTitleCase(entry);

    var SubMenuComponent = _videoJs2['default'].getComponent(subMenuName);

    if (!SubMenuComponent) {
      throw new Error('Component ' + subMenuName + ' does not exist');
    }

    this.subMenu = new SubMenuComponent(this.player(), options);

    var update = _videoJs2['default'].bind(this, this.update);
    // To update the sub menu value on click, setTimeout is needed because
    // updating the value is not instant
    var updateAfterTimeout = function updateAfterTimeout() {
      setTimeout(update, 0);
    };

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = this.subMenu.menu.children()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var item = _step.value;

        if (!(item instanceof component)) {
          continue;
        }
        item.on('click', updateAfterTimeout);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator['return']) {
          _iterator['return']();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    this.update();
  }

  /**
   * Create the component's DOM element
   *
   * @return {Element}
   * @method createEl
   */

  _createClass(SettingsMenuItem, [{
    key: 'createEl',
    value: function createEl() {
      // Hide this component by default
      var el = _videoJs2['default'].createEl('li', {
        className: 'vjs-menu-item'
      });

      this.settingsSubMenuTitleEl_ = _videoJs2['default'].createEl('div', {
        className: 'vjs-settings-sub-menu-title'
      });

      el.appendChild(this.settingsSubMenuTitleEl_);

      this.settingsSubMenuValueEl_ = _videoJs2['default'].createEl('div', {
        className: 'vjs-settings-sub-menu-value'
      });

      el.appendChild(this.settingsSubMenuValueEl_);

      this.settingsSubMenuEl_ = _videoJs2['default'].createEl('div', {
        className: 'vjs-settings-sub-menu vjs-hidden'
      });

      el.appendChild(this.settingsSubMenuEl_);

      return el;
    }

    /**
     * Handle click on menu item
     *
     * @method handleClick
     */
  }, {
    key: 'handleClick',
    value: function handleClick() {
      // Remove open class to ensure only the open submenu gets this class
      _videoJs2['default'].removeClass(this.el_, 'open');

      _get(Object.getPrototypeOf(SettingsMenuItem.prototype), 'handleClick', this).call(this);

      // Wether to add or remove vjs-hidden class on the settingsSubMenuEl element
      if (_videoJs2['default'].hasClass(this.settingsSubMenuEl_, 'vjs-hidden')) {
        _videoJs2['default'].removeClass(this.settingsSubMenuEl_, 'vjs-hidden');
      } else {
        _videoJs2['default'].addClass(this.settingsSubMenuEl_, 'vjs-hidden');
      }
    }

    /**
     * Update the sub menus
     *
     * @method update
     */
  }, {
    key: 'update',
    value: function update() {
      this.settingsSubMenuTitleEl_.innerHTML = this.subMenu.controlText_ + ':';
      this.settingsSubMenuEl_.appendChild(this.subMenu.menu.el_);

      // Playback rate menu button doesn't get a vjs-selected class
      // or sets options_['selected'] on the selected playback rate.
      // Thus we get the submenu value based on the labelEl of playbackRateMenuButton
      if (this.subMenu instanceof playbackRateMenuButton) {
        this.settingsSubMenuValueEl_.innerHTML = this.subMenu.labelEl_.innerHTML;
      } else {
        // Loop trough the submenu items to find the selected child
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = this.subMenu.menu.children_[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var subMenuItem = _step2.value;

            if (!(subMenuItem instanceof component)) {
              continue;
            }
            // Set submenu value based on what item is selected
            if (subMenuItem.options_.selected || subMenuItem.hasClass('vjs-selected')) {
              this.settingsSubMenuValueEl_.innerHTML = subMenuItem.options_.label;
            }
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2['return']) {
              _iterator2['return']();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      }
    }

    /**
     * Hide the sub menu
     */
  }, {
    key: 'hideSubMenu',
    value: function hideSubMenu() {
      if (_videoJs2['default'].hasClass(this.el_, 'open')) {
        _videoJs2['default'].addClass(this.settingsSubMenuEl_, 'vjs-hidden');
        _videoJs2['default'].removeClass(this.el_, 'open');
      }
    }
  }]);

  return SettingsMenuItem;
})(MenuItem);

SettingsMenuItem.prototype.contentElType = 'button';

_videoJs2['default'].registerComponent('SettingsMenuItem', SettingsMenuItem);
exports['default'] = SettingsMenuItem;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],3:[function(require,module,exports){
'use strict';

require('./components/settings-menu-button.js');

require('./components/settings-menu-item.js');

},{"./components/settings-menu-button.js":1,"./components/settings-menu-item.js":2}]},{},[3])(3)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9fYnJvd3Nlci1wYWNrQDYuMC4yQGJyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIkU6XFx2aWRlby5qc1xc5byA5rqQbWVudVxcdmlkZW9qcy1zZXR0aW5ncy1tZW51XFxzcmNcXGNvbXBvbmVudHNcXHNldHRpbmdzLW1lbnUtYnV0dG9uLmpzIiwiRTpcXHZpZGVvLmpzXFzlvIDmupBtZW51XFx2aWRlb2pzLXNldHRpbmdzLW1lbnVcXHNyY1xcY29tcG9uZW50c1xcc2V0dGluZ3MtbWVudS1pdGVtLmpzIiwiRTpcXHZpZGVvLmpzXFzlvIDmupBtZW51XFx2aWRlb2pzLXNldHRpbmdzLW1lbnVcXHNyY1xccGx1Z2luLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQ0lvQixVQUFVOzs7O2tDQUNELHlCQUF5Qjs7OztBQUN0RCxJQUFNLFVBQVUsR0FBRyxxQkFBUSxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDdEQsSUFBTSxJQUFJLEdBQUcscUJBQVEsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzFDLElBQU0sU0FBUyxHQUFHLHFCQUFRLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7SUFVOUMsa0JBQWtCO1lBQWxCLGtCQUFrQjs7QUFFWCxXQUZQLGtCQUFrQixDQUVWLE1BQU0sRUFBRSxPQUFPLEVBQUU7MEJBRnpCLGtCQUFrQjs7QUFHcEIsK0JBSEUsa0JBQWtCLDZDQUdkLE1BQU0sRUFBRSxPQUFPLEVBQUU7O0FBRXZCLFFBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxlQUFlLENBQUMsQ0FBQzs7QUFFckQsUUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUscUJBQVEsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztHQUM5RDs7Ozs7Ozs7O2VBUkcsa0JBQWtCOztXQWdCVCx5QkFB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QUFBLEFBQUMsRUFBRTtBQUN2Qyx1QkFBUzthQUNWOztBQUVELGdCQUFJLFdBQVcsQ0FBQyxRQUFRLENBQUMsUUFBUSxJQUFJLFdBQVcsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEVBQUU7QUFDekUsa0JBQUksQ0FBQyx1QkFBdUIsQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7YUFDckU7V0FDRjs7Ozs7Ozs7Ozs7Ozs7O09BQ0Y7S0FDRjs7Ozs7OztXQUtVLHVCQUFHO0FBQ1osVUFBSSxxQkFBUSxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsRUFBRTtBQUN0Qyw2QkFBUSxRQUFRLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO0FBQ3hELDZCQUFRLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO09BQ3ZDO0tBQ0Y7OztTQXhIRyxnQkFBZ0I7R0FBUyxRQUFROztBQTRIdkMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUM7O0FBRXBELHFCQUFRLGlCQUFpQixDQUFDLGtCQUFrQixFQUFFLGdCQUFnQixDQUFDLENBQUM7cUJBQ2pELGdCQUFnQjs7Ozs7Ozs7UUN0SnhCLHNDQUFzQzs7UUFDdEMsb0NBQW9DIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlxyXG4vKipcclxuICogQGZpbGUgc2V0dGluZ3MtbWVudS1idXR0b24uanNcclxuICovXHJcbmltcG9ydCB2aWRlb2pzIGZyb20gJ3ZpZGVvLmpzJztcclxuaW1wb3J0IFNldHRpbmdzTWVudUl0ZW0gZnJvbSAnLi9zZXR0aW5ncy1tZW51LWl0ZW0uanMnO1xyXG5jb25zdCBNZW51QnV0dG9uID0gdmlkZW9qcy5nZXRDb21wb25lbnQoJ01lbnVCdXR0b24nKTtcclxuY29uc3QgTWVudSA9IHZpZGVvanMuZ2V0Q29tcG9uZW50KCdNZW51Jyk7XHJcbmNvbnN0IENvbXBvbmVudCA9IHZpZGVvanMuZ2V0Q29tcG9uZW50KCdDb21wb25lbnQnKTtcclxuXHJcbi8qKlxyXG4gKiBUaGUgY29tcG9uZW50IGZvciBjb250cm9sbGluZyB0aGUgc2V0dGluZ3MgbWVudVxyXG4gKlxyXG4gKiBAcGFyYW0ge1BsYXllcnxPYmplY3R9IHBsYXllclxyXG4gKiBAcGFyYW0ge09iamVjdD19IG9wdGlvbnNcclxuICogQGV4dGVuZHMgTWVudUJ1dHRvblxyXG4gKiBAY2xhc3MgU2V0dGluZ3NNZW51QnV0dG9uXHJcbiAqL1xyXG5jbGFzcyBTZXR0aW5nc01lbnVCdXR0b24gZXh0ZW5kcyBNZW51QnV0dG9uIHtcclxuXHJcbiAgY29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XHJcbiAgICBzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xyXG5cclxuICAgIHRoaXMuZWxfLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsICdTZXR0aW5ncyBNZW51Jyk7XHJcblxyXG4gICAgdGhpcy5vbignbW91c2VsZWF2ZScsIHZpZGVvanMuYmluZCh0aGlzLCB0aGlzLmhpZGVDaGlsZHJlbikpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWxsb3cgc3ViIGNvbXBvbmVudHMgdG8gc3RhY2sgQ1NTIGNsYXNzIG5hbWVzXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtTdHJpbmd9IFRoZSBjb25zdHJ1Y3RlZCBjbGFzcyBuYW1lXHJcbiAgICogQG1ldGhvZCBidWlsZENTU0NsYXNzXHJcbiAgICovXHJcbiAgYnVpbGRDU1NDbGFzcygpIHtcclxuICAgIC8vIHZqcy1pY29uLWNvZyBjYW4gYmUgcmVtb3ZlZCB3aGVuIHRoZSBzZXR0aW5ncyBtZW51IGlzIGludGVncmF0ZWQgaW4gdmlkZW8uanNcclxuICAgIHJldHVybiBgdmpzLXNldHRpbmdzLW1lbnUgdmpzLWljb24tY29nICR7c3VwZXIuYnVpbGRDU1NDbGFzcygpfWA7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGUgdGhlIHNldHRpbmdzIG1lbnVcclxuICAgKlxyXG4gICAqIEByZXR1cm4ge01lbnV9IE1lbnUgb2JqZWN0IHBvcHVsYXRlZCB3aXRoIGl0ZW1zXHJcbiAgICogQG1ldGhvZCBjcmVhdGVNZW51XHJcbiAgICovXHJcbiAgY3JlYXRlTWVudSgpIHtcclxuICAgIGxldCBtZW51ID0gbmV3IE1lbnUodGhpcy5wbGF5ZXIoKSk7XHJcbiAgICBsZXQgZW50cmllcyA9IHRoaXMub3B0aW9uc18uZW50cmllcztcclxuXHJcbiAgICBpZiAoZW50cmllcykge1xyXG5cclxuICAgICAgY29uc3Qgb3BlblN1Yk1lbnUgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgaWYgKHZpZGVvanMuaGFzQ2xhc3ModGhpcy5lbF8sICdvcGVuJykpIHtcclxuICAgICAgICAgIHZpZGVvanMucmVtb3ZlQ2xhc3ModGhpcy5lbF8sICdvcGVuJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHZpZGVvanMuYWRkQ2xhc3ModGhpcy5lbF8sICdvcGVuJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfTtcclxuXHJcbiAgICAgIGZvciAobGV0IGVudHJ5IG9mIGVudHJpZXMpIHtcclxuXHJcbiAgICAgICAgbGV0IHNldHRpbmdzTWVudUl0ZW0gPSBuZXcgU2V0dGluZ3NNZW51SXRlbSh0aGlzLnBsYXllcigpLCB0aGlzLm9wdGlvbnNfLCBlbnRyeSk7XHJcblxyXG4gICAgICAgIG1lbnUuYWRkQ2hpbGQoc2V0dGluZ3NNZW51SXRlbSk7XHJcblxyXG4gICAgICAgIC8vIEhpZGUgY2hpbGRyZW4gdG8gYXZvaWQgc3ViIG1lbnVzIHN0YWNraW5nIG9uIHRvcCBvZiBlYWNoIG90aGVyXHJcbiAgICAgICAgLy8gb3IgaGF2aW5nIG11bHRpcGxlIG1lbnVzIG9wZW5cclxuICAgICAgICBzZXR0aW5nc01lbnVJdGVtLm9uKCdjbGljaycsIHZpZGVvanMuYmluZCh0aGlzLCB0aGlzLmhpZGVDaGlsZHJlbikpO1xyXG5cclxuICAgICAgICAvLyBXZXRoZXIgdG8gYWRkIG9yIHJlbW92ZSBzZWxlY3RlZCBjbGFzcyBvbiB0aGUgc2V0dGluZ3Mgc3ViIG1lbnUgZWxlbWVudFxyXG4gICAgICAgIHNldHRpbmdzTWVudUl0ZW0ub24oJ2NsaWNrJywgb3BlblN1Yk1lbnUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG1lbnU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBIaWRlIGFsbCB0aGUgc3ViIG1lbnVzXHJcbiAgICovXHJcbiAgaGlkZUNoaWxkcmVuKCkge1xyXG4gICAgZm9yIChsZXQgbWVudUNoaWxkIG9mIHRoaXMubWVudS5jaGlsZHJlbigpKSB7XHJcbiAgICAgIG1lbnVDaGlsZC5oaWRlU3ViTWVudSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcblNldHRpbmdzTWVudUJ1dHRvbi5wcm90b3R5cGUuY29udHJvbFRleHRfID0gJ1NldHRpbmdzIE1lbnUnO1xyXG5cclxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdTZXR0aW5nc01lbnVCdXR0b24nLCBTZXR0aW5nc01lbnVCdXR0b24pO1xyXG5leHBvcnQgZGVmYXVsdCBTZXR0aW5nc01lbnVCdXR0b247XHJcbiIsIi8qKlxyXG4gKiBAZmlsZSBzZXR0aW5ncy1tZW51LWl0ZW0uanNcclxuICovXHJcblxyXG5pbXBvcnQgdmlkZW9qcyBmcm9tICd2aWRlby5qcyc7XHJcblxyXG5jb25zdCBNZW51SXRlbSA9IHZpZGVvanMuZ2V0Q29tcG9uZW50KCdNZW51SXRlbScpO1xyXG5jb25zdCBwbGF5YmFja1JhdGVNZW51QnV0dG9uID0gdmlkZW9qcy5nZXRDb21wb25lbnQoJ1BsYXliYWNrUmF0ZU1lbnVCdXR0b24nKTtcclxuY29uc3QgY29tcG9uZW50ID0gdmlkZW9qcy5nZXRDb21wb25lbnQoJ0NvbXBvbmVudCcpO1xyXG5cclxuY29uc3QgdG9UaXRsZUNhc2UgPSBmdW5jdGlvbihzdHJpbmcpIHtcclxuICByZXR1cm4gc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBzcGVjaWZpYyBtZW51IGl0ZW0gdHlwZSBmb3Igc2VsZWN0aW5nIGEgc2V0dGluZ1xyXG4gKlxyXG4gKiBAcGFyYW0ge1BsYXllcnxPYmplY3R9IHBsYXllclxyXG4gKiBAcGFyYW0ge09iamVjdD19IG9wdGlvbnNcclxuICogQHBhcmFtIHtTdHJpbmc9fSBlbnRyeVxyXG4gKiBAZXh0ZW5kcyBNZW51SXRlbVxyXG4gKiBAY2xhc3MgU2V0dGluZ3NNZW51SXRlbVxyXG4gKi9cclxuY2xhc3MgU2V0dGluZ3NNZW51SXRlbSBleHRlbmRzIE1lbnVJdGVtIHtcclxuXHJcbiAgY29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zLCBlbnRyeSkge1xyXG4gICAgc3VwZXIocGxheWVyLCBvcHRpb25zKTtcclxuXHJcbiAgICBjb25zdCBzdWJNZW51TmFtZSA9IHRvVGl0bGVDYXNlKGVudHJ5KTtcclxuXHJcbiAgICBjb25zdCBTdWJNZW51Q29tcG9uZW50ID0gdmlkZW9qcy5nZXRDb21wb25lbnQoc3ViTWVudU5hbWUpO1xyXG5cclxuICAgIGlmICghU3ViTWVudUNvbXBvbmVudCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENvbXBvbmVudCAke3N1Yk1lbnVOYW1lfSBkb2VzIG5vdCBleGlzdGApO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc3ViTWVudSA9IG5ldyBTdWJNZW51Q29tcG9uZW50KHRoaXMucGxheWVyKCksIG9wdGlvbnMpO1xyXG5cclxuICAgIGNvbnN0IHVwZGF0ZSA9IHZpZGVvanMuYmluZCh0aGlzLCB0aGlzLnVwZGF0ZSk7XHJcbiAgICAvLyBUbyB1cGRhdGUgdGhlIHN1YiBtZW51IHZhbHVlIG9uIGNsaWNrLCBzZXRUaW1lb3V0IGlzIG5lZWRlZCBiZWNhdXNlXHJcbiAgICAvLyB1cGRhdGluZyB0aGUgdmFsdWUgaXMgbm90IGluc3RhbnRcclxuICAgIGNvbnN0IHVwZGF0ZUFmdGVyVGltZW91dCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICBzZXRUaW1lb3V0KHVwZGF0ZSwgMCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZvciAobGV0IGl0ZW0gb2YgdGhpcy5zdWJNZW51Lm1lbnUuY2hpbGRyZW4oKSkge1xyXG4gICAgICBpZiAoIShpdGVtIGluc3RhbmNlb2YgY29tcG9uZW50KSkge1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGl0ZW0ub24oJ2NsaWNrJywgdXBkYXRlQWZ0ZXJUaW1lb3V0KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlIHRoZSBjb21wb25lbnQncyBET00gZWxlbWVudFxyXG4gICAqXHJcbiAgICogQHJldHVybiB7RWxlbWVudH1cclxuICAgKiBAbWV0aG9kIGNyZWF0ZUVsXHJcbiAgICovXHJcbiAgY3JlYXRlRWwoKSB7XHJcbiAgICAvLyBIaWRlIHRoaXMgY29tcG9uZW50IGJ5IGRlZmF1bHRcclxuICAgIGNvbnN0IGVsID0gdmlkZW9qcy5jcmVhdGVFbCgnbGknLCB7XHJcbiAgICAgIGNsYXNzTmFtZTogJ3Zqcy1tZW51LWl0ZW0nXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnNldHRpbmdzU3ViTWVudVRpdGxlRWxfID0gdmlkZW9qcy5jcmVhdGVFbCgnZGl2Jywge1xyXG4gICAgICBjbGFzc05hbWU6ICd2anMtc2V0dGluZ3Mtc3ViLW1lbnUtdGl0bGUnXHJcbiAgICB9KTtcclxuXHJcbiAgICBlbC5hcHBlbmRDaGlsZCh0aGlzLnNldHRpbmdzU3ViTWVudVRpdGxlRWxfKTtcclxuXHJcbiAgICB0aGlzLnNldHRpbmdzU3ViTWVudVZhbHVlRWxfID0gdmlkZW9qcy5jcmVhdGVFbCgnZGl2Jywge1xyXG4gICAgICBjbGFzc05hbWU6ICd2anMtc2V0dGluZ3Mtc3ViLW1lbnUtdmFsdWUnXHJcbiAgICB9KTtcclxuXHJcbiAgICBlbC5hcHBlbmRDaGlsZCh0aGlzLnNldHRpbmdzU3ViTWVudVZhbHVlRWxfKTtcclxuXHJcbiAgICB0aGlzLnNldHRpbmdzU3ViTWVudUVsXyA9IHZpZGVvanMuY3JlYXRlRWwoJ2RpdicsIHtcclxuICAgICAgY2xhc3NOYW1lOiAndmpzLXNldHRpbmdzLXN1Yi1tZW51IHZqcy1oaWRkZW4nXHJcbiAgICB9KTtcclxuXHJcbiAgICBlbC5hcHBlbmRDaGlsZCh0aGlzLnNldHRpbmdzU3ViTWVudUVsXyk7XHJcblxyXG4gICAgcmV0dXJuIGVsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSGFuZGxlIGNsaWNrIG9uIG1lbnUgaXRlbVxyXG4gICAqXHJcbiAgICogQG1ldGhvZCBoYW5kbGVDbGlja1xyXG4gICAqL1xyXG4gIGhhbmRsZUNsaWNrKCkge1xyXG4gICAgLy8gUmVtb3ZlIG9wZW4gY2xhc3MgdG8gZW5zdXJlIG9ubHkgdGhlIG9wZW4gc3VibWVudSBnZXRzIHRoaXMgY2xhc3NcclxuICAgIHZpZGVvanMucmVtb3ZlQ2xhc3ModGhpcy5lbF8sICdvcGVuJyk7XHJcblxyXG4gICAgc3VwZXIuaGFuZGxlQ2xpY2soKTtcclxuXHJcbiAgICAvLyBXZXRoZXIgdG8gYWRkIG9yIHJlbW92ZSB2anMtaGlkZGVuIGNsYXNzIG9uIHRoZSBzZXR0aW5nc1N1Yk1lbnVFbCBlbGVtZW50XHJcbiAgICBpZiAodmlkZW9qcy5oYXNDbGFzcyh0aGlzLnNldHRpbmdzU3ViTWVudUVsXywgJ3Zqcy1oaWRkZW4nKSkge1xyXG4gICAgICB2aWRlb2pzLnJlbW92ZUNsYXNzKHRoaXMuc2V0dGluZ3NTdWJNZW51RWxfLCAndmpzLWhpZGRlbicpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdmlkZW9qcy5hZGRDbGFzcyh0aGlzLnNldHRpbmdzU3ViTWVudUVsXywgJ3Zqcy1oaWRkZW4nKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVwZGF0ZSB0aGUgc3ViIG1lbnVzXHJcbiAgICpcclxuICAgKiBAbWV0aG9kIHVwZGF0ZVxyXG4gICAqL1xyXG4gIHVwZGF0ZSgpIHtcclxuICAgIHRoaXMuc2V0dGluZ3NTdWJNZW51VGl0bGVFbF8uaW5uZXJIVE1MID0gdGhpcy5zdWJNZW51LmNvbnRyb2xUZXh0XyArICc6JztcclxuICAgIHRoaXMuc2V0dGluZ3NTdWJNZW51RWxfLmFwcGVuZENoaWxkKHRoaXMuc3ViTWVudS5tZW51LmVsXyk7XHJcblxyXG4gICAgLy8gUGxheWJhY2sgcmF0ZSBtZW51IGJ1dHRvbiBkb2Vzbid0IGdldCBhIHZqcy1zZWxlY3RlZCBjbGFzc1xyXG4gICAgLy8gb3Igc2V0cyBvcHRpb25zX1snc2VsZWN0ZWQnXSBvbiB0aGUgc2VsZWN0ZWQgcGxheWJhY2sgcmF0ZS5cclxuICAgIC8vIFRodXMgd2UgZ2V0IHRoZSBzdWJtZW51IHZhbHVlIGJhc2VkIG9uIHRoZSBsYWJlbEVsIG9mIHBsYXliYWNrUmF0ZU1lbnVCdXR0b25cclxuICAgIGlmICh0aGlzLnN1Yk1lbnUgaW5zdGFuY2VvZiBwbGF5YmFja1JhdGVNZW51QnV0dG9uKSB7XHJcbiAgICAgIHRoaXMuc2V0dGluZ3NTdWJNZW51VmFsdWVFbF8uaW5uZXJIVE1MID0gdGhpcy5zdWJNZW51LmxhYmVsRWxfLmlubmVySFRNTDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIExvb3AgdHJvdWdoIHRoZSBzdWJtZW51IGl0ZW1zIHRvIGZpbmQgdGhlIHNlbGVjdGVkIGNoaWxkXHJcbiAgICAgIGZvciAobGV0IHN1Yk1lbnVJdGVtIG9mIHRoaXMuc3ViTWVudS5tZW51LmNoaWxkcmVuXykge1xyXG4gICAgICAgIGlmICghKHN1Yk1lbnVJdGVtIGluc3RhbmNlb2YgY29tcG9uZW50KSkge1xyXG4gICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFNldCBzdWJtZW51IHZhbHVlIGJhc2VkIG9uIHdoYXQgaXRlbSBpcyBzZWxlY3RlZFxyXG4gICAgICAgIGlmIChzdWJNZW51SXRlbS5vcHRpb25zXy5zZWxlY3RlZCB8fCBzdWJNZW51SXRlbS5oYXNDbGFzcygndmpzLXNlbGVjdGVkJykpIHtcclxuICAgICAgICAgIHRoaXMuc2V0dGluZ3NTdWJNZW51VmFsdWVFbF8uaW5uZXJIVE1MID0gc3ViTWVudUl0ZW0ub3B0aW9uc18ubGFiZWw7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBIaWRlIHRoZSBzdWIgbWVudVxyXG4gICAqL1xyXG4gIGhpZGVTdWJNZW51KCkge1xyXG4gICAgaWYgKHZpZGVvanMuaGFzQ2xhc3ModGhpcy5lbF8sICdvcGVuJykpIHtcclxuICAgICAgdmlkZW9qcy5hZGRDbGFzcyh0aGlzLnNldHRpbmdzU3ViTWVudUVsXywgJ3Zqcy1oaWRkZW4nKTtcclxuICAgICAgdmlkZW9qcy5yZW1vdmVDbGFzcyh0aGlzLmVsXywgJ29wZW4nKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG5TZXR0aW5nc01lbnVJdGVtLnByb3RvdHlwZS5jb250ZW50RWxUeXBlID0gJ2J1dHRvbic7XHJcblxyXG52aWRlb2pzLnJlZ2lzdGVyQ29tcG9uZW50KCdTZXR0aW5nc01lbnVJdGVtJywgU2V0dGluZ3NNZW51SXRlbSk7XHJcbmV4cG9ydCBkZWZhdWx0IFNldHRpbmdzTWVudUl0ZW07XHJcbiIsImltcG9ydCAnLi9jb21wb25lbnRzL3NldHRpbmdzLW1lbnUtYnV0dG9uLmpzJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvc2V0dGluZ3MtbWVudS1pdGVtLmpzJztcclxuIl19
