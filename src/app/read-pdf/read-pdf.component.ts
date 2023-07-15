import { Component } from '@angular/core';
// import * as pdfjsLib from 'pdfjs-dist';

@Component({
  selector: 'app-read-pdf',
  templateUrl: './read-pdf.component.html',
  styleUrls: ['./read-pdf.component.css'],
})
export class ReadPdfComponent {
  BASE64_MARKER = ';base64,';

  extractText(e: any) {
    if (e.target) {
      /* let fReader = new FileReader();
      fReader.readAsDataURL(e.target.files[0]);
      fReader.onloadend = (event) => {
        this.convertDataURIToBinary(event.target!.result);
      }; */
    }
  }

  /* convertDataURIToBinary(dataURI: any) {
    let base64Index =
      dataURI.indexOf(this.BASE64_MARKER) + this.BASE64_MARKER.length;
    let base64 = dataURI.substring(base64Index);
    let raw = window.atob(base64);
    let rawLength = raw.length;
    let array = new Uint8Array(new ArrayBuffer(rawLength));

    for (let i = 0; i < rawLength; i++) {
      array[i] = raw.charCodeAt(i);
    }
    this.pdfAsArray(array);
  }

  getPageText(pageNum: any, PDFDocumentInstance: any) {
    // Return a Promise that is solved once the text of the page is retrieven
    return new Promise(function (resolve, reject) {
      PDFDocumentInstance.getPage(pageNum).then(function (pdfPage: any) {
        // The main trick to obtain the text of the PDF page, use the getTextContent method
        pdfPage.getTextContent().then(function (textContent: any) {
          let textItems = textContent.items;
          let finalString = '';

          // Concatenate the string of the item to the final string
          for (let i = 0; i < textItems.length; i++) {
            let item = textItems[i];

            finalString += item.str + ' ';
          }

          // Solve promise with the text retrieven from the page
          resolve(finalString);
        });
      });
    });
  }

  pdfAsArray(pdfAsArray: any) {
    let parentThis = this;
    pdfjsLib.GlobalWorkerOptions.workerSrc =
      'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js';
    pdfjsLib.getDocument(pdfAsArray).promise.then(
      function (pdf: any) {
        var pdfDocument = pdf;
        // Create an array that will contain our promises
        var pagesPromises = [];

        for (var i = 0; i < pdf._pdfInfo.numPages; i++) {
          // Required to prevent that i is always the total of pages
          (function (pageNumber) {
            // Store the promise of getPageText that returns the text of a page
            pagesPromises.push(parentThis.getPageText(pageNumber, pdfDocument));
          })(i + 1);
        }

        // Execute all the promises
        Promise.all(pagesPromises).then(function (pagesText) {
          // Display text of all the pages in the console
          // e.g ["Text content page 1", "Text content page 2", "Text content page 3" ... ]
          console.log(pagesText); // representing every single page of PDF Document by array indexing
          console.log(pagesText.length);
          var outputStr = '';
          for (var pageNum = 0; pageNum < pagesText.length; pageNum++) {
            console.log(pagesText[pageNum]);
            outputStr = '';
            outputStr =
              '<br/><br/>Page ' + (pageNum + 1) + ' contents <br/> <br/>';

            var div = document.getElementById('output');

            div!.innerHTML += outputStr + pagesText[pageNum];
          }
        });
      },
      function (reason: any) {
        // PDF loading error
        console.error(reason);
      }
    );
  } */
}
