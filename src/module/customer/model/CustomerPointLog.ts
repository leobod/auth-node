interface CustomerPointLog {
	pointId?: number,
	customerId: number,
	source: number,
	referNumber?: number,
	changePoint?: number,
	createTime: Date,
}

export { CustomerPointLog }
