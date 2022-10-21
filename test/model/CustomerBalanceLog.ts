interface CustomerBalanceLog {
	balanceId: number,
	customerId: number,
	source?: number,
	sourceSn: number,
	createTime?: Date,
	amount?: number,
}

export { CustomerBalanceLog }
