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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scroll_switch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scroll-switch */ \"./includes/js/modules/scroll-switch.js\");\n/* harmony import */ var _modules_toggle_service_door__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/toggle-service-door */ \"./includes/js/modules/toggle-service-door.js\");\n/* harmony import */ var _modules_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/data */ \"./includes/js/modules/data.js\");\n// Webpack enabled\n// import $ from 'jquery';\n\n\n\n$ = jQuery;\n$(function () {\n  // Mobile Scroll switcher: Product photo <-> Dial Selector\n  (0,_modules_scroll_switch__WEBPACK_IMPORTED_MODULE_0__.scrollSwith)();\n\n  // Init show/hide\n  $('#menu-box-service').hide();\n  $('#menu-box-jets').hide();\n  $('#menu-box-filter').hide();\n\n  /*\n  **\n  ** Data\n  **\n  */\n\n  var insertColorMemory = {\n    Current: 'color-' + php.linerColorStart\n  };\n  var hydroJetsPatternGroup = {\n    1: 0,\n    2: 0\n  };\n  var activeLeds = {\n    'led-slot-1': 0,\n    'led-slot-2': 0,\n    'led-slot-3': 0\n  };\n  // let activeServiceDoorSystems = {\n  //   'led-slot-1': 0,\n  //   'led-slot-2': 0,\n  //   'led-slot-3': 0,\n  //   airJets: 0,\n  //   hydroJets: 0,\n  //   airPlusHydroJets: 0\n  // };\n  var restrictedPos = {\n    service: ['none'],\n    filter: ['none']\n  };\n  var dialSlotMemory = {\n    service: ['3', '4'],\n    filter: ['4', '2']\n  };\n  // Qattro External Specific\n  var restrictedFilterPos = ['1', '11'];\n  var heaterOrientation = 'center';\n\n  // Init Service door for a fiberglass model\n  if (document.querySelector('.air_plus_hydro_jets_checkboxes-div') !== null) {\n    _modules_data__WEBPACK_IMPORTED_MODULE_2__.activeServiceDoorSystems.airPlusHydroJets = 1;\n    (0,_modules_toggle_service_door__WEBPACK_IMPORTED_MODULE_1__.ToggleServiceDoor)();\n    // ToggleMenuContainer();\n  }\n\n  /*\n  **\n  ** Buttons\n  **\n  */\n  var claddingTypesUl = document.querySelectorAll('.cladding-type-ul li label');\n  var linerColorsUl = document.querySelectorAll('.liner-color-ul');\n  function CladdingAndInsertSwitcher(woodColor, insertColor) {\n    SwitchInsertLayer(insertColor);\n    insertColorMemory[woodColor] = insertColor;\n  }\n  function restoreSlectedButton(index, element) {\n    var insertColors = [];\n    var keyName = 'color-';\n    var count = php.linerColors;\n    for (var i = 1; i <= count; i++) {\n      var key = keyName + i;\n      insertColors.push(key);\n    }\n    var current = insertColors.indexOf(insertColorMemory.Current);\n    $(linerColorsUl[index].querySelectorAll('li')[current]).find('label').trigger('click');\n  }\n\n  // Cladding\n  claddingTypesUl.forEach(function (element, index) {\n    $(element).on('change', function () {\n      restoreSlectedButton(index);\n    });\n  });\n\n  // Liners\n  linerColorsUl.forEach(function (element) {\n    var _loop = function _loop(i) {\n      // buttons = ;\n      $(element.querySelectorAll('li')[i]).on('change', function () {\n        CladdingAndInsertSwitcher('Current', 'color-' + (i + 1));\n      });\n    };\n    for (var i = 0; i < php.linerColors; i++) {\n      _loop(i);\n    }\n  });\n\n  // Air Plus Hydro Jets\n\n  $('.air_plus_hydro_jets_checkboxes-div ul li').eq(0).change(function () {\n    SwitchAirPlusHydroJetsLayer('0');\n    // ToggleServiceDoor();\n    // ToggleMenuContainer();\n  });\n\n  $('.air_plus_hydro_jets_checkboxes-div ul li').eq(1).change(function () {\n    SwitchAirPlusHydroJetsLayer('1');\n    // ToggleServiceDoor();\n    // ToggleMenuContainer();\n  });\n\n  $('.air_plus_hydro_jets_checkboxes-div ul li').eq(2).change(function () {\n    SwitchAirPlusHydroJetsLayer('2');\n    // ToggleServiceDoor();\n    // ToggleMenuContainer();\n  });\n\n  $('.air_plus_hydro_jets_checkboxes-div ul li').eq(3).change(function () {\n    SwitchAirPlusHydroJetsLayer('3');\n    // ToggleServiceDoor();\n    // ToggleMenuContainer();\n  });\n\n  // Air Jets\n  $('.air_jets_checkboxes-div ul li').eq(0).change(function () {\n    SwitchAirJetsLayer('0');\n    (0,_modules_toggle_service_door__WEBPACK_IMPORTED_MODULE_1__.ToggleServiceDoor)();\n    ToggleMenuContainer();\n    // console.log(this);\n  });\n\n  $('.air_jets_checkboxes-div ul li').eq(1).change(function () {\n    SwitchAirJetsLayer('1');\n    (0,_modules_toggle_service_door__WEBPACK_IMPORTED_MODULE_1__.ToggleServiceDoor)();\n    ToggleMenuContainer();\n  });\n  $('.air_jets_checkboxes-div ul li').eq(2).change(function () {\n    SwitchAirJetsLayer('2');\n    (0,_modules_toggle_service_door__WEBPACK_IMPORTED_MODULE_1__.ToggleServiceDoor)();\n    ToggleMenuContainer();\n  });\n  $('.air_jets_checkboxes-div ul li').eq(3).change(function () {\n    SwitchAirJetsLayer('3');\n    (0,_modules_toggle_service_door__WEBPACK_IMPORTED_MODULE_1__.ToggleServiceDoor)();\n    ToggleMenuContainer();\n  });\n\n  // Hydro Jets\n  $('.hydro_jets_checkboxes-div ul li').eq(0).change(function () {\n    SwitchHydroJetsLayer('0', 0);\n    (0,_modules_toggle_service_door__WEBPACK_IMPORTED_MODULE_1__.ToggleServiceDoor)();\n    $('#menu-box-jets').hide();\n    $('#conf-jets-10').hide();\n    $('#conf-jets-20').hide();\n    // $('.conf-jets-menu').hide();\n    ToggleMenuContainer();\n  });\n  $('.hydro_jets_checkboxes-div ul li').eq(1).change(function () {\n    SwitchHydroJetsLayer('1', hydroJetsPatternGroup[1]);\n    (0,_modules_toggle_service_door__WEBPACK_IMPORTED_MODULE_1__.ToggleServiceDoor)();\n    $('#menu-box-jets').show();\n    $('#conf-jets-10').show();\n    $(\"label[for='conf-jets-10']\").show();\n    $('#conf-jets-20').hide();\n    $(\"label[for='conf-jets-20']\").hide();\n    // $('.conf-jets-menu').show();\n    ToggleMenuContainer();\n  });\n  $('.hydro_jets_checkboxes-div ul li').eq(2).change(function () {\n    SwitchHydroJetsLayer('2', hydroJetsPatternGroup[2]);\n    (0,_modules_toggle_service_door__WEBPACK_IMPORTED_MODULE_1__.ToggleServiceDoor)();\n    $('#menu-box-jets').show();\n    $('#conf-jets-20').show();\n    $(\"label[for='conf-jets-20']\").show();\n    $('#conf-jets-10').hide();\n    $(\"label[for='conf-jets-10']\").hide();\n    // $('.conf-jets-menu').show();\n    ToggleMenuContainer();\n  });\n\n  // LEDs Checkboxes\n  $('.leds_checkboxes-div ul li').eq(0).change(function () {\n    SwitchLedLayer('led-slot-1');\n    (0,_modules_toggle_service_door__WEBPACK_IMPORTED_MODULE_1__.ToggleServiceDoor)();\n    if (document.querySelector('.air_plus_hydro_jets_checkboxes-div') == null) {\n      ToggleMenuContainer();\n    }\n  });\n  $('.leds_checkboxes-div ul li').eq(1).change(function () {\n    SwitchLedLayer('led-slot-2');\n    (0,_modules_toggle_service_door__WEBPACK_IMPORTED_MODULE_1__.ToggleServiceDoor)();\n    if (document.querySelector('.air_plus_hydro_jets_checkboxes-div') == null) {\n      ToggleMenuContainer();\n    }\n  });\n  $('.leds_checkboxes-div ul li').eq(2).change(function () {\n    SwitchLedLayer('led-slot-3');\n    (0,_modules_toggle_service_door__WEBPACK_IMPORTED_MODULE_1__.ToggleServiceDoor)();\n    if (document.querySelector('.air_plus_hydro_jets_checkboxes-div') == null) {\n      ToggleMenuContainer();\n    }\n  });\n\n  // LEDs Toggle\n  $('.leds_toggle_slots-div ul li').eq(0).change(function () {\n    ToggleLedLayer('led-slot-1');\n    (0,_modules_toggle_service_door__WEBPACK_IMPORTED_MODULE_1__.ToggleServiceDoor)();\n    ToggleMenuContainer();\n  });\n  $('.leds_toggle_slots-div ul li').eq(1).change(function () {\n    ToggleLedLayer('led-slot-2');\n    (0,_modules_toggle_service_door__WEBPACK_IMPORTED_MODULE_1__.ToggleServiceDoor)();\n    ToggleMenuContainer();\n  });\n  $('.leds_toggle_slots-div ul li').eq(2).change(function () {\n    ToggleLedLayer('led-slot-3');\n    (0,_modules_toggle_service_door__WEBPACK_IMPORTED_MODULE_1__.ToggleServiceDoor)();\n    ToggleMenuContainer();\n  });\n\n  // Waterfilter\n  $('.water_filter_checkboxes-div ul li').eq(0).change(function () {\n    // ChangeHeaterOrientation('center');\n    $('.conf-filter').hide();\n    $('#menu-box-filter').hide();\n    ToggleMenuContainer();\n  });\n  $('.water_filter_checkboxes-div ul li').eq(1).change(function () {\n    // ChangeHeaterOrientation(heaterOrientation);\n    $('.conf-filter').show();\n    $('#menu-box-filter').show();\n    // checkFilterRestriction();\n    ToggleMenuContainer();\n  });\n  $('.water_filter_checkboxes-div ul li').eq(2).change(function () {\n    // ChangeHeaterOrientation(heaterOrientation);\n    $('.conf-filter').show();\n    $('#menu-box-filter').show();\n    ToggleMenuContainer();\n    // checkFilterRestriction();\n  });\n\n  $('.water_filter_checkboxes-div ul li').eq(3).change(function () {\n    // ChangeHeaterOrientation(heaterOrientation);\n    $('.conf-filter').show();\n    $('#menu-box-filter').show();\n    ToggleMenuContainer();\n    // checkFilterRestriction();\n  });\n\n  /*\n  **\n  ** Menus\n  **\n  */\n\n  $('select[name=\"conf-service\"]').change(function () {\n    SwitchServiceDoorLayer($('select[name=\"conf-service\"]').val());\n    SaveDialSlotMemory('service');\n    // CheckOverlap('service-door', 'filter');\n    // checkServiceRestriction();\n    hj('event', 'Config click');\n  });\n  $('select[name=\"conf-filter\"]').change(function () {\n    SwitchFilterBoxLayer($('select[name=\"conf-filter\"]').val());\n    SaveDialSlotMemory('filter');\n    // CheckOverlapFilter('filter', 'service');\n    // checkFilterRestriction();\n    hj('event', 'Config click');\n  });\n  $('select[name=\"conf-jets-10\"]').change(function () {\n    SwitchHydroJetsLayer('1', $('select[name=\"conf-jets-10\"]').val());\n    hydroJetsPatternGroup[1] = $('select[name=\"conf-jets-10\"]').val();\n    hj('event', 'Config click');\n  });\n  $('select[name=\"conf-jets-20\"]').change(function () {\n    SwitchHydroJetsLayer('2', $('select[name=\"conf-jets-20\"]').val());\n    hydroJetsPatternGroup[2] = $('select[name=\"conf-jets-20\"]').val();\n    hj('event', 'Config click');\n  });\n\n  /*\n  **\n  ** Modules\n  **\n  */\n\n  // function ChangeHeaterOrientation(type) {\n  //   // write DOM\n  //   const img = document.querySelector('.conf-heater');\n  //   img.src = \"/wp-content/uploads/dial-selector-round-x/dial-selector-uk-heater-\" + type + \".svg\";\n  // }\n\n  function CheckOverlapFilter(type_1, type_2) {\n    if (dialSlotMemory.service[0] === dialSlotMemory.filter[0]) {\n      currentServicePos = dialSlotMemory['service'][0];\n      if (currentServicePos != '6') {\n        // write DOM\n        var img = document.querySelector('.conf-service');\n        img.src = \"/wp-content/uploads/dial-selector-round-x/dial-selector-uk-service-\" + 6 + \".svg\";\n        dialSlotMemory['service'].unshift('6');\n        $('select[name=\"conf-service\"]').val(6);\n      } else {\n        var _img = document.querySelector('.conf-service');\n        _img.src = \"/wp-content/uploads/dial-selector-round-x/dial-selector-uk-service-\" + 3 + \".svg\";\n        dialSlotMemory['service'].unshift('3');\n        $('select[name=\"conf-service\"]').val(3);\n      }\n    }\n  }\n  function CheckOverlap(type_1, type_2) {\n    if (dialSlotMemory.service[0] === dialSlotMemory.filter[0]) {\n      var img_1 = document.querySelector('.conf-' + type_1);\n      img_1.src = \"/wp-content/uploads/\" + php.folderName + \"/\" + type_1 + \"-\" + dialSlotMemory[type_2][0] + \".svg\";\n      $('select[name=\"conf-' + type_1 + '\"]').val(dialSlotMemory[type_2][0]);\n      var img_2 = document.querySelector('.conf-' + type_2);\n      img_2.src = \"/wp-content/uploads/\" + php.folderName + \"/\" + type_2 + \"-\" + dialSlotMemory[type_1][1] + \".svg\";\n      $('select[name=\"conf-' + type_2 + '\"]').val(dialSlotMemory[type_1][1]);\n      dialSlotMemory[type_2][0] = dialSlotMemory[type_1][1];\n      dialSlotMemory[type_2][1] = dialSlotMemory[type_1][0];\n    }\n  }\n  function ToggleMenuContainer() {\n    if (document.querySelector('.air_plus_hydro_jets_checkboxes-div') !== null) {\n      if ($('#menu-box-filter').is(':hidden') && $('#menu-box-jets').is(':hidden')) {\n        $('#conf-menu-container').css('opacity', '0');\n      } else {\n        $('#conf-menu-container').css('opacity', '1');\n      }\n    } else {\n      // Hide menu container when all 3 menu boxes are hidden\n      if ($('#conf-menu-container').children(':hidden').length === 3) {\n        // console.log($('#conf-menu-container').children(':hidden').length), 'hide';\n        $('#conf-menu-container').css('opacity', '0');\n      } else {\n        // console.log($('#conf-menu-container').children(':hidden').length, 'show');\n        $('#conf-menu-container').css('opacity', '1');\n      }\n    }\n  }\n  function SaveDialSlotMemory(type) {\n    dialSlotMemory[type].unshift($('select[name=\"conf-' + type + '\"]').val());\n    if (dialSlotMemory[type].length > 2) {\n      dialSlotMemory[type].pop();\n    }\n  }\n  function SwitchFilterBoxLayer(pos) {\n    // write DOM\n    var img = document.querySelector('.conf-filter');\n    img.src = \"/wp-content/uploads/\" + php.folderName + \"/filter-\" + pos + \".svg\";\n  }\n  function SwitchServiceDoorLayer(pos) {\n    // write DOM\n    var img = document.querySelector('.conf-service');\n    img.src = \"/wp-content/uploads/\" + php.folderName + \"/service-door-\" + pos + \".svg\";\n    SaveDialSlotMemory('service');\n  }\n  function SwitchInsertLayer(color) {\n    // write DOM\n    var img = document.querySelector('.conf-base');\n    img.src = \"/wp-content/uploads/\" + php.folderName + \"/liner-\" + color + \".jpg\";\n    // write global var\n    insertColorMemory.Current = color;\n  }\n  function SwitchAirJetsLayer(group) {\n    // write DOM\n    var img = document.querySelector('.conf-air-jets');\n    img.src = \"/wp-content/uploads/\" + php.folderName + \"/air-jets-\" + group + \".svg\";\n    // write ServiceDoor toggle\n    if (group === '0') {\n      _modules_data__WEBPACK_IMPORTED_MODULE_2__.activeServiceDoorSystems.airJets = 0;\n    } else {\n      _modules_data__WEBPACK_IMPORTED_MODULE_2__.activeServiceDoorSystems.airJets = 1;\n    }\n  }\n  function SwitchAirPlusHydroJetsLayer(group) {\n    // write DOM\n    var img = document.querySelector('.conf-air-jets');\n    img.src = \"/wp-content/uploads/\" + php.folderName + \"/air-jets-\" + group + \".svg\";\n    // write ServiceDoor toggle\n    _modules_data__WEBPACK_IMPORTED_MODULE_2__.activeServiceDoorSystems.airPlusHydroJets = 1;\n  }\n  function SwitchHydroJetsLayer(group, pattern) {\n    // write DOM\n    var img = document.querySelector('.conf-jets');\n    img.src = \"/wp-content/uploads/\" + php.folderName + \"/hydro-jets-\" + group + \"-\" + pattern + \".svg\";\n    // write ServiceDoor toggle\n    if (group === '0') {\n      _modules_data__WEBPACK_IMPORTED_MODULE_2__.activeServiceDoorSystems.hydroJets = 0;\n    } else {\n      _modules_data__WEBPACK_IMPORTED_MODULE_2__.activeServiceDoorSystems.hydroJets = 1;\n    }\n  }\n  function SwitchLedLayer(type) {\n    if (activeLeds[type] === 0) {\n      var img = document.querySelector('.conf-' + type);\n      img.src = \"/wp-content/uploads/\" + php.folderName + \"/\" + type + \".svg\";\n      activeLeds[type] = 1;\n      _modules_data__WEBPACK_IMPORTED_MODULE_2__.activeServiceDoorSystems[type] = 1;\n    } else if (activeLeds[type] === 1) {\n      var _img2 = document.querySelector('.conf-' + type);\n      _img2.src = \"/wp-content/uploads/\" + php.folderName + \"/led-none.svg\";\n      activeLeds[type] = 0;\n      _modules_data__WEBPACK_IMPORTED_MODULE_2__.activeServiceDoorSystems[type] = 0;\n    }\n  }\n  function ToggleLedLayer(type) {\n    // write DOM\n    var img = document.querySelector('.conf-led-slot-1');\n    img.src = \"/wp-content/uploads/\" + php.folderName + \"/\" + type + \".svg\";\n    // write ServiceDoor toggle\n    if (type === 'led-slot-1') {\n      _modules_data__WEBPACK_IMPORTED_MODULE_2__.activeServiceDoorSystems['led-slot-1'] = 0;\n    } else {\n      _modules_data__WEBPACK_IMPORTED_MODULE_2__.activeServiceDoorSystems['led-slot-1'] = 1;\n    }\n  }\n\n  /*\n  **\n  ** Dial Select post to cart & Donwload PDF\n  **\n  */\n\n  // Post to cart obj #1\n  var clonedata = $('.custom-conf-data').clone();\n  var formobj = $('form.cart');\n  formobj.append(clonedata);\n  var cloneobj = formobj.find('.custom-conf-main');\n  var lblobj;\n  cloneobj.each(function () {\n    lblobj = $(this).children('label');\n    var lblval = lblobj.text();\n    $(this).children().attr('name', '_custom_opt_data[' + lblval + '][]');\n  });\n  var tenjetsobj = $('#conf-jets-10').parent();\n  tenjetsobj.find('.conf-jets-10').hide();\n  var twentyjetsobj = $('#conf-jets-20').parent();\n  twentyjetsobj.find('.conf-jets-20').hide();\n  formobj.find('.custom-conf-data').append(\"<input type='hidden' name='conf_jets' class='conf_jets' value='1'>\");\n  formobj.find('.custom-conf-data').append(\"<input type='hidden' name='conf_jets_type' class='conf_jets_type' value='10_jets'>\");\n\n  // Post to cart obj #2\n  formobj.find('.custom-conf-data').css('display', 'none');\n  jQuery(document).on('change', '#conf-service', function (e) {\n    formobj.find('#conf-service').removeAttr('selected');\n    formobj.find('#conf-service option:selected').removeAttr('selected', false);\n    if (jQuery(this).val() != '') {\n      var service = jQuery('option:selected', jQuery(this)).val();\n      formobj.find('#conf-service option[value=\"' + service + '\"]').attr('selected', true);\n    }\n  });\n  jQuery(document).on('change', '#conf-filter', function (e) {\n    formobj.find('#conf-filter').removeAttr('selected');\n    formobj.find('#conf-filter option:selected').removeAttr('selected', false);\n    if (jQuery(this).val() != '') {\n      var filter = jQuery('option:selected', jQuery(this)).val();\n      formobj.find('#conf-filter option[value=\"' + filter + '\"]').attr('selected', true);\n    }\n  });\n  jQuery(document).on('click', '.single_add_to_cart_button', function (e) {\n    var date = new Date();\n    date.setTime(date.getTime() + 1 * 24 * 60 * 60 * 1000);\n    var expires = \"; expires=\" + date.toGMTString();\n    if ($(\"body\").find(\".conf-jets-menu .custom-conf-inner\").is(':visible')) {\n      if ($(\"body\").find(\"#conf-jets-10\").is(':visible')) {\n        var id = 'conf-jets-10';\n      } else {\n        var id = 'conf-jets-20';\n      }\n      var service = $('body').find('#conf-service').val();\n      document.cookie = \"hydro_jets_text=\" + id + expires + \"; path=/\";\n      document.cookie = \"hydro_jets=\" + $(\"#\" + id + ' option').filter(\":selected\").val() + expires + \"; path=/\";\n      document.cookie = \"conf_service=\" + service + expires + \"; path=/\";\n    } else {\n      document.cookie = \"hydro_jets_text=;\" + expires + \"; path=/\";\n      document.cookie = \"hydro_jets=;\" + expires + \"; path=/\";\n      document.cookie = \"conf_service=;\" + expires + \"; path=/\";\n      document.cookie = \"conf_filter=;\" + expires + \"; path=/\";\n    }\n    if ($(\"#menu-box-service\").is(':visible')) {\n      var service = $('body').find('#conf-service').parent('.custom-conf-main').is(':visible');\n      var service_val = $('body').find('#conf-service').val();\n      if (service == false || service == undefined || service == '') {\n        document.cookie = \"conf_service=;\" + expires + \"; path=/\";\n      } else {\n        document.cookie = \"conf_service=\" + service_val + expires + \"; path=/\";\n      }\n    }\n    if ($(\"#menu-box-filter\").is(':visible')) {\n      var filter = $('body').find('#conf-filter').parent('.custom-conf-main').is(':visible');\n      var filter_val = $('body').find('#conf-filter').val();\n      if (filter == false || filter == undefined || filter == '') {\n        document.cookie = \"conf_filter=;\" + expires + \"; path=/\";\n      } else {\n        document.cookie = \"conf_filter=\" + filter_val + expires + \"; path=/\";\n      }\n    }\n  });\n});\n\n//# sourceURL=webpack://gardenvity-dial-selector/./includes/js/gar-ds-script-universal.js?");

