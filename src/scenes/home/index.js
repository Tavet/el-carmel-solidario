import React from 'react';
import {SafeAreaView, Text, StyleSheet, Dimensions} from 'react-native';
import {Typography, Colors, Mixins} from '../../styles';
import _ from 'lodash';

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';

import t from 'tcomb-form-native';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Donaciones</Text>
      <BarChart
        data={{
          labels: ['30 Abril', '1 Mayo', '2 Mayo', '3 Mayo', '4 Mayo', '5 Mayo'],
          datasets: [
            {
              data: [20000, 34000, 80000, 95000, 45000, 10000],
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    alignSelf: 'center',
    resizeMode: 'center',
    width: Mixins.scaleSize(450),
    height: Mixins.scaleSize(150),
  },
  title: {
    fontSize: Typography.FONT_SIZE_18,
    fontFamily: Typography.FONT_FAMILY_BOLD,
    color: Colors.SECONDARY,
    paddingBottom: 20,
  },
  form: {
    paddingTop: 25,
    fontSize: Typography.FONT_SIZE_16,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
  },
  buttonText: {
    fontSize: Typography.FONT_SIZE_16,
    fontFamily: Typography.FONT_FAMILY_BOLD,
    color: 'white',
    alignSelf: 'center',
  },
  button: {
    width: Mixins.scaleSize(130),
    height: 36,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 30,
    marginBottom: 10,
    alignSelf: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
