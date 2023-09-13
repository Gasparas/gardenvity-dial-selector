export let activeServiceDoorSystems = {
  'led-slot-1': 0,
  'led-slot-2': 0,
  'led-slot-3': 0,
  airJets: 0,
  hydroJets: 0,
  airPlusHydroJets: 0
};

export let activeLeds = {
  'led-slot-1': 0,
  'led-slot-2': 0,
  'led-slot-3': 0
};

export let dialSlotMemory = {
  service: [php.serviceDoorDefault, php.serviceDoorDefault],
  filter: [php.filterDefault, php.filterDefault]
}