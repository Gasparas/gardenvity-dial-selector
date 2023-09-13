import * as data from './data';

$ = jQuery;

export const serviceDoorMenuLogic = () => {

  $('select[name="conf-service"]').on("change", function () {
    const position = checkDropdownValues();
    hj('event', 'Config click');

    if (position === "same") {
      SwitchFilterBoxLayer(data.dialSlotMemory.service[0]);
      SwitchServiceDoorLayer(data.dialSlotMemory.filter[0]);
      $('select[name="conf-service"]').val(data.dialSlotMemory.filter[0]);
      $('select[name="conf-filter"]').val(data.dialSlotMemory.service[0]);
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
    hj('event', 'Config click');

    if (position === "same") {
      SwitchServiceDoorLayer(data.dialSlotMemory.filter[0]);
      SwitchFilterBoxLayer(data.dialSlotMemory.service[0]);
      $('select[name="conf-filter"]').val(data.dialSlotMemory.service[0]);
      $('select[name="conf-service"]').val(data.dialSlotMemory.filter[0]);
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

export const hydroJetsGroupOneMenuLogic = () => {
  $('select[name="conf-jets-10"]').on("change", function () {
    SwitchHydroJetsLayer('1', $('select[name="conf-jets-10"]').val());
    data.hydroJetsPatternGroup[1] = $('select[name="conf-jets-10"]').val();
    hj('event', 'Config click');
  });
}

export const hydroJetsGroupTwoMenuLogic = () => {
  $('select[name="conf-jets-20"]').on("change", function () {
    SwitchHydroJetsLayer('2', ($('select[name="conf-jets-20"]').val()));
    data.hydroJetsPatternGroup[2] = $('select[name="conf-jets-20"]').val();
    hj('event', 'Config click');
  });
}

export const SwitchHydroJetsLayer = (group, pattern) => {
  // write DOM
  // const img = ;
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
    // console.log('same');
    return "same";
  } else {
    // console.log('different');
    return "different";
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
