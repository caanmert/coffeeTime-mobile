import React, { useCallback, useMemo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';

const MarkerModal = ({ modalRef, machine }) => {
  const snapPoints = useMemo(() => ['10%', '30%', '60%'], []);

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
    backgroundColor: 'gray ',
    justifyContent: 'center',

  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'pink',
    /*  alignSelf: 'stretch', */

  },
});

export default MarkerModal;
