/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./includes/js/gar-ds-script-universal.js":
/*!************************************************!*\
  !*** ./includes/js/gar-ds-script-universal.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scroll_switch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scroll-switch */ \"./includes/js/modules/scroll-switch.js\");\n/* harmony import */ var _modules_menus_logic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menus-logic */ \"./includes/js/modules/menus-logic.js\");\n/* harmony import */ var _modules_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/data */ \"./includes/js/modules/data.js\");\n/* harmony import */ var _modules_toggle_service_door__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/toggle-service-door */ \"./includes/js/modules/toggle-service-door.js\");\n/* harmony import */ var _modules_leds_logic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/leds-logic */ \"./includes/js/modules/leds-logic.js\");\n// Webpack enabled\n// import $ from 'jquery';\n\n\n\n\n\n$ = jQuery;\n$(function () {\n  console.log(_modules_data__WEBPACK_IMPORTED_MODULE_2__.positionRestrictionsArray);\n\n  // Mobile Scroll switcher: Product photo <-> Dial Selector\n  (0,_modules_scroll_switch__WEBPACK_IMPORTED_MODULE_0__.scrollSwith)();\n  addEventListener(\"resize\", function (event) {\n    (0,_modules_scroll_switch__WEBPACK_IMPORTED_MODULE_0__.scrollSwith)();\n  });\n\n  // Menu Logic\n  _modules_menus_logic__WEBPACK_IMPORTED_MODULE_1__.serviceDoorMenuLogic();\n  _modules_menus_logic__WEBPACK_IMPORTED_MODULE_1__.filterMenuLogic();\n  _modules_menus_logic__WEBPACK_IMPORTED_MODULE_1__.hydroJetsGroupOneMenuLogic();\n  _modules_menus_logic__WEBPACK_IMPORTED_MODULE_1__.hydroJetsGroupTwoMenuLogic();\n\n  // Init show/hide\n  $('#menu-box-service').hide();\n  $('#menu-box-jets').hide();\n  $('#menu-box-filter').hide();\n\n  /*\n  ** Buttons\n  */\n\n  var claddingTypesUl = document.querySelectorAll('.cladding-type-ul li label');\n  var linerColorsUl = document.querySelectorAll('.liner-color-ul');\n  function CladdingAndInsertSwitcher(woodColor, insertColor) {\n    SwitchInsertLayer(insertColor);\n    _modules_data__WEBPACK_IMPORTED_MODULE_2__.insertColorMemory[woodColor] = insertColor;\n  }\n  function restoreSlectedButton(index, element) {\n    var insertColors = [];\n    var keyName = 'color-';\n    var count = php.linerColors;\n    for (var i = 1; i <= count; i++) {\n      var key = keyName + i;\n      insertColors.push(key);\n    }\n    var current = insertColors.indexOf(_modules_data__WEBPACK_IMPORTED_MODULE_2__.insertColorMemory.Current);\n    $(linerColorsUl[index].querySelectorAll('li')[current]).find('label').trigger('click');\n  }\n\n  // Cladding\n  claddingTypesUl.forEach(function (element, index) {\n    $(element).on('change', function () {\n      restoreSlectedButton(index);\n    });\n  });\n\n  // Liners\n  linerColorsUl.forEach(function (element) {\n    var _loop = function _loop(i) {\n      // buttons = ;\n      $(element.querySelectorAll('li')[i]).on('change', function () {\n        CladdingAndInsertSwitcher('Current', 'color-' + (i + 1));\n      });\n    };\n    for (var i = 0; i < php.linerColors; i++) {\n      _loop(i);\n    }\n  });\n\n  // Air Jets\n  $('.air_jets_checkboxes-div ul li').eq(0).on(\"change\", function () {\n    SwitchAirJetsLayer('0');\n    (0,_modules_toggle_service_door__WEBPACK_IMPORTED_MODULE_3__.ToggleServiceDoor)();\n    ToggleMenuContainer();\n  });\n  $('.air_jets_checkboxes-div ul li').eq(1).on(\"change\", function () {\n    SwitchAirJetsLayer('1');\n    (0,_modules_toggle_service_door__WEBPACK_IMPORTED_MODULE_3__.ToggleServiceDoor)();\n    ToggleMenuContainer();\n  });\n  $('.air_jets_checkboxes-div ul li').eq(2).on(\"change\", function () {\n    SwitchAirJetsLayer('2');\n    (0,_modules_toggle_service_door__WEBPACK_IMPORTED_MODULE_3__.ToggleServiceDoor)();\n    ToggleMenuContainer();\n  });\n  $('.air_jets_checkboxes-div ul li').eq(3).on(\"change\", function () {\n    SwitchAirJetsLayer('3');\n    (0,_modules_toggle_service_door__WEBPACK_IMPORTED_MODULE_3__.ToggleServiceDoor)();\n    ToggleMenuContainer();\n  });\n\n  // Hydro Jets\n  $('.hydro_jets_checkboxes-div ul li').eq(0).on(\"change\", function () {\n    _modules_menus_logic__WEBPACK_IMPORTED_MODULE_1__.SwitchHydroJetsLayer('0', 0);\n    (0,_modules_toggle_service_door__WEBPACK_IMPORTED_MODULE_3__.ToggleServiceDoor)();\n    $('#menu-box-jets').hide();\n    $('#conf-jets-10').hide();\n    $('#conf-jets-20').hide();\n    ToggleMenuContainer();\n  });\n  $('.hydro_jets_checkboxes-div ul li').eq(1).on(\"change\", function () {\n    _modules_menus_logic__WEBPACK_IMPORTED_MODULE_1__.SwitchHydroJetsLayer('1', _modules_data__WEBPACK_IMPORTED_MODULE_2__.hydroJetsPatternGroup[1]);\n    (0,_modules_toggle_service_door__WEBPACK_IMPORTED_MODULE_3__.ToggleServiceDoor)();\n    $('#menu-box-jets').show();\n    $('#conf-jets-10').show();\n    $(\"label[for='conf-jets-10']\").show();\n    $('#conf-jets-20').hide();\n    $(\"label[for='conf-jets-20']\").hide();\n    ToggleMenuContainer();\n  });\n  $('.hydro_jets_checkboxes-div ul li').eq(2).on(\"change\", function () {\n    _modules_menus_logic__WEBPACK_IMPORTED_MODULE_1__.SwitchHydroJetsLayer('2', _modules_data__WEBPACK_IMPORTED_MODULE_2__.hydroJetsPatternGroup[2]);\n    (0,_modules_toggle_service_door__WEBPACK_IMPORTED_MODULE_3__.ToggleServiceDoor)();\n    $('#menu-box-jets').show();\n    $('#conf-jets-20').show();\n    $(\"label[for='conf-jets-20']\").show();\n    $('#conf-jets-10').hide();\n    $(\"label[for='conf-jets-10']\").hide();\n    ToggleMenuContainer();\n  });\n\n  // LEDs Checkboxes\n  $('.leds_checkboxes-div ul li').eq(0).on(\"change\", function () {\n    (0,_modules_leds_logic__WEBPACK_IMPORTED_MODULE_4__.SwitchLedLayer)('led-slot-1');\n    (0,_modules_toggle_service_door__WEBPACK_IMPORTED_MODULE_3__.ToggleServiceDoor)();\n    ToggleMenuContainer();\n  });\n  $('.leds_checkboxes-div ul li').eq(1).on(\"change\", function () {\n    (0,_modules_leds_logic__WEBPACK_IMPORTED_MODULE_4__.SwitchLedLayer)('led-slot-2');\n    (0,_modules_toggle_service_door__WEBPACK_IMPORTED_MODULE_3__.ToggleServiceDoor)();\n    ToggleMenuContainer();\n  });\n  $('.leds_checkboxes-div ul li').eq(2).on(\"change\", function () {\n    (0,_modules_leds_logic__WEBPACK_IMPORTED_MODULE_4__.SwitchLedLayer)('led-slot-3');\n    (0,_modules_toggle_service_door__WEBPACK_IMPORTED_MODULE_3__.ToggleServiceDoor)();\n    ToggleMenuContainer();\n  });\n\n  // LEDs Toggle\n  $('.leds_toggle_slots-div ul li').eq(0).on(\"change\", function () {\n    (0,_modules_leds_logic__WEBPACK_IMPORTED_MODULE_4__.ToggleLedLayer)('led-slot-1');\n    (0,_modules_toggle_service_door__WEBPACK_IMPORTED_MODULE_3__.ToggleServiceDoor)();\n    ToggleMenuContainer();\n  });\n  $('.leds_toggle_slots-div ul li').eq(1).on(\"change\", function () {\n    (0,_modules_leds_logic__WEBPACK_IMPORTED_MODULE_4__.ToggleLedLayer)('led-slot-2');\n    (0,_modules_toggle_service_door__WEBPACK_IMPORTED_MODULE_3__.ToggleServiceDoor)();\n    ToggleMenuContainer();\n  });\n  $('.leds_toggle_slots-div ul li').eq(2).on(\"change\", function () {\n    (0,_modules_leds_logic__WEBPACK_IMPORTED_MODULE_4__.ToggleLedLayer)('led-slot-3');\n    (0,_modules_toggle_service_door__WEBPACK_IMPORTED_MODULE_3__.ToggleServiceDoor)();\n    ToggleMenuContainer();\n  });\n\n  // Waterfilter\n  $('.water_filter_checkboxes-div ul li').eq(0).on(\"change\", function () {\n    // ChangeHeaterOrientation('center');\n    $('.conf-filter').hide();\n    $('#menu-box-filter').hide();\n    ToggleMenuContainer();\n  });\n  $('.water_filter_checkboxes-div ul li').eq(1).on(\"change\", function () {\n    // ChangeHeaterOrientation(heaterOrientation);\n    $('.conf-filter').show();\n    $('#menu-box-filter').show();\n    ToggleMenuContainer();\n  });\n  $('.water_filter_checkboxes-div ul li').eq(2).on(\"change\", function () {\n    // ChangeHeaterOrientation(heaterOrientation);\n    $('.conf-filter').show();\n    $('#menu-box-filter').show();\n    ToggleMenuContainer();\n  });\n  $('.water_filter_checkboxes-div ul li').eq(3).on(\"change\", function () {\n    // ChangeHeaterOrientation(heaterOrientation);\n    $('.conf-filter').show();\n    $('#menu-box-filter').show();\n    ToggleMenuContainer();\n  });\n\n  /*\n  ** Modules\n  */\n\n  // function ChangeHeaterOrientation(type) {\n  //   // write DOM\n  //   const img = document.querySelector('.conf-heater');\n  //   img.src = \"/wp-content/uploads/dial-selector-round-x/dial-selector-uk-heater-\" + type + \".svg\";\n  // }\n\n  function ToggleMenuContainer() {\n    // Hide menu container when all 3 menu boxes are hidden\n    if ($('#conf-menu-container').children(':hidden').length === 3) {\n      // console.log($('#conf-menu-container').children(':hidden').length), 'hide';\n      $('#conf-menu-container').css('opacity', '0');\n    } else {\n      // console.log($('#conf-menu-container').children(':hidden').length, 'show');\n      $('#conf-menu-container').css('opacity', '1');\n    }\n  }\n  function SwitchInsertLayer(color) {\n    // write DOM\n    var img = document.querySelector('.conf-base');\n    img.src = \"/wp-content/uploads/\" + php.folderName + \"/liner-\" + color + \".jpg\";\n    // write global var\n    _modules_data__WEBPACK_IMPORTED_MODULE_2__.insertColorMemory.Current = color;\n  }\n  function SwitchAirJetsLayer(group) {\n    // write DOM\n    var img = document.querySelector('.conf-air-jets');\n    img.src = \"/wp-content/uploads/\" + php.folderName + \"/air-jets-\" + group + \".svg\";\n    // write ServiceDoor toggle\n    if (group === '0') {\n      _modules_data__WEBPACK_IMPORTED_MODULE_2__.activeServiceDoorSystems.airJets = 0;\n    } else {\n      _modules_data__WEBPACK_IMPORTED_MODULE_2__.activeServiceDoorSystems.airJets = 1;\n    }\n  }\n\n  /*\n  ** Dial Select post to cart & Donwload PDF\n  */\n\n  // Post to cart obj #1\n  var clonedata = $('.custom-conf-data').clone();\n  var formobj = $('form.cart');\n  formobj.append(clonedata);\n  var cloneobj = formobj.find('.custom-conf-main');\n  var lblobj;\n  cloneobj.each(function () {\n    lblobj = $(this).children('label');\n    var lblval = lblobj.text();\n    $(this).children().attr('name', '_custom_opt_data[' + lblval + '][]');\n  });\n  var tenjetsobj = $('#conf-jets-10').parent();\n  tenjetsobj.find('.conf-jets-10').hide();\n  var twentyjetsobj = $('#conf-jets-20').parent();\n  twentyjetsobj.find('.conf-jets-20').hide();\n  formobj.find('.custom-conf-data').append(\"<input type='hidden' name='conf_jets' class='conf_jets' value='1'>\");\n  formobj.find('.custom-conf-data').append(\"<input type='hidden' name='conf_jets_type' class='conf_jets_type' value='10_jets'>\");\n\n  // Post to cart obj #2\n  formobj.find('.custom-conf-data').css('display', 'none');\n  jQuery(document).on('change', '#conf-service', function (e) {\n    formobj.find('#conf-service').removeAttr('selected');\n    formobj.find('#conf-service option:selected').removeAttr('selected', false);\n    if (jQuery(this).val() != '') {\n      var service = jQuery('option:selected', jQuery(this)).val();\n      formobj.find('#conf-service option[value=\"' + service + '\"]').attr('selected', true);\n    }\n  });\n  jQuery(document).on('change', '#conf-filter', function (e) {\n    formobj.find('#conf-filter').removeAttr('selected');\n    formobj.find('#conf-filter option:selected').removeAttr('selected', false);\n    if (jQuery(this).val() != '') {\n      var filter = jQuery('option:selected', jQuery(this)).val();\n      formobj.find('#conf-filter option[value=\"' + filter + '\"]').attr('selected', true);\n    }\n  });\n  jQuery(document).on('click', '.single_add_to_cart_button', function (e) {\n    var date = new Date();\n    date.setTime(date.getTime() + 1 * 24 * 60 * 60 * 1000);\n    var expires = \"; expires=\" + date.toGMTString();\n    if ($(\"body\").find(\".conf-jets-menu .custom-conf-inner\").is(':visible')) {\n      if ($(\"body\").find(\"#conf-jets-10\").is(':visible')) {\n        var id = 'conf-jets-10';\n      } else {\n        var id = 'conf-jets-20';\n      }\n      var service = $('body').find('#conf-service').val();\n      document.cookie = \"hydro_jets_text=\" + id + expires + \"; path=/\";\n      document.cookie = \"hydro_jets=\" + $(\"#\" + id + ' option').filter(\":selected\").val() + expires + \"; path=/\";\n      document.cookie = \"conf_service=\" + service + expires + \"; path=/\";\n    } else {\n      document.cookie = \"hydro_jets_text=;\" + expires + \"; path=/\";\n      document.cookie = \"hydro_jets=;\" + expires + \"; path=/\";\n      document.cookie = \"conf_service=;\" + expires + \"; path=/\";\n      document.cookie = \"conf_filter=;\" + expires + \"; path=/\";\n    }\n    if ($(\"#menu-box-service\").is(':visible')) {\n      var service = $('body').find('#conf-service').parent('.custom-conf-main').is(':visible');\n      var service_val = $('body').find('#conf-service').val();\n      if (service == false || service == undefined || service == '') {\n        document.cookie = \"conf_service=;\" + expires + \"; path=/\";\n      } else {\n        document.cookie = \"conf_service=\" + service_val + expires + \"; path=/\";\n      }\n    }\n    if ($(\"#menu-box-filter\").is(':visible')) {\n      var filter = $('body').find('#conf-filter').parent('.custom-conf-main').is(':visible');\n      var filter_val = $('body').find('#conf-filter').val();\n      if (filter == false || filter == undefined || filter == '') {\n        document.cookie = \"conf_filter=;\" + expires + \"; path=/\";\n      } else {\n        document.cookie = \"conf_filter=\" + filter_val + expires + \"; path=/\";\n      }\n    }\n  });\n});\n\n//# sourceURL=webpack://gardenvity-dial-selector/./includes/js/gar-ds-script-universal.js?");

