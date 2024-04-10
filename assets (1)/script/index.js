var indexValue = 1;
        showImg(indexValue);
        
        function btm_slide(e) {
            showImg(indexValue = e);
        }
        
        function bside_slide(e) {
            showImg(indexValue += e);
        }
        
        function showImg(e) {
            var i;
            const img = document.querySelectorAll('.images img');
            const sliders = document.querySelectorAll('.btm-sliders span');
            if (e > img.length) {
                indexValue = 1;
            }
            if (e < 1) {
                indexValue = img.length;
            }
            for (i = 0; i < img.length; i++) {
                img[i].style.display = "none";
            }
            for (i = 0; i < sliders.length; i++) {
                sliders[i].style.background = "rgba(87, 83, 83, 0.5)";
            }
            img[indexValue - 1].style.display = "block";
            sliders[indexValue - 1].style.background = "white";
        }

        document.addEventListener('DOMContentLoaded', function() {
            var dropdown = document.querySelector('.dropdown');
            var dt=document.querySelector('.dt1')
            var submenu = dropdown.querySelector('ul');
        
            
            dropdown.addEventListener('mouseenter', function() {
                submenu.style = ' display:block'; 
                dt.style='color:#f57224';
                
            });
        
            
            submenu.addEventListener('mouseleave', function() {
                submenu.style.display = 'none'; 
                dt.style="color:#757575";
            });
        
            
            function toggleDropdown() {
                var isVisible = window.getComputedStyle(submenu).display !== 'none';
        
                
                if (!isVisible) {
                    submenu.style.display = 'block';
                } else {
                    submenu.style.display = 'none';
                }
            }
        
            
            dropdown.addEventListener('click', toggleDropdown);
        
            
            submenu.addEventListener('mouseleave', function() {
                submenu.dataset.clicked = 'false';
            });
        });
        document.addEventListener('DOMContentLoaded', function() {
            var dropdown = document.querySelector('.dropdown2');
            var dt=document.querySelector('.dd2')
            var submenu = dropdown.querySelector('ul');
        
            
            dropdown.addEventListener('mouseenter', function() {
                submenu.style = ' display:block'; 
                dt.style='color:#f57224';
                
            });
        
            
            submenu.addEventListener('mouseleave', function() {
                submenu.style.display = 'none'; 
                dt.style="color:#757575";
            });
        
            
            function toggleDropdown() {
                var isVisible = window.getComputedStyle(submenu).display !== 'none';
        
                
                if (!isVisible) {
                    submenu.style.display = 'block';
                } else {
                    submenu.style.display = 'none';
                }
            }
        
            
            dropdown.addEventListener('click', toggleDropdown);
        
            
            submenu.addEventListener('mouseleave', function() {
                submenu.dataset.clicked = 'false';
            });
        });
        

