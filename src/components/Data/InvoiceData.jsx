import React from "react";

export const InvoiceData = {
  isOpen: false,
  currency: "₹",
  currentDate: new Date().toLocaleDateString(),
  invoiceNumber: +new Date() + Math.floor(Math.random() * 999999),
  dateOfIssue: "",
  billTo: "",
  billToEmail: "",
  billToAddress: "",
  billFrom: "Prashik Rangari",
  billFromEmail: "prashikrangari2015@gmail.com",
  billFromAddress: "Badlapur",
  notes: "",
  total: "0.00",
  subTotal: "0.00",
  taxRate: "",
  taxAmmount: "0.00",
  discountRate: "",
  discountAmmount: "0.00",
  items: [
    {
      id: 0,
      name: "",
      description: "",
      price: "1.00",
      quantity: 1,
    },
  ],
};
