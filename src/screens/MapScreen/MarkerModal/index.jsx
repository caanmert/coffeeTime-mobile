import React, { useCallback, useMemo, useRef } from 'react';
import {
  View, Text, StyleSheet, Button,
} from 'react-native';
import BottomSheet, {
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

const MarkerModal = ({ modalRef, machine }) => {
  // const bottomSheetRef = useRef < BottomSheet > (null);

  // variables
  const snapPoints = useMemo(() => ['30%', '60%'], []);
  // const snapPoints = useMemo(() => ['80%'], []);

  // const snapPoints = useMemo(() => ['25%', '50%', '90%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index);
  }, []);
  return (

    <BottomSheetModalProvider>

      <BottomSheetModal
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        enableDismissOnClose
        //  enablePanDownToClose
        initialSnap={0}
        // ref={bottomSheetRef}
        ref={modalRef}

      >
        <View style={styles.contentContainer}>
          <Text>
            {machine?._id}
            {' '}
            🎉
          </Text>
        </View>
      </BottomSheetModal>

    </BottomSheetModalProvider>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: 'gray ',
    justifyContent: 'center',

  },
  contentContainer: {
    flex: 1,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'pink',
    /*  alignSelf: 'stretch', */

  },
});

export default MarkerModal;
