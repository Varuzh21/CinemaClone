import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

function CastList({ creditsSelector }) {
  // Render each item in the FlatList
  const renderItem = ({ item }) => (
    <View style={styles.castCard}>
      <Image
        source={{
          uri: item.profile_path
            ? `https://image.tmdb.org/t/p/w500${item.profile_path}`
            : 'https://via.placeholder.com/100x100?text=No+Image',
        }}
        style={styles.castImage}
      />
      <Text style={styles.castName} numberOfLines={1}>
        {item.name || 'N/A'}
      </Text>
      <Text style={styles.castRole} numberOfLines={1}>
        {item.job || item.character || 'N/A'}
      </Text>
    </View>
  );

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={Array.isArray(creditsSelector) ? creditsSelector : []}
      keyExtractor={(item, index) => item.id?.toString() || index.toString()}
      renderItem={renderItem}
      contentContainerStyle={styles.castContainer}
    />
  );
}

export default CastList;

const styles = StyleSheet.create({
  castContainer: {
    paddingTop: 16,
    paddingBottom: 20,
  },
  castCard: {
    width: 120,
    alignItems: 'center',
    marginRight: 12,
  },
  castImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 8,
  },
  castName: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
  castRole: {
    color: '#888',
    fontSize: 12,
    textAlign: 'center',
  },
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#1C1C27',
});
