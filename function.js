
// 动态计算间距
function adjustSpacing() {
    const navHeight = document.querySelector('.navbar').offsetHeight;
    document.documentElement.style.setProperty('--nav-height', `${navHeight}px`);
}

window.addEventListener('resize', adjustSpacing);
window.addEventListener('load', adjustSpacing);

