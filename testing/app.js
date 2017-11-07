//1
const test = (input, result) => {
	if(input === result) console.log('Success');
	else console.error(`${input} not equals to ${result}`);
};

const sum = (a = 0, b = 0) => a + b;
const first = 2; const second = 3;

test(sum(first, second), first + second);
test(sum(first), first);


//2
const testObj = {
	equal(input, result) {
		if(input === result) console.log('Success');
		else console.error(`${input} not equal to ${result}`);
	},
	defind(input) {
		if(input !== undefined) console.log("Success");
		else console.elog(`${input} is not defind`);
	}
}

//3

const msg = text => alert(text);
const originAlert = alert;

window.alert = (text) => {
  window.alert.wasCalled = true;
  window.alert.argument = text;
  // originAlert(text);
};
msg('test');
test(alert.wasCalled).equal(true);
test(alert.argument).equal('test');

//window.alert = originAlert;