import { header} from './modules/header';
import {content} from './modules/content';
import {footer} from './modules/footer';

const $ = require('jquery');
const body = $('body');
body.append(header, content, footer);


