/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";
// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player.tags)


    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));


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

//WA.onInit().then(async () => {
  //  if (!WA.player.tags.includes("member")) {
        //const playerName = WA.player.name; // Declare and initialize the 'playerName' variable
        //WA.ui.banner.openBanner({
         //   id: "banner-exploration",
           // text: `Welcome ${encodeURIComponent(playerName)} You are not signed in as a member. Please sign in or register to access all features.`,
           // bgColor: "#ff00ff",
           // textColor: "#000000",
            //closable: false,
          //  timeToClose: 0,
           // link: {
            //    label: "CLICK HERE",
           //     url: "https://forum.cocreation.world/login"
          //  }
       // });
   // }
//});
WA.onInit().then(async () => {
    // Check if the player has the "admin" tag
    if (!WA.player.tags.includes("bot") && !WA.player.tags.includes("member")) {
        const playerName = WA.player.name;
        const playerLanguage = WA.player.language;
        const wokaurl = await WA.player.getWokaPicture();

        var boturl = `https://chat.cocreation.world/ccw?playername=${encodeURIComponent(playerName)}&avatar=${encodeURIComponent(wokaurl)}&language=${playerLanguage}`;

        if (WA.player.tags.includes("admin")) {
            boturl = `https://chat.cocreation.world/ccw?playername=${encodeURIComponent(playerName)}&avatar=${encodeURIComponent(wokaurl)}&admin=true&language=${playerLanguage}`;
            
        }

        WA.controls.disablePlayerControls();
        WA.controls.disableMicrophone();
        WA.controls.disableWebcam();
        WA.controls.disableWheelZoom();
        WA.controls.disableRightClick();
        WA.controls.disableInviteButton();
        WA.controls.disableMapEditor();
        WA.controls.disableRoomList();
        WA.controls.disablePlayerProximityMeeting();
        WA.controls.disableScreenSharing();

        WA.ui.modal.openModal({
            title: "Welcome",
            src: boturl,
            allow: "fullscreen",
            allowApi: true,
            position: "center"
        }, () => {
            if (!WA.player.tags.includes("member")) {
                WA.controls.restorePlayerControls();
                WA.controls.restoreWheelZoom();
                WA.controls.restorePlayerProximityMeeting();
                WA.controls.restoreScreenSharing();
                WA.controls.restoreMicrophone();
                WA.controls.restoreWebcam();
                // WA.controls.restoreRightClick(); // currently deactivated. as this would allow users to sneak into closed areas.... its a WA bug. You cant walk into areas you dont have access to, using arrow keys. But you can using right click....
            } else {
                WA.controls.restorePlayerControls();
                WA.controls.restoreMicrophone();
                WA.controls.restoreWebcam();
                WA.controls.restoreWheelZoom();
                WA.controls.restoreRightClick();
                WA.controls.restoreInviteButton();
                WA.controls.restoreMapEditor();
                WA.controls.restoreRoomList();
                WA.controls.restorePlayerProximityMeeting();
                WA.controls.restoreScreenSharing();
            }
        });
    }
});


export { };

