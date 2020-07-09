import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import styles from "../style/appStyles";
import { calculateImageListColumns } from "../utils/helpers";
import store from "../redux/store";
import { TouchableOpacity, FlatList, Image, Text } from "react-native";
import { updatePositionInImageList } from "../redux/actions";
import PropTypes from "prop-types";

// The ImageList Component displays all images from a user's search
const ImageList = ({
  dispatch,
  navigation,
  results,
  totalHits,
  screenWidth,
}) => {
  //figure out where the last position in the list was
  const indexInImageList = store.getState().indexInImageList;
  //calculate the number of columns that should be in the flatList
  const numofColumns = calculateImageListColumns(screenWidth, 16);
  //calculate row height from stylesheet
  const rowHeight =
    styles.imageThumbnail.height + 2 * styles.imageThumbnail.margin;
  //add a ref to the flatlist
  const flatListRef = useRef(null);
  //parse the results
  const parsed = JSON.parse(results);

  //scroll to the last visible item whenever the list reloads
  useEffect(() => {
    if (flatListRef.current) {
      let offset = Math.floor(indexInImageList / numofColumns) * rowHeight;
      flatListRef.current.scrollToOffset({
        animated: true,
        offset: offset,
      });
    }
  });

  const onScroll = (e) => {
    let offset = e.nativeEvent.contentOffset.y;
    let rowIndex = parseInt(offset / rowHeight);
    //this finds the index of the image on the first row on the screen -- this will be used to calcuate how much to offset a re-rendered grid by
    let imageIndex = rowIndex * numofColumns;
    dispatch(updatePositionInImageList(imageIndex));
  };

  const getItemLayout = (data, index) => ({
    length: rowHeight,
    offset: rowHeight * index,
    index,
  });

  return (
    <FlatList
      ref={flatListRef}
      //header and footer
      ListHeaderComponent={ListHeader(totalHits)}
      ListFooterComponent={ListFooter}
      //this rerenders the list every time there is a change in the screen width
      key={`id${screenWidth}`}
      onScroll={(e) => onScroll(e)}
      getItemLayout={getItemLayout}
      data={parsed}
      showsVerticalScrollIndicator={false}
      // the number of columns changes based on the screen orientation
      numColumns={numofColumns}
      initialNumToRender={1}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => {
            // navigate to the Details route and pass in the image
            navigation.navigate("Details", {
              image: item,
            });
          }}
        >
          <Image
            resizeMode="cover"
            source={{ uri: item.previewURL }}
            style={[styles.roundedBorder, styles.imageThumbnail]}
          />
        </TouchableOpacity>
      )}
    />
  );
};

//this could be refactored to use the totalHits property from the API call
const ListHeader = (totalHits) => (
  <Text style={styles.infoText}>Number of Results: {totalHits}</Text>
);
const ListFooter = () => <Text style={styles.infoText}>End of Results</Text>;

ImageList.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
  results: PropTypes.string.isRequired,
  totalHits: PropTypes.number.isRequired,
  screenWidth: PropTypes.number.isRequired,
};

export default connect()(ImageList);
