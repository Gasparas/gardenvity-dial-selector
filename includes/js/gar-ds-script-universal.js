// Webpack enabled
// import $ from 'jquery';
import { scrollSwith } from './modules/scroll-switch';
import * as menu from './modules/menus-logic';
import * as data from './modules/data';
import { ToggleServiceDoor } from './modules/toggle-service-door';
import { SwitchLedLayer, ToggleLedLayer } from './modules/leds-logic';


$ = jQuery;

$(function () {
  console.log(data.positionRestrictionsArray);

  // Mobile Scroll switcher: Product photo <-> Dial Selector
  scrollSwith();
  
  addEventListener("resize", (event) => {
    scrollSwith();
  });

  // Menu Logic
  menu.serviceDoorMenuLogic();
  menu.filterMenuLogic();
  menu.hydroJetsGroupOneMenuLogic();
  menu.hydroJetsGroupTwoMenuLogic();

  // Init show/hide
  $('#menu-box-service').hide();
  $('#menu-box-jets').hide();
  $('#menu-box-filter').hide();

  /*
  ** Buttons
  */
 
  // Air Jets
  $('.air_jets_checkboxes-div ul li').eq(0).on("change", function () {
    SwitchAirJetsLayer('0');
    ToggleServiceDoor();
    ToggleMenuContainer();
  });

  $('.air_jets_checkboxes-div ul li').eq(1).on("change", function () {
    SwitchAirJetsLayer('1');
    ToggleServiceDoor();
    ToggleMenuContainer();
  });

  $('.air_jets_checkboxes-div ul li').eq(2).on("change", function () {
    SwitchAirJetsLayer('2');
    ToggleServiceDoor();
    ToggleMenuContainer();
  });
  $('.air_jets_checkboxes-div ul li').eq(3).on("change", function () {
    SwitchAirJetsLayer('3');
    ToggleServiceDoor();
    ToggleMenuContainer();
  });

  // Hydro Jets
  $('.hydro_jets_checkboxes-div ul li').eq(0).on("change", function () {
    menu.SwitchHydroJetsLayer('0', 0);
    ToggleServiceDoor();
    $('#menu-box-jets').hide();
    $('#conf-jets-10').hide();
    $('#conf-jets-20').hide();
    ToggleMenuContainer();
  });

  $('.hydro_jets_checkboxes-div ul li').eq(1).on("change", function () {
    menu.SwitchHydroJetsLayer('1', data.hydroJetsPatternGroup[1]);
    ToggleServiceDoor();
    $('#menu-box-jets').show();
    $('#conf-jets-10').show();
    $("label[for='conf-jets-10']").show();
    $('#conf-jets-20').hide();
    $("label[for='conf-jets-20']").hide();
    ToggleMenuContainer();
  });

  $('.hydro_jets_checkboxes-div ul li').eq(2).on("change", function () {
    menu.SwitchHydroJetsLayer('2', data.hydroJetsPatternGroup[2]);
    ToggleServiceDoor();
    $('#menu-box-jets').show();
    $('#conf-jets-20').show();
    $("label[for='conf-jets-20']").show();
    $('#conf-jets-10').hide();
    $("label[for='conf-jets-10']").hide();
    ToggleMenuContainer();
  });

  // LEDs Checkboxes
  $('.leds_checkboxes-div ul li').eq(0).on("change", function () {
    SwitchLedLayer('led-slot-1');
    ToggleServiceDoor();
    ToggleMenuContainer();
  });
  $('.leds_checkboxes-div ul li').eq(1).on("change", function () {
    SwitchLedLayer('led-slot-2');
    ToggleServiceDoor();
    ToggleMenuContainer();
  });
  $('.leds_checkboxes-div ul li').eq(2).on("change", function () {
    SwitchLedLayer('led-slot-3');
    ToggleServiceDoor();
    ToggleMenuContainer();
  });

  // LEDs Toggle
  $('.leds_toggle_slots-div ul li').eq(0).on("change", function () {
    ToggleLedLayer('led-slot-1');
    ToggleServiceDoor();
    ToggleMenuContainer();
  });
  $('.leds_toggle_slots-div ul li').eq(1).on("change", function () {
    ToggleLedLayer('led-slot-2');
    ToggleServiceDoor();
    ToggleMenuContainer();
  });
  $('.leds_toggle_slots-div ul li').eq(2).on("change", function () {
    ToggleLedLayer('led-slot-3');
    ToggleServiceDoor();
    ToggleMenuContainer();
  });

  // Waterfilter
  $('.water_filter_checkboxes-div ul li').eq(0).on("change", function () {
    // ChangeHeaterOrientation('center');
    $('.conf-filter').hide();
    $('#menu-box-filter').hide();
    ToggleMenuContainer();
  });

  $('.water_filter_checkboxes-div ul li').eq(1).on("change", function () {
    // ChangeHeaterOrientation(heaterOrientation);
    $('.conf-filter').show();
    $('#menu-box-filter').show();
    ToggleMenuContainer();
  });

  $('.water_filter_checkboxes-div ul li').eq(2).on("change", function () {
    // ChangeHeaterOrientation(heaterOrientation);
    $('.conf-filter').show();
    $('#menu-box-filter').show();
    ToggleMenuContainer();
  });

  $('.water_filter_checkboxes-div ul li').eq(3).on("change", function () {
    // ChangeHeaterOrientation(heaterOrientation);
    $('.conf-filter').show();
    $('#menu-box-filter').show();
    ToggleMenuContainer();
  });

  /*
  ** Modules
  */

  // function ChangeHeaterOrientation(type) {
  //   // write DOM
  //   const img = document.querySelector('.conf-heater');
  //   img.src = "/wp-content/uploads/dial-selector-round-x/dial-selector-uk-heater-" + type + ".svg";
  // }

  function ToggleMenuContainer() {
    // Hide menu container when all 3 menu boxes are hidden
    if ($('#conf-menu-container').children(':hidden').length === 3) {
      // console.log($('#conf-menu-container').children(':hidden').length), 'hide';
      $('#conf-menu-container').css('opacity', '0');
    } else {
      // console.log($('#conf-menu-container').children(':hidden').length, 'show');
      $('#conf-menu-container').css('opacity', '1');
    }
  }

  function SwitchInsertLayer(color) {
    // write DOM
    const img = document.querySelector('.conf-base');
    img.src = "/wp-content/uploads/" + php.folderName + "/liner-" + color + ".jpg";
    // write global var
    data.insertColorMemory.Current = color;
  }

  function SwitchAirJetsLayer(group) {
    // write DOM
    const img = document.querySelector('.conf-air-jets');
    img.src = "/wp-content/uploads/" + php.folderName + "/air-jets-" + group + ".svg";
    // write ServiceDoor toggle
    if (group === '0') {
      data.activeServiceDoorSystems.airJets = 0;
    } else {
      data.activeServiceDoorSystems.airJets = 1;
    }
  }

  /*
  ** Dial Select post to cart & Donwload PDF
  */

  // Post to cart obj #1
  var clonedata = $('.custom-conf-data').clone();
  const formobj = $('form.cart');
  formobj.append(clonedata);
  var cloneobj = formobj.find('.custom-conf-main');
  var lblobj;
  cloneobj.each(function () {
    lblobj = $(this).children('label');
    var lblval = lblobj.text();
    $(this).children().attr('name', '_custom_opt_data[' + lblval + '][]');
  });

  let tenjetsobj = $('#conf-jets-10').parent();
  tenjetsobj.find('.conf-jets-10').hide();

  let twentyjetsobj = $('#conf-jets-20').parent();
  twentyjetsobj.find('.conf-jets-20').hide();

  formobj.find('.custom-conf-data').append("<input type='hidden' name='conf_jets' class='conf_jets' value='1'>");
  formobj.find('.custom-conf-data').append("<input type='hidden' name='conf_jets_type' class='conf_jets_type' value='10_jets'>");

  // Post to cart obj #2
  formobj.find('.custom-conf-data').css('display', 'none');

  jQuery(document).on('change', '#conf-service', function (e) {
    formobj.find('#conf-service').removeAttr('selected');
    formobj.find('#conf-service option:selected').removeAttr('selected', false);
    if (jQuery(this).val() != '') {
      var service = jQuery('option:selected', jQuery(this)).val();
      formobj.find('#conf-service option[value="' + service + '"]').attr('selected', true);
    }
  });

  jQuery(document).on('change', '#conf-filter', function (e) {
    formobj.find('#conf-filter').removeAttr('selected');
    formobj.find('#conf-filter option:selected').removeAttr('selected', false);
    if (jQuery(this).val() != '') {
      var filter = jQuery('option:selected', jQuery(this)).val();
      formobj.find('#conf-filter option[value="' + filter + '"]').attr('selected', true);
    }
  });


  jQuery(document).on('click', '.single_add_to_cart_button', function (e) {

    var date = new Date();
    date.setTime(date.getTime() + (1 * 24 * 60 * 60 * 1000));
    var expires = "; expires=" + date.toGMTString();

    if ($("body").find(".conf-jets-menu .custom-conf-inner").is(':visible')) {

      if ($("body").find("#conf-jets-10").is(':visible')) {
        var id = 'conf-jets-10';
      } else {
        var id = 'conf-jets-20';
      }

      var service = $('body').find('#conf-service').val();
      document.cookie = "hydro_jets_text=" + id + expires + "; path=/";
      document.cookie = "hydro_jets=" + $("#" + id + ' option').filter(":selected").val() + expires + "; path=/";
      document.cookie = "conf_service=" + service + expires + "; path=/";

    } else {

      document.cookie = "hydro_jets_text=;" + expires + "; path=/";
      document.cookie = "hydro_jets=;" + expires + "; path=/";
      document.cookie = "conf_service=;" + expires + "; path=/";
      document.cookie = "conf_filter=;" + expires + "; path=/";
    }

    if ($("#menu-box-service").is(':visible')) {

      var service = $('body').find('#conf-service').parent('.custom-conf-main').is(':visible');
      var service_val = $('body').find('#conf-service').val();

      if (service == false || service == undefined || service == '') {
        document.cookie = "conf_service=;" + expires + "; path=/";
      } else {
        document.cookie = "conf_service=" + service_val + expires + "; path=/";
      }
    }

    if ($("#menu-box-filter").is(':visible')) {

      var filter = $('body').find('#conf-filter').parent('.custom-conf-main').is(':visible');
      var filter_val = $('body').find('#conf-filter').val();

      if (filter == false || filter == undefined || filter == '') {
        document.cookie = "conf_filter=;" + expires + "; path=/";
      } else {
        document.cookie = "conf_filter=" + filter_val + expires + "; path=/";
      }
    }
  });

});
