interface CustomerInf {
	customerInfId?: number,
	customerId: number,
	customerName: string,
	identityCardType?: number,
	identityCardNo?: string,
	mobilePhone?: number,
	customerEmail?: string,
	gender?: string,
	userPoint?: number,
	registerTime: Date,
	birthday?: Date,
	customerLevel?: number,
	userMoney?: number,
	modifiedTime?: Date,
}

export { CustomerInf }
