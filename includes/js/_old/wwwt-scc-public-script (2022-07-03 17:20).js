jQuery(document).ready(function($) {

  var clonedata = $('.custom-conf-data').clone();
  formobj = $('.wp-block-lazyblock-woocommerce-single-product-cart-bf form');
  formobj.append(clonedata);
  var cloneobj = formobj.find('.custom-conf-main');
  var lblobj;
  cloneobj.each(function() {
    lblobj = $(this).children('label');
    var lblval = lblobj.text();
    $(this).children().attr('name', '_custom_opt_data[' + lblval + '][]');
  });

  $('.conf-jets').hide();
  $('.conf-jets-menu').hide();
  $('.conf-filter-service-menu').children('div').eq(0).hide();
  $('.conf-filter').hide();
  $('.conf-filter-service-menu').children('div').eq(1).hide();
  $('.conf-service').hide();

  $('#conf-jets-10').hide();
  tenjetsobj = $('#conf-jets-10').parent();
  tenjetsobj.find('.conf-jets-10').hide();

  $('#conf-jets-20').hide();
  twentyjetsobj = $('#conf-jets-20').parent();
  twentyjetsobj.find('.conf-jets-20').hide();

  formobj.find('.custom-conf-data').append("<input type='hidden' name='conf_jets' class='conf_jets' value='1'>");
  formobj.find('.custom-conf-data').append("<input type='hidden' name='conf_jets_type' class='conf_jets_type' value='10_jets'>");

  /***
   ****	Checkboxes
   ***/

  // Hydro Jet checkboxes
  jQuery(document).on('click', '.hydro_jets_checkboxes', function(e) {
    parentUlObj = $(this).parent('label').parent('li').parent('ul');
    clickLabelObj = $(this).parent('label');
    airParentObj = $('.air_jets_checkboxes').parent('label').parent('li').parent('ul');

    if (clickLabelObj.attr('for') === parentUlObj.children('li').eq(0).children('label').attr('for') &&
      !$('.leds_checkboxes').parent('label').parent('li').hasClass('tc-active') &&
      $('.air_jets_checkboxes-ul li:first-child').hasClass('tc-active')) {
      // first child label
      $('.conf-jets').hide();
      $('.conf-jets-menu').hide();
      $('.conf-service').hide();
      $('.conf-filter-service-menu').children('div').eq(0).hide();
      $('.error-notice').remove();
    } else if (clickLabelObj.attr('for') === parentUlObj.children('li').eq(1).children('label').attr('for')) {
      // second child label
      activeSlots[1] = $('select[name="conf-service"]').val();
      $('.conf-filter-service-menu').children('div').eq(0).show();
      $('.conf-jets').show();
      $('.conf-jets-menu').show();
      $('.conf-service').show();
      $('#conf-jets-20').hide();
      $('.conf-jets-20').hide();
      $('#conf-jets-10').show();
      $('.conf-jets-10').show();
      $('select[name="conf-jets-10"]').trigger('change');

      if (activeSlots.includes('10') && activeSlots.includes('2')) {
        $('select[name="conf-service"]').val(filterBack);
        const img = document.querySelector('.conf-service');
        img.src = "/wp-content/uploads/dial-selector/dial-selector-uk-service-door-" + filterBack + ".svg";
        serviceSelectStart = filterBack;
        activeSlots[1] = filterBack;
      } else if (activeSlots[1] === activeSlots[0]) {
        $('select[name="conf-service"]').val(filterBack);
        const img = document.querySelector('.conf-service');
        img.src = "/wp-content/uploads/dial-selector/dial-selector-uk-service-door-" + filterBack + ".svg";
        serviceSelectStart = filterBack;
        activeSlots[1] = filterBack;
      }
    } else if (clickLabelObj.attr('for') === parentUlObj.children('li').eq(2).children('label').attr('for')) {
      // third child label
      activeSlots[1] = $('select[name="conf-service"]').val();
      $('.conf-filter-service-menu').children('div').eq(0).show();
      $('.conf-jets').show();
      $('.conf-jets-menu').show();
      $('.conf-service').show();
      $('#conf-jets-10').hide();
      $('.conf-jets-10').hide();
      $('#conf-jets-20').show();
      $('.conf-jets-20').show();
      $('select[name="conf-jets-20"]').trigger('change');

      if (activeSlots.includes('10') && activeSlots.includes('2')) {
        $('select[name="conf-service"]').val(filterBack);
        const img = document.querySelector('.conf-service');
        img.src = "/wp-content/uploads/dial-selector/dial-selector-uk-service-door-" + filterBack + ".svg";
        serviceSelectStart = filterBack;
        activeSlots[1] = filterBack;
      } else if (activeSlots[1] === activeSlots[0]) {
        $('select[name="conf-service"]').val(filterBack);
        const img = document.querySelector('.conf-service');
        img.src = "/wp-content/uploads/dial-selector/dial-selector-uk-service-door-" + filterBack + ".svg";
        serviceSelectStart = filterBack;
        activeSlots[1] = filterBack;
      }
    } else {
      $('.conf-jets').hide();
      $('.conf-jets-menu').hide();
    }
  });

  $('.air_jets_checkboxes-div ul li').eq(0).change(function() {
    $('.conf-air-jets').hide();
    if ($('.hydro_jets_checkboxes-div ul li').eq(0).hasClass('tc-active')) {
      if (!$('.leds_checkboxes-div ul li').hasClass('tc-active')) {
        // first child label
        $('.conf-service').hide();
        $('.conf-filter-service-menu').children('div').eq(0).hide();
        activeSlots[1] = '0';
      }
    }
  });

  $('.air_jets_checkboxes-div ul li').eq(1).change(function() {
    const img = document.querySelector('.conf-air-jets');
    img.src = "/wp-content/uploads/dial-selector/dial-selector-air-jets-12.svg";
    $('.conf-air-jets').show();
    activeSlots[1] = $('select[name="conf-service"]').val();
    $('.conf-service').show();
    $('.conf-filter-service-menu').children('div').eq(0).show();
    if (activeSlots.includes('10') && activeSlots.includes('2')) {
      $('select[name="conf-service"]').val(filterBack);
      const img = document.querySelector('.conf-service');
      img.src = "/wp-content/uploads/dial-selector/dial-selector-uk-service-door-" + filterBack + ".svg";
      serviceSelectStart = filterBack;
      activeSlots[1] = filterBack;
    } else if (activeSlots[1] === activeSlots[0]) {
      $('select[name="conf-service"]').val(filterBack);
      const img = document.querySelector('.conf-service');
      img.src = "/wp-content/uploads/dial-selector/dial-selector-uk-service-door-" + filterBack + ".svg";
      serviceSelectStart = filterBack;
      activeSlots[1] = filterBack;
    }
  });

  $('.air_jets_checkboxes-div ul li').eq(2).change(function() {
    const img = document.querySelector('.conf-air-jets');
    img.src = "/wp-content/uploads/dial-selector/dial-selector-air-jets-20.svg";
    $('.conf-air-jets').show();
    activeSlots[1] = $('select[name="conf-service"]').val();
    $('.conf-service').show();
    $('.conf-filter-service-menu').children('div').eq(0).show();
    if (activeSlots.includes('10') && activeSlots.includes('2')) {
      $('select[name="conf-service"]').val(filterBack);
      const img = document.querySelector('.conf-service');
      img.src = "/wp-content/uploads/dial-selector/dial-selector-uk-service-door-" + filterBack + ".svg";
      serviceSelectStart = filterBack;
      activeSlots[1] = filterBack;
    } else if (activeSlots[1] === activeSlots[0]) {
      $('select[name="conf-service"]').val(filterBack);
      const img = document.querySelector('.conf-service');
      img.src = "/wp-content/uploads/dial-selector/dial-selector-uk-service-door-" + filterBack + ".svg";
      serviceSelectStart = filterBack;
      activeSlots[1] = filterBack;
    }
  });

  // Leds checkboxes
  $('.leds_checkboxes-div ul li').eq(0).change(function() {
    if ($('.leds_checkboxes-div ul li').eq(0).hasClass('tc-active')) {
      show_service()
      show_led(1);
      if (activeSlots.includes('10') && activeSlots.includes('2')) {
        error_service();
      } else if (activeSlots[1] === activeSlots[0]) {
        error_service();
      }
    } else {
      hide_led(1);
      if (!$('.leds_checkboxes-div ul li').eq(1).hasClass('tc-active')) {
        if ($('.hydro_jets_checkboxes-div ul li').eq(0).hasClass('tc-active')
            && $('.air_jets_checkboxes-div ul li').eq(0).hasClass('tc-active') ) {
              hide_service();
            }
      }
    }
  });

  $('.leds_checkboxes-div ul li').eq(1).change(function() {
    if ($('.leds_checkboxes-div ul li').eq(1).hasClass('tc-active')) {
      show_service()
      show_led(10);
      if (activeSlots.includes('10') && activeSlots.includes('2')) {
        error_service();
      } else if (activeSlots[1] === activeSlots[0]) {
        error_service();
      }
    } else {
      hide_led(10);
      if (!$('.leds_checkboxes-div ul li').eq(0).hasClass('tc-active')) {
        if ($('.hydro_jets_checkboxes-div ul li').eq(0).hasClass('tc-active')
            && $('.air_jets_checkboxes-div ul li').eq(0).hasClass('tc-active') ) {
              hide_service();
            }
      }
    }
  });

  // helper functions
  function show_led(e) {
    const img = document.querySelector('.conf-led-' + e);
    img.src = "/wp-content/uploads/dial-selector/dial-selector-led-" + e + ".svg";
    $('.conf-led-' + e).show();
  };
  function hide_led(e) {
    const img = document.querySelector('.conf-led-' + e);
    img.src = "/wp-content/uploads/dial-selector/dial-selector-led-" + e + ".svg";
    $('.conf-led-' + e).hide();
  };
  function show_service() {
    activeSlots[1] = $('select[name="conf-service"]').val();
    $('.conf-service').show();
    $('.conf-filter-service-menu').children('div').eq(0).show();
  };
  function hide_service() {
    activeSlots[1] = '0';
    $('.conf-led').hide();
    $('.conf-service').hide();
    $('.conf-filter-service-menu').children('div').eq(0).hide();
    $('.error-notice').remove();
  };
  function error_service() {
    $('select[name="conf-service"]').val(filterBack);
    const img = document.querySelector('.conf-service');
    img.src = "/wp-content/uploads/dial-selector/dial-selector-uk-service-door-" + filterBack + ".svg";
    serviceSelectStart = filterBack;
    activeSlots[1] = filterBack;
  };

  // Water Filter checkboxes
  jQuery(document).on('click', '.water_filter_checkboxes', function(e) {
    parentUlObj = $(this).parent('label').parent('li').parent('ul');
    clickLabelObj = $(this).parent('label');

    if (clickLabelObj.attr('for') === parentUlObj.children('li').eq(0).children('label').attr('for')) {
      // first child label
      activeSlots[0] = '0';
      $('.conf-filter').hide();
      $('.conf-filter-service-menu').children('div').eq(1).hide();
      $('.error-notice').remove();
    } else {
      // not first child label
      activeSlots[0] = $('select[name="conf-filter"]').val();
      $('.conf-filter').show();
      $('.conf-filter-service-menu').children('div').eq(1).show();

      if (activeSlots.includes('10') && activeSlots.includes('2')) {
        $('select[name="conf-filter"]').val(filterBack);
        const img = document.querySelector('.conf-filter');
        img.src = "/wp-content/uploads/dial-selector/dial-selector-uk-filter-box-" + filterBack + ".svg";
        filterSelectStart = filterBack;
        activeSlots[0] = filterBack;
      } else if (activeSlots[1] === activeSlots[0]) {
        $('select[name="conf-filter"]').val(serviceBack);
        const img = document.querySelector('.conf-filter');
        img.src = "/wp-content/uploads/dial-selector/dial-selector-uk-filter-box-" + serviceBack + ".svg";
        filterSelectStart = serviceBack;
        activeSlots[0] = serviceBack;
      }
    }
  });

  // Insert Size and Color radio buttons
  let insert_size = '_6-8';
  let insert_color = 'gold';

  $('.insert-size-div ul li').eq(0).change(function() {
    insert_size = '_6-8';
    const img = document.querySelector('.conf-base');
    img.src = "/wp-content/uploads/dial-selector/dial-selector-uk-base-" + insert_color + insert_size + ".jpg";
  });
  $('.insert-size-div ul li').eq(1).change(function() {
    insert_size = '_8-10';
    const img = document.querySelector('.conf-base');
    img.src = "/wp-content/uploads/dial-selector/dial-selector-uk-base-" + insert_color + insert_size + ".jpg";
  });

  $('.insert-color-div ul li').eq(0).change(function() {
    const img = document.querySelector('.conf-base');
    img.src = "/wp-content/uploads/dial-selector/dial-selector-uk-base-white" + insert_size + ".jpg";
    insert_color = 'white';
  });
  $('.insert-color-div ul li').eq(1).change(function() {
    const img = document.querySelector('.conf-base');
    img.src = "/wp-content/uploads/dial-selector/dial-selector-uk-base-grey" + insert_size + ".jpg";
    insert_color = 'grey';
  });
  $('.insert-color-div ul li').eq(2).change(function() {
    const img = document.querySelector('.conf-base');
    img.src = "/wp-content/uploads/dial-selector/dial-selector-uk-base-gold" + insert_size + ".jpg";
    insert_color = 'gold';
  });
  $('.insert-color-div ul li').eq(3).change(function() {
    const img = document.querySelector('.conf-base');
    img.src = "/wp-content/uploads/dial-selector/dial-selector-uk-base-blue" + insert_size + ".jpg";
    insert_color = 'blue';
  });

  /***
   ****	Error logic & messages
   ***/

  let jetsFirstCheckbox = $(".hydro_jets_checkboxes-ul").children('li').eq(0).children('label').children('span');
  let serviceSelectStart = $('select[name="conf-service"]').val();
  let filterSelectStart = $('select[name="conf-filter"]').val();
  let filterBack;
  let serviceBack;
  let activeSlots = ['0', '0'];

  const sect = document.querySelector('.conf-menu-container');
  const para = document.createElement('p');

  function addErrorNotice(e) {
    para.textContent = e;
    sect.appendChild(para);
    para.classList.add("error-notice");
  }

  function removeErrorNotice() {
    $('.error-notice').remove();
  }

  // Hydro Jets close service slot
  $(jetsFirstCheckbox).on('click', jetsFirstCheckbox, function(e) {
    ledsCheckboxes = $('.leds_checkboxes').parent('label').parent('li');
    if (!ledsCheckboxes.hasClass('tc-active') && $('.air_jets_checkboxes-ul li:first-child').hasClass('tc-active') ) {
      activeSlots[1] = '0';
    }
  });

  /***
   ****	Dropdown menus
   ***/

  $('select[name="conf-jets-10"]').change(function() {
    $('.conf_jets').val($(this).val());
    formobj.find('.conf_jets_type').val('10_jets');
    const img = document.querySelector('.conf-jets');

    for (e = 1; e <= 2; e++) {
      if ($(this).val() === e.toString()) {
        img.src = "/wp-content/uploads/dial-selector/dial-selector-hydro-jets-10-" + (e - 1) + ".svg";
      }
    }
  });

  // Hydro Jets 10 select dropdown
  $('select[name="conf-jets-10"]').change(function() {
    $('.conf_jets').val($(this).val());
    formobj.find('.conf_jets_type').val('10_jets');
    const img = document.querySelector('.conf-jets');

    for (e = 1; e <= 2; e++) {
      if ($(this).val() === e.toString()) {
        img.src = "/wp-content/uploads/dial-selector/dial-selector-hydro-jets-10-" + (e - 1) + ".svg";
      }
    }
  });

  // Hydro Jets 20 select dropdown
  $('select[name="conf-jets-20"]').change(function() {
    $('.conf_jets').val($(this).val());
    formobj.find('.conf_jets_type').val('20_jets');
    const img = document.querySelector('.conf-jets');

    for (e = 1; e <= 4; e++) {
      if ($(this).val() === e.toString()) {
        img.src = "/wp-content/uploads/dial-selector/dial-selector-hydro-jets-20-" + (e - 1) + ".svg";
      }
    }
  });

  // Service door dropdown
  $('select[name="conf-service"]').change(function() {
    const img = document.querySelector('.conf-service');
    activeSlots[1] = $('select[name="conf-service"]').val();

    if (activeSlots.includes('10') && activeSlots.includes('2')) {
      $('select[name="conf-service"]').val(serviceSelectStart);
      activeSlots[1] = serviceSelectStart;
      addErrorNotice("Such positioning is not possible due to technical reasons.");
      setTimeout(removeErrorNotice, 3000);
    } else if (activeSlots[0] != activeSlots[1]) {
      for (e = 2; e <= 10; e++) {
        if ($('select[name="conf-service"]').val() === e.toString()) {
          img.src = "/wp-content/uploads/dial-selector/dial-selector-uk-service-door-" + e + ".svg";
          serviceBack = serviceSelectStart;
          serviceSelectStart = $('select[name="conf-service"]').val();
          $('.error-notice').remove();
        }
      }
    } else {
      $('select[name="conf-service"]').val(serviceSelectStart);
      activeSlots[1] = serviceSelectStart;
      addErrorNotice("Such positioning is not possible due to technical reasons.");
      setTimeout(removeErrorNotice, 3000);
    }
  });

  // Filter select dropdown
  $('select[name="conf-filter"]').change(function() {
    const img = document.querySelector('.conf-filter');
    activeSlots[0] = $('select[name="conf-filter"]').val();

    if (activeSlots.includes('10') && activeSlots.includes('2')) {
      $('select[name="conf-filter"]').val(filterSelectStart);
      activeSlots[0] = filterSelectStart;
      addErrorNotice("Such positioning is not possible due to technical reasons.");
      setTimeout(removeErrorNotice, 3000);
    } else if (activeSlots[0] != activeSlots[1]) {
      for (e = 2; e <= 10; e++) {
        if ($('select[name="conf-filter"]').val() === e.toString()) {
          img.src = "/wp-content/uploads/dial-selector/dial-selector-uk-filter-box-" + e + ".svg";
          filterBack = filterSelectStart;
          filterSelectStart = $('select[name="conf-filter"]').val();
          $('.error-notice').remove();
        }
      }
    } else {
      $('select[name="conf-filter"]').val(filterSelectStart);
      activeSlots[0] = filterSelectStart;
      addErrorNotice("Such positioning is not possible due to technical reasons.");
      setTimeout(removeErrorNotice, 3000);
    }
  });

  /***
   **** Dial Select post to cart & Donwload PDF
   ***/

  formobj.find('.custom-conf-data').css('display', 'none');

  jQuery(document).on('change', '#conf-service', function(e) {
    formobj.find('#conf-service').removeAttr('selected');
    formobj.find('#conf-service option:selected').removeAttr('selected', false);
    if (jQuery(this).val() != '') {
      var service = jQuery('option:selected', jQuery(this)).val();
      formobj.find('#conf-service option[value="' + service + '"]').attr('selected', true);
    }
  });

  jQuery(document).on('change', '#conf-filter', function(e) {
    formobj.find('#conf-filter').removeAttr('selected');
    formobj.find('#conf-filter option:selected').removeAttr('selected', false);
    if (jQuery(this).val() != '') {
      var filter = jQuery('option:selected', jQuery(this)).val();
      formobj.find('#conf-filter option[value="' + filter + '"]').attr('selected', true);
    }
  });

  jQuery(document).on('click', '.pdf_button_print', function(e) {
    var formobj = $('.wp-block-lazyblock-woocommerce-single-product-cart-bf form');
    formobj.append("<input type='hidden' name='cart_pdf_submit_data' class='cart_pdf_submit_data' value='1'>");

    jQuery('.single_add_to_cart_button').click();

  });


  jQuery(document).on('click', '.single_add_to_cart_button', function(e) {

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

    if ($(".conf-filter-service-menu").find(".custom-conf-main").is(':visible')) {

      var service = $('body').find('#conf-service').parent('.custom-conf-main').is(':visible');
      var filter = $('body').find('#conf-filter').parent('.custom-conf-main').is(':visible');
      var filter_val = $('body').find('#conf-filter').val();
      var service_val = $('body').find('#conf-service').val();

      if (service == false || service == undefined || service == '') {
        document.cookie = "conf_service=;" + expires + "; path=/";
      } else {
        document.cookie = "conf_service=" + service_val + expires + "; path=/";
      }

      if (filter == false || filter == undefined || filter == '') {
        document.cookie = "conf_filter=;" + expires + "; path=/";
      } else {
        document.cookie = "conf_filter=" + filter_val + expires + "; path=/";
      }
    }
  });

});
