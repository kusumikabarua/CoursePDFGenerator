import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
    padding: 10,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  table: {
    display: 'table',
    width: 'auto',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: { 
    margin: 'auto', 
    flexDirection: 'row', 
  },
  tableColHeader: { 
    width: '25%', 
    borderStyle: 'solid', 
    borderWidth: 1, 
    borderBottomWidth: 0, 
    borderRightWidth: 0, 
  },
  tableCol: { 
    width: '25%', 
    borderStyle: 'solid', 
    borderWidth: 1, 
    borderRightWidth: 0, 
    borderBottomWidth: 0, 
  },
  tableCellHeader: { 
    margin: 'auto', 
    marginTop: 5, 
    fontSize: 12, 
    fontWeight: 500, 
  },
  tableCell: { 
    margin: 'auto', 
    marginTop: 5, 
    fontSize: 12, 
  },
});

// Create Document Component
export const MyDocument = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Table</Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>Column 1</Text>
            </View>
            <View style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>Column 2</Text>
            </View>
            <View style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>Column 3</Text>
            </View>
            <View style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>Column 4</Text>
            </View>
          </View>
          {data.map((row, index) => (
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



