export interface SideListItem {
  context: string,
  path: string,
  index: number
}

// 如果有权限限制，过滤权限菜单
const routeList: SideListItem[] = [
  {
    context: 'javascript',
    path: '/articleList',
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
    context: 'React',
    path: '/index/creste',
    index: 3,
  }
];

export type themeLightColorType = {
  themeLightColor: string,
  themeDeepColor: string
};

// 主题色
const themeColorList: themeLightColorType[] = [
  {
    themeLightColor: '#fed518',
    themeDeepColor: '#d4b106'
  },
  {
    themeLightColor: '#ff4d4f',
    themeDeepColor: '#cf1322'
  },
  {
    themeLightColor: '#69c0ff',
    themeDeepColor: '#096dd9'
  },
  {
    themeLightColor: '#9254de',
    themeDeepColor: '#531dab'
  },
  {
    themeLightColor: '#f759ab',
    themeDeepColor: '#eb2f96'
  },
  {
    themeLightColor: '#9254de',
    themeDeepColor: '#531dab'
  },
  {
    themeLightColor: '#2f54eb',
    themeDeepColor: '#1d39c4'
  },
  {
    themeLightColor: '#52c41a',
    themeDeepColor: '#237804'
  },
  {
    themeLightColor: '#13c2c2',
    themeDeepColor: '#006d75'
  },
  {
    themeLightColor: '#fa8c16',
    themeDeepColor: '#ad4e00'
  }
];


export {
  routeList,
  themeColorList
}
