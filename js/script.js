$(document).ready(function () {
    var bt = new BinaryTree();
    var currFunction = inorder;
    var initialized = false;

    var elIds = $("svg ellipse")
        .map(function() { return this.id; })
        .get();
    
    $("svg").find("text").each(function ( s ) {
        bt.push(Number($(this).text()), elIds[s]);
    });

    function traverse() {
        var x = []
        elIds = []
        currFunction(bt.root, x, elIds);
        var element = $(".traversal");
        element.html("");
        x.forEach(function (e){
            element.append("<span style='opacity: 0'>"+e+'</span>');
        });
        initialized = true;
    }

    traverse();

    $('#function-select').change(function (e) {
        currFunction = window[this.value];
        initialized = false;
    });

    $('#play-btn').click(function() {
        if (!initialized) traverse();
        $(".traversal span").each(function(i,e) {
            $(this).css({opacity: 0});
        });
        
         $(".traversal span").each(function (i,e ) {
           $(this).delay(i*2000).animate({
            opacity: 1,
          }, 2000);
         });
    });

    $('#pause-btn').click(function() {
        $(".traversal span").each(function(i,e) {
            $(this).stop().css({opacity: 1});
        });
    })
});
