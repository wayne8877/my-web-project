// 启用 Swiper 的 Autoplay 模块（如果 Swiper.use 存在）
Swiper.use && Swiper.use([Swiper.Autoplay]);

document.addEventListener('DOMContentLoaded', function() {
    // ...existing code...

    // 语言切换功能
    let currentLang = 'zh'; // 默认中文
    const languageToggle = document.getElementById('languageToggle');

    // 初始化页面文本
    updatePageText(currentLang);

    // 语言切换按钮点击事件
    languageToggle.addEventListener('click', function() {
        currentLang = currentLang === 'zh' ? 'en' : 'zh';
        updatePageText(currentLang);
        // 更新按钮文本
        languageToggle.textContent = currentLang === 'zh' ? 'EN | 中文' : '中文 | EN';
    });

    // 更新页面所有需要翻译的文本
    function updatePageText(lang) {
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                if (element.tagName === 'INPUT') {
                    element.placeholder = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });
    }

    // ...existing code...
});

    // 表单验证
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', validateForm);
    }

// 表单验证函数
function validateForm(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (!name || !email || !message) {
        alert('请填写所有必填字段');
        return false;
    }
    
    if (!validateEmail(email)) {
        alert('请输入有效的电子邮件地址');
        return false;
    }
    
    // TODO: 处理表单提交
    console.log('表单提交成功', { name, email, message });
    event.target.reset();
    alert('感谢您的留言，我们会尽快与您联系！');
}

// 邮箱验证函数
function validateEmail(email) {
    if (typeof email !== 'string') {
        return false;
    }
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    return re.test(email);
}

var swiper = new Swiper('.main-slider', {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 3000, // 每3秒切换一张
    disableOnInteraction: false // 用户操作后仍然自动播放
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});