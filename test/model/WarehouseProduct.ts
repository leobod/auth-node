interface WarehouseProduct {
	wpId?: number,
	productId: number,
	wId: number,
	currentCnt?: number,
	lockCnt?: number,
	inTransitCnt?: number,
	averageCost?: number,
	modifiedTime?: Date,
}

export { WarehouseProduct }
