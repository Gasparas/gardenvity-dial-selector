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

    if (clickLabelObj.attr('for') === parentUlObj.children('li').eq(0).children('label').attr('for') && !$('.leds_checkboxes').parent('label').parent('li').hasClass('tc-active')) {
      // first child label
      $('.conf-jets').hide();
      $('.conf-jets-menu').hide();
      $('.conf-service').hide();
      $('.conf-filter-service-menu').children('div').eq(0).hide();
      $('.error-notice').remove();
    } else if (clickLabelObj.attr('for') === parentUlObj.children('li').eq(1).children('label').attr('for')) {
      // second child label
      activeSlots[1] = $('select[name="conf-service"]').val();
      console.log(activeSlots[1]);
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
        img.src = "/wp-content/uploads/2022/04/dial-selector-de-service-door-" + filterBack + ".svg";
        serviceSelectStart = filterBack;
        activeSlots[1] = filterBack;
        console.log(activeSlots);
        console.log('one');
      } else if (activeSlots[1] === activeSlots[0]) {
        $('select[name="conf-service"]').val(filterBack);
        const img = document.querySelector('.conf-service');
        img.src = "/wp-content/uploads/2022/04/dial-selector-de-service-door-" + filterBack + ".svg";
        serviceSelectStart = filterBack;
        activeSlots[1] = filterBack;
        console.log(activeSlots[1]);
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
        img.src = "/wp-content/uploads/2022/04/dial-selector-de-service-door-" + filterBack + ".svg";
        serviceSelectStart = filterBack;
        activeSlots[1] = filterBack;
        console.log(activeSlots);
        console.log('one');
      } else if (activeSlots[1] === activeSlots[0]) {
        $('select[name="conf-service"]').val(filterBack);
        const img = document.querySelector('.conf-service');
        img.src = "/wp-content/uploads/2022/04/dial-selector-de-service-door-" + filterBack + ".svg";
        serviceSelectStart = filterBack;
        activeSlots[1] = filterBack;
        console.log(activeSlots[1]);
      }
    } else {
      $('.conf-jets').hide();
      $('.conf-jets-menu').hide();
    }
  });

  // Leds checkboxes
  jQuery(document).on('click', '.leds_checkboxes', function(e) {
    ledParentObj = $(this).parent('label').parent('li').parent('ul');
    ledFirstObj = $(this).parent('label').parent('li').parent('ul');
    ledSecondObj = $(this).parent('label').parent('li');
    hydroJetsObj = $('.hydro_jets_checkboxes').parent('label').parent('li');

    if (!hydroJetsObj.eq(0).hasClass("tc-active")) {
      return;
    } else if (!$(this).parent('label').parent('.tc-active').length && !ledParentObj.children('.tc-active:nth-child(1)').length) {
      activeSlots[1] = $('select[name="conf-service"]').val();
      console.log(activeSlots);
      $('.conf-service').show();
      $('.conf-filter-service-menu').children('div').eq(0).show();
      if (activeSlots.includes('10') && activeSlots.includes('2')) {
        $('select[name="conf-service"]').val(filterBack);
        const img = document.querySelector('.conf-service');
        img.src = "/wp-content/uploads/2022/04/dial-selector-de-service-door-" + filterBack + ".svg";
        serviceSelectStart = filterBack;
        activeSlots[1] = filterBack;
        console.log(activeSlots);
        console.log('one');
      } else if (activeSlots[1] === activeSlots[0]) {
        $('select[name="conf-service"]').val(filterBack);
        const img = document.querySelector('.conf-service');
        img.src = "/wp-content/uploads/2022/04/dial-selector-de-service-door-" + filterBack + ".svg";
        serviceSelectStart = filterBack;
        activeSlots[1] = filterBack;
        console.log(activeSlots);
      }
    } else if (!$(this).parent('label').parent('.tc-active').length && !ledParentObj.children('.tc-active:nth-child(2)').length) {
      activeSlots[1] = $('select[name="conf-service"]').val();
      console.log(activeSlots);
      $('.conf-service').show();
      $('.conf-filter-service-menu').children('div').eq(0).show();
      if (activeSlots.includes('10') && activeSlots.includes('2')) {
        $('select[name="conf-service"]').val(filterBack);
        const img = document.querySelector('.conf-service');
        img.src = "/wp-content/uploads/2022/04/dial-selector-de-service-door-" + filterBack + ".svg";
        serviceSelectStart = filterBack;
        activeSlots[1] = filterBack;
        console.log(activeSlots);
        console.log('one');
      } else if (activeSlots[1] === activeSlots[0]) {
        $('select[name="conf-service"]').val(filterBack);
        const img = document.querySelector('.conf-service');
        img.src = "/wp-content/uploads/2022/04/dial-selector-de-service-door-" + filterBack + ".svg";
        serviceSelectStart = filterBack;
        activeSlots[1] = filterBack;
        console.log(activeSlots);
      }
    } else if ($(this).parent('label').parent('.tc-active').length && !ledParentObj.children('.tc-active:nth-child(1)').length) {
      activeSlots[1] = '0';
      $('.conf-service').hide();
      $('.conf-filter-service-menu').children('div').eq(0).hide();
      $('.error-notice').remove();
    } else if ($(this).parent('label').parent('.tc-active').length && !ledParentObj.children('.tc-active:nth-child(2)').length) {
      activeSlots[1] = '0';
      $('.conf-service').hide();
      $('.conf-filter-service-menu').children('div').eq(0).hide();
      $('.error-notice').remove();
    }
  });

  // Water Filter checkboxes
  jQuery(document).on('click', '.water_filter_checkboxes', function(e) {
    parentUlObj = $(this).parent('label').parent('li').parent('ul');
    clickLabelObj = $(this).parent('label');

    if (clickLabelObj.attr('for') === parentUlObj.children('li').eq(0).children('label').attr('for')) {
      // first child label
      activeSlots[0] = '0';
      console.log(activeSlots);
      $('.conf-filter').hide();
      $('.conf-filter-service-menu').children('div').eq(1).hide();
      $('.error-notice').remove();
    } else {
      // not first child label
      activeSlots[0] = $('select[name="conf-filter"]').val();
      console.log(activeSlots);
      console.log('zero');
      $('.conf-filter').show();
      $('.conf-filter-service-menu').children('div').eq(1).show();

      if (activeSlots.includes('10') && activeSlots.includes('2')) {
        $('select[name="conf-filter"]').val(filterBack);
        const img = document.querySelector('.conf-filter');
        img.src = "/wp-content/uploads/2022/04/dial-selector-de-filter-box-" + filterBack + ".svg";
        filterSelectStart = filterBack;
        activeSlots[0] = filterBack;
        console.log(activeSlots);
        console.log('one');
      } else if (activeSlots[1] === activeSlots[0]) {
        $('select[name="conf-filter"]').val(serviceBack);
        const img = document.querySelector('.conf-filter');
        img.src = "/wp-content/uploads/2022/04/dial-selector-de-filter-box-" + serviceBack + ".svg";
        filterSelectStart = serviceBack;
        activeSlots[0] = serviceBack;
        console.log(activeSlots);
        console.log('two');
      }
    }
  });

  /***
   ****	Error logic & messages
   ***/

  let jetsFirstCheckbox = $( ".hydro_jets_checkboxes-ul" ).children('li').eq(0).children('label').children('span');
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
    if (!ledsCheckboxes.hasClass('tc-active')) {
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
         img.src = "/wp-content/uploads/2022/04/dial-selector-hydro-jets-10-" + (e - 1) + ".svg";
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
        img.src = "/wp-content/uploads/2022/04/dial-selector-hydro-jets-10-" + (e - 1) + ".svg";
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
        img.src = "/wp-content/uploads/2022/04/dial-selector-hydro-jets-20-" + (e - 1) + ".svg";
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
      addErrorNotice("Aus technischen Gründen ist eine solche Einstellung nicht möglich.");
      setTimeout(removeErrorNotice, 3000);
      console.log(activeSlots);
    } else if (activeSlots[0] != activeSlots[1]) {
      for (e = 2; e <= 10; e++) {
        if ($('select[name="conf-service"]').val() === e.toString()) {
          img.src = "/wp-content/uploads/2022/04/dial-selector-de-service-door-" + e + ".svg";
          serviceBack = serviceSelectStart;
          serviceSelectStart = $('select[name="conf-service"]').val();
          $('.error-notice').remove();
          console.log(activeSlots);
        }
      }
    } else {
      $('select[name="conf-service"]').val(serviceSelectStart);
      activeSlots[1] = serviceSelectStart;
      addErrorNotice("Aus technischen Gründen ist eine solche Einstellung nicht möglich.");
      setTimeout(removeErrorNotice, 3000);
      console.log(activeSlots);
    }
  });

  // Filter select dropdown
  $('select[name="conf-filter"]').change(function() {
    const img = document.querySelector('.conf-filter');
    activeSlots[0] = $('select[name="conf-filter"]').val();

    //check = (activeSlots.join(''));
    //console.log(check);

    if (activeSlots.includes('10') && activeSlots.includes('2')) {
      $('select[name="conf-filter"]').val(filterSelectStart);
      activeSlots[0] = filterSelectStart;
      addErrorNotice("Aus technischen Gründen ist eine solche Einstellung nicht möglich.");
      setTimeout(removeErrorNotice, 3000);
      console.log(activeSlots);
    } else if (activeSlots[0] != activeSlots[1]) {
      for (e = 2; e <= 10; e++) {
        if ($('select[name="conf-filter"]').val() === e.toString()) {
          img.src = "/wp-content/uploads/2022/04/dial-selector-de-filter-box-" + e + ".svg";
          filterBack = filterSelectStart;
          filterSelectStart = $('select[name="conf-filter"]').val();
          $('.error-notice').remove();
          console.log(activeSlots);
          //console.log(activeSlots);
          //console.log(check);
        }
      }
    } else {
      $('select[name="conf-filter"]').val(filterSelectStart);
      activeSlots[0] = filterSelectStart;
      addErrorNotice("Aus technischen Gründen ist eine solche Einstellung nicht möglich.");
      setTimeout(removeErrorNotice, 3000);
      console.log(activeSlots);
      //console.log(check);
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

    } else {

      /*document.cookie = "hydro_jets_text=;" + expires + "; path=/";
      document.cookie = "hydro_jets=;" + expires + "; path=/";
      document.cookie = "conf_service=;" + expires + "; path=/";
      document.cookie = "conf_filter=;" + expires + "; path=/";*/
    }

  });

});
