const headerMenuList = [
    {
        name: 'هتل',
        subMenu: false
    },
    {
        name: 'تور داخلی',
        subMenu: true,
        subMenuList: [
            'تهران',
            'مشهد',
            'شیراز',
            'اصفهان',
            'تبریز'
        ]
    },
    {
        name: 'تور خارجی',
        subMenu: true,
        subMenuList: [
            'آنتالیا',
            'دبی',
            'مالزی',
            'نیویورک',
            'پاریس'
        ]
    },
    {
        name: 'بیمه مسافرتی',
        subMenu: false
    },
    {
        name: 'سفرنامه',
        subMenu: false
    }
];

export default headerMenuList;