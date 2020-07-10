import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import styles from "../style/appStyles";
import { calculateImageThumbnailWidthAndHeight } from "../utils/helpers";
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
  screenOrientation,
}) => {
  //figure out where the last position in the list was
  const indexInImageList = store.getState().indexInImageList;
  //calculate the number of columns that should be in the flatList
  const numOfColumns = screenOrientation == "portrait" ? 4 : 8;
  //calculate the image height and width
  const imageWidthAndHeight = calculateImageThumbnailWidthAndHeight(
    screenWidth,
    screenOrientation,
    8
  );
  //for larger screens, like tablets, if the thumbnails are too big, use the webformatURL
  const thumbnailURL =
    imageWidthAndHeight <= 150 ? "previewURL" : "webformatURL";

  const rowHeight = imageWidthAndHeight + 2 * styles.imageThumbnail.margin;
  //header height is used to calculate the offset
  const headerHeight = 20;
  //add a ref to the flatlist component
  const flatListRef = useRef(null);
  //parse the results
  const parsed = JSON.parse(results);

  //scroll to the last visible item whenever the list reloads
  useEffect(() => {
    if (flatListRef.current) {
      //scroll to the top of the list if the index is 0
      let offset;
      if (indexInImageList == 0) {
        offset = 0;
      }
      //otherwise figure out the offset
      else {
        offset =
          Math.floor(indexInImageList / numOfColumns) * rowHeight +
          headerHeight;
      }
      flatListRef.current.scrollToOffset({
        animated: false,
        offset: offset,
      });
    }
  });

  const onScroll = (e) => {
    let offset = e.nativeEvent.contentOffset.y;
    let rowIndex, imageIndex;
    //only start counting rows once you've scrolled passed the header
    if (offset > headerHeight) {
      offset = offset - headerHeight;
      rowIndex = Math.round(offset / rowHeight);
      //this finds the index of the image on the first row on the screen -- this will be used to calculate how much to offset a re-rendered grid by
      imageIndex = rowIndex * numOfColumns;
    } else rowIndex = imageIndex = 0;
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
      ListHeaderComponent={ListHeader(headerHeight, totalHits)}
      ListFooterComponent={ListFooter}
      //this re-renders the list every time there is a change in the screen width
      key={screenOrientation}
      onScroll={(e) => onScroll(e)}
      getItemLayout={getItemLayout}
      data={parsed}
      showsVerticalScrollIndicator={false}
      // the number of columns changes based on the screen orientation
      numColumns={numOfColumns}
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
            source={{ uri: item[thumbnailURL] }}
            style={[
              styles.roundedBorder,
              styles.imageThumbnail,
              { height: imageWidthAndHeight, width: imageWidthAndHeight },
            ]}
          />
        </TouchableOpacity>
      )}
    />
  );
};

//this could be refactored to use the totalHits property from the API call
const ListHeader = (headerHeight, totalHits) => (
  <Text style={[styles.infoText, { height: headerHeight }]}>
    Number of Results: {totalHits}
  </Text>
);
const ListFooter = () => <Text style={styles.infoText}>End of Results</Text>;

ImageList.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
  results: PropTypes.string.isRequired,
  totalHits: PropTypes.number.isRequired,
  screenWidth: PropTypes.number.isRequired,
  screenOrientation: PropTypes.string.isRequired,
};

export default connect()(ImageList);
