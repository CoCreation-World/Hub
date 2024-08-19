/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

let currentPopup: any = undefined;

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ', WA.player.tags)

    WA.room.area.onEnter('clock').subscribe(() => {
        const today = new Date();
        const time = today.getHours() + ":" + today.getMinutes();
        currentPopup = WA.ui.openPopup("clockPopup", "It's " + time, []);
    })

    WA.room.area.onLeave('clock').subscribe(closePopup)

    WA.room.area.onEnter('showRoof').subscribe(() => {
        WA.room.showLayer('FG Exterior/Roof');
        WA.room.showLayer('FG Exterior/glasswall');
    });

    WA.room.area.onLeave('showRoof').subscribe(() => {
        WA.room.hideLayer('FG Exterior/Roof');
        WA.room.hideLayer('FG Exterior/glasswall');
    });

    WA.room.area.onEnter('topLeft').subscribe(() => {
        WA.room.showLayer('FG Exterior/roofTransp');
    });

    WA.room.area.onLeave('topLeft').subscribe(() => {
        WA.room.hideLayer('FG Exterior/roofTransp');
    });

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));

function closePopup() {
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}

WA.onInit().then(() => {
    if (WA.player.tags.includes('hutriadmin')) {
        WA.controls.disableMapEditor();
    }
});


WA.onInit().then(async () => {
    // Check if the player has the "admin" tag
    if (!WA.player.tags.includes("bot")) {
        const playerName = WA.player.name;
        const playerLanguage = WA.player.language;
        const wokaurl = await WA.player.getWokaPicture();

        var boturl = `https://chat.cocreation.world/ccw?playername=${encodeURIComponent(playerName)}&avatar=${encodeURIComponent(wokaurl)}&language=${playerLanguage}`;

        if (WA.player.tags.includes("admin")) {
            boturl = `https://chat.cocreation.world/ccw?playername=${encodeURIComponent(playerName)}&avatar=${encodeURIComponent(wokaurl)}&admin=true&language=${playerLanguage}`;
        }

        WA.controls.disablePlayerControls();
        WA.controls.disableRoomList();
        WA.controls.disableMicrophone();
        WA.controls.disableWebcam();
        WA.controls.disablePlayerProximityMeeting();
        WA.controls.disableScreenSharing();
        WA.controls.disableWheelZoom();
        WA.controls.disableRightClick();
        WA.controls.disableInviteButton();
        WA.controls.disableMapEditor();


        WA.ui.modal.openModal({
            title: "Welcome",
            src: boturl,
            allow: "fullscreen",
            allowApi: true,
            position: "center"
        }, () => {
            (WA.controls.restoreMapEditor(), WA.controls.restorePlayerControls(), WA.controls.restoreMicrophone(), WA.controls.restoreWebcam(), WA.controls.restorePlayerProximityMeeting(), WA.controls.restoreScreenSharing(), WA.controls.restoreWheelZoom(), WA.controls.restoreRightClick(), WA.controls.restoreInviteButton())
        });
    }
});

WA.onInit().then(() => {
    if (!WA.player.tags.includes("member")) {
        WA.controls.disableMapEditor();
        WA.controls.disableMicrophone();
        WA.controls.disableWebcam();
        WA.controls.disableScreenSharing();

        WA.ui.banner.openBanner({
            id: "banner-exploration",
            text: "Banner test",
            bgColor: "#000000",
            textColor: "#ffffff",
            closable: false,
            timeToClose: 120000,
            link: {
                label: "Register",
                url: "https://workadventu.re"
            }
        });
    }
});


export { };

