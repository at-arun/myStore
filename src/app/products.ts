export interface Product
{
	id: number
	, name: string
	, price: number
	, description: string
}

export const products = [
	{
		id: 1
		, name : 'Google pixel 6A'
		, price: 45000
		, description: 'Better camera beast'
	}
	, {
		id: 2
		, name : 'Sony Xperia Mark 4'
		, price: 55000
		, description: 'Phone for pro camera enthusiast'
	}
	, {
		id: 3
		, name : 'Samsung S22 ultra'
		, price: 65000
		, description: 'The ultimate phone'
	}
	, {
		id: 4
		, name : 'Mi 11 ultra'
		, price: 52000
		, description: 'The ultimate phone'
	}
]