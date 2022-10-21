interface ProductComment {
	commentId: number,
	productId: number,
	orderId: number,
	customerId: number,
	title: string,
	content: string,
	auditStatus: number,
	auditTime: Date,
	modifiedTime?: Date,
}

export { ProductComment }
