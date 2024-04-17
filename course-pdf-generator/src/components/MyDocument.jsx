import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
const dataBTech = [
  ["1", "500", "160"],
  ["2", "-", "160"],
];
const dataMTech = [
  ["1", "600", "260"],
  ["2", "-", "260"],
];
// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
    padding: 20,
  },
  section: {
    margin: 10,
    padding: 50,
    flexGrow: 1,
    fontSize: 12,
    fontWeight: 500,
  },
  text: {
    marginBottom: 10,
  },
  table: {
    display: "table",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderBottomWidth: 0,
    borderRightWidth: 0,
  },
  tableRow: {
    margin: "auto",
    flexDirection: "row",
    borderStyle: "solid",
    borderBottomWidth: 1,
  },
  tableColHeader: {
    width: "33%",
    borderStyle: "solid",
    borderRightWidth: 1,
  },
  tableCol: {
    width: "33%",
    borderStyle: "solid",
    borderRightWidth: 1,
  },
  tableCellHeader: {
    margin: "auto",
    marginTop: 5,
    fontSize: 12,
    fontWeight: 500,
  },
  tableCell: {
    margin: "auto",
    marginTop: 5,
    fontSize: 12,
  },
});
const today = new Date();
const month = today.getMonth() + 1;
const year = today.getFullYear();
const date = today.getDate();
const currentDate = month + "/" + date + "/" + year;

// Create Document Component
export const MyDocument = ({ name, course }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.text}>
          {course === "BTech" ? "Ref-A101" : "Ref-B101"}
        </Text>
        <Text style={styles.text}>Name:{name}</Text>
        <Text style={styles.text}>Course:{course}</Text>
        <Text style={styles.text}>
          Date of Offer(current date):{currentDate}
        </Text>
        <Text style={styles.text}>Fee Structure :</Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>year</Text>
            </View>
            <View style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>One time fee</Text>
            </View>
            <View style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>Tuition fee</Text>
            </View>
          </View>
          {course === "BTech"
            ? dataBTech.map((row, index) => (
                <View key={index} style={styles.tableRow}>
                  {row.map((cell, idx) => (
                    <View key={idx} style={styles.tableCol}>
                      <Text style={styles.tableCell}>{cell}</Text>
                    </View>
                  ))}
                </View>
              ))
            : dataMTech.map((row, index) => (
                <View key={index} style={styles.tableRow}>
                  {row.map((cell, idx) => (
                    <View key={idx} style={styles.tableCol}>
                      <Text style={styles.tableCell}>{cell}</Text>
                    </View>
                  ))}
                </View>
              ))}
        </View>
      </View>
    </Page>
  </Document>
);

// Sample data
