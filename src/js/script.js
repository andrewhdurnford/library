let myLibrary = [];

function newBook(title, author, read) {
    this.title = title
    this.author = author
    this.read = read
}


function button() {
  //Make popup form visible
  document.getElementById("popup").className = "absolute flex justify-around items-center top-0 right-0 bottom-0 left-0 bg-slate-300 opacity-80";

  //Create window within popup to house form
  const window = document.createElement("div");
  window.className = 'flex-col bg-white border border-black border-5 m-auto z-100 justify-items-around items-center rounded'

  //Input for name of book
  const form = document.createElement("input");
  form.placeholder = "Name of Book";
  form.className = 'block m-5';
  form.setAttribute("required", "");

  //Input for name of author
  const author = document.createElement("input");
  author.placeholder = "Name of Author";
  author.className = 'block m-5';
  author.setAttribute("required", "");

  //div to hold read checkbox and label
  const readDiv = document.createElement("div");
  readDiv.className ='m-5'

  //Checkbox for if read
  const read = document.createElement("input");
  read.className = 'inline';
  read.type = "checkbox";

  //label for if read
  const readlabel = document.createElement("p");
  readlabel.innerText = ("Have you read it?");
  readlabel.className = 'inline mr-5';

  //submit button
  const submit = document.createElement("button");
  submit.className = 'px-2 m-5 border border-black rounded';
  submit.innerText = ' submit ';

  //append all elements to window
  document.getElementById("popup").appendChild(window);
  window.appendChild(form);
  window.appendChild(author);
  window.appendChild(readDiv);
  readDiv.appendChild(readlabel);
  readDiv.appendChild(read);
  window.appendChild(submit);
  
//Event listener for submit button
submit.addEventListener("click", (e) => {

  e.preventDefault();

  if (author.value == "" || form.value == "") {
    //Catch empty fields
    alert("Please fill out name and author fields")
  } else {
    //Create new book using newBook function
    book = new newBook(form.value, author.value, read.checked);
    myLibrary.push(book);
    //Hide popup window and delete contents
    document.getElementById("popup").className = "hidden";
    document.getElementById("popup").innerHTML = '';

    //Card to display book info
    const card = document.createElement("div");
    card.className = 'w-fit min-w-[15rem] inline-block max-w-[20rem] text-ellipsis whitespace-nowrap overflow-hidden flex-col bg-white border border-black border-5 m-5 justify-items-around items-center rounded'
    card.id = "card" + (myLibrary.length-1).toString();

    //div for book name
    const bookName = document.createElement("div")
    bookName.innerText = "Title: " + myLibrary[myLibrary.length-1].title;
    bookName.className = 'm-5';

    //div for book author
    const bookAuthor = document.createElement("div")
    bookAuthor.innerText = "Author: " + myLibrary[myLibrary.length-1].author;
    bookAuthor.className = 'm-5';

    //BUTTON DIV
    const buttonDiv = document.createElement("div");
    buttonDiv.className = 'flex';


    //button for read status
    const readButton = document.createElement("button")
    if (myLibrary[myLibrary.length-1].read == true) {
      readButton.innerText = "Read: Yes";
    } else {
      readButton.innerText = "Read: No";
    }
    readButton.className = 'text-center border border-black border-5 rounded m-[15px]';
    readButton.addEventListener("click", none => {
      readButton.innerText = (readButton.innerText === 'Read: Yes' ? 'Read: No' : 'Read: Yes');
    });


    //button to delete
    const deleteBook = document.createElement("button")
    deleteBook.innerText = 'x';
    deleteBook.className = 'min-w-[20px] text-center border border-black border-5 rounded m-[15px]';
    deleteBook.addEventListener("click", none => {
      card.remove();
    });

    
    //append all elements to storage div
    document.getElementById("storage").appendChild(card);
    card.appendChild(bookName);
    card.appendChild(bookAuthor);
    card.appendChild(buttonDiv)
    buttonDiv.appendChild(readButton);
    buttonDiv.appendChild(deleteBook);
  }
 });
}

//event listener for + button
document.getElementById("new").addEventListener("click", button);