/***/ }),

/***/ "./includes/js/modules/data.js":
/*!*************************************!*\
  !*** ./includes/js/modules/data.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   activeServiceDoorSystems: () => (/* binding */ activeServiceDoorSystems)\n/* harmony export */ });\nvar activeServiceDoorSystems = {\n  'led-slot-1': 0,\n  'led-slot-2': 0,\n  'led-slot-3': 0,\n  airJets: 0,\n  hydroJets: 0,\n  airPlusHydroJets: 0\n};\n\n//# sourceURL=webpack://gardenvity-dial-selector/./includes/js/modules/data.js?");

/***/ }),

/***/ "./includes/js/modules/scroll-switch.js":
/*!**********************************************!*\
  !*** ./includes/js/modules/scroll-switch.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   scrollSwith: () => (/* binding */ scrollSwith)\n/* harmony export */ });\nvar scrollSwith = function scrollSwith() {\n  console.log('MODULE: scrollSwith');\n  var topOffSet = Math.round($('.heater-insulation-title-div').offset().top);\n  var productImageHeight = $('.woocommerce-product-gallery__image > img').height();\n  var imageOffSet = topOffSet - productImageHeight;\n  addEventListener(\"resize\", function (event) {\n    scrollSwith();\n  });\n  if (window.innerWidth < 960) {\n    if (document.documentElement.scrollTop > topOffSet) {\n      $('.woocommerce-product-gallery__image').css('display', 'none');\n      $('#liner').css('display', 'block');\n      topOffSet = Math.round($('.heater-insulation-title-div').offset().top);\n      productImageHeight = $('.woocommerce-product-gallery__image > img').height();\n      imageOffSet = topOffSet - productImageHeight;\n    } else if (document.documentElement.scrollTop < imageOffSet) {\n      $('.woocommerce-product-gallery__image').css('display', 'block');\n      $('#liner').css('display', 'none');\n      topOffSet = Math.round($('.heater-insulation-title-div').offset().top);\n      productImageHeight = $('.woocommerce-product-gallery__image > img').height();\n      imageOffSet = topOffSet - productImageHeight;\n    }\n    window.onscroll = function () {\n      if (document.documentElement.scrollTop > topOffSet) {\n        $('.woocommerce-product-gallery__image').css('display', 'none');\n        $('#liner').css('display', 'block');\n        topOffSet = Math.round($('.heater-insulation-title-div').offset().top);\n        productImageHeight = $('.woocommerce-product-gallery__image > img').height();\n        imageOffSet = topOffSet - productImageHeight;\n      } else if (document.documentElement.scrollTop < imageOffSet) {\n        $('.woocommerce-product-gallery__image').css('display', 'block');\n        $('#liner').css('display', 'none');\n        topOffSet = Math.round($('.heater-insulation-title-div').offset().top);\n        productImageHeight = $('.woocommerce-product-gallery__image > img').height();\n        imageOffSet = topOffSet - productImageHeight;\n      }\n    };\n  } else {\n    $('.woocommerce-product-gallery__image').css('display', 'block');\n    $('#liner').css('display', 'block');\n    window.onscroll = null;\n  }\n};\n\n//# sourceURL=webpack://gardenvity-dial-selector/./includes/js/modules/scroll-switch.js?");

/***/ }),

/***/ "./includes/js/modules/toggle-service-door.js":
/*!****************************************************!*\
  !*** ./includes/js/modules/toggle-service-door.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ToggleServiceDoor: () => (/* binding */ ToggleServiceDoor)\n/* harmony export */ });\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./includes/js/modules/data.js\");\n\nvar ToggleServiceDoor = function ToggleServiceDoor() {\n  $ = jQuery;\n  console.log('MODULE: ToggleServiceDoor');\n  var activeSystems = Object.values(_data__WEBPACK_IMPORTED_MODULE_0__.activeServiceDoorSystems);\n  console.log(_data__WEBPACK_IMPORTED_MODULE_0__.activeServiceDoorSystems);\n  function checkActive(slot) {\n    return slot > 0;\n  }\n  if (activeSystems.find(checkActive)) {\n    console.log('active');\n    $('.conf-service').show();\n    $('#menu-box-service').show();\n  } else {\n    console.log('inactive');\n    $('.conf-service').hide();\n    $('#menu-box-service').hide();\n  }\n  //checkServiceRestriction();\n};\n\n//# sourceURL=webpack://gardenvity-dial-selector/./includes/js/modules/toggle-service-door.js?");

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