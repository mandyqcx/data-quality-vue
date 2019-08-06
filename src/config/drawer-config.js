export default [
  {
    items: [
      {
        title: '数据质量报表',
        icon: 'mdi-lan',
        route: { name: 'controlHouse' },
        subItems: [
          { title: '数据有效报表', icon: 'mdi-account', route: { name: 'validData' } },
          { title: '网站设置', icon: 'mdi-settings' },
        ],
      },
    ],
  },
/*  {
    items: [
      {
        title: '设置',
        icon: 'mdi-settings',
        subItems: [
          { title: '用户设置', icon: 'mdi-account', route: { name: 'login' } },
          { title: '网站设置', icon: 'mdi-settings' },
        ],
      },
    ],
  }, */
];
