const bookList = document.getElementById('bookstore');
const formInputs = document.querySelectorAll('form');
const addbook = formInputs[0][5];
const stockButton = document.getElementsByClassName('form-select');
const bookForm = document.getElementsByClassName('form');


addbook.addEventListener('click', (e) => {
    e.preventDefault();
    
    addToList();
    clearForm();

});

// creates the the books after form is completed and adds to List of Books. 

const addToList = () => {
    
    const newEntry = document.createElement('li');
    newEntry.setAttribute('class', 'book');
    newEntry.style['background'] = 'linear-gradient(rgb(92, 92, 216), skyblue)';

        const image = document.createElement('img');
        newEntry.appendChild(image);
        image.setAttribute('class','book__image');

        formInputs[0][2].value === '' ? image.setAttribute('src', 'https://cdn.pixabay.com/photo/2015/12/19/20/32/paper-1100254_640.jpg') : image.setAttribute('src', formInputs[0][2].value);

        const descriptionOfBook = document.createElement('div');
            newEntry.appendChild(descriptionOfBook);
            descriptionOfBook.setAttribute('class','booktemplate');

                const bookTitle = document.createElement('h2');
                descriptionOfBook.appendChild(bookTitle);
                bookTitle.setAttribute('class', 'book__title');
                bookTitle.innerText = formInputs[0][0].value;

                const bookAuthor = document.createElement('h4');
                descriptionOfBook.appendChild(bookAuthor);
                bookAuthor.setAttribute('class','book__author');
                bookAuthor.innerText = formInputs[0][1].value;

                const bookStockStatus = document.createElement('h5');
                descriptionOfBook.appendChild(bookStockStatus);
                bookStockStatus.setAttribute('class', 'book__stockstatus');
                
                if(formInputs[0][4].value === 'inStock'){
                    bookStockStatus.innerText = 'In Stock'
                } else {
                    bookStockStatus.innerText = 'Out of Stock'
                }

                const bookPrice = document.createElement('h5');
                descriptionOfBook.appendChild(bookPrice);
                bookPrice.setAttribute('class', 'book__price');
                bookPrice.innerText = formInputs[0][3].value;

        const removalButton = document.createElement('button');
        newEntry.appendChild(removalButton);
        removalButton.setAttribute('class', 'book__removalButton');
        removalButton.innerText = 'Remove';
    
        bookList.appendChild(newEntry);
        
        removalButton.addEventListener('click', () => {
            newEntry.remove();   
        })

}
// Clears the form after submission

const clearForm = ()=> {
    for(let i = 0; i < formInputs[0].length - 2; i++) {
        console.log(formInputs[0][i]);

        formInputs[0][i].value = '';
        
    }
}
            



