const builder = require('./../elementBuilder');
require('./footer.scss');
export const footer = () => {
	const content = '<p> <a href="#"> Курсы </a> EasyCode 2017 (c)</p>';
	return builder('footer', content, 'footer');
};