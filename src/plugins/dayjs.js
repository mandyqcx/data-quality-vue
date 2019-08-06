import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import utc from 'dayjs/plugin/utc';
import 'dayjs/locale/zh-cn';

import Vue from 'vue';

dayjs.locale('zh-cn');

dayjs.extend(relativeTime);

dayjs.extend(utc);

Vue.prototype.$dayjs = dayjs;

export default dayjs;
