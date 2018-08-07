import React from "react";
import PropTypes from "prop-types";
import {
	StyleSheet,
	Text,
	View,
} from "react-native";

import Modal from "react-native-modal";

const ShoppingCartModal = ({ isVisible, onBackdropPress, onSwipe }) => {
	return (
		<Modal
			style={styles.myModal}
			isVisible={isVisible}
			onBackdropPress={onBackdropPress}
			swipeDirection={"down"}
			onSwipe={onSwipe}
		>
			<View style={styles.shoppingCartContainer}>
				<Text style={styles.text}>Shopping Cart</Text>
			</View>
		</Modal>
	);
};

ShoppingCartModal.propTypes = {
	isVisible: PropTypes.bool,
	onBackdropPress: PropTypes.func,
	onSwipe: PropTypes.func,
};

ShoppingCartModal.defaultProps = {
	isVisible: false,
	onBackdropPress: () => {},
	onSwipe: () => {},
};

const styles = StyleSheet.create({
	// 用來控制modal的style，可以用來設定modal出現的位置，Ex: justifyContent: "center" 就會出現在畫面的中間
	myModal: {
		justifyContent: "flex-end",
		// justifyContent: "flex-start",
		// justifyContent: "center",
		margin: 0,
	},

	shoppingCartContainer: {
		height: 500,
		backgroundColor: "white",
		justifyContent: "center",
		alignItems: "center",
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
	},

	text: {
		color: "black",
		fontSize: 22
	},
});

export default ShoppingCartModal;
