export default [
  {
    _name: 'CSidebarNav',
    _children: [
      // {
      //   _name: 'CSidebarNavItem',
      //   name: '대시보드',
      //   to: '/ㅊ',
      //   icon: 'cil-speedometer',
      //   badge: {
      //     color: 'primary',
      //     text: 'update'
      //   }
      // },
      { _name: 'CSidebarNavTitle', _children: ['대시보드'] },
      { _name: 'CSidebarNavItem', name: '대시보드',  to: '/dashboard', icon: 'cilTask' },
      { _name: 'CSidebarNavTitle', _children: ['주문관리'] },
      { _name: 'CSidebarNavItem', name: '주문상품관리',  to: '', icon: 'cilArrowThickFromLeft' },
      { _name: 'CSidebarNavItem', name: '출고상품관리', to: '', icon: 'cil-arrow-thick-from-right' },
      { _name: 'CSidebarNavItem', name: '이벤트상품관리', to: '', icon: 'cil-badge' },
      
      // { _name: 'CSidebarNavTitle', _children: ['상품관리'] },
      // { _name: 'CSidebarNavDropdown', name: '일반상품', route: '/base', icon: 'cil-puzzle',
      //   items: [
      //     {
      //       name: '의류',
      //       to: ''
      //     },
      //     {
      //       name: '폰케이스',
      //       to: ''
      //     },
      //     {
      //       name: '악세서리',
      //       to: ''
      //     },
      //     {
      //       name: '기타',
      //       to: ''
      //     }
      //   ]
      // },
      // {
      //   _name: 'CSidebarNavItem',
      //   name: '클레이풀 어드민 바로가기',
      //   href: 'https://app.clayful.io/action/user/signin',
      //   icon: { name: 'cil-cloud-download', class: 'text-white' },
      //   _class: 'bg-success text-white',
      //   target: '_blank'
      // },
    ]
  }
]