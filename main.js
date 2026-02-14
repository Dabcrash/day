onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = "Happy Valentie's Day 💓".split('');
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.textContent += titles[index]; 
        index++;
        setTimeout(appendTitle, 300);
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};
