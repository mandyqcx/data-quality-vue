const connectionTypes = {
  ONLINE: {
    text: '在线连接',
    value: 'ONLINE',
    icon: 'mdi-link',
    color: 'primary',
  },
  BROKEN: {
    text: '已断开连接',
    value: 'BROKEN',
    icon: 'mdi-link-off',
    color: 'error',
  },
  UN_MAPPING: {
    text: '未匹配连接',
    value: 'UN_MAPPING',
    icon: 'mdi-progress-alert',
    color: 'warning',
  },
};

const subsystems = {
  OWL: {
    text: '猫头鹰',
  },
  CHR: {
    text: '巡城马',
  },
  WDP: {
    text: '白海豚',
  },
};

const snackbarTypes = {
  OPS_SUCCESS: {
    color: 'success',
    text: '操作成功',
    icon: 'mdi-check-circle',
  },
  OPS_FAIL: {
    color: 'error',
    text: '操作失败',
    icon: 'mdi-close-circle',
  },
  REFRESH_SUCCESS: {
    color: 'success',
    text: '刷新成功',
    icon: 'mdi-check-circle',
  },
};

const sensorDataTypes = {
  md: {
    text: '管理数据',
    color: 'info',
  },
  rtd: {
    text: '实时数据',
    color: 'info',
  },
  hd_clean: {
    text: '历史干净数据',
    color: 'success',
  },
  hd_dirty: {
    text: '历史脏数据',
    color: 'warning',
  },
  error: {
    text: '错误数据',
    color: 'error',
  },
  others: {
    text: '其他数据',
  },
};

const cnTypes = {
  2011: {
    text: '实时包',
    color: 'primary',
  },
  2021: {
    text: '实时开关量包',
    color: 'primary',
  },
  2051: {
    text: '历史包',
    color: 'primary darken-1',
  },
  2081: {
    text: '补足包',
    color: 'primary darken-1',
  },
  8011: {
    text: '登录包',
    color: 'info',
  },
  8013: {
    text: '心跳包',
    color: 'info',
  },
  8015: {
    text: '休眠包',
    color: 'info',
  },
  DEFAULT: {
    text: '未知',
    color: 'grey darken-1',
  },
};

export default {
  connectionTypes,
  sensorDataTypes,
  cnTypes,
  snackbarTypes,
  subsystems,
};
