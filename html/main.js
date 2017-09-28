
$(document).ready(function(){
    $("#set-status").hide();
    $("#set-message-away").hide();
    $("#set-message-dnd").hide();
    $("#set-message-here").hide();
    $("#custom-message").hide();
    $("#status").hide();

    $("#set-status-button").click(function() {
        $("#set-status").show();
    });

    $("#away-button").click(function() {
        $("#set-message-dnd").hide();
        $("#set-message-here").hide();
        $("#set-message-away").show();
        $("#custom-message").show();
    });

    $("#dnd-button").click(function() {
        $("#set-message-away").hide();
        $("#set-message-here").hide();
        $("#set-message-dnd").show();
        $("#custom-message").show();
    });

    $("#here-button").click(function() {
        $("#set-message-away").hide();
        $("#set-message-dnd").hide();
        $("#set-message-here").show();
        $("#custom-message").show();
    });

    function showOptions(buttonValue){
        switch(buttonValue) {
            case "A":
                $("away-button").click(function() {
                    $("set-message-away").show()
                });
                break;
            case "D":
                $("dnd-button").click(function() {
                    $("set-message-dnd").show()
                });
                break;
            case "H":
                $("here-button").click(function() {
                    $("set-message-here").show()
                });
                break;
            default: 
                break;

                          }
    }

    function selectButton(button)
    {
        button.siblings().removeClass("selected");
        button.addClass("selected");
        switch(button.value) {
            case "A":
                showOptions(button.value);
                break;
            case "D":
            case "H":
                showOptions(button.value);
                break;
            case 1:
            case 2:
                $("#custom-message").val(button.text());
                break;
                           }
    }


    $("button").click(function() {
        selectButton($(this));
    });

    $("body").keypress(function(event) {
        // hot keys?
        switch(event.which) {
            case 65:
                // "a" or "A"
                selectButton($("#away-button"));

                break;
            case 68:
                // "d" or "D"
                selectButton($("#dnd-button"));
                break;
            case 72:
                // "h" or "H"
                selectButton($("#here-button"));
                break;
            case 49:
                // 1
                selectButton($("#1-button"));
                break;
            case 50:
                // 2
                selectButton($("#2-button"));
                break;
            case 48:
                // 0
                $("#custom-message").focus();
                $("#custom-message").val("");
                $("#1-button").siblings.removeClass("selected");
                break;
            default:
                break;
                          }

        $("#set").click(function() {
            $("#status").show();
            $("#status").text($("#custom-message").text());
            $("#set-status").hide();
        })
    });

    // User input Status
    // ('A'- Away, 'D'- Do not disturb, 'H'- Here)
    var status;

    // window.alert("What is your status? ('A'- Away, 'D'- Do not disturb, 'H'- Here)")

});
function A1(){
    // document.getElementById("A1-button").src1="Available1.JPG";
    document.write('<img src="Away3.jpg">');
    // result.innerHTML="<img src1=\"html/Available1.png\" />";

}
function A2(){
    // document.getElementById("A1-button").src1="Available1.JPG";
    document.write('<img src="Away2.jpg">');
    // result.innerHTML="<img src1=\"html/Available1.png\" />";

}
function A3(){
    // document.getElementById("A1-button").src1="Available1.JPG";
    document.write('<img src="Away1.jpg">');
    // result.innerHTML="<img src1=\"html/Available1.png\" />";

}
function A4(){
    // document.getElementById("A1-button").src1="Available1.JPG";
    document.write('<img src="Away4.jpg">');
    // result.innerHTML="<img src1=\"html/Available1.png\" />";

}
function D1(){
    // document.getElementById("A1-button").src1="Available1.JPG";
    document.write('<img src="DND1.jpg">');
    // result.innerHTML="<img src1=\"html/Available1.png\" />";

}
function D2(){
    // document.getElementById("A1-button").src1="Available1.JPG";
    document.write('<img src="DND3.jpg">');
    // result.innerHTML="<img src1=\"html/Available1.png\" />";

}
function D3(){
    // document.getElementById("A1-button").src1="Available1.JPG";
    document.write('<img src="DND2.jpg">');
    // result.innerHTML="<img src1=\"html/Available1.png\" />";

}
function D4(){
    // document.getElementById("A1-button").src1="Available1.JPG";
    document.write('<img src="DND4.jpg">');
    // result.innerHTML="<img src1=\"html/Available1.png\" />";

}
function H1(){
    // document.getElementById("A1-button").src1="Available1.JPG";
    document.write('<img src="Available3.jpg">');
    // result.innerHTML="<img src1=\"html/Available1.png\" />";

}
function H2(){
    // document.getElementById("A1-button").src1="Available1.JPG";
    document.write('<img src="Available2.jpg">');
    // result.innerHTML="<img src1=\"html/Available1.png\" />";

}
// function H3(){
//     // document.getElementById("A1-button").src1="Available1.JPG";
//     document.write('<img src="Available3.jpg">');
//     // result.innerHTML="<img src1=\"html/Available1.png\" />";
//
// }
function H4(){
    // document.getElementById("A1-button").src1="Available1.JPG";
    document.write('<img src="Available4.jpg">');
    // result.innerHTML="<img src1=\"html/Available1.png\" />";

}
function H5(){
    // document.getElementById("A1-button").src1="Available1.JPG";
    document.write('<img src="Available1.jpg">');
    // result.innerHTML="<img src1=\"html/Available1.png\" />";

}
