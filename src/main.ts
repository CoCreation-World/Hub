/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra, RemotePlayer } from "@workadventure/scripting-api-extra";
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

WA.onInit().then(() => {
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

    WA.ui.openPopup("popupRectangle", 'Welcome to \n CoCreation.World \n Would you like to experience the tutorial first?', [{
        label: "👎 no",
        className: "error",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
            {
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
            }
        
        },
        
    },
    {
        label: "👍 yes",
        className: "warning",
        callback: async (popup) => {
            const playerName = WA.player.name;
        const playerLanguage = WA.player.language;
        const wokaurl = await WA.player.getWokaPicture();

        var boturl = `https://chat.cocreation.world/c3omat?playername=${encodeURIComponent(playerName)}&avatar=${encodeURIComponent(wokaurl)}&language=${playerLanguage}`;

            WA.ui.modal.openModal({
                title: "Welcome",
                src: boturl,
                allow: "fullscreen",
                allowApi: true,
                position: "center"
            }) 
            popup.close();
            
            {
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
            } },
        
    }]    )
});
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
  if (!WA.player.tags.includes("member")) {
        const playerName = WA.player.name; // Declare and initialize the 'playerName' variable
        WA.ui.banner.openBanner({
           id: "banner-exploration",
            text: `Welcome to CoCreation.World ${encodeURIComponent(playerName)}. To access the full experience, please log in or sign up.`,
            bgColor: "#1B1B29",
            textColor: "#FFFFFF",
            closable: true,
            timeToClose: 0,
            link: {
                label: "CLICK HERE",
                url: "https://world.cocreation.world/login"
            }
        });
    }
});


async function updateTitle(variableName: string) {
    var text: string = WA.state[variableName] as string;
    console.log(`Text for ${variableName} is configured as ` + text);
    // var color: string = WA.state.colorVariable as string;
    // console.log('Color is configured as ' + color);
    var newTitle = `https://iw6tkif7th7yp5ax2ufzkl3kce0bcuys.lambda-url.us-east-1.on.aws/?text=${encodeURIComponent(text)}&imageType=caption&width=78&height=50&color=yellow`;
    console.log('New img-url of title is ' + newTitle);
    const website = await WA.room.website.get(variableName.replace('text', 'display'));
    website.url = newTitle;
    website.visible = true;
    console.log(`Title for ${variableName} has been changed to ${website.url}`);
};

WA.onInit().then(() => { 
    updateTitle('holo1-text'); 
    updateTitle('holo2-text'); 
    updateTitle('holo3-text'); 
    updateTitle('holo4-text'); 
    updateTitle('holo5-text'); 
    updateTitle('holo6-text'); 
    updateTitle('makerHolo-text'); 
});

// Listen for changes to each text variable
['holo1-text', 'holo2-text', 'holo3-text', 'holo4-text', 'holo5-text', 'holo6-text', 'makerHolo-text'].forEach(variableName => {
    WA.state.onVariableChange(variableName).subscribe(() => {
        console.log(`${variableName} variable changed`);
        updateTitle(variableName);
    });
});

// Listen for changes to the colorVariable
// WA.state.onVariableChange('colorVariable').subscribe(() => {
//     console.log(`Color variable changed`);
//     ['holo1-text', 'holo2-text', 'holo3-text', 'holo4-text', 'holo5-text', 'holo6-text'].forEach(variableName => {
//         updateTitle(variableName);
//     });
// });


async function updateBillboardText() {
    var text: string = WA.state.makerspaceBillboardText as string;
    console.log(`Text for makerspacebillboardText is configured as ` + text);
    var newTitle = `https://iw6tkif7th7yp5ax2ufzkl3kce0bcuys.lambda-url.us-east-1.on.aws/?text=${encodeURIComponent(text)}&imageType=caption&width=122&height=60&color=black`;
    console.log('New img-url of title is ' + newTitle);
    const website = await WA.room.website.get('makerspaceBillboard');
    website.url = newTitle;
    website.visible = true;
    console.log(`Title for makerspacebillboardText has been changed to ${website.url}`);
};

WA.onInit().then(() => { 
    updateBillboardText(); 
});

WA.state.onVariableChange('makerspacebillboardText').subscribe(() => {
    console.log(`makerspacebillboardText variable changed`);
    updateBillboardText();
});

async function updateMakerMeet() {
    var makerMeetValue: string = WA.state.makerMeet as string;
    console.log(`makerMeet variable changed to ${makerMeetValue}`);
    
    if (makerMeetValue === "") {
        const area = await WA.room.area.get('makerspaceJitsi');
        if (area) {
            area.height = 0;
            area.width = 0;
            console.log(`Area 'makerSpaceJitsi' resized to height: 1, width: 1`);
        }
    } else if (makerMeetValue === "1") {
        const area = await WA.room.area.get('makerspaceJitsi');
        if (area) {
            area.height = 252;
            area.width = 352;
            console.log(`Area 'makerSpaceJitsi' resized to height: 252, width: 352`);
        }
    }
}

WA.onInit().then(() => { 
    updateMakerMeet(); 
});

WA.state.onVariableChange('makerMeet').subscribe(() => {
    updateMakerMeet();
});

    // Add action bar button 'Register'.
    WA.onInit().then(() => {
        let isModalOpen = false;

        WA.ui.actionBar.addButton({
            id: 'calendar',
            type: 'action',
            imageSrc: 'https://minio-production-fa1d.up.railway.app/typebot/public/workspaces/clwxv3blz001hp28kvtibhtth/typebots/clzqtjvdr0001dvthgytin9cu/blocks/b0qczozh0s0f8tcj821pufod?v=1727883058553',
            toolTip: 'Calendar',
            callback: () => {
                if (isModalOpen) {
                    WA.ui.modal.closeModal();
                    isModalOpen = false;
                } else {
                    WA.ui.modal.openModal({
                        title: "Calender",
                        src: 'https://forum.cocreation.world/c/cal/23',
                        allow: "fullscreen",
                        allowApi: true,
                        position: "right"
                    });
                    isModalOpen = true;
                }
            }
        });
    });
;
        

export { };

