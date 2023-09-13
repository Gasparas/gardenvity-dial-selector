import { dialSlotMemory } from './data';

$ = jQuery;

export const serviceDoorMenuLogic = () => {

  $('select[name="conf-service"]').on("change", function () {
    const position = checkDropdownValues();

    if (position === "same") {
      SwitchFilterBoxLayer(dialSlotMemory.service[0]);
      SwitchServiceDoorLayer(dialSlotMemory.filter[0]);
      $('select[name="conf-service"]').val(dialSlotMemory.filter[0]);
      $('select[name="conf-filter"]').val(dialSlotMemory.service[0]);
      SaveDialSlotMemory('filter');
      SaveDialSlotMemory('service');

      // log(dialSlotMemory);

    } else if (position === "different") {
      SwitchServiceDoorLayer($('select[name="conf-service"]').val());
      SaveDialSlotMemory('service');

      // log(dialSlotMemory);
    }
  });
}

export const filterMenuLogic = () => {
  $('select[name="conf-filter"]').on("change", function () {
    const position = checkDropdownValues();

    if (position === "same") {
      SwitchServiceDoorLayer(dialSlotMemory.filter[0]);
      SwitchFilterBoxLayer(dialSlotMemory.service[0]);
      $('select[name="conf-filter"]').val(dialSlotMemory.service[0]);
      $('select[name="conf-service"]').val(dialSlotMemory.filter[0]);
      SaveDialSlotMemory('filter');
      SaveDialSlotMemory('service');

      // log(dialSlotMemory);

    } else if (position === "different") {
      SwitchFilterBoxLayer($('select[name="conf-filter"]').val());
      SaveDialSlotMemory('filter');

      // log(dialSlotMemory);
    }
  });
}

// Helper functions

function log(object) {
  Object.entries(object).forEach(([key, value]) => {
    console.log(key, value);
  });
}

function checkDropdownValues() {
  const value1 = $('select[name="conf-service"]').val();
  const value2 = $('select[name="conf-filter"]').val();

  if (value1 === value2) {
    // console.log('same');
    return "same";
  } else {
    // console.log('different');
    return "different";
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
}

function SaveDialSlotMemory(type) {
  dialSlotMemory[type].unshift($('select[name="conf-' + type + '"]').val());
  if (dialSlotMemory[type].length > 2) {
    dialSlotMemory[type].pop();
  }
}