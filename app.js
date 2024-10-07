//10 books and books link

// const URL1 = "https://www.googleapis.com/books/v1/volumes?q=javascript&key=YOUR_API_KEY&maxResults=40";
// const factPara = document.querySelector("#fact");
// const btn = document.querySelector("#btn");

// console.log("btn", btn);

// const getBooks = async () => {
//   console.log("getting data...");
//   try {
//     let response = await fetch(URL1);
//     console.log("response", response);
//     let data = await response.json();
//     console.log("data", data);

//     let html = ""; // Initialize an empty string to store HTML content

//     // Iterate over each book in the data.items array
//     data.items.forEach((item) => {
//       const bookTitle = item.volumeInfo.title;
//       const thumbnailUrl = item.volumeInfo.imageLinks.thumbnail;
      
//       // Construct HTML for each book and append it to the 'html' string
//       html += `<div><h3>${bookTitle}</h3><img src="${thumbnailUrl}" alt="Book Thumbnail"></div>`;
//     });

//     // Set the 'html' string containing all book elements to the factPara.innerHTML
//     factPara.innerHTML = html;

//   } catch (error) {
//     console.error("Error fetching data:", error);
//     factPara.innerHTML = `<p>Error fetching data</p>`;
//   }
// }

// btn.addEventListener("click", getBooks);

// Optionally, you can call getBooks() to load data immediately without a button click
// getBooks();



const URL1 = "https://www.googleapis.com/books/v1/volumes?q=javascript&key=AIzaSyDCU7WsERkeGFRL2NlA4ZT24y_7W-fasMw"; // Replace YOUR_API_KEY with your actual API key
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

const getBooks = async () => {
  console.log("getting data...");
  let response = await fetch(URL1);
  console.log("response", response);
  let data = await response.json();
  console.log("data", data);
 
  const bookInfo = data.items[3].volumeInfo; // Change the index as needed
   //data 
  const bookTitle = bookInfo.title;
  const thumbnailUrl = bookInfo.imageLinks.thumbnail;
  const previewLink = bookInfo.previewLink; // Preview link of the book

  // Create a link around the image
  const bookThumbnail = `<a href="${previewLink}" target="_blank"><img src="${thumbnailUrl}" alt="Book Thumbnail"></a>`;

  // Set the HTML content
  factPara.innerHTML = `<h3>${bookTitle}</h3>${bookThumbnail}`;

};

btn.addEventListener("click", getBooks);
//data has been sav


// const URL1="https://www.googleapis.com/books/v1/volumes?q=javascript&key=AIzaSyDCU7WsERkeGFRL2NlA4ZT24y_7W-fasMw&maxResults=10"
// const factPara=document.querySelector("#fact");
// const btn=document.querySelector("#btn");
// console.log("btn",btn);

// const getBooks=async ()=>
// {
//   console.log("geting data...")
//   let response=await fetch(URL1);
//   console.log("response",response);
//   let data=await response.json();
//   console.log("data",data);
//   // // console.log("data checking ",data);
//   // factPara.innerHTML=data.items[0].volumeInfo.title
//   const bookTitle = data.items[2].volumeInfo.title;
//   const thumbnailUrl = data.items[2].volumeInfo.imageLinks.thumbnail;
//   factPara.innerHTML = `<h3>${bookTitle}</h3><img src="${thumbnailUrl}" alt="Book Thumbnail">`;
  
    

// }
// btn.addEventListener("click",getBooks);
// getBooks()


//   // Set the book title and thumbnail image in innerHTML
 

