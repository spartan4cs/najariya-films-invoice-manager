import React, { useState } from "react";
import classes from "./Main.module.css";
import Button from "./UI/Button";
import Card from "./UI/Card";
import { InvoiceData } from "./Data/InvoiceData";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import PdfDocument from "./pdfgenerator/PdfDocument";
import { pdfdata } from "./Data/pdfdata";

const Main = (props) => {
  const initialInvoiceData = InvoiceData;
  const [enteredInvoiceData, setEnteredInvoiceData] =
    useState(initialInvoiceData);

  const invoiceSubmitHandler = (event) => {
    event.preventDefault();
    console.log(enteredInvoiceData);
  };

  const editFieldHandler = (event) => {
    setEnteredInvoiceData((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  };

  const fileName = "Invoice.pdf";

  return (
    <div>
      <Card className={classes.input}>
        <form onSubmit={invoiceSubmitHandler}>
          <label htmlFor="currentdate">CurrentDate:</label>
          <span>{new Date().toLocaleDateString()}</span>

          <label htmlFor="dateOfIssue">Due Date*:</label>
          <input
            id="dateOfIssue"
            name={"dateOfIssue"}
            type="date"
            value={enteredInvoiceData.dateOfIssue}
            onChange={editFieldHandler}
            required="required"
          />

          <label htmlFor="invoiceNumber">Invoice Number</label>
          <input
            id="invoiceNumber"
            name={"invoiceNumber"}
            type="number"
            placeholder={"Invoice no daal"}
            value={enteredInvoiceData.invoiceNumber}
            onChange={editFieldHandler}
          />

          <label htmlFor="billTo">Bill to*</label>
          <input
            id="billTo"
            name={"billTo"}
            placeholder={"client ka naam bata?"}
            type="text"
            value={enteredInvoiceData.billTo}
            onChange={editFieldHandler}
            required="required"
          />
          <input
            id="billToEmail"
            name={"billToEmail"}
            placeholder={"client ka Email bata?"}
            type="text"
            value={enteredInvoiceData.billToEmail}
            onChange={editFieldHandler}
            required="required"
          />
          <input
            id="billToAddress"
            name={"billToAddress"}
            placeholder={"client ka Address bata?"}
            type="text"
            value={enteredInvoiceData.billToAddress}
            onChange={editFieldHandler}
            required="required"
          />

          <label htmlFor="billFrom">Bill From*</label>
          <input
            id="billFrom"
            name={"billFrom"}
            type="text"
            placeholder={"tera naam bata?"}
            value={enteredInvoiceData.billFrom}
            onChange={editFieldHandler}
            required="required"
          />
          <input
            id="billFromEmail"
            name={"billFromEmail"}
            type="text"
            placeholder={"tera email bata?"}
            value={enteredInvoiceData.billFromEmail}
            onChange={editFieldHandler}
            required="required"
          />
          <input
            id="billFromAddress"
            name={"billFromAddress"}
            type="text"
            placeholder={"tera address bata?"}
            value={enteredInvoiceData.billFromAddress}
            onChange={editFieldHandler}
            required="required"
          />

          <label htmlFor="notes">Custom Message to Client</label>
          <input
            id="notes"
            name={"notes"}
            type="text"
            placeholder={"Custom Message to client "}
            value={enteredInvoiceData.notes}
            onChange={editFieldHandler}
          />
          <Button type="submit">Generate Invoice</Button>
        </form>
      </Card>

      <PDFViewer width={800} height={500} showToolbar={false}>
        <PdfDocument invoicedata={pdfdata} />
      </PDFViewer>

      <div className="download-link">
        <PDFDownloadLink
          document={<PdfDocument invoicedata={pdfdata} />}
          fileName={fileName}
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading..." : "Download Invoice"
          }
        </PDFDownloadLink>
      </div>
    </div>
  );
};

export default Main;
