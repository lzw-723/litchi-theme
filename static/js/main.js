function isScrollable() {
    // 获取页面的高度
    let pageHeight = document.documentElement.scrollHeight;
    // 获取窗口的高度
    let windowHeight = window.innerHeight;
    return pageHeight > windowHeight;
}

document.addEventListener('alpine:init', () => {
    Alpine.store('showFooter', isScrollable());
})
