// Interactive functions
        function showAlert(action) {
            const loading = document.getElementById('loading');
            loading.style.display = 'block';

            setTimeout(() => {
                loading.style.display = 'none';
                alert(`${action} functionality would be implemented here!`);
            }, 1000);
        }

        function editProduct(productName) {
            const loading = document.getElementById('loading');
            loading.style.display = 'block';

            setTimeout(() => {
                loading.style.display = 'none';
                alert(`Editing ${productName}... This would open the product editor.`);
            }, 800);
        }

        // Animate numbers on page load
        function animateNumbers() {
            const numbers = [
                { id: 'totalOrders', target: 127 },
                { id: 'revenue', target: 2450, prefix: 'RM' },
                { id: 'products', target: 89 },
                { id: 'customers', target: 56 }
            ];

            numbers.forEach(num => {
                const element = document.getElementById(num.id);
                let current = 0;
                const increment = num.target / 50;

                const timer = setInterval(() => {
                    current += increment;
                    if (current >= num.target) {
                        current = num.target;
                        clearInterval(timer);
                    }

                    const displayValue = num.prefix
                        ? `${num.prefix}${Math.round(current).toLocaleString()}`
                        : Math.round(current).toString();

                    element.textContent = displayValue;
                }, 30);
            });
        }

        // Initialize animations when page loads
        window.addEventListener('load', () => {
            setTimeout(animateNumbers, 500);
        });

        // Add smooth scrolling to navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Add parallax effect to hero section
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = document.querySelector('.hero::before');
            if (parallax) {
                const speed = scrolled * 0.5;
            }
        });