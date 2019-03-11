export interface SideListItem {
  context: string,
  path: string,
  index: number
}

// 如果有权限限制，过滤权限菜单
const routeList: SideListItem[] = [
  {
    context: 'javascript',
    path: '/index',
    index: 0,
  },
  {
    context: 'typescript',
    path: '/index/posters',
    index: 1,
  },
  {
    context: 'html & css & css3',
    path: '/index/creste',
    index: 2,
  },
  {
    context: 'React & nodejs',
    path: '/index/creste',
    index: 3,
  }
];

export type ThemeColorType = {
  themeColor: string,
  themeDeepColor: string
};

// 主题色
const themeColorList: ThemeColorType[] = [
  {
    themeColor: '#fed518',
    themeDeepColor: '#d4b106'
  },
  {
    themeColor: '#ff4d4f',
    themeDeepColor: '#cf1322'
  },
  {
    themeColor: '#69c0ff',
    themeDeepColor: '#096dd9'
  },
  {
    themeColor: '#9254de',
    themeDeepColor: '#531dab'
  },
  {
    themeColor: '#f759ab',
    themeDeepColor: '#eb2f96'
  },
  {
    themeColor: '#9254de',
    themeDeepColor: '#531dab'
  },
  {
    themeColor: '#2f54eb',
    themeDeepColor: '#1d39c4'
  },
  {
    themeColor: '#52c41a',
    themeDeepColor: '#237804'
  },
  {
    themeColor: '#13c2c2',
    themeDeepColor: '#006d75'
  },
  {
    themeColor: '#fa8c16',
    themeDeepColor: '#ad4e00'
  }
];


export {
  routeList,
  themeColorList
}
