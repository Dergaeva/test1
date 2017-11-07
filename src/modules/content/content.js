const builder = require('./../elementBuilder');
require('./content.scss');

export const content = () => {
  const content = '<p class="text">Когда вокруг все увлечены идеей гармоничного развития ребенка, как не потеряться в невероятном множестве различных авторских методик? Методики Н. Зайцева, В. Воскобовича, игры Никитина, Чаплыгина, Кюизенера и Дьенеша, развитие по Глену Доману и Монтессори, технологии Буракова и Бахтиной… Как выбрать ту единственную, которая устроит вас и вашего ребенка и не пропустить что-нибудь новое и интересное? В этом разделе мы будем делиться с вами новостями и рассказывать обо всем, что происходит в мире авторских методик развития.</p>' +
    '<div class="width1">10%</div>' +
    '<div class="width2">20%</div>' +
    '<div class="width3">30%</div>' +
    '<div class="width4">40%</div>' +
    '<div class="width5">50%</div>' +
    '<div class="width6">60%</div>' +
    '<div class="width7">70%</div>' +
    '<div class="width8">80%</div>' +
    '<div class="width9">90%</div>' +
    '<div class="width10">100%</div>'+
    '<ul>' +
    '<li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>' +
    '</ul>'+
    '<div class="foo"></div>';
  return builder('main', content, 'main');
};