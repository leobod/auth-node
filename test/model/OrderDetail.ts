interface OrderDetail {
	orderDetailId: number,
	orderId: number,
	productId: number,
	productName: string,
	productCnt?: number,
	productPrice: number,
	averageCost: number,
	weight?: number,
	feeMoney?: number,
	wId: number,
	modifiedTime?: Date,
}

export { OrderDetail }
