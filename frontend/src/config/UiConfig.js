export const APP_INFO = {
    title: 'Climbing',
    domain: 'Climbing.com'
};

export const MAIN_HEADER_CONFIG = {
    // 메인 헤더(네비바 위) 이미지 유무
    headerImg: false
};

export const NAV_BAR_CONFIG = {
    // 메뉴 바 사이즈 (fluid: width = 100%)
    isFluid: true,
    // 로고 유무
    navLogo: true,
    // 로고 스타일 (메뉴바 높이)
    navLogoStyle: {
        height: '25px',
    },
    // 배경 색
    navBg: 'grey',
    // 메뉴 위치 정렬 (right, left, center)
    navAlign: 'right'
};

export const FOOTER_CONFIG = {
    // 배경 색 (dark, light, secondary)
    footerTheme: 'secondary',
    description: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis molestias. ',
    links: [
        {
            title: 'Links',
            items: [
                { url: '#', label: 'Link 1' },
                { url: '#', label: 'Link 2' },
                { url: '#', label: 'Link 3' },
                { url: '#', label: 'Link 4' },
            ]
        },
        {
            title: 'Links',
            items: [
                { url: '#', label: 'Link 1' },
                { url: '#', label: 'Link 2' },
                { url: '#', label: 'Link 3' },
                { url: '#', label: 'Link 4' },
            ]
        },
    ]
};
