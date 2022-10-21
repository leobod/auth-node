interface ProductInfo {
	productId: number,
	productCore: string,
	productName: string,
	barCode: string,
	brandId: number,
	oneCategoryId: number,
	twoCategoryId: number,
	threeCategoryId: number,
	supplierId: number,
	price: number,
	averageCost: number,
	publishStatus?: number,
	auditStatus?: number,
	weight?: number,
	length?: number,
	height?: number,
	width?: number,
	colorType?: number,
	productionDate: Date,
	shelfLife: number,
	descript: string,
	indate?: Date,
	modifiedTime?: Date,
}

export { ProductInfo }
