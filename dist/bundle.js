(()=>{"use strict";var e=function(){console.log("MODULE: scrollSwith");var e=Math.round($(".heater-insulation-title-div").offset().top),o=$(".woocommerce-product-gallery__image > img").height(),n=e-o;window.innerWidth<960?(document.documentElement.scrollTop>e?($(".woocommerce-product-gallery__image").css("display","none"),$("#liner").css("display","block"),e=Math.round($(".heater-insulation-title-div").offset().top),o=$(".woocommerce-product-gallery__image > img").height(),n=e-o):document.documentElement.scrollTop<n&&($(".woocommerce-product-gallery__image").css("display","block"),$("#liner").css("display","none"),e=Math.round($(".heater-insulation-title-div").offset().top),o=$(".woocommerce-product-gallery__image > img").height(),n=e-o),window.onscroll=function(){document.documentElement.scrollTop>e?($(".woocommerce-product-gallery__image").css("display","none"),$("#liner").css("display","block"),e=Math.round($(".heater-insulation-title-div").offset().top),o=$(".woocommerce-product-gallery__image > img").height(),n=e-o):document.documentElement.scrollTop<n&&($(".woocommerce-product-gallery__image").css("display","block"),$("#liner").css("display","none"),e=Math.round($(".heater-insulation-title-div").offset().top),o=$(".woocommerce-product-gallery__image > img").height(),n=e-o)}):($(".woocommerce-product-gallery__image").css("display","block"),$("#liner").css("display","block"),window.onscroll=null)},o={"led-slot-1":0,"led-slot-2":0,"led-slot-3":0,airJets:0,hydroJets:0,airPlusHydroJets:0},n={"led-slot-1":0,"led-slot-2":0,"led-slot-3":0},t={service:[php.serviceDoorDefault,php.serviceDoorDefault],filter:[php.filterDefault,php.filterDefault]},c={1:0,2:0},i=(php.linerColorStart,php.positionRestrictions.split(",").map((function(e){return e.trim()}))),l=function(e){"undefined"!=typeof hj&&hj("event",e)};$=jQuery;var s=function(e,n){document.querySelector(".conf-jets").src="/wp-content/uploads/"+php.folderName+"/hydro-jets-"+e+"-"+n+".svg",o.hydroJets="0"===e?0:1};function r(){var e=$('select[name="conf-service"]').val(),o=$('select[name="conf-filter"]').val();return e===o?"same":i.includes(e)&&i.includes(o)?"2-10":"continue"}function f(e){t[e].unshift($('select[name="conf-'+e+'"]').val()),t[e].length>2&&t[e].pop()}function a(e){document.querySelector(".conf-filter").src="/wp-content/uploads/"+php.folderName+"/filter-"+e+".svg"}function d(e){document.querySelector(".conf-service").src="/wp-content/uploads/"+php.folderName+"/service-door-"+e+".svg"}var u=function(){$=jQuery,Object.values(o).find((function(e){return e>0}))?($(".conf-service").show(),$("#menu-box-service").show()):($(".conf-service").hide(),$("#menu-box-service").hide())},h=function(e){0===n[e]?(document.querySelector(".conf-"+e).src="/wp-content/uploads/"+php.folderName+"/"+e+".svg",n[e]=1,o[e]=1):1===n[e]&&(document.querySelector(".conf-"+e).src="/wp-content/uploads/"+php.folderName+"/led-none.svg",n[e]=0,o[e]=0)},m=function(e){document.querySelector(".conf-led-slot-1").src="/wp-content/uploads/"+php.folderName+"/"+e+".svg",o["led-slot-1"]="led-slot-1"===e?0:1};$=jQuery,$((function(){function n(){3===$("#conf-menu-container").children(":hidden").length?$("#conf-menu-container").css("opacity","0"):$("#conf-menu-container").css("opacity","1")}function v(e){document.querySelector(".conf-air-jets").src="/wp-content/uploads/"+php.folderName+"/air-jets-"+e+".svg",o.airJets="0"===e?0:1}console.log(i),e(),addEventListener("resize",(function(o){e()})),$('select[name="conf-service"]').on("change",(function(){var e=r();l("Config click"),"same"===e?(a(t.service[0]),d(t.filter[0]),$('select[name="conf-service"]').val(t.filter[0]),$('select[name="conf-filter"]').val(t.service[0]),f("filter"),f("service")):"2-10"===e?(d(t.service[0]),$('select[name="conf-service"]').val(t.service[0]),f("service")):"continue"===e&&(d($('select[name="conf-service"]').val()),f("service"))})),$('select[name="conf-filter"]').on("change",(function(){var e=r();l("Config click"),"same"===e?(d(t.filter[0]),a(t.service[0]),$('select[name="conf-filter"]').val(t.service[0]),$('select[name="conf-service"]').val(t.filter[0]),f("filter"),f("service")):"2-10"===e?(a(t.filter[0]),$('select[name="conf-filter"]').val(t.filter[0]),f("filter")):"continue"===e&&(a($('select[name="conf-filter"]').val()),f("filter"))})),$('select[name="conf-jets-10"]').on("change",(function(){s("1",$('select[name="conf-jets-10"]').val()),c[1]=$('select[name="conf-jets-10"]').val(),l("Config click")})),$('select[name="conf-jets-20"]').on("change",(function(){var e=$('select[name="conf-jets-20"]').val()-1;s("2",e),c[2]=$('select[name="conf-jets-20"]').val(),l("Config click")})),$("#menu-box-service").hide(),$("#menu-box-jets").hide(),$("#menu-box-filter").hide(),document.querySelectorAll(".cladding-type-ul li label"),document.querySelectorAll(".liner-color-ul"),$(".air_jets_checkboxes-div ul li").eq(0).on("change",(function(){v("0"),u(),n()})),$(".air_jets_checkboxes-div ul li").eq(1).on("change",(function(){v("1"),u(),n()})),$(".air_jets_checkboxes-div ul li").eq(2).on("change",(function(){v("2"),u(),n()})),$(".air_jets_checkboxes-div ul li").eq(3).on("change",(function(){v("3"),u(),n()})),$(".hydro_jets_checkboxes-div ul li").eq(0).on("change",(function(){s("0",0),u(),$("#menu-box-jets").hide(),$("#conf-jets-10").hide(),$("#conf-jets-20").hide(),n()})),$(".hydro_jets_checkboxes-div ul li").eq(1).on("change",(function(){s("1",c[1]),u(),$("#menu-box-jets").show(),$("#conf-jets-10").show(),$("label[for='conf-jets-10']").show(),$("#conf-jets-20").hide(),$("label[for='conf-jets-20']").hide(),n()})),$(".hydro_jets_checkboxes-div ul li").eq(2).on("change",(function(){s("2",c[2]),u(),$("#menu-box-jets").show(),$("#conf-jets-20").show(),$("label[for='conf-jets-20']").show(),$("#conf-jets-10").hide(),$("label[for='conf-jets-10']").hide(),n()})),$(".leds_checkboxes-div ul li").eq(0).on("change",(function(){h("led-slot-1"),u(),n()})),$(".leds_checkboxes-div ul li").eq(1).on("change",(function(){h("led-slot-2"),u(),n()})),$(".leds_checkboxes-div ul li").eq(2).on("change",(function(){h("led-slot-3"),u(),n()})),$(".leds_toggle_slots-div ul li").eq(0).on("change",(function(){m("led-slot-1"),u(),n()})),$(".leds_toggle_slots-div ul li").eq(1).on("change",(function(){m("led-slot-2"),u(),n()})),$(".leds_toggle_slots-div ul li").eq(2).on("change",(function(){m("led-slot-3"),u(),n()})),$(".water_filter_checkboxes-div ul li").eq(0).on("change",(function(){$(".conf-filter").hide(),$("#menu-box-filter").hide(),n()})),$(".water_filter_checkboxes-div ul li").eq(1).on("change",(function(){$(".conf-filter").show(),$("#menu-box-filter").show(),n()})),$(".water_filter_checkboxes-div ul li").eq(2).on("change",(function(){$(".conf-filter").show(),$("#menu-box-filter").show(),n()})),$(".water_filter_checkboxes-div ul li").eq(3).on("change",(function(){$(".conf-filter").show(),$("#menu-box-filter").show(),n()}));var p=$(".custom-conf-data").clone(),g=$("form.cart");g.append(p),g.find(".custom-conf-main").each((function(){var e=$(this).children("label").text();$(this).children().attr("name","_custom_opt_data["+e+"][]")})),$("#conf-jets-10").parent().find(".conf-jets-10").hide(),$("#conf-jets-20").parent().find(".conf-jets-20").hide(),g.find(".custom-conf-data").append("<input type='hidden' name='conf_jets' class='conf_jets' value='1'>"),g.find(".custom-conf-data").append("<input type='hidden' name='conf_jets_type' class='conf_jets_type' value='10_jets'>"),g.find(".custom-conf-data").css("display","none"),jQuery(document).on("change","#conf-service",(function(e){if(g.find("#conf-service").removeAttr("selected"),g.find("#conf-service option:selected").removeAttr("selected",!1),""!=jQuery(this).val()){var o=jQuery("option:selected",jQuery(this)).val();g.find('#conf-service option[value="'+o+'"]').attr("selected",!0)}})),jQuery(document).on("change","#conf-filter",(function(e){if(g.find("#conf-filter").removeAttr("selected"),g.find("#conf-filter option:selected").removeAttr("selected",!1),""!=jQuery(this).val()){var o=jQuery("option:selected",jQuery(this)).val();g.find('#conf-filter option[value="'+o+'"]').attr("selected",!0)}})),jQuery(document).on("click",".single_add_to_cart_button",(function(e){var o=new Date;o.setTime(o.getTime()+864e5);var n="; expires="+o.toGMTString();if($("body").find(".conf-jets-menu .custom-conf-inner").is(":visible")){if($("body").find("#conf-jets-10").is(":visible"))var t="conf-jets-10";else t="conf-jets-20";var c=$("body").find("#conf-service").val();document.cookie="hydro_jets_text="+t+n+"; path=/",document.cookie="hydro_jets="+$("#"+t+" option").filter(":selected").val()+n+"; path=/",document.cookie="conf_service="+c+n+"; path=/"}else document.cookie="hydro_jets_text=;"+n+"; path=/",document.cookie="hydro_jets=;"+n+"; path=/",document.cookie="conf_service=;"+n+"; path=/",document.cookie="conf_filter=;"+n+"; path=/";if($("#menu-box-service").is(":visible")){c=$("body").find("#conf-service").parent(".custom-conf-main").is(":visible");var i=$("body").find("#conf-service").val();document.cookie=0==c||null==c||""==c?"conf_service=;"+n+"; path=/":"conf_service="+i+n+"; path=/"}if($("#menu-box-filter").is(":visible")){var l=$("body").find("#conf-filter").parent(".custom-conf-main").is(":visible"),s=$("body").find("#conf-filter").val();document.cookie=0==l||null==l||""==l?"conf_filter=;"+n+"; path=/":"conf_filter="+s+n+"; path=/"}}))}))})();