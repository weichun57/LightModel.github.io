function dragFunc(id) {
    var Drag = document.getElementById(id);
    Drag.onmousedown = function(event) {
        var ev = event || window.event;
        event.stopPropagation();
        var disX = ev.clientX - Drag.offsetLeft;
        var disY = ev.clientY - Drag.offsetTop;
        document.onmousemove = function(event) {
            var ev = event || window.event;
            Drag.style.left = ev.clientX - disX + "px";
            Drag.style.top = ev.clientY - disY + "px";
            Drag.style.cursor = "move";
        };
    };
    Drag.onmouseup = function() {
        document.onmousemove = null;
        this.style.cursor = "default";
    };
    // Drag.touch = function(event) {
    //     var ev = event || window.event;
    //     event.stopPropagation();
    //     var disX = ev.clientX - Drag.offsetLeft;
    //     var disY = ev.clientY - Drag.offsetTop;
    //     document.onmousemove = function(event) {
    //         var ev = event || window.event;
    //         Drag.style.left = ev.clientX - disX + "px";
    //         Drag.style.top = ev.clientY - disY + "px";
    //         Drag.style.cursor = "move";
    //     };
    // };
    // Drag.touchup = function() {
    //     document.onmousemove = null;
    //     this.style.cursor = "default";
    // };
};
// dragFunc('ClipDiv');
dragFunc('RoamDiv');
dragFunc('StaticDiv');
// dragFunc('PerspDiv');
dragFunc('WireDiv');

