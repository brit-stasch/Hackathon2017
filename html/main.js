
$(document).ready(function(){
	$("#set-status").hide();
	$("#status").hide();


	$("#set-status-button").click(function() {
		$("#set-status").show();
	});

	function showOptions(buttonValue){
		// show the quick status options for that particular away message
	}

	function selectButton(button)
	{
		button.siblings().removeClass("selected");
		button.addClass("selected");
		switch(button.value) {
			case "A":
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