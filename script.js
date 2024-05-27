WA.room.area.onEnter('showRoof').subscribe(() => {
    WA.room.showLayer('FG Exterior/Roof');
});
WA.room.area.onLeave('showRoof').subscribe(() => {
    WA.room.hideLayer('FG Exterior/Roof');
});
WA.room.area.onEnter('topRight').subscribe(() => {
    WA.room.showLayer('FG Exterior/RoofOpacity');
});
WA.room.area.onLeave('topRight').subscribe(() => {
    WA.room.hideLayer('FG Exterior/RoofOpacity');
});