/***/ }),

/***/ "./includes/js/modules/data.js":
/*!*************************************!*\
  !*** ./includes/js/modules/data.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   activeLeds: () => (/* binding */ activeLeds),\n/* harmony export */   activeServiceDoorSystems: () => (/* binding */ activeServiceDoorSystems),\n/* harmony export */   dialSlotMemory: () => (/* binding */ dialSlotMemory),\n/* harmony export */   hydroJetsPatternGroup: () => (/* binding */ hydroJetsPatternGroup),\n/* harmony export */   insertColorMemory: () => (/* binding */ insertColorMemory),\n/* harmony export */   positionRestrictionsArray: () => (/* binding */ positionRestrictionsArray)\n/* harmony export */ });\nvar activeServiceDoorSystems = {\n  'led-slot-1': 0,\n  'led-slot-2': 0,\n  'led-slot-3': 0,\n  airJets: 0,\n  hydroJets: 0,\n  airPlusHydroJets: 0\n};\nvar activeLeds = {\n  'led-slot-1': 0,\n  'led-slot-2': 0,\n  'led-slot-3': 0\n};\nvar dialSlotMemory = {\n  service: [php.serviceDoorDefault, php.serviceDoorDefault],\n  filter: [php.filterDefault, php.filterDefault]\n};\nvar hydroJetsPatternGroup = {\n  1: 0,\n  2: 0\n};\nvar insertColorMemory = {\n  Current: 'color-' + php.linerColorStart\n};\nvar positionRestrictionsArray = php.positionRestrictions.split(\",\").map(function (s) {\n  return s.trim();\n});\n\n// Qattro External Specific\nvar restrictedFilterPos = ['1', '11'];\nvar heaterOrientation = 'center';\n\n//# sourceURL=webpack://gardenvity-dial-selector/./includes/js/modules/data.js?");

