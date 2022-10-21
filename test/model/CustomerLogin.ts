interface CustomerLogin {
	customerId: number,
	loginName: string,
	password: string,
	userStats?: number,
	modifiedTime?: Date,
}

export { CustomerLogin }
