var template = [
    '<div class="tutorial">',
        '<h1 class="tutorial-heading">{{title}}<h1>',
    '</div>'
].join("\n");


function test1(){
		var data = {
          title: "Constructing HTML Elements"
        }
		// var template = $("#tutorial-template").html();
        var html = Mustache.render(template, data);
        $("body").append(html);
        
}