/***/ }),

/***/ "./includes/js/modules/leds-logic.js":
/*!*******************************************!*\
  !*** ./includes/js/modules/leds-logic.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SwitchLedLayer: () => (/* binding */ SwitchLedLayer),\n/* harmony export */   ToggleLedLayer: () => (/* binding */ ToggleLedLayer)\n/* harmony export */ });\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./includes/js/modules/data.js\");\n\nvar SwitchLedLayer = function SwitchLedLayer(type) {\n  if (_data__WEBPACK_IMPORTED_MODULE_0__.activeLeds[type] === 0) {\n    var img = document.querySelector('.conf-' + type);\n    img.src = \"/wp-content/uploads/\" + php.folderName + \"/\" + type + \".svg\";\n    _data__WEBPACK_IMPORTED_MODULE_0__.activeLeds[type] = 1;\n    _data__WEBPACK_IMPORTED_MODULE_0__.activeServiceDoorSystems[type] = 1;\n  } else if (_data__WEBPACK_IMPORTED_MODULE_0__.activeLeds[type] === 1) {\n    var _img = document.querySelector('.conf-' + type);\n    _img.src = \"/wp-content/uploads/\" + php.folderName + \"/led-none.svg\";\n    _data__WEBPACK_IMPORTED_MODULE_0__.activeLeds[type] = 0;\n    _data__WEBPACK_IMPORTED_MODULE_0__.activeServiceDoorSystems[type] = 0;\n  }\n};\nvar ToggleLedLayer = function ToggleLedLayer(type) {\n  // write DOM\n  var img = document.querySelector('.conf-led-slot-1');\n  img.src = \"/wp-content/uploads/\" + php.folderName + \"/\" + type + \".svg\";\n  // write ServiceDoor toggle\n  if (type === 'led-slot-1') {\n    _data__WEBPACK_IMPORTED_MODULE_0__.activeServiceDoorSystems['led-slot-1'] = 0;\n  } else {\n    _data__WEBPACK_IMPORTED_MODULE_0__.activeServiceDoorSystems['led-slot-1'] = 1;\n  }\n};\n\n//# sourceURL=webpack://gardenvity-dial-selector/./includes/js/modules/leds-logic.js?");

