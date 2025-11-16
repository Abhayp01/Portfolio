document.addEventListener("DOMContentLoaded", function () {
  
  // Set today's date automatically
  const today = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  document.getElementById("blogDate").value = today.toLocaleDateString("en-US", options);

  const generateBtn = document.getElementById("generateBtn");
  const outputSection = document.getElementById("outputSection");
  const outputHtml = document.getElementById("outputHtml");
  const fileNameSuggestion = document.getElementById("fileNameSuggestion");

  generateBtn.addEventListener("click", function () {
    const title = document.getElementById("blogTitle").value;
    const date = document.getElementById("blogDate").value;
    const imageUrl = document.getElementById("blogImage").value;
    const content = document.getElementById("blogContent").value;

    // Create a "slug" for the file name
    const slug = title.toLowerCase()
                      .replace(/\s+/g, '-')           // Replace spaces with -
                      .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
                      .replace(/\-\-+/g, '-')         // Replace multiple - with single -
                      .replace(/^-+/, '')             // Trim - from start
                      .replace(/-+$/, '');            // Trim - from end

    fileNameSuggestion.textContent = `${slug}.html`;

    const template = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>${title} | Abhay Prajapati</title>
  <meta name="description" content="Blog post by Abhay Prajapati: ${title}">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
  
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
    integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  
  <script defer src="https://use.fontawesome.com/releases/v5.0.7/js/all.js"></script>
  
  <link rel="stylesheet" href="../css/styles.css">
  <link rel="stylesheet" href="../css/blog.css">
</head>

<body>

  <nav class="navbar navbar-expand-lg navbar-dark sticky-top navbar-glass">
    <div class="container">
      <a class="navbar-brand" href="../index.html#hero">&lt;A / P&gt;</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="../index.html#projects">Projects</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../index.html#blog">Blog</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../index.html#skill">Skills</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../index.html#profiles">Profiles</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../index.html#footer">Contact</a>
          </li>
          <li class="nav-item">
            <a class="nav-link btn btn-outline-accent" href="https://drive.google.com/file/d/1Nr3i-iFp5-Ni1eIChs_3qnszPVeY0oHf/view?usp=sharing" target="_blank">Resume</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <main class="blog-post-page">
    <article class="container blog-post-container">
      <header class="blog-post-header">
        ${imageUrl ? `<img src="${imageUrl}" alt="${title}" class="blog-post-hero-image">` : ''}
        <h1 class="blog-post-title">${title}</h1>
        <p class="blog-meta">Posted on ${date} by Abhay Prajapati</p>
      </header>

      <div class="blog-post-content">
        ${content}
        <hr>
        <a href="../index.html#blog" class="btn btn-outline-accent">&larr; Back to All Posts</a>
      </div>
    </article>
  </main>

  <footer class="white-section" id="footer">
    <div class="container text-center py-5">
      <div class="social-links mb-3">
        <a href="https://www.linkedin.com/in/abhay-prajapati-1b43a322a/" class="social-icon mx-2" target="_blank"><i class="fab fa-linkedin fa-2x"></i></a>
        <a href="https://github.com/Abhayp01" class="social-icon mx-2" target="_blank"><i class="fab fa-github fa-2x"></i></a>
        <a href="mailto:prajapatiabhay2003@gmail.com" class="social-icon mx-2"><i class="fas fa-envelope fa-2x"></i></a>
      </div>
      <p class="footer-text">© Copyright 2025 Abhay Prajapati</p>
    </div>
  </footer>

  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</body>
</html>
    `;

    outputHtml.value = template.trim();
    outputSection.style.display = "block";
    outputHtml.focus();
    outputHtml.select();
  });

  // Copy to clipboard
  const copyBtn = document.getElementById("copyBtn");
  copyBtn.addEventListener("click", function () {
    outputHtml.select();
    document.execCommand("copy");
    copyBtn.textContent = "Copied!";
    setTimeout(() => { copyBtn.textContent = "Copy to Clipboard"; }, 2000);
  });
});