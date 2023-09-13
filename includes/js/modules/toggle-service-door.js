import { activeServiceDoorSystems } from './data';

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