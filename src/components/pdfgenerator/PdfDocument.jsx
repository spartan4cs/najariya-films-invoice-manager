import { Document, Image, Page } from "@react-pdf/renderer";
import React from "react";
import BillTo from "./BillTo";
import InvoiceItemsTable from "./InvoiceItemsTable";
import InvoiceNo from "./InvoiceNo";
import InvoiceThankYouMsg from "./InvoiceThankYouMsg";
import InvoiceTitle from "./InvoiceTitle";
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#fff",
    fontFamily: "Helvetica",
    fontSize: 11,
    paddingTop: 30,
    paddingLeft: 50,
    paddingRight: 50,
    lineHeight: 1.5,
    flexDirection: "column",
  },
  logo: {
    width: 84,
    height: 70,
    marginLeft: "auto",
    marginRight: "auto",
  },
});

const PdfDocument = ({ invoicedata }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Image style={styles.logo} src={logo} />
        <InvoiceTitle title={"Invoice"} />
        <InvoiceNo invoice={invoicedata} />
        <BillTo invoice={invoicedata} />
        <InvoiceItemsTable invoice={invoicedata} />
        <InvoiceThankYouMsg />
      </Page>
    </Document>
  );
};

export default PdfDocument;
