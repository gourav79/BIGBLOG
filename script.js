// Dark mode toggle
const toggleSwitch = document.getElementById('dark-mode-toggle');
const body = document.body;

toggleSwitch.addEventListener('change', () => {
    body.classList.toggle('dark-mode');
});

// Blog data
const blogs = [
    {
        img: 'Image-1.svg',
        title: 'Blog Title 1',
        content: 'This is a preview of the first blog content. It provides a brief summary of the blog\'s main points...',
        link: 'blog-detail.html'
    },
    {
        img: 'Image-2.svg',
        title: 'Blog Title 2',
        content: 'This is a preview of the second blog content. It gives a glimpse of what the blog is about...',
        link: '#blog2'
    },
    {
        img: 'Image-3.svg',
        title: 'Blog Title 3',
        content: 'This is a preview of the third blog content. It introduces the topics covered in the blog...',
        link: '#blog3'
    },
    {
        img: 'Image-4.svg',
        title: 'Blog Title 4',
        content: 'This is a preview of the fourth blog content. It introduces more topics covered in the blog...',
        link: '#blog4'
    },
    {
        img: 'Image-5.svg',
        title: 'Blog Title 5',
        content: 'This is a preview of the fifth blog content. It introduces even more topics covered in the blog...',
        link: '#blog5'
    },
    {
        img: 'Image-6.svg',
        title: 'Blog Title 6',
        content: 'This is a preview of the sixth blog content. It delves into the details covered in the blog...',
        link: '#blog6'
    },
    {
        img: 'Image-7.svg',
        title: 'Blog Title 7',
        content: 'This is a preview of the seventh blog content. It introduces new topics covered in the blog...',
        link: '#blog7'
    },
    {
        img: 'Image-8.svg',
        title: 'Blog Title 8',
        content: 'This is a preview of the eighth blog content. It provides insights into the blog\'s subject matter...',
        link: '#blog8'
    },
    {
        img: 'Image-9.svg',
        title: 'Blog Title 9',
        content: 'This is a preview of the ninth blog content. It covers additional topics discussed in the blog...',
        link: '#blog9'
    },
    {
        img: 'Image-10.svg',
        title: 'Blog Title 10',
        content: 'This is a preview of the tenth blog content. It summarizes more information presented in the blog...',
        link: '#blog10'
    }
];

const blogsPerPage = 6;
let currentPage = 1;

// Render blogs for the current page
function renderBlogs(page) {
    const blogGrid = document.getElementById('blog-grid');
    blogGrid.innerHTML = '';

    const start = (page - 1) * blogsPerPage;
    const end = start + blogsPerPage;
    const pageBlogs = blogs.slice(start, end);

    pageBlogs.forEach(blog => {
        const blogBox = document.createElement('div');
        blogBox.classList.add('blog-box');
        blogBox.innerHTML = `
            <img src="${blog.img}" alt="${blog.title}">
            <div class="blog-content">
                <h3>${blog.title}</h3>
                <p>${blog.content}</p>
                <a href="${blog.link}" class="read-more">Read More</a>
            </div>
        `;
        blogGrid.appendChild(blogBox);
    });

    // Update button and page number states
    document.getElementById('prev-button').disabled = page === 1;
    document.getElementById('next-button').disabled = end >= blogs.length;
    updatePageNumbers();
}

// Update page numbers display
function updatePageNumbers() {
    const pageNumbers = document.getElementById('page-numbers');
    pageNumbers.innerHTML = '';

    const totalPages = Math.ceil(blogs.length / blogsPerPage);
    for (let i = 1; i <= totalPages; i++) {
        const pageNumber = document.createElement('span');
        pageNumber.classList.add('page-number');
        pageNumber.textContent = i;
        pageNumber.addEventListener('click', () => {
            currentPage = i;
            renderBlogs(currentPage);
        });
        if (i === currentPage) {
            pageNumber.style.fontWeight = 'bold';
        }
        pageNumbers.appendChild(pageNumber);
    }
}

// Handle pagination
document.getElementById('prev-button').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        renderBlogs(currentPage);
    }
});

document.getElementById('next-button').addEventListener('click', () => {
    if (currentPage * blogsPerPage < blogs.length) {
        currentPage++;
        renderBlogs(currentPage);
    }
});

// Initial render
renderBlogs(currentPage);
