import React, { Component } from "react";
import {
	StyleSheet,
	View,
	Button,
} from "react-native";

import ShoppingCartModal from "./shopping-cart-modal";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
		};
	}
	render() {
		const { isOpen } = this.state;

		return (
			<View style={styles.container}>
				<Button
					style={styles.btn}
					onPress={() => this.setState({ isOpen: true })}
					title={"My Modal"}
				/>

				<ShoppingCartModal
					isVisible={isOpen}
					onBackdropPress={() => this.setState({ isOpen: false })}
					onSwipe={() => this.setState({ isOpen: false })}
				/>
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
	btn: {
		backgroundColor: "#3B5998",
		color: "white",
		padding: 10,
	},
});

export default App;
