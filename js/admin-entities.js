// Admin Dashboard functionality
document.addEventListener('DOMContentLoaded', function() {
    // Check if user is logged in
    if (!localStorage.getItem('adminLoggedIn')) {
        window.location.href = 'login.html';
        return;
    }

    // Navigation functionality for main dashboard
    const navLinks = document.querySelectorAll('.nav-link, .sidebar-link');
    const sections = document.querySelectorAll('.content-section');

    if (navLinks.length > 0) {
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href').substring(1);
                
                // Remove active class from all links and sections
                navLinks.forEach(l => l.classList.remove('active'));
                sections.forEach(s => s.classList.remove('active'));
                
                // Add active class to clicked link and corresponding section
                this.classList.add('active');
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    targetSection.classList.add('active');
                }
                
                // Also activate corresponding nav link in other navigation
                const correspondingLink = document.querySelector(`[href="#${targetId}"]`);
                if (correspondingLink && correspondingLink !== this) {
                    correspondingLink.classList.add('active');
                }
            });
        });
    }

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            document.body.classList.toggle('mobile-menu-open');
        });
    }

    // Add button functionality for new entity pages
    const addButtons = document.querySelectorAll('.btn-add');
    addButtons.forEach(button => {
        button.addEventListener('click', function() {
            const currentPage = window.location.pathname;
            
            if (currentPage.includes('especialistas.html')) {
                window.location.href = 'novo-especialista.html';
            } else if (currentPage.includes('patrocinadores.html')) {
                window.location.href = 'novo-patrocinador.html';
            } else {
                // For dashboard pages
                const section = this.closest('.content-section');
                if (section) {
                    const sectionId = section.id;
                    if (sectionId === 'especialistas') {
                        window.location.href = 'novo-especialista.html';
                    } else if (sectionId === 'patrocinadores') {
                        window.location.href = 'novo-patrocinador.html';
                    } else {
                        alert(`Funcionalidade para adicionar novo registo em ${sectionId} será implementada`);
                    }
                }
            }
        });
    });

    // View button functionality
    const viewButtons = document.querySelectorAll('.btn-view');
    viewButtons.forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.expert-card, .sponsor-card');
            const name = card.querySelector('h3').textContent;
            alert(`Visualizar detalhes de: ${name}`);
        });
    });

    // Edit button functionality
    const editButtons = document.querySelectorAll('.btn-edit');
    editButtons.forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.expert-card, .sponsor-card, tr');
            let id, name;
            
            if (card.tagName === 'TR') {
                id = card.cells[0].textContent;
                name = card.cells[1].textContent;
            } else {
                // For cards
                const currentPage = window.location.pathname;
                if (currentPage.includes('especialistas.html')) {
                    window.location.href = 'novo-especialista.html';
                    return;
                } else if (currentPage.includes('patrocinadores.html')) {
                    window.location.href = 'novo-patrocinador.html';
                    return;
                } else {
                    name = card.querySelector('h3').textContent;
                    alert(`Editar: ${name}`);
                    return;
                }
            }
            
            alert(`Editar registo: ${name} (ID: ${id})`);
        });
    });

    // Delete button functionality
    const deleteButtons = document.querySelectorAll('.btn-delete');
    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (confirm('Tem certeza que deseja eliminar este registo?')) {
                const card = this.closest('.expert-card, .sponsor-card, tr');
                let id, name;
                
                if (card.tagName === 'TR') {
                    id = card.cells[0].textContent;
                    name = card.cells[1].textContent;
                    alert(`Registo com ID: ${id} eliminado com sucesso`);
                    card.remove();
                } else {
                    // For cards
                    name = card.querySelector('h3').textContent;
                    alert(`${name} eliminado com sucesso`);
                    card.remove();
                }
            }
        });
    });

    // Form submission for new entities
    const expertForm = document.getElementById('expert-form');
    if (expertForm) {
        expertForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const expertData = Object.fromEntries(formData);
            
            alert(`Especialista ${expertData.name} criado com sucesso!`);
            window.location.href = 'especialistas.html';
        });
    }

    const sponsorForm = document.getElementById('sponsor-form');
    if (sponsorForm) {
        sponsorForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const sponsorData = Object.fromEntries(formData);
            
            alert(`Patrocinador ${sponsorData.name} criado com sucesso!`);
            window.location.href = 'patrocinadores.html';
        });
    }

    // Filter functionality
    const filterButtons = document.querySelectorAll('.btn-filter');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Funcionalidade de filtro será implementada');
        });
    });

    // Pagination functionality
    const paginationButtons = document.querySelectorAll('.btn-prev, .btn-next');
    paginationButtons.forEach(button => {
        button.addEventListener('click', function() {
            const pageInfo = this.parentElement.querySelector('.page-info');
            const currentText = pageInfo.textContent;
            const [current, total] = currentText.split('/').map(Number);
            
            if (this.classList.contains('btn-prev') && current > 1) {
                pageInfo.textContent = `${current - 1}/${total}`;
            } else if (this.classList.contains('btn-next') && current < total) {
                pageInfo.textContent = `${current + 1}/${total}`;
            }
        });
    });

    // Logout functionality
    const logoutLink = document.querySelector('.logout-link');
    if (logoutLink) {
        logoutLink.addEventListener('click', function(e) {
            e.preventDefault();
            localStorage.removeItem('adminLoggedIn');
            window.location.href = '../index.html';
        });
    }

    // Settings toggle
    const settingsToggle = document.querySelector('.settings-toggle');
    if (settingsToggle) {
        settingsToggle.addEventListener('click', function() {
            alert('Configurações serão implementadas');
        });
    }
});