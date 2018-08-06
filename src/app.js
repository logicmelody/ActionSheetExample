import React, { Component } from "react";
import {
	StyleSheet,
	Text,
	View,
	Button,
} from "react-native";

import Modal from "react-native-modalbox";

class App extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Button
					style={styles.btn}
					onPress={() => this.refs.myModal.open()}
					title={"My Modal"} />

				<Modal
					style={styles.myModal}
					position={"bottom"}
					ref={"myModal"}
				>
					<View style={styles.shoppingCartContainer}>
						<Text style={styles.text}>Shopping Cart</Text>
					</View>
				</Modal>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	// 使用react-native-modalbox的時候，最外層的View的style要將flex設為1
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},

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

export default App;
