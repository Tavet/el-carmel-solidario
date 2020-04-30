import React from 'react';
import {SafeAreaView, Text, StyleSheet, Dimensions} from 'react-native';
import {Appbar, DataTable} from 'react-native-paper';
import {Typography, Colors} from '../../styles';
import _ from 'lodash';

import {BarChart} from 'react-native-chart-kit';

const HomeScreen = ({navigation}) => {
  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');
  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={_goBack} />
        <Appbar.Content title="Inicio" subtitle="Donaciones realizadas" />
        <Appbar.Action icon="magnify" onPress={_handleSearch} />
        <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
      </Appbar.Header>
    <SafeAreaView style={styles.container}>
      <Appbar style={styles.bottom}>
        <Appbar.Action
          icon="home"
          onPress={() => console.log('Home pressed')}
        />
      </Appbar>
      <Text style={styles.title}>Donaciones</Text>

      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Dessert</DataTable.Title>
          <DataTable.Title numeric>Calories</DataTable.Title>
          <DataTable.Title numeric>Fat</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
          <DataTable.Cell>Frozen yogurt</DataTable.Cell>
          <DataTable.Cell numeric>159</DataTable.Cell>
          <DataTable.Cell numeric>6.0</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
          <DataTable.Cell numeric>237</DataTable.Cell>
          <DataTable.Cell numeric>8.0</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Pagination
          page={1}
          numberOfPages={3}
          onPageChange={(page) => {
            console.log(page);
          }}
          label="1-2 of 6"
        />
      </DataTable>
      <BarChart
        data={{
          labels: ['Febrero', 'Marzo', 'Abril', 'Mayo'],
          datasets: [
            {
              data: [73500, 47600, 80000, 95000],
            },
          ],
        }}
        width={Dimensions.get('window').width - 20}
        height={220}
        yAxisLabel={'$'}
        chartConfig={{
          backgroundColor: '#FFF',
          backgroundGradientFrom: '#FFF',
          backgroundGradientTo: '#fafafa',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    alignItems: 'center',
  },
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  title: {
    fontSize: Typography.FONT_SIZE_18,
    fontFamily: Typography.FONT_FAMILY_BOLD,
    color: Colors.SECONDARY,
    paddingBottom: 20,
  },
});

export default HomeScreen;
