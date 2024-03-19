$(document).ready(function () {

    // Your existing code...

    // fetch projects start
    function getProjects() {
        return fetch("projects.json")
            .then(response => response.json())
            .then(data => {
                return data
            });
    }

    function showProjects(projects) {
        let projectsContainer = document.querySelector(".work .box-container");
        let projectsHTML = "";
        projects.forEach(project => {
            projectsHTML += `
            <div class="content">
                <div class="tag">
                    <h3>${project.name}</h3>
                </div>
                <div class="desc">
                    <p>${project.desc}</p>
                    <div class="btns">
                        <a href="${project.links.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
                    </div>
                </div>
            </div>`;
        });
        projectsContainer.innerHTML = projectsHTML;

        // Initialize Isotope after updating the projects container
        var $grid = $('.box-container').isotope({
            itemSelector: '.grid-item',
            layoutMode: 'fitRows',
            masonry: {
                columnWidth: 200
            }
        });

        // Filter items on button click
        $('.button-group').on('click', 'button', function () {
            $('.button-group').find('.is-checked').removeClass('is-checked');
            $(this).addClass('is-checked');
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });
    }

    getProjects().then(data => {
        showProjects(data);
    });
    // fetch projects end

    // Start of Tawk.to Live Chat
    // Your Tawk.to Live Chat code...
    // End of Tawk.to Live Chat

    // Disable developer mode
    document.onkeydown = function (e) {
        if (e.keyCode == 123) {
            return false;
        }
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
            return false;
        }
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
            return false;
        }
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
            return false;
        }
        if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
            return false;
        }
    }
});
