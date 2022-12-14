import { Component } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-html-to-pdf',
  templateUrl: './html-to-pdf.component.html',
  styleUrls: ['./html-to-pdf.component.css'],
})
export class HtmlToPdfComponent {
  showButton = true;

  handleExport() {
    // hide print button
    this.showButton = false;

    const invoiceContentElement = document.getElementById(
      'invoice_container'
    ) as HTMLElement;

    html2canvas(invoiceContentElement).then((canvas) => {
      // convert the canvas into base64 string url
      const imgData = canvas.toDataURL('image/png');
      // page width
      const pageWidth = 210;
      const pageHeight = 297;

      // calcuate the image actual height to fit with canvas and pdf
      const height = (canvas.height * pageWidth) / canvas.width;

      // initialize the PDF
      const pdf = new jsPDF('p', 'mm', 'a4');

      // add image to pdf
      pdf.addImage(imgData, 'PNG', 0, 0, pageWidth, height);

      pdf.save('invoice.pdf');

      this.showButton = true;
    });
  }
}
