// Efeito suave ao rolar para as seções
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animação ao rolar a página
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.service, .about-content');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Configuração inicial para animação
window.addEventListener('DOMContentLoaded', () => {
    const services = document.querySelectorAll('.service');
    const aboutContent = document.querySelector('.about-content');
    
    services.forEach(service => {
        service.style.opacity = '0';
        service.style.transform = 'translateY(20px)';
        service.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    aboutContent.style.opacity = '0';
    aboutContent.style.transform = 'translateY(20px)';
    aboutContent.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    
    // Forçar a animação inicial
    setTimeout(animateOnScroll, 100);
});

// Adicionar o evento de scroll
window.addEventListener('scroll', animateOnScroll);

// Substituir placeholders pelos seus dados reais
document.addEventListener('DOMContentLoaded', () => {
    // Substitua SEUNUMERO pelo seu número de WhatsApp com código do país (ex: 5511999999999)
    const whatsappLinks = document.querySelectorAll('a[href*="SEUNUMERO"]');
    whatsappLinks.forEach(link => {
        link.href = link.href.replace('SEUNUMERO', '5511999999999');
    });
    
    // Substitua SEUUSER pelo seu nome de usuário no Instagram
    const instagramLinks = document.querySelectorAll('a[href*="SEUUSER"]');
    instagramLinks.forEach(link => {
        link.href = link.href.replace('SEUUSER', 'seuusuario');
    });
});