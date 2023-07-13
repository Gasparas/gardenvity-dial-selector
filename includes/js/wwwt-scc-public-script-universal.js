/***
Dial Selector 2023 
***/
jQuery(document).ready(function ($) {
  const model = "Config Universal"
  // console.log(model);

  // Mobile Scroll switcher: Product photo <-> Dial Selector
  scrollSwither();

  addEventListener("resize", (event) => {
    scrollSwither();
  });

  function scrollSwither() {
    // console.log('JS Switcher');
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

  /*
  **
  ** Data
  **
  */

  let claddingTypesUl = document.querySelectorAll('.cladding-type-ul');
  let linerColorsUl = document.querySelectorAll('.liner-color-ul');

  let insertColorMemory = {
    Current: 'color-2'
  };

  let hydroJetsPatternGroup = {
    1: 0,
    2: 0
  };
  let activeLeds = {
    1: 0,
    2: 0,
    // Outer leds
    0: 0
  };
  let activeServiceDoorSystems = {
    // Underwater leds
    1: 0,
    10: 0,
    // Outer leds
    0: 0,
    airJets: 0,
    hydroJets: 0
  };
  let restrictedPos = {
    service: ['none'],
    filter: ['none']
  };
  let dialSlotMemory = {
    service: ['3', '4'],
    filter: ['4', '2']
  }
  // Qattro External Specific
  let restrictedFilterPos = ['1', '11'];
  let heaterOrientation = 'center';

  /*
  **
  ** Buttons
  **
  */
  function CladdingAndInsertSwitcher(woodColor, insertColor) {
    SwitchInsertLayer(insertColor);
    insertColorMemory[woodColor] = insertColor;
  }

  function restoreSlectedButton(claddingIndex, el) {
    // let linerColorsUl = document.querySelectorAll('.liner-color-ul');

    var insertColors = [];
    var keyName = 'color-';
    var count = php.linerColors;

    for (var i = 1; i <= count; i++) {
      var key = keyName + i;
      insertColors.push(key);
    }

    $(linerColorsUl[claddingIndex].querySelectorAll('li')[insertColors.indexOf(el)]).find('label').trigger('click');
  }

  // Cladding
  claddingTypesUl.forEach(element => {
    for (let i = 0; i < php.claddingTypes; i++) {
      // buttons = ;
      element.querySelectorAll('li')[i].onchange = function () {
        restoreSlectedButton(i, insertColorMemory.Current);
        SwitchInsertLayer(insertColorMemory.Current);
      }
    }    
  });

  // Liners
  linerColorsUl.forEach(element => {
    for (let i = 0; i < php.linerColors; i++) {
      // buttons = ;
      element.querySelectorAll('li')[i].onchange = function () {
        CladdingAndInsertSwitcher('Current', ('color-' + (i + 1)));
      }
    }
  });


  // Air Jets
  $('.air_jets_checkboxes-div ul li').eq(0).change(function () {
    SwitchAirJetsLayer('0');
    ToggleServiceDoor();
    ToggleMenuContainer();
  });

  $('.air_jets_checkboxes-div ul li').eq(1).change(function () {
    SwitchAirJetsLayer('1');
    ToggleServiceDoor();
    ToggleMenuContainer();
  });

  $('.air_jets_checkboxes-div ul li').eq(2).change(function () {
    SwitchAirJetsLayer('2');
    ToggleServiceDoor();
    ToggleMenuContainer();
  });

  // Hydro Jets
  $('.hydro_jets_checkboxes-div ul li').eq(0).change(function () {
    SwitchHydroJetsLayer('0', 0);
    ToggleServiceDoor();
    $('#menu-box-jets').hide();
    $('#conf-jets-10').hide();
    $('#conf-jets-20').hide();
    // $('.conf-jets-menu').hide();
    ToggleMenuContainer();
  });

  $('.hydro_jets_checkboxes-div ul li').eq(1).change(function () {
    SwitchHydroJetsLayer('1', hydroJetsPatternGroup[1]);
    ToggleServiceDoor();
    $('#menu-box-jets').show();
    $('#conf-jets-10').show();
    $("label[for='conf-jets-10']").show();
    $('#conf-jets-20').hide();
    $("label[for='conf-jets-20']").hide();
    // $('.conf-jets-menu').show();
    ToggleMenuContainer();
  });

  $('.hydro_jets_checkboxes-div ul li').eq(2).change(function () {
    SwitchHydroJetsLayer('2', hydroJetsPatternGroup[2]);
    ToggleServiceDoor();
    $('#menu-box-jets').show();
    $('#conf-jets-20').show();
    $("label[for='conf-jets-20']").show();
    $('#conf-jets-10').hide();
    $("label[for='conf-jets-10']").hide();
    // $('.conf-jets-menu').show();
    ToggleMenuContainer();
  });

  // LEDs
  $('.leds_checkboxes-div ul li').eq(0).change(function () {
    SwitchLedLayer(1);
    ToggleServiceDoor();
    ToggleMenuContainer();
  });
  $('.leds_checkboxes-div ul li').eq(1).change(function () {
    SwitchLedLayer(2);
    ToggleServiceDoor();
    ToggleMenuContainer();
  });
  $('.leds_checkboxes-div ul li').eq(2).change(function () {
    SwitchLedLayer(0);
    ToggleServiceDoor();
    ToggleMenuContainer();
  });

  // Waterfilter
  $('.water_filter_checkboxes-div ul li').eq(0).change(function () {
    // ChangeHeaterOrientation('center');
    $('.conf-filter').hide();
    $('#menu-box-filter').hide();
    ToggleMenuContainer();
  });

  $('.water_filter_checkboxes-div ul li').eq(1).change(function () {
    // ChangeHeaterOrientation(heaterOrientation);
    $('.conf-filter').show();
    $('#menu-box-filter').show();
    // checkFilterRestriction();
    ToggleMenuContainer();
  });

  $('.water_filter_checkboxes-div ul li').eq(2).change(function () {
    // ChangeHeaterOrientation(heaterOrientation);
    $('.conf-filter').show();
    $('#menu-box-filter').show();
    ToggleMenuContainer();
    // checkFilterRestriction();
  });

  $('.water_filter_checkboxes-div ul li').eq(3).change(function () {
    // ChangeHeaterOrientation(heaterOrientation);
    $('.conf-filter').show();
    $('#menu-box-filter').show();
    ToggleMenuContainer();
    // checkFilterRestriction();
  });

  // Sandfilter valves
  $('.sandfilter_valves_checkboxes-div ul li').eq(0).change(function () {
    $('.water_filter_checkboxes-div').toggleClass("disabled-section");
  });


  /*
  **
  ** Menus
  **
  */

  $('select[name="conf-service"]').change(function () {
    SwitchServiceDoorLayer($('select[name="conf-service"]').val());
    SaveDialSlotMemory('service');
    // CheckOverlap('service-door', 'filter');
    // checkServiceRestriction();
    //hj('event', 'Square Dial selector change position');
  });

  $('select[name="conf-filter"]').change(function () {
    SwitchFilterBoxLayer($('select[name="conf-filter"]').val());
    SaveDialSlotMemory('filter');
    // CheckOverlapFilter('filter', 'service');
    // checkFilterRestriction();
    //hj('event', 'Square Dial selector change position');
  });

  $('select[name="conf-jets-10"]').change(function () {
    SwitchHydroJetsLayer('1', $('select[name="conf-jets-10"]').val());
    hydroJetsPatternGroup[1] = $('select[name="conf-jets-10"]').val();
    //hj('event', 'Square Dial selector change seats');
  });

  $('select[name="conf-jets-20"]').change(function () {
    SwitchHydroJetsLayer('2', ($('select[name="conf-jets-20"]').val()));
    hydroJetsPatternGroup[2] = $('select[name="conf-jets-20"]').val();
    //hj('event', 'Square Dial selector change seats');
  });


  /*
  **
  ** Modules
  **
  */

  // function ChangeHeaterOrientation(type) {
  //   // write DOM
  //   const img = document.querySelector('.conf-heater');
  //   img.src = "/wp-content/uploads/dial-selector-round-x/dial-selector-uk-heater-" + type + ".svg";
  // }

  function CheckOverlapFilter(type_1, type_2) {
    if (dialSlotMemory.service[0] === dialSlotMemory.filter[0]) {
      currentServicePos = dialSlotMemory['service'][0];
      if (currentServicePos != '6') {
        // write DOM
        const img = document.querySelector('.conf-service');
        img.src = "/wp-content/uploads/dial-selector-round-x/dial-selector-uk-service-" + 6 + ".svg";
        dialSlotMemory['service'].unshift('6');
        $('select[name="conf-service"]').val(6);
      } else {
        const img = document.querySelector('.conf-service');
        img.src = "/wp-content/uploads/dial-selector-round-x/dial-selector-uk-service-" + 3 + ".svg";
        dialSlotMemory['service'].unshift('3');
        $('select[name="conf-service"]').val(3);
      }
    }
  }

  function CheckOverlap(type_1, type_2) {
    if (dialSlotMemory.service[0] === dialSlotMemory.filter[0]) {
      const img_1 = document.querySelector('.conf-' + type_1);
      img_1.src = "/wp-content/uploads/" + php.folderName + "/" + type_1 + "-" + dialSlotMemory[type_2][0] + ".svg";
      $('select[name="conf-' + type_1 + '"]').val(dialSlotMemory[type_2][0]);

      const img_2 = document.querySelector('.conf-' + type_2);
      img_2.src = "/wp-content/uploads/" + php.folderName + "/" + type_2 + "-" + dialSlotMemory[type_1][1] + ".svg";
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

  function SaveDialSlotMemory(type) {
    dialSlotMemory[type].unshift($('select[name="conf-' + type + '"]').val());
    if (dialSlotMemory[type].length > 2) {
      dialSlotMemory[type].pop();
    }
  }

  function SwitchFilterBoxLayer(pos) {
    // write DOM
    const img = document.querySelector('.conf-filter');
    img.src = "/wp-content/uploads/" + php.folderName + "/filter-" + pos + ".svg";
  }

  function SwitchServiceDoorLayer(pos) {
    // write DOM
    const img = document.querySelector('.conf-service');
    img.src = "/wp-content/uploads/" + php.folderName + "/service-door-" + pos + ".svg";
    SaveDialSlotMemory('service');
  }

  function SwitchInsertLayer(color) {
    // write DOM
    const img = document.querySelector('.conf-base');
    img.src = "/wp-content/uploads/" + php.folderName + "/liner-" + color + ".jpg";
    // write global var
    insertColorMemory.Current = color;
  }

  function SwitchAirJetsLayer(group) {
    // write DOM
    const img = document.querySelector('.conf-air-jets');
    img.src = "/wp-content/uploads/" + php.folderName + "/air-jets-" + group + ".svg";
    // write ServiceDoor toggle
    if (group === '0') {
      activeServiceDoorSystems.airJets = '0';
    } else {
      activeServiceDoorSystems.airJets = 1;
    }
  }

  function SwitchHydroJetsLayer(group, pattern) {
    // write DOM
    const img = document.querySelector('.conf-jets');
    img.src = "/wp-content/uploads/" + php.folderName + "/hydro-jets-" + group + "-" + pattern + ".svg";
    // write ServiceDoor toggle
    if (group === '0') {
      activeServiceDoorSystems.hydroJets = '0';
    } else {
      activeServiceDoorSystems.hydroJets = 1;
    }
  }

  function SwitchLedLayer(type) {
    if (activeLeds[type] === 0) {
      const img = document.querySelector('.conf-led-' + type);
      img.src = "/wp-content/uploads/" + php.folderName + "/led-" + type + ".svg";
      activeLeds[type] = 1;
      activeServiceDoorSystems[type] = 1;

    } else if (activeLeds[type] === 1) {
      const img = document.querySelector('.conf-led-' + type);
      img.src = "/wp-content/uploads/" + php.folderName + "/led-0.svg";
      activeLeds[type] = 0;
      activeServiceDoorSystems[type] = 0;
    }
  }

  /*
  **
  ** Dial Select post to cart & Donwload PDF
  **
  */

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
