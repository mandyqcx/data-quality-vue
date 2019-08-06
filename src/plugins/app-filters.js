import Vue from 'vue';

import dict from '@/dict';

Vue.filter('displayNull', val => (val !== null ? val : '无'));
Vue.filter('displayNumberComma', val => (val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')));

Vue.filter('displayConnectionType', val => (dict.connectionTypes[val].text));
Vue.filter('displaySensorDataType', val => (dict.sensorDataTypes[val].text));
Vue.filter('displayCnType', (val) => {
  if (!val.msgData) {
    return dict.cnTypes.DEFAULT.text;
  }
  if (!val.msgData.cn) {
    return dict.cnTypes.DEFAULT.text;
  }
  if (dict.cnTypes[val.msgData.cn]) {
    return `${dict.cnTypes[val.msgData.cn].text} - ${val.msgData.cn}`;
  }
  return `${dict.cnTypes.DEFAULT.text} - ${val.msgData.cn}`;
});
