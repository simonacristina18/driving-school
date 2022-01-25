import React from 'react';
import {Document, Page, Text, View, StyleSheet} from '@react-pdf/renderer';

    const styles = StyleSheet.create({
        page: {
            flexDirection: 'row',
            backgroundColor: '#E4E4E4'
        },
        section: {
            margin: 10,
            padding: 10,
            flexGrow: 1
        },
        title: {
            textAlign: 'center',
            padding: 10
        },
        generationDate: {
            textAlign: 'right',
            padding: 10
        }
    });

export function getCurrentDate(separator=''){

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
}
    const MyDocument = ({data}) => (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text style={styles.title}>Driving School Registration Payment Order</Text>
                    <Text>First name: {data.firstName}</Text>
                    <Text>Last name: {data.lastName}</Text>
                    <Text>Car option: {data.car}</Text>
                    <Text>Driving school price: {data.carDrivingSchoolPrice} lei</Text>
                    <Text style={styles.generationDate}>Generated on {getCurrentDate(".")} </Text>
                </View>
            </Page>
        </Document>
    );

export default MyDocument;