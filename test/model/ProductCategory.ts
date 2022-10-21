interface ProductCategory {
	categoryId: number,
	categoryName: string,
	categoryCode: string,
	parentId?: number,
	categoryLevel?: number,
	categoryStatus?: number,
	modifiedTime?: Date,
}

export { ProductCategory }
