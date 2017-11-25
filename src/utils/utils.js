export function initSysInfo () {
    if (!$.cookie('Version-Token')) {
        $.cookie('Version-Token', VERSION, {expires: 8, path: '/'});
    }
}