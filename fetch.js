const directoryPath = './foto';
const fileExtensions = ['.jpg', '.jpeg'];
let fileList = []

fetch(directoryPath)
  .then(response => response.text())
  .then(text => {
    const html = new DOMParser().parseFromString(text, 'text/html');
    const fileList = Array.from(html.querySelectorAll('a'))
      .map(a => a.href.split('/').pop())
      .filter(href => {
        const extension = href.split('.').pop().toLowerCase();
        return fileExtensions.includes('.' + extension);
      });

    const json = JSON.stringify({ files: fileList });
    console.log(fileList);

let element = document.createElement("div")
element.style.margin="auto"
element.style.width= "500px";
element.style.height= "500px";
element.style.backgroundImage = `url(./foto/${fileList[1]}`                              
element.style.objectFit= "scale-down";

document.querySelector("body").appendChild(element)



  });





