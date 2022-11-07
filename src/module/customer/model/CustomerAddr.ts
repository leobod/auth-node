interface CustomerAddr {
	customerAddrId?: number,
	customerId: number,
	zip: number,
	province: number,
	city: number,
	district: number,
	address: string,
	isDefault: number,
	modifiedTime?: Date,
}

export { CustomerAddr }
