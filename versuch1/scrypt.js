/* Funktionalität MUST */

function execute_length(clicked) {
	if (document.forms && document.forms['conv_length']) {
		var decimals = getCookie('default_decimals');
		if (decimals == null) decimals = 2;
		convert(document.forms['conv_length'].amount.value, document.forms['conv_length'].unit_from.value, document.forms['conv_length'].unit_to.value, 'div_length', true, decimals);
	} else {
		if (clicked) alert('Converter error. Conversion not supported by browser.');
	}
}
dRf(function(){
execute_length(false);
});