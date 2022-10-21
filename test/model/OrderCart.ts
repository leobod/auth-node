interface OrderCart {
	cartId: number,
	customerId: number,
	productId: number,
	productAmount: number,
	price: number,
	addTime?: Date,
	modifiedTime?: Date,
}

export { OrderCart }
