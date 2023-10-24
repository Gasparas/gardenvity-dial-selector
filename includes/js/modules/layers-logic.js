import { activeServiceDoorSystems, activeFilterSystems, activeLeds } from './data';

export const ToggleServiceDoor = () => {
    $ = jQuery;

    let activeSystems = Object.values(activeServiceDoorSystems);

    function checkActive(slot) {
        return slot > 0;
    }

    if (activeSystems.find(checkActive)) {
        // console.log('service-door', 'active');
        $('.conf-service').show();
        $('#menu-box-service').show();
    } else {
        // console.log('service-door', 'inactive');
        $('.conf-service').hide();
        $('#menu-box-service').hide();
    }
    //checkServiceRestriction();
}

export const ToggleFilterEnclosure = () => {
    $ = jQuery;

    let activeSystems = Object.values(activeFilterSystems);

    function checkActive(slot) {
        return slot > 0;
    }

    if (activeSystems.find(checkActive)) {
        // console.log('service-door', 'active');
        $('.conf-service').show();
        $('#menu-box-service').show();
    } else {
        // console.log('service-door', 'inactive');
        $('.conf-service').hide();
        $('#menu-box-service').hide();
    }
    //checkServiceRestriction();
}

export const SwitchLedLayer = (type) => {
    if (activeLeds[type] === 0) {
        const img = document.querySelector('.conf-' + type);
        img.src = "/wp-content/uploads/" + php.folderName + "/" + type + ".svg";
        activeLeds[type] = 1;
        activeServiceDoorSystems[type] = 1;

    } else if (activeLeds[type] === 1) {
        const img = document.querySelector('.conf-' + type);
        img.src = "/wp-content/uploads/" + php.folderName + "/led-none.svg";
        activeLeds[type] = 0;
        activeServiceDoorSystems[type] = 0;
    }
}

export const ToggleLedLayer = (type) => {
    // write DOM
    const img = document.querySelector('.conf-led-slot-1');
    img.src = "/wp-content/uploads/" + php.folderName + "/" + type + ".svg";
    // write ServiceDoor toggle
    if (type === 'led-slot-1') {
        activeServiceDoorSystems['led-slot-1'] = 0;
    } else {
        activeServiceDoorSystems['led-slot-1'] = 1;
    }
}