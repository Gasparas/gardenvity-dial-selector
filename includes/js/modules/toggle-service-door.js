import { activeServiceDoorSystems } from './data';

export const ToggleServiceDoor = () => {
    $ = jQuery;
    console.log('MODULE: ToggleServiceDoor');

    let activeSystems = Object.values(activeServiceDoorSystems);
    console.log(activeServiceDoorSystems);

    function checkActive(slot) {
        return slot > 0;
    }

    if (activeSystems.find(checkActive)) {
        console.log('active');
        $('.conf-service').show();
        $('#menu-box-service').show();
    } else {
        console.log('inactive');
        $('.conf-service').hide();
        $('#menu-box-service').hide();
    }
    //checkServiceRestriction();
}