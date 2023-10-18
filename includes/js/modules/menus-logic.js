import * as data from './data';
import * as tracking from './tracking';

$ = jQuery;

export const serviceDoorMenuLogic = () => {

  $('select[name="conf-service"]').on("change", function () {
    const position = checkDropdownValues();
    tracking.Hotjar('Config click');

    if (position === "same") {
      SwitchFilterBoxLayer(data.dialSlotMemory.service[0]);
      SwitchServiceDoorLayer(data.dialSlotMemory.filter[0]);
      $('select[name="conf-service"]').val(data.dialSlotMemory.filter[0]);
      $('select[name="conf-filter"]').val(data.dialSlotMemory.service[0]);
      SaveDialSlotMemory('filter');
      SaveDialSlotMemory('service');

      // log(dialSlotMemory);

    } else if (position === "2-10") {
      SwitchServiceDoorLayer(data.dialSlotMemory.service[0]);
      $('select[name="conf-service"]').val(data.dialSlotMemory.service[0]);
      SaveDialSlotMemory('service');
    } else if (position === "continue") {
      SwitchServiceDoorLayer($('select[name="conf-service"]').val());
      SaveDialSlotMemory('service');

      // log(dialSlotMemory);
    }
  });
}

export const filterMenuLogic = () => {
  $('select[name="conf-filter"]').on("change", function () {
    const position = checkDropdownValues();
    tracking.Hotjar('Config click');

    if (position === "same") {
      SwitchServiceDoorLayer(data.dialSlotMemory.filter[0]);
      SwitchFilterBoxLayer(data.dialSlotMemory.service[0]);
      $('select[name="conf-filter"]').val(data.dialSlotMemory.service[0]);
      $('select[name="conf-service"]').val(data.dialSlotMemory.filter[0]);
      SaveDialSlotMemory('filter');
      SaveDialSlotMemory('service');

      // log(dialSlotMemory);

    } else if (position === "2-10") {
      SwitchFilterBoxLayer(data.dialSlotMemory.filter[0]);
      $('select[name="conf-filter"]').val(data.dialSlotMemory.filter[0]);
      SaveDialSlotMemory('filter');
    } else if (position === "continue") {
      SwitchFilterBoxLayer($('select[name="conf-filter"]').val());
      SaveDialSlotMemory('filter');

      // log(dialSlotMemory);
    }
  });
}

export const hydroJetsGroupOneMenuLogic = () => {
  $('select[name="conf-jets-10"]').on("change", function () {
    SwitchHydroJetsLayer('1', $('select[name="conf-jets-10"]').val()) - 1;
    data.hydroJetsPatternGroup[1] = $('select[name="conf-jets-10"]').val();
    tracking.Hotjar('Config click');
  });
}

export const hydroJetsGroupTwoMenuLogic = () => {
  $('select[name="conf-jets-20"]').on("change", function () {
    const hydroLayer =  ($('select[name="conf-jets-20"]').val()) - 1;
    SwitchHydroJetsLayer('2', hydroLayer);
    data.hydroJetsPatternGroup[2] = $('select[name="conf-jets-20"]').val();
    tracking.Hotjar('Config click');
  });
}

export const SwitchHydroJetsLayer = (group, pattern) => {
  // write DOM
  // pattern -= 1;
  document.querySelector('.conf-jets').src = "/wp-content/uploads/" + php.folderName + "/hydro-jets-" + group + "-" + pattern + ".svg";
  // write ServiceDoor toggle
  if (group === '0') {
    data.activeServiceDoorSystems.hydroJets = 0;
  } else {
    data.activeServiceDoorSystems.hydroJets = 1;
  }
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
    return "same";
  } else if (data.positionRestrictionsArray.includes(value1) && data.positionRestrictionsArray.includes(value2)) {
    return "2-10";
  } else {
    return "continue";
  }
}

function SaveDialSlotMemory(type) {
  data.dialSlotMemory[type].unshift($('select[name="conf-' + type + '"]').val());
  if (data.dialSlotMemory[type].length > 2) {
    data.dialSlotMemory[type].pop();
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