/***/ }),

/***/ "./includes/js/modules/menus-logic.js":
/*!********************************************!*\
  !*** ./includes/js/modules/menus-logic.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SwitchHydroJetsLayer: () => (/* binding */ SwitchHydroJetsLayer),\n/* harmony export */   filterMenuLogic: () => (/* binding */ filterMenuLogic),\n/* harmony export */   hydroJetsGroupOneMenuLogic: () => (/* binding */ hydroJetsGroupOneMenuLogic),\n/* harmony export */   hydroJetsGroupTwoMenuLogic: () => (/* binding */ hydroJetsGroupTwoMenuLogic),\n/* harmony export */   serviceDoorMenuLogic: () => (/* binding */ serviceDoorMenuLogic)\n/* harmony export */ });\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./includes/js/modules/data.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n$ = jQuery;\nvar serviceDoorMenuLogic = function serviceDoorMenuLogic() {\n  $('select[name=\"conf-service\"]').on(\"change\", function () {\n    var position = checkDropdownValues();\n    hj('event', 'Config click');\n    if (position === \"same\") {\n      SwitchFilterBoxLayer(_data__WEBPACK_IMPORTED_MODULE_0__.dialSlotMemory.service[0]);\n      SwitchServiceDoorLayer(_data__WEBPACK_IMPORTED_MODULE_0__.dialSlotMemory.filter[0]);\n      $('select[name=\"conf-service\"]').val(_data__WEBPACK_IMPORTED_MODULE_0__.dialSlotMemory.filter[0]);\n      $('select[name=\"conf-filter\"]').val(_data__WEBPACK_IMPORTED_MODULE_0__.dialSlotMemory.service[0]);\n      SaveDialSlotMemory('filter');\n      SaveDialSlotMemory('service');\n\n      // log(dialSlotMemory);\n    } else if (position === \"2-10\") {\n      SwitchServiceDoorLayer(_data__WEBPACK_IMPORTED_MODULE_0__.dialSlotMemory.service[0]);\n      $('select[name=\"conf-service\"]').val(_data__WEBPACK_IMPORTED_MODULE_0__.dialSlotMemory.service[0]);\n      SaveDialSlotMemory('service');\n    } else if (position === \"continue\") {\n      SwitchServiceDoorLayer($('select[name=\"conf-service\"]').val());\n      SaveDialSlotMemory('service');\n\n      // log(dialSlotMemory);\n    }\n  });\n};\n\nvar filterMenuLogic = function filterMenuLogic() {\n  $('select[name=\"conf-filter\"]').on(\"change\", function () {\n    var position = checkDropdownValues();\n    hj('event', 'Config click');\n    if (position === \"same\") {\n      SwitchServiceDoorLayer(_data__WEBPACK_IMPORTED_MODULE_0__.dialSlotMemory.filter[0]);\n      SwitchFilterBoxLayer(_data__WEBPACK_IMPORTED_MODULE_0__.dialSlotMemory.service[0]);\n      $('select[name=\"conf-filter\"]').val(_data__WEBPACK_IMPORTED_MODULE_0__.dialSlotMemory.service[0]);\n      $('select[name=\"conf-service\"]').val(_data__WEBPACK_IMPORTED_MODULE_0__.dialSlotMemory.filter[0]);\n      SaveDialSlotMemory('filter');\n      SaveDialSlotMemory('service');\n\n      // log(dialSlotMemory);\n    } else if (position === \"2-10\") {\n      SwitchFilterBoxLayer(_data__WEBPACK_IMPORTED_MODULE_0__.dialSlotMemory.filter[0]);\n      $('select[name=\"conf-filter\"]').val(_data__WEBPACK_IMPORTED_MODULE_0__.dialSlotMemory.filter[0]);\n      SaveDialSlotMemory('filter');\n    } else if (position === \"continue\") {\n      SwitchFilterBoxLayer($('select[name=\"conf-filter\"]').val());\n      SaveDialSlotMemory('filter');\n\n      // log(dialSlotMemory);\n    }\n  });\n};\n\nvar hydroJetsGroupOneMenuLogic = function hydroJetsGroupOneMenuLogic() {\n  $('select[name=\"conf-jets-10\"]').on(\"change\", function () {\n    SwitchHydroJetsLayer('1', $('select[name=\"conf-jets-10\"]').val());\n    _data__WEBPACK_IMPORTED_MODULE_0__.hydroJetsPatternGroup[1] = $('select[name=\"conf-jets-10\"]').val();\n    hj('event', 'Config click');\n  });\n};\nvar hydroJetsGroupTwoMenuLogic = function hydroJetsGroupTwoMenuLogic() {\n  $('select[name=\"conf-jets-20\"]').on(\"change\", function () {\n    SwitchHydroJetsLayer('2', $('select[name=\"conf-jets-20\"]').val());\n    _data__WEBPACK_IMPORTED_MODULE_0__.hydroJetsPatternGroup[2] = $('select[name=\"conf-jets-20\"]').val();\n    hj('event', 'Config click');\n  });\n};\nvar SwitchHydroJetsLayer = function SwitchHydroJetsLayer(group, pattern) {\n  // write DOM\n  // const img = ;\n  document.querySelector('.conf-jets').src = \"/wp-content/uploads/\" + php.folderName + \"/hydro-jets-\" + group + \"-\" + pattern + \".svg\";\n  // write ServiceDoor toggle\n  if (group === '0') {\n    _data__WEBPACK_IMPORTED_MODULE_0__.activeServiceDoorSystems.hydroJets = 0;\n  } else {\n    _data__WEBPACK_IMPORTED_MODULE_0__.activeServiceDoorSystems.hydroJets = 1;\n  }\n};\n\n// Helper functions\n\nfunction log(object) {\n  Object.entries(object).forEach(function (_ref) {\n    var _ref2 = _slicedToArray(_ref, 2),\n      key = _ref2[0],\n      value = _ref2[1];\n    console.log(key, value);\n  });\n}\nfunction checkDropdownValues() {\n  var value1 = $('select[name=\"conf-service\"]').val();\n  var value2 = $('select[name=\"conf-filter\"]').val();\n  if (value1 === value2) {\n    return \"same\";\n  } else if (_data__WEBPACK_IMPORTED_MODULE_0__.positionRestrictionsArray.includes(value1) && _data__WEBPACK_IMPORTED_MODULE_0__.positionRestrictionsArray.includes(value2)) {\n    return \"2-10\";\n  } else {\n    return \"continue\";\n  }\n}\nfunction SaveDialSlotMemory(type) {\n  _data__WEBPACK_IMPORTED_MODULE_0__.dialSlotMemory[type].unshift($('select[name=\"conf-' + type + '\"]').val());\n  if (_data__WEBPACK_IMPORTED_MODULE_0__.dialSlotMemory[type].length > 2) {\n    _data__WEBPACK_IMPORTED_MODULE_0__.dialSlotMemory[type].pop();\n  }\n}\nfunction SwitchFilterBoxLayer(pos) {\n  // write DOM\n  var img = document.querySelector('.conf-filter');\n  img.src = \"/wp-content/uploads/\" + php.folderName + \"/filter-\" + pos + \".svg\";\n}\nfunction SwitchServiceDoorLayer(pos) {\n  // write DOM\n  var img = document.querySelector('.conf-service');\n  img.src = \"/wp-content/uploads/\" + php.folderName + \"/service-door-\" + pos + \".svg\";\n}\n\n//# sourceURL=webpack://gardenvity-dial-selector/./includes/js/modules/menus-logic.js?");

/***/ }),

/***/ "./includes/js/modules/scroll-switch.js":
/*!**********************************************!*\
  !*** ./includes/js/modules/scroll-switch.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   scrollSwith: () => (/* binding */ scrollSwith)\n/* harmony export */ });\nvar scrollSwith = function scrollSwith() {\n  console.log('MODULE: scrollSwith');\n  var topOffSet = Math.round($('.heater-insulation-title-div').offset().top);\n  var productImageHeight = $('.woocommerce-product-gallery__image > img').height();\n  var imageOffSet = topOffSet - productImageHeight;\n  if (window.innerWidth < 960) {\n    if (document.documentElement.scrollTop > topOffSet) {\n      $('.woocommerce-product-gallery__image').css('display', 'none');\n      $('#liner').css('display', 'block');\n      topOffSet = Math.round($('.heater-insulation-title-div').offset().top);\n      productImageHeight = $('.woocommerce-product-gallery__image > img').height();\n      imageOffSet = topOffSet - productImageHeight;\n    } else if (document.documentElement.scrollTop < imageOffSet) {\n      $('.woocommerce-product-gallery__image').css('display', 'block');\n      $('#liner').css('display', 'none');\n      topOffSet = Math.round($('.heater-insulation-title-div').offset().top);\n      productImageHeight = $('.woocommerce-product-gallery__image > img').height();\n      imageOffSet = topOffSet - productImageHeight;\n    }\n    window.onscroll = function () {\n      if (document.documentElement.scrollTop > topOffSet) {\n        $('.woocommerce-product-gallery__image').css('display', 'none');\n        $('#liner').css('display', 'block');\n        topOffSet = Math.round($('.heater-insulation-title-div').offset().top);\n        productImageHeight = $('.woocommerce-product-gallery__image > img').height();\n        imageOffSet = topOffSet - productImageHeight;\n      } else if (document.documentElement.scrollTop < imageOffSet) {\n        $('.woocommerce-product-gallery__image').css('display', 'block');\n        $('#liner').css('display', 'none');\n        topOffSet = Math.round($('.heater-insulation-title-div').offset().top);\n        productImageHeight = $('.woocommerce-product-gallery__image > img').height();\n        imageOffSet = topOffSet - productImageHeight;\n      }\n    };\n  } else {\n    $('.woocommerce-product-gallery__image').css('display', 'block');\n    $('#liner').css('display', 'block');\n    window.onscroll = null;\n  }\n};\n\n//# sourceURL=webpack://gardenvity-dial-selector/./includes/js/modules/scroll-switch.js?");

/***/ }),

/***/ "./includes/js/modules/toggle-service-door.js":
/*!****************************************************!*\
  !*** ./includes/js/modules/toggle-service-door.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ToggleServiceDoor: () => (/* binding */ ToggleServiceDoor)\n/* harmony export */ });\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./includes/js/modules/data.js\");\n\nvar ToggleServiceDoor = function ToggleServiceDoor() {\n  $ = jQuery;\n  var activeSystems = Object.values(_data__WEBPACK_IMPORTED_MODULE_0__.activeServiceDoorSystems);\n  function checkActive(slot) {\n    return slot > 0;\n  }\n  if (activeSystems.find(checkActive)) {\n    // console.log('service-door', 'active');\n    $('.conf-service').show();\n    $('#menu-box-service').show();\n  } else {\n    // console.log('service-door', 'inactive');\n    $('.conf-service').hide();\n    $('#menu-box-service').hide();\n  }\n  //checkServiceRestriction();\n};\n\n//# sourceURL=webpack://gardenvity-dial-selector/./includes/js/modules/toggle-service-door.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./includes/js/gar-ds-script-universal.js");
/******/ 	
/******/ })()
;