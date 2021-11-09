import React, { useCallback, useMemo, useRef } from 'react';
import {
  View, Text, StyleSheet, Button,
} from 'react-native';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
/* const MarkerModal = () => {
  const sheetRef = React.useRef(null);

  const renderContent = () => (
    <View
      style={{
        backgroundColor: 'white',
        padding: 16,
        height: 450,
      }}
    >
      <Text>Swipe down to close</Text>
    </View>
  );
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: 'papayawhip',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Button
          title="Open Bottom Sheet"
          onPress={() => sheetRef.current.snapTo()}
        />
      </View>
      <BottomSheet
        enablePanDownToClose
        ref={sheetRef}
        snapPoints={[450, 300]}
        borderRadius={10}
        renderContent={renderContent}
      />
    </>
  );
}; */

const MarkerModal = ({ modalRef }) => {
  // const bottomSheetRef = useRef < BottomSheet > (null);

  // variables
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index);
  }, []);
  return (
    <GestureHandlerRootView>
      <BottomSheetModalProvider>
        <View style={styles.container}>
          <BottomSheetModal
        // ref={bottomSheetRef}
            ref={modalRef}
            index={1}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}

          >
            <View style={styles.contentContainer}>
              <Text>Awesome 🎉</Text>
            </View>
          </BottomSheetModal>
        </View>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 34,
    backgroundColor: 'transparent',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default MarkerModal;
