import { activeLeds, activeServiceDoorSystems } from './data';

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