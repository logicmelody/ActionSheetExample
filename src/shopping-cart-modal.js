import React from "react";
import PropTypes from "prop-types";
import {
	Platform,
	StyleSheet,
	Text,
	View,
} from "react-native";

import Modal from "react-native-modalbox";

const ShoppingCartModal = ({ isOpen, onClosed }) => {
	return (
		<Modal
			style={styles.myModal}
			position={"bottom"}
			coverScreen={Platform.OS === "android"}
			isOpen={isOpen}
			onClosed={onClosed}
		>
			<View style={styles.shoppingCartContainer}>
				<Text style={styles.text}>Shopping Cart</Text>
			</View>
		</Modal>
	);
}

ShoppingCartModal.propTypes = {
	isOpen: PropTypes.bool,
	onClosed: PropTypes.func,
};

ShoppingCartModal.defaultProps = {
	isOpen: false,
	onClosed: () => {},
};

const styles = StyleSheet.create({
	// 最外層的Modal來設定Modal的height
	myModal: {
		height: 500,
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
	},

	// Modal中的View，記得要設定flex: 1跟alignSelf: "stretch"，讓View撐滿整個Modal，
	// 不然點擊Modal以外的backdrop讓Modal消失這個功能會有問題
	shoppingCartContainer: {
		flex: 1,
		alignSelf: "stretch",
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: "white",
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
	},
	text: {
		color: "black",
		fontSize: 22
	},
	btn: {
		backgroundColor: "#3B5998",
		color: "white",
		padding: 10,
	},
});

export default ShoppingCartModal;
