const categoriesList = document.getElementById('categories');
const categoryItems = categoriesList.childNodes;

console.log('Number of categories:', categoryItems.length); 

categoryItems.forEach(item => {
  if (item.nodeType === 1) { // Check if the node is an element node
    const categoryTitle = item.firstElementChild.textContent;
    const categoryElements = item.lastElementChild.children.length;

    console.log('Category:', categoryTitle);
    console.log('Elements:', categoryElements);
  }
});
