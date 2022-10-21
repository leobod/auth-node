interface SupplierInfo {
	supplierId: number,
	supplierCode: string,
	supplierName: string,
	supplierType: number,
	linkMan: string,
	phoneNumber: string,
	bankName: string,
	bankAccount: string,
	address: string,
	supplierStatus?: number,
	modifiedTime?: Date,
}

export { SupplierInfo }
