interface WarehouseInfo {
	wId: number,
	warehouseSn: string,
	warehoustName: string,
	warehousePhone: string,
	contact: string,
	province: number,
	city: number,
	distrct: number,
	address: string,
	warehouseStatus?: number,
	modifiedTime?: Date,
}

export { WarehouseInfo }
