/***
Dial Selector 2023
***/
jQuery(document).ready(function ($) {
  const model = "Config 6-8 Round Integrated"
  const ver = "v0.1";
  console.log(model, ver);

  // Mobile Scroll switcher: Product photo <-> Dial Selector
  scrollSwither();

  addEventListener("resize", (event) => {
    scrollSwither();
  });

  function scrollSwither() {
    console.log('JS Switcher');
    let topOffSet = Math.round($('.heater-insulation-title-div').offset().top);
    let productImageHeight = $('.woocommerce-product-gallery__image > img').height();
    let imageOffSet = topOffSet - productImageHeight;

    if (window.innerWidth < 960) {

      if (document.documentElement.scrollTop > topOffSet) {
        $('.woocommerce-product-gallery__image').css('display', 'none');
        $('#liner').css('display', 'block');
        topOffSet = Math.round($('.heater-insulation-title-div').offset().top);
        productImageHeight = $('.woocommerce-product-gallery__image > img').height();
        imageOffSet = topOffSet - productImageHeight;

      } else if (document.documentElement.scrollTop < imageOffSet) {
        $('.woocommerce-product-gallery__image').css('display', 'block');
        $('#liner').css('display', 'none');
        topOffSet = Math.round($('.heater-insulation-title-div').offset().top);
        productImageHeight = $('.woocommerce-product-gallery__image > img').height();
        imageOffSet = topOffSet - productImageHeight;
      }

      window.onscroll = function () {
        if (document.documentElement.scrollTop > topOffSet) {
          $('.woocommerce-product-gallery__image').css('display', 'none');
          $('#liner').css('display', 'block');
          topOffSet = Math.round($('.heater-insulation-title-div').offset().top);
          productImageHeight = $('.woocommerce-product-gallery__image > img').height();
          imageOffSet = topOffSet - productImageHeight;
        } else if (document.documentElement.scrollTop < imageOffSet) {
          $('.woocommerce-product-gallery__image').css('display', 'block');
          $('#liner').css('display', 'none');
          topOffSet = Math.round($('.heater-insulation-title-div').offset().top);
          productImageHeight = $('.woocommerce-product-gallery__image > img').height();
          imageOffSet = topOffSet - productImageHeight;
        }
      }

    } else {

      $('.woocommerce-product-gallery__image').css('display', 'block');
      $('#liner').css('display', 'block');
      window.onscroll = null;

    }
  }

  // Init show/hide
  $('#menu-box-service').hide();
  $('#menu-box-jets').hide();
  $('#menu-box-filter').hide();

  // ***
  function CladdingAndInsertSwitcher(woodColor, insertSize, insertColor) {
    SwitchInsertLayer(insertSize, insertColor);
    insertColorMemory[woodColor] = insertColor;
  }

  function restoreSlectedColor(el) {
    let insertColors = { 'white': 0, 'grey': 1, 'gold': 2, 'blue': 3 };
    $('.thermowood-dark-insert-color-ul li').eq(insertColors[el]).find('label').trigger('click');
    $('.thermowood-light-insert-color-ul li').eq(insertColors[el]).find('label').trigger('click');
    $('.plastic-dark-insert-color-ul li').eq(insertColors[el]).find('label').trigger('click');
  }

  $('.thermowood-color-ul li').eq(0).change(function () {
    restoreSlectedColor(insertColorMemory.Current);
  });
  $('.thermowood-color-ul li').eq(1).change(function () {
    restoreSlectedColor(insertColorMemory.Current);
  });
  $('.thermowood-color-ul li').eq(2).change(function () {
    restoreSlectedColor(insertColorMemory.Current);
  });


  // Size Buttons
  // $('.insert-size-div ul li').eq(0).change(function() {
  //   SwitchInsertLayer('_6-8', insertColor);
  //   insertSize = '_6-8';
  // });
  // $('.insert-size-div ul li').eq(1).change(function() {
  //   SwitchInsertLayer('_8-10', insertColor);
  //   insertSize = '_8-10';
  // });

  // $('.thermowood-color-ul li').eq(0).change(function() {
  //   SwitchInsertLayer(insertSize, insertColorMemory.WoodLight);
  // });
  // $('.thermowood-color-ul li').eq(1).change(function() {
  //   SwitchInsertLayer(insertSize, insertColorMemory.WoodDark);
  // });
  // $('.thermowood-color-ul li').eq(2).change(function() {
  //   SwitchInsertLayer(insertSize, insertColorMemory.PlasticDark);
  // });

  // Thermowood Dark
  $('.thermowood-dark-insert-color-ul li').eq(0).change(function () {
    CladdingAndInsertSwitcher('WoodDark', insertSize, 'white');
  });
  $('.thermowood-dark-insert-color-ul li').eq(1).change(function () {
    CladdingAndInsertSwitcher('WoodDark', insertSize, 'grey');
  });
  $('.thermowood-dark-insert-color-ul li').eq(2).change(function () {
    CladdingAndInsertSwitcher('WoodDark', insertSize, 'gold');
  });
  $('.thermowood-dark-insert-color-ul li').eq(3).change(function () {
    CladdingAndInsertSwitcher('WoodDark', insertSize, 'blue');
  });

  // Thermowood Light
  $('.thermowood-light-insert-color-ul li').eq(0).change(function () {
    CladdingAndInsertSwitcher('WoodLight', insertSize, 'white');
  });
  $('.thermowood-light-insert-color-ul li').eq(1).change(function () {
    CladdingAndInsertSwitcher('WoodLight', insertSize, 'grey');
  });
  $('.thermowood-light-insert-color-ul li').eq(2).change(function () {
    CladdingAndInsertSwitcher('WoodLight', insertSize, 'gold');
  });
  $('.thermowood-light-insert-color-ul li').eq(3).change(function () {
    CladdingAndInsertSwitcher('WoodLight', insertSize, 'blue');
  });

  // Plastic Dark
  $('.plastic-dark-insert-color-ul li').eq(0).change(function () {
    CladdingAndInsertSwitcher('PlasticDark', insertSize, 'white');
  });
  $('.plastic-dark-insert-color-ul li').eq(1).change(function () {
    CladdingAndInsertSwitcher('PlasticDark', insertSize, 'grey');
  });
  $('.plastic-dark-insert-color-ul li').eq(2).change(function () {
    CladdingAndInsertSwitcher('PlasticDark', insertSize, 'gold');
  });
  $('.plastic-dark-insert-color-ul li').eq(3).change(function () {
    CladdingAndInsertSwitcher('PlasticDark', insertSize, 'blue');
  });

  // Air Jets
  $('.air_jets_checkboxes-div ul li').eq(0).change(function () {
    SwitchAirJetsLayer('none');
    ToggleServiceDoor();
    ToggleMenuContainer();
  });
  $('.air_jets_checkboxes-div ul li').eq(1).change(function () {
    SwitchAirJetsLayer('12');
    ToggleServiceDoor();
    ToggleMenuContainer();
  });
  $('.air_jets_checkboxes-div ul li').eq(2).change(function () {
    SwitchAirJetsLayer('20');
    ToggleServiceDoor();
    ToggleMenuContainer();
  });
  // Hydro jets
  $('.hydro_jets_checkboxes-div ul li').eq(0).change(function () {
    SwitchHydroJetsLayer('none', 0);
    ToggleServiceDoor();
    $('#menu-box-jets').hide();
    $('#conf-jets-10').hide();
    $('#conf-jets-20').hide();
    ToggleMenuContainer();
  });
  $('.hydro_jets_checkboxes-div ul li').eq(1).change(function () {
    SwitchHydroJetsLayer('10', hydroJetsSeats[10]);
    ToggleServiceDoor();
    $('#menu-box-jets').show();
    $('#conf-jets-10').show();
    $("label[for='conf-jets-10']").show();
    $('#conf-jets-20').hide();
    $("label[for='conf-jets-20']").hide();
    ToggleMenuContainer();
  });
  $('.hydro_jets_checkboxes-div ul li').eq(2).change(function () {
    SwitchHydroJetsLayer('20', hydroJetsSeats[20]);
    ToggleServiceDoor();
    $('#menu-box-jets').show();
    $('#conf-jets-20').show();
    $("label[for='conf-jets-20']").show();
    $('#conf-jets-10').hide();
    $("label[for='conf-jets-10']").hide();
    ToggleMenuContainer();
  });

  // LEDs
  $('.leds_checkboxes-div ul li').eq(0).change(function () {
    SwitchLedLayer(1);
    ToggleServiceDoor();
    ToggleMenuContainer();
  });
  $('.leds_checkboxes-div ul li').eq(1).change(function () {
    SwitchLedLayer(10);
    ToggleServiceDoor();
    ToggleMenuContainer();
  });
  $('.leds_checkboxes-div ul li').eq(2).change(function () {
    SwitchLedLayer(0);
    ToggleServiceDoor();
    ToggleMenuContainer();
  });

  // Water filter
  $('.water_filter_checkboxes-div ul li').eq(0).change(function () {
    $('.conf-filter').hide();
    $('#menu-box-filter').hide();
    ToggleMenuContainer();
  });
  $('.water_filter_checkboxes-div ul li').eq(1).change(function () {
    $('.conf-filter').show();
    $('#menu-box-filter').show();
    ToggleMenuContainer();
  });
  $('.water_filter_checkboxes-div ul li').eq(2).change(function () {
    $('.conf-filter').show();
    $('#menu-box-filter').show();
    ToggleMenuContainer();
  });
  $('.water_filter_checkboxes-div ul li').eq(3).change(function () {
    $('.conf-filter').show();
    $('#menu-box-filter').show();
    ToggleMenuContainer();
  });

  // Menus
  $('select[name="conf-service"]').change(function () {
    SwitchServiceDoorLayer($('select[name="conf-service"]').val());
    SaveDialSlotMemory('service');
    CheckOverlap('service', 'filter');
    hj('event', 'Config click');
  });
  $('select[name="conf-filter"]').change(function () {
    SwitchFilterBoxLayer($('select[name="conf-filter"]').val());
    SaveDialSlotMemory('filter');
    CheckOverlap('filter', 'service');
    hj('event', 'Config click');
  });
  $('select[name="conf-jets-10"]').change(function () {
    SwitchHydroJetsLayer('10', $('select[name="conf-jets-10"]').val() - 1);
    hydroJetsSeats[10] = $('select[name="conf-jets-10"]').val() - 1;
    hj('event', 'Config click');
  });
  $('select[name="conf-jets-20"]').change(function () {
    SwitchHydroJetsLayer('20', ($('select[name="conf-jets-20"]').val()) - 1);
    hydroJetsSeats[20] = $('select[name="conf-jets-20"]').val() - 1;
    hj('event', 'Config click');
  });

  // Global vars
  let insertColorMemory = {
    Current: 'gold',
    WoodDark: 'gold',
    WoodLight: 'gold',
    PlasticDark: 'gold'
  };
  let insertSize = '_6-8';
  let insertColor = 'gold';
  let hydroJetsSeats = {
    10: 0,
    20: 0
  };
  let activeLeds = {
    1: 0,
    10: 0,
    // 10 outer jets
    0: 0
  };
  let activeServiceDoorSystems = {
    1: 0,
    10: 0,
    // 10 outer jets
    0: 0,
    airJets: 0,
    hydroJets: 0
  };
  let dialSlotMemory = {
    service: ['2', '4'],
    filter: ['4', '2']
  }


  // Modules
  function CheckOverlap(type_1, type_2) {
    if (dialSlotMemory.service[0] === dialSlotMemory.filter[0]) {
      const img1 = document.querySelector('.conf-' + type_1);
      img1.src = "/wp-content/uploads/dial-selector/dial-selector-uk-" + type_1 + "-" + dialSlotMemory[type_2][0] + ".svg";
      $('select[name="conf-' + type_1 + '"]').val(dialSlotMemory[type_2][0]);

      const img2 = document.querySelector('.conf-' + type_2);
      img2.src = "/wp-content/uploads/dial-selector/dial-selector-uk-" + type_2 + "-" + dialSlotMemory[type_1][1] + ".svg";
      $('select[name="conf-' + type_2 + '"]').val(dialSlotMemory[type_1][1]);
      dialSlotMemory[type_2][0] = dialSlotMemory[type_1][1];
      dialSlotMemory[type_2][1] = dialSlotMemory[type_1][0];
    }
  }

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

  function ToggleServiceDoor() {
    activeSystems = Object.values(activeServiceDoorSystems);

    function checkActive(slot) {
      return slot > 0;
    }
    if (activeSystems.find(checkActive)) {
      $('.conf-service').show();
      $('#menu-box-service').show();
    } else {
      $('.conf-service').hide();
      $('#menu-box-service').hide();
    }
    //checkServiceRestriction();
  }

  // function ToggleServiceDoor() {
  //   activeSystems = Object.values(activeServiceDoorSystems);

  //   function checkActive(slot) {
  //     return slot > 0;
  //   }
  //   if (activeSystems.find(checkActive)) {
  //     $('.conf-service').show();
  //     $('.conf-filter-service-menu').children('div').eq(0).show();
  //   } else {
  //     $('.conf-service').hide();
  //     $('.conf-filter-service-menu').children('div').eq(0).hide();
  //   }
  // }

  function SaveDialSlotMemory(type) {
    dialSlotMemory[type].unshift($('select[name="conf-' + type + '"]').val());
    if (dialSlotMemory[type].length > 2) {
      dialSlotMemory[type].pop();
    }
  }

  function SwitchFilterBoxLayer(pos) {
    // check 2 10 error
    slots = [];
    slots.push($('select[name="conf-service"]').val());
    slots.push($('select[name="conf-filter"]').val());
    if (slots.includes('2') && slots.includes('10')) {
      $('select[name="conf-filter"]').val(dialSlotMemory['filter'][0]);
      addErrorNotice("Such positioning is not possible due to technical reasons.");
      setTimeout(removeErrorNotice, 2500);
    } else {
      // write DOM
      const img = document.querySelector('.conf-filter');
      img.src = "/wp-content/uploads/dial-selector/dial-selector-uk-filter-" + pos + ".svg";
    }
  }

  function SwitchServiceDoorLayer(pos) {
    // check 2 10 error
    slots = [];
    slots.push($('select[name="conf-service"]').val());
    slots.push($('select[name="conf-filter"]').val());
    if (slots.includes('2') && slots.includes('10')) {
      $('select[name="conf-service"]').val(dialSlotMemory['service'][0]);
      addErrorNotice("Such positioning is not possible due to technical reasons.");
      setTimeout(removeErrorNotice, 2500);
    } else {
      // write DOM
      const img = document.querySelector('.conf-service');
      img.src = "/wp-content/uploads/dial-selector/dial-selector-uk-service-" + pos + ".svg";
    }
  }

  function SwitchInsertLayer(size, color) {
    // write DOM
    const img = document.querySelector('.conf-base');
    img.src = "/wp-content/uploads/dial-selector/dial-selector-uk-base-" + color + size + ".jpg";
    // write global var
    insertSize = size;
    insertColor = color;
    //
    insertColorMemory.Current = color;
  }

  function SwitchAirJetsLayer(type) {
    // write DOM
    const img = document.querySelector('.conf-air-jets');
    img.src = "/wp-content/uploads/dial-selector/dial-selector-air-jets-" + type + ".svg";
    // write ServiceDoor toggle
    if (type === 'none') {
      activeServiceDoorSystems.airJets = '0';
    } else {
      activeServiceDoorSystems.airJets = 1;
    }
  }

  function SwitchHydroJetsLayer(type, seats) {
    // write DOM
    const img = document.querySelector('.conf-jets');
    img.src = "/wp-content/uploads/dial-selector/dial-selector-hydro-jets-" + type + "-" + seats + ".svg";
    // write ServiceDoor toggle
    if (type === 'none') {
      activeServiceDoorSystems.hydroJets = '0';
    } else {
      activeServiceDoorSystems.hydroJets = 1;
    }
  }

  function SwitchLedLayer(type) {
    if (activeLeds[type] === 0) {
      const img = document.querySelector('.conf-led-' + type);
      img.src = "/wp-content/uploads/dial-selector/dial-selector-led-" + type + ".svg";
      activeLeds[type] = 1;
      activeServiceDoorSystems[type] = 1;

    } else if (activeLeds[type] === 1) {
      const img = document.querySelector('.conf-led-' + type);
      img.src = "/wp-content/uploads/dial-selector/dial-selector-led-none.svg";
      activeLeds[type] = 0;
      activeServiceDoorSystems[type] = 0;
    }
  }

  function addErrorNotice(e) {
    const para = document.createElement('p');
    const cont = document.querySelector('#conf-menu-container');
    para.textContent = e;
    cont.appendChild(para);
    para.classList.add("error-notice");
  }

  function removeErrorNotice() {
    $('.error-notice').remove();
  }

  /***
   **** Dial Select post to cart & Donwload PDF
   ***/

  // Post to cart obj #1
  var clonedata = $('.custom-conf-data').clone();
  formobj = $('.wp-block-lazyblock-woocommerce-single-product-cart-bf form');
  formobj.append(clonedata);
  var cloneobj = formobj.find('.custom-conf-main');
  var lblobj;
  cloneobj.each(function () {
    lblobj = $(this).children('label');
    var lblval = lblobj.text();
    $(this).children().attr('name', '_custom_opt_data[' + lblval + '][]');
  });

  tenjetsobj = $('#conf-jets-10').parent();
  tenjetsobj.find('.conf-jets-10').hide();

  twentyjetsobj = $('#conf-jets-20').parent();
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

  jQuery(document).on('click', '.pdf_button_print', function (e) {
    var formobj = $('.wp-block-lazyblock-woocommerce-single-product-cart-bf form');
    formobj.append("<input type='hidden' name='cart_pdf_submit_data' class='cart_pdf_submit_data' value='1'>");

    jQuery('.single_add_to_cart_button').click();

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
