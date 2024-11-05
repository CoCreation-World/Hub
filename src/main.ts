/// <reference types="@workadventure/iframe-api-typings" />
import { bootstrapExtra } from "@workadventure/scripting-api-extra";
import { levelUp } from "@workadventure/quests";
// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ', WA.player.tags);
    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));
}).catch(e => console.error(e));

console.log('Script started successfully');
WA.onInit().then(async () => {
    if (!WA.player.tags.includes("member")) {
    WA.camera.set(700, 1000, 800, 800, false, false, 10);
    WA.camera.set(700, 1700, 700, 700, false, true, 5000);
    const position = await WA.player.getPosition();
    const playerName = WA.player.name;
    const playerLanguage = WA.player.language;
    const wokaurl = await WA.player.getWokaPicture();


    function restoreMemberControls() {
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

    function nonMemberControls() {
        WA.controls.restorePlayerControls();
        WA.controls.restorePlayerProximityMeeting();
        WA.controls.restoreScreenSharing();
        WA.controls.restoreWheelZoom();
        WA.controls.restoreMicrophone();
        WA.controls.restoreWebcam();
        WA.controls.restoreRightClick();

        WA.ui.banner.openBanner({
            id: "banner-exploration",
            text: `Welcome to CoCreation.World ${encodeURIComponent(playerName)}. To access the full experience, sign up.`,
            bgColor: "#1B1B29",
            textColor: "#FFFFFF",
            closable: true,
            timeToClose: 10000,
            link: {
                label: "CLICK HERE",
                url: "https://app.cocreation.world/login"
            }
        });
    }

    function turnCameraToSpawn() {
        WA.camera.set(position.x, position.y, 500, 500, false, true, 1000);
        new Promise(resolve => setTimeout(resolve, 1000)).then(() => {
            WA.camera.followPlayer(true);
            WA.controls.restoreWheelZoom();
        });
    }

    // Step 2: Disable controls
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
    

    // Step 3: Display popupRectangle

    new Promise(resolve => setTimeout(resolve, 3000)).then(() => {
        WA.ui.openPopup("popupRectangle", 'Welcome to \n CoCreation.World \n  Would you like to experience the tutorial first?', [{
            label: "👎 no",
            className: "error",
            callback: async (popup) => {
                popup.close();
                turnCameraToSpawn();
                if (!WA.player.tags.includes("member")) {
                    nonMemberControls();
                    turnCameraToSpawn()
                } else {
                    restoreMemberControls();
                    turnCameraToSpawn()
                }
            }
        },
        {
            label: "👍 yes",
            className: "warning",
            callback: async (popup) => {
                console.log('popup closed');
                popup.close();
                WA.ui.modal.openModal({
                    title: "Welcome",
                    src: `https://chat.cocreation.world/c3-o-mat?playername=${encodeURIComponent(playerName)}&avatar=${encodeURIComponent(wokaurl)}&language=${playerLanguage}`,
                    allow: "fullscreen",
                    allowApi: true,
                    position: "center",
                });
                {
                   
                    if (!WA.player.tags.includes("member")) {
                        nonMemberControls();
                        turnCameraToSpawn();
                    } else {
                        restoreMemberControls();
                        turnCameraToSpawn();
                    }
                }
            }
        }]);
        
    })}});
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


WA.onInit().then(() => {
    if (WA.player.tags.includes('hutriadmin')) {
        WA.controls.disableMapEditor();
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
                    src: 'https://cocreation.world/upcoming-events',
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

WA.onInit().then(() => {
    WA.ui.actionBar.addButton({
        id: 'contact',
        type: 'action',
        imageSrc: 'https://minio-production-fa1d.up.railway.app/typebot/public/workspaces/clwxv3blz001hp28kvtibhtth/typebots/clzqtjvdr0001dvthgytin9cu/blocks/ju9avkxx9u3rfb45hsika0s4?v=1727964643138',
        toolTip: 'Contact',
        callback: async () => {
            const menu = await WA.ui.getMenuCommand("contact");
            menu.open();
        }
    });
});


WA.onInit().then(async () => {
    const currentEpochTime = Math.floor(Date.now() / 1000); // current time in seconds
    console.log(`⌚ Login-QUEST:Current epoch time: ${currentEpochTime}`);

    const lastVisit = await WA.player.state.lastVisit;
    console.log(`⌚ Login-QUEST:Last visit time: ${lastVisit}`);

    if (!lastVisit) {
        // If the player does not have a lastVisit variable, set it with the current epoch time
        await WA.player.state.saveVariable("lastVisit", currentEpochTime.toString(), { persist: true, public: true, scope: "world" });
        console.log(`Set lastVisit to current epoch time: ${currentEpochTime}`);
    } else {
        const lastVisitTime = parseInt(lastVisit as string, 10);
        const timeDifference = currentEpochTime - lastVisitTime;
        console.log(`⌚ Login-QUEST: Time difference since last visit: ${timeDifference} seconds`);

        if (timeDifference >= 86400) { // 86400 seconds in a day
            // Grant XP if 24 hours or more have passed
            try {
                console.log(`⌚ Login-QUEST: Attempting to grant 25 XP for login after 24 hours`);
                await levelUp("LOGIN", 25); // Ensure levelUp is awaited
                console.log(`⌚ Login-QUEST: Successfully granted 25 XP for login after 24 hours`);
            } catch (error) {
                console.error(`⌚ Login-QUEST: Error while granting XP: ${error}`);
            }
            console.log(`⌚ Login-QUEST:: Granted 25 XP for login after 24 hours`);

            // Update lastVisit to current timestamp
            await WA.player.state.saveVariable("lastVisit", currentEpochTime.toString(), { persist: true, public: true, scope: "world" });
            console.log(`⌚ Login-QUEST:Updated lastVisit to current epoch time: ${currentEpochTime}`);
        } else {
            console.log(`⌚ Login-QUEST: Not enough time has passed since last visit`);
        }
    }
});

const areas = ['holo', 'library', 'games', 'meeting', 'couch', 'maker', 'cowork', 'bots'];
const discoveredAreas = new Set<string>();

WA.onInit().then(async () => {
    // Retrieve the player's discovered areas from their state
    const playerDiscoveredAreas = await WA.player.state.discoveredAreas;
    if (playerDiscoveredAreas) {
        if (typeof playerDiscoveredAreas === 'string') {
            playerDiscoveredAreas.split(',').forEach(area => discoveredAreas.add(area));
        }
    }

    areas.forEach(area => {
        WA.room.area.onEnter(area).subscribe(async () => {
            if (!discoveredAreas.has(area)) {
                discoveredAreas.add(area);
                console.log(`Player discovered area: ${area}`);
                try {
                    await levelUp("EXPLORATION", 10); // Grant 10 XP for discovering an area
                    console.log(`Granted 10 XP for discovering area: ${area}`);
                    
                    // Save the updated discovered areas to the player's state
                    await WA.player.state.saveVariable("discoveredAreas", Array.from(discoveredAreas).join(','), { persist: true, public: true, scope: "world" });
                } catch (error) {
                    console.error(`Error while granting XP for area ${area}: ${error}`);
                }
            }
        });
    });
});

const popupAreas = ['library', 'games', 'maker', 'staff'];

WA.onInit().then(() => {
    let infoPopup: any;
    popupAreas.forEach(area => {
        WA.room.area.onEnter(`trigger_popup-${area}`).subscribe(() => {
            infoPopup = WA.ui.openPopup(`popup-${area}`, 'There is more to explore for members.', [{
                label: 'Explore',
                className: "primary",
                callback: () => {
                    WA.ui.modal.openModal({
                        title: "CCW Website",
                        src: `https://cocreation.world/${area}`,
                        allow: "fullscreen",
                        allowApi: true,
                        position: "right"
                    });
                }
            }]);
        });

        WA.room.area.onLeave(`trigger_popup-${area}`).subscribe(() => {
            infoPopup.close();
        });
    });
});

let botName: string;
WA.onInit().then(async () => {
    botName = await WA.player.name;
})

WA.chat.onChatMessage((message) => {{
        fetch('https://cocreation.world/chat/hooks/24e210d4fa381713b15245c5.json', {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
                'Origin': 'cocreation.world',
                "Access-Control-Allow-Origin": "*",
                "Host": "https://cocreation.world",
                'Accept':'*/*',
                'Accept-Encoding':'gzip, deflate, br',
                "Connection": "keep-alive",
            },
            body: JSON.stringify({ text: message })
        }).then(response => {
            if (!response.ok) {
                console.error('Failed to send message to webhook');
            }
        }).catch(error => {
            console.error('Error sending message to webhook:', error);
        });
    }
}, { scope: 'local' });
export { botName };

