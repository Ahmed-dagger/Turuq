$(document).ready(function () {
    $('#sidebarCollapseBtn').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').removeClass('active');
    });
});


/*
let currentRowGallery = 0;
const rowsGallery = ['secondRowgallery', 'thirdRowgallery'];

document.getElementById('loadmoregallery').addEventListener('click', function() {
    if (currentRowGallery < rowsGallery.length) {
        document.getElementById(rowsGallery[currentRowGallery]).style.display = 'flex';
        currentRowGallery++;
        document.getElementById('showlessgallery').style.display = 'inline-block';
    }
    if (currentRowGallery === rowsGallery.length) {
        this.style.display = 'none';
        
        

    }
});

document.getElementById('showlessgallery').addEventListener('click', function() {
    if (currentRowGallery > 0) {
        currentRowGallery--;
        document.getElementById(rowsGallery[currentRowGallery]).style.display = 'none';
    }
    if (currentRowGallery < rowsGallery.length) {
        document.getElementById('loadmoregallery').style.display = 'inline-block';
    }
    if (currentRowGallery === 0) {
        this.style.display = 'none';
    }
});


let currentRowCourses = 0;
const rowsCourses = ['secondRowCourses', 'thirdRowCourses'];

document.getElementById('loadmoreCourses').addEventListener('click', function() {
    if (currentRowCourses < rowsCourses.length) {
        document.getElementById(rowsCourses[currentRowCourses]).style.display = 'flex';
        currentRowCourses++;
        document.getElementById('showlessCourses').style.display = 'inline-block';
    }
    if (currentRowCourses === rowsCourses.length) {
        this.style.display = 'none';
        

    }
});

document.getElementById('showlessCourses').addEventListener('click', function() {
    if (currentRowCourses > 0) {
        currentRowCourses--;
        document.getElementById(rowsCourses[currentRowCourses]).style.display = 'none';
    }
    if (currentRowCourses < rowsCourses.length) {
        document.getElementById('loadmoreCourses').style.display = 'inline-block';
    }
    if (currentRowCourses === 0) {
        this.style.display = 'none';
    }
});*/


document.addEventListener('DOMContentLoaded', function() {
    const loadMoreButton = document.getElementById('loadmoregallery');
    const showLessButton = document.getElementById('showlessgallery');
    const loadingDiv = document.getElementById('loading');
    const galleries = document.querySelectorAll('.row.gallery');
  
    let visibleGalleryCount = 1;
  
    function showLoading() {
      loadingDiv.style.opacity = '1';
      loadingDiv.style.visibility = 'visible';
      loadingDiv.style.position = 'relative'
    }
  
    function hideLoading() {
      loadingDiv.style.opacity = '0';
      loadingDiv.style.visibility = 'hidden';
      loadingDiv.style.position = 'absolute';
    }
  
    loadMoreButton.addEventListener('click', function() {
      showLoading();
      setTimeout(() => {
        if (visibleGalleryCount < galleries.length) {
            
            galleries[visibleGalleryCount].classList.add('show');
          visibleGalleryCount++;
          showLessButton.style.display = 'inline-block';
          
        }

        if (visibleGalleryCount === galleries.length) {
            loadMoreButton.style.display = 'none';
          }
        hideLoading();
      }, 1000); // Simulate loading time
    });
  
    showLessButton.addEventListener('click', function() {
      if (visibleGalleryCount >= 1) {
        visibleGalleryCount--;
        
        galleries[visibleGalleryCount].classList.remove('show');
        loadMoreButton.style.display = 'inline-block';
        
      }

      if (visibleGalleryCount < galleries.length) {
        loadMoreButton.style.display = 'inline-block';
      }
      if (visibleGalleryCount === 1) {
        
        showLessButton.style.display = 'none';
      }
    });

    galleries[0].classList.add('show');
  });




  const buttons = document.querySelectorAll('.category-Btn');
  const contents = document.querySelectorAll('.content');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
        const contentId = button.dataset.contentId;

        // Deactivate all buttons
        buttons.forEach(b => b.classList.remove('active'));

        // Activate clicked button
        button.classList.add('active');

        // Hide all content
        contents.forEach(container => {container.style.visibility = 'hidden'; container.style.opacity = '0'; container.style.position = 'absolute'});

        // Show the corresponding content
        const tragetcontent = document.getElementById(contentId);
        setTimeout(() => {
          tragetcontent.style.opacity = '1';
          tragetcontent.style.visibility = 'visible';
          tragetcontent.style.position ='relative';
      }, 50);

    });
});


  