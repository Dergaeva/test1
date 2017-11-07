const builder = require('./../elementBuilder');
require('./header.scss');

export const header = () => {
	const content = '<a href="/">Logo</a><p>Congratulations!!!</p>';
	return builder('header', content, 'header');
};