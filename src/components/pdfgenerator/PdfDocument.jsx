import { Document, Image, Page, StyleSheet } from "@react-pdf/renderer";
import React from "react";
import BillTo from "./BillTo";
import InvoiceItemsTable from "./InvoiceItemsTable";
import InvoiceNo from "./InvoiceNo";
import InvoiceThankYouMsg from "./InvoiceThankYouMsg";
import InvoiceTitle from "./InvoiceTitle";
import logo from "../../logo.svg";
import hcbgImage from "../../asset/bg-img.jpg";

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    /// backgroundImage: `url(${logo})`,
    //  backgroundImage:"url('https://media.geeksforgeeks.org/wp-content/uploads/rk.png')",
    // backgroundSize: "cover",
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
        <Image style={styles.logo} src={hcbgImage} />
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
