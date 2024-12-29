import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';

function PrivacyPolicyScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.section}>
        <Text style={styles.heading}>Terms</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ornare
          quam vel facilisis feugiat amet sagittis arcu, tortor. Sapien,
          consequat ultrices morbi orci semper sit nulla. Leo auctor ut etiam
          est, amet aliquet ut vivamus. Odio vulputate est id tincidunt fames.
          {'\n\n'}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ornare
          quam vel facilisis feugiat amet sagittis arcu, tortor. Sapien,
          consequat ultrices morbi orci semper sit nulla. Leo auctor ut etiam
          est, amet aliquet ut vivamus. Odio vulputate est id tincidunt fames.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subHeading}>
          Changes to the Service and/or Terms:
        </Text>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ornare
          quam vel facilisis feugiat amet sagittis arcu, tortor. Sapien,
          consequat ultrices morbi orci semper sit nulla. Leo auctor ut etiam
          est, amet aliquet ut vivamus. Odio vulputate est id tincidunt fames.
          {'\n\n'}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ornare
          quam vel facilisis feugiat amet sagittis arcu, tortor. Sapien,
          consequat ultrices morbi orci semper sit nulla. Leo auctor ut etiam
          est, amet aliquet ut vivamus. Odio vulputate est id tincidunt fames.
        </Text>
      </View>
    </ScrollView>
  );
}

export default PrivacyPolicyScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'rgb(31, 29, 43)',
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  section: {
    marginBottom: 16,
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 12,
  },
  subHeading: {
    fontSize: 15,
    fontWeight: '600',
    color: 'rgb(200, 200, 200)',
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 14,
    lineHeight: 22,
    color: 'rgb(220, 220, 220)',
  },
});
