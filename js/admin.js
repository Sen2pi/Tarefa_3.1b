// Admin Dashboard functionality
document.addEventListener('DOMContentLoaded', function() {
    // Check if user is logged in
    if (!localStorage.getItem('adminLoggedIn')) {
        window.location.href = 'login.html';
        return;
    }

    // Navigation functionality
    const navLinks = document.querySelectorAll('.nav-link, .sidebar-link');
    const sections = document.querySelectorAll('.content-section');

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

    // Add button functionality
    const addButtons = document.querySelectorAll('.btn-add');
    addButtons.forEach(button => {
        button.addEventListener('click', function() {
            const section = this.closest('.content-section').id;
            alert(`Funcionalidade para adicionar novo registo em ${section} será implementada`);
        });
    });

    // Edit button functionality
    const editButtons = document.querySelectorAll('.btn-edit');
    editButtons.forEach(button => {
        button.addEventListener('click', function() {
            const row = this.closest('tr');
            const id = row.cells[0].textContent;
            alert(`Editar registo com ID: ${id}`);
        });
    });

    // Delete button functionality
    const deleteButtons = document.querySelectorAll('.btn-delete');
    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (confirm('Tem certeza que deseja eliminar este registo?')) {
                const row = this.closest('tr');
                const id = row.cells[0].textContent;
                alert(`Registo com ID: ${id} eliminado com sucesso`);
                row.remove();
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
});