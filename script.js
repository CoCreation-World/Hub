WA.room.area.onEnter('showRoof').subscribe(() => {
    WA.room.showLayer('Roof');
});
WA.room.area.onLeave('showRoof').subscribe(() => {
    WA.room.hideLayer('Roof');
});