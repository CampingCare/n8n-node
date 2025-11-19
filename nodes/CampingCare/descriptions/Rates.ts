import type { NodePropertyTypes, IHttpRequestMethods } from 'n8n-workflow';
import { API_ENDPOINTS, RESOURCES, OPERATIONS } from '../utils/constants';

export const ratesDescription = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options' as NodePropertyTypes,
		noDataExpression: true,
		displayOptions: { show: { resource: [RESOURCES.RATES] } },
		options: [
			{
				name: 'Prices',
				value: OPERATIONS.PRICES,
				description: 'HTTP methods for prices of a rate',
				action: 'Prices',
			},
			{
				name: 'Meta',
				value: OPERATIONS.META,
				description: 'HTTP methods for meta of a rate',
				action: 'Meta',
			},
			{
				name: 'Get Rates',
				value: OPERATIONS.GET_RATES,
				description: 'Get a list of rates',
				action: 'Get rates',
				routing: {
					request: {
						method: 'GET' as IHttpRequestMethods,
						url: API_ENDPOINTS.RATES,
						qs: {
							count: '={{ $parameter["count"] || undefined }}',
							child: '={{ $parameter["child"] || undefined }}',
							limit: '={{ $parameter["limit"] || undefined }}',
							offset: '={{ $parameter["offset"] || undefined }}',
							order: '={{ $parameter["order"] || undefined }}',
							order_by: '={{ $parameter["order_by"] || undefined }}',
							parent_id: '={{ $parameter["parent_id"] || undefined }}',
							search: '={{ $parameter["search"] || undefined }}',
							status: '={{ $parameter["status"] || undefined }}',
						},
					},
				},
			},
			{
				name: 'Get Rate',
				value: OPERATIONS.GET_RATE,
				description: 'Get a single rate by ID',
				action: 'Get rate',
				routing: {
					request: {
						method: 'GET' as IHttpRequestMethods,
						url: '=/rates/{{$parameter["rateId"]}}',
					},
				},
			},
			{
				name: 'Add Rate',
				value: OPERATIONS.ADD_RATE,
				description: 'Create a new rate',
				action: 'Add rate',
				routing: {
					request: {
						method: 'POST' as IHttpRequestMethods,
						url: API_ENDPOINTS.RATES,
						body: '={{ Object.assign({}, ( $parameter.name ? { name: $parameter.name } : {} ), ( $parameter.status ? { status: $parameter.status } : {} ), ( $parameter.parent_id ? { parent_id: $parameter.parent_id } : {} ), ( $parameter.closed !== undefined && $parameter.closed !== "" ? { closed: $parameter.closed } : {} ), ( $parameter.minimum_stay ? { minimum_stay: $parameter.minimum_stay } : {} ), ( $parameter.maximum_stay ? { maximum_stay: $parameter.maximum_stay } : {} ), ( $parameter.type ? { type: $parameter.type } : {} ), ($parameter.rules?.table ? { rules: (Array.isArray($parameter.rules.table) ? $parameter.rules.table.map(r => ({ type: r.type, amount: String(r.amount) })) : [{ type: $parameter.rules.table.type, amount: String($parameter.rules.table.amount) }]) } : {}) ) }}',
					},
				},
			},
			{
				name: 'Update Rate',
				value: OPERATIONS.UPDATE_RATE,
				description: 'Update an existing rate',
				action: 'Update rate',
				routing: {
					request: {
						method: 'PUT' as IHttpRequestMethods,
						url: '=/rates/{{$parameter["rateId"]}}',
						qs: {
							name: '={{ $parameter["name"] || undefined }}',
							parent_id: '={{ $parameter["parent_id"] || undefined }}',
							closed: '={{ $parameter["closed"] !== undefined && $parameter["closed"] !== "" ? $parameter["closed"] : undefined }}',
							minimum_stay: '={{ $parameter["minimum_stay"] || undefined }}',
							maximum_stay: '={{ $parameter["maximum_stay"] || undefined }}',
							type: '={{ $parameter["type"] || undefined }}',
							'rules[0]': '={{ $parameter["rules"]?.table ? ( Array.isArray($parameter["rules"].table) ? JSON.stringify({ type: $parameter["rules"].table[0].type, amount: String($parameter["rules"].table[0].amount) }) : JSON.stringify({ type: $parameter["rules"].table.type, amount: String($parameter["rules"].table.amount) }) ) : undefined }}',
						},
					},
				},
			},
			{
				name: 'Delete Rate',
				value: OPERATIONS.DELETE_RATE,
				description: 'Delete a rate by ID',
				action: 'Delete rate',
				routing: {
					request: {
						method: 'DELETE' as IHttpRequestMethods,
						url: '=/rates/{{$parameter["rateId"]}}',
					},
				},
			},
		],
		default: OPERATIONS.GET_RATES,
	},

	{
		displayName: 'Prices Operation',
		name: 'pricesOperation',
		type: 'options' as NodePropertyTypes,
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [RESOURCES.RATES],
				operation: [OPERATIONS.PRICES],
			},
		},
		options: [
			{
				name: 'Get Prices',
				value: OPERATIONS.GET_PRICES,
				description: 'Get prices for a specific rate',
				routing: {
					request: {
						method: 'GET' as IHttpRequestMethods,
						url: '=/rates/{{$parameter["rateId"]}}/prices',
						qs: {
							start: '={{ $parameter["start"] || undefined }}',
							end: '={{ $parameter["end"] || undefined }}',
						},
					},
				},
			},
			{
				name: 'Update Prices',
				value: OPERATIONS.UPDATE_PRICES,
				description:
					'Bulk update prices for a rate (max period 266 days). If start === end a single date is updated.',
				action: 'Update prices',
				routing: {
					request: {
						method: 'PUT' as IHttpRequestMethods,
						url: '=/rates/{{$parameter["rateId"]}}/prices',
						qs: {
							start: '={{ $parameter["start"] || undefined }}',
							end: '={{ $parameter["end"] || undefined }}',
							price: '={{ $parameter["price"] || undefined }}',
							closed: '={{ $parameter["closed"] || undefined }}',
							minimum_stay: '={{ $parameter["minimum_stay"] || undefined }}',
							maximum_stay: '={{ $parameter["maximum_stay"] || undefined }}',
							min_book_offset: '={{ $parameter["min_book_offset"] || undefined }}',
							max_book_offset: '={{ $parameter["max_book_offset"] || undefined }}',
							closed_for_arrival: '={{ $parameter["closed_for_arrival"] || undefined }}',
							closed_for_departure: '={{ $parameter["closed_for_departure"] || undefined }}',
							weekdays: '={{ $parameter["weekdays"] || undefined }}',
							age_table_prices:
								'={{ $parameter["age_table_prices"]?.table?.map(t => JSON.stringify({ id: t.id, price: String(t.price) })) || undefined }}',
						},
					},
				},
			},
		],
		default: OPERATIONS.GET_PRICES,
	},
	{
		displayName: 'Meta Operation',
		name: 'metaOperation',
		type: 'options' as NodePropertyTypes,
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [RESOURCES.RATES],
				operation: [OPERATIONS.META],
			},
		},
		options: [
			{
				name: 'Get Meta',
				value: OPERATIONS.GET_META,
				description: 'Get meta for a specific rate',
				routing: {
					request: {
						method: 'GET' as IHttpRequestMethods,
						url: '=/rates/{{$parameter["rateId"]}}/meta',
						qs: {
							key: '={{ $parameter["key"] || undefined }}',
						},
					},
				},
			},
			{
				name: 'Update Meta',
				value: OPERATIONS.UPDATE_META,
				description: 'Update meta for a specific rate',
				routing: {
					request: {
						method: 'PUT' as IHttpRequestMethods,
						url: '=/rates/{{$parameter["rateId"]}}/meta',
						qs: {
							key: '={{ $parameter["key"] || undefined }}',
						},
					},
				},
			},
			{
				name: 'Delete Meta',
				value: OPERATIONS.DELETE_META,
				description: 'Delete meta for a specific rate',
				routing: {
					request: {
						method: 'DELETE' as IHttpRequestMethods,
						url: '=/rates/{{$parameter["rateId"]}}/meta',
						qs: {
							key: '={{ $parameter["key"] || undefined }}',
						},
					},
				},
			},
		],
		default: OPERATIONS.GET_META,
	},

	{
		displayName: 'Rate ID',
		name: 'rateId',
		type: 'string' as NodePropertyTypes,
		required: true,
		default: '',
		placeholder: '23',
		description: 'ID of the rate to retrieve',
		displayOptions: {
			show: {
				resource: [RESOURCES.RATES],
				operation: [
					OPERATIONS.GET_RATE,
					OPERATIONS.UPDATE_RATE,
					OPERATIONS.DELETE_RATE,
					OPERATIONS.PRICES,
					OPERATIONS.META,
				],
			},
		},
	},

	{
		displayName: 'Key',
		name: 'key',
		type: 'string' as NodePropertyTypes,
		default: '',
		description: 'Meta key to get or update (e.g. pin, first_name)',
		displayOptions: {
			show: {
				resource: [RESOURCES.RATES],
				operation: [OPERATIONS.META],
				metaOperation: [OPERATIONS.GET_META, OPERATIONS.UPDATE_META, OPERATIONS.DELETE_META],
			},
		},
	},

	{
		displayName: 'Start',
		name: 'start',
		type: 'string' as NodePropertyTypes,
		default: '',
		placeholder: '2025-09-01',
		description: 'Start date (YYYY-MM-DD)',
		displayOptions: {
			show: {
				resource: [RESOURCES.RATES],
				operation: [OPERATIONS.PRICES],
				pricesOperation: [OPERATIONS.GET_PRICES, OPERATIONS.UPDATE_PRICES],
			},
		},
	},
	{
		displayName: 'End',
		name: 'end',
		type: 'string' as NodePropertyTypes,
		default: '',
		placeholder: '2025-12-31',
		description: 'End date (YYYY-MM-DD)',
		displayOptions: {
			show: {
				resource: [RESOURCES.RATES],
				operation: [OPERATIONS.PRICES],
				pricesOperation: [OPERATIONS.GET_PRICES, OPERATIONS.UPDATE_PRICES],
			},
		},
	},

	{
		displayName: 'Price',
		name: 'price',
		type: 'number' as NodePropertyTypes,
		default: 0,
		description: 'Base price to set',
		displayOptions: {
			show: {
				resource: [RESOURCES.RATES],
				operation: [OPERATIONS.PRICES],
				pricesOperation: [OPERATIONS.UPDATE_PRICES],
			},
		},
	},

	{
		displayName: 'Closed',
		name: 'closed',
		type: 'string' as NodePropertyTypes,
		default: '',
		placeholder: '0 (default) or 1 for closed',
		description: '0 or 1',
		displayOptions: {
			show: {
				resource: [RESOURCES.RATES],
				operation: [OPERATIONS.PRICES],
				pricesOperation: [OPERATIONS.UPDATE_PRICES],
			},
		},
	},

	{
		displayName: 'Minimum Stay',
		name: 'minimum_stay',
		type: 'number' as NodePropertyTypes,
		default: 0,
		placeholder: '0',
		description: 'Minimum stay to set (days)',
		displayOptions: {
			show: {
				resource: [RESOURCES.RATES],
				operation: [OPERATIONS.PRICES],
				pricesOperation: [OPERATIONS.UPDATE_PRICES],
			},
		},
	},

	{
		displayName: 'Maximum Stay',
		name: 'maximum_stay',
		type: 'number' as NodePropertyTypes,
		default: 0,
		placeholder: '0',
		description: 'Maximum stay to set (days)',
		displayOptions: {
			show: {
				resource: [RESOURCES.RATES],
				operation: [OPERATIONS.PRICES],
				pricesOperation: [OPERATIONS.UPDATE_PRICES],
			},
		},
	},

	{
		displayName: 'Min Book Offset',
		name: 'min_book_offset',
		type: 'number' as NodePropertyTypes,
		default: 0,
		description: 'Minimum booking offset',
		displayOptions: {
			show: {
				resource: [RESOURCES.RATES],
				operation: [OPERATIONS.PRICES],
				pricesOperation: [OPERATIONS.UPDATE_PRICES],
			},
		},
	},

	{
		displayName: 'Max Book Offset',
		name: 'max_book_offset',
		type: 'number' as NodePropertyTypes,
		default: 0,
		description: 'Maximum booking offset',
		displayOptions: {
			show: {
				resource: [RESOURCES.RATES],
				operation: [OPERATIONS.PRICES],
				pricesOperation: [OPERATIONS.UPDATE_PRICES],
			},
		},
	},

	{
		displayName: 'Closed For Arrival',
		name: 'closed_for_arrival',
		type: 'string' as NodePropertyTypes,
		default: '',
		placeholder: '0 (default) or 1 for closed',
		displayOptions: {
			show: {
				resource: [RESOURCES.RATES],
				operation: [OPERATIONS.PRICES],
				pricesOperation: [OPERATIONS.UPDATE_PRICES],
			},
		},
	},

	{
		displayName: 'Closed For Departure',
		name: 'closed_for_departure',
		type: 'string' as NodePropertyTypes,
		default: '',
		placeholder: '0 (default) or 1 for closed',
		displayOptions: {
			show: {
				resource: [RESOURCES.RATES],
				operation: [OPERATIONS.PRICES],
				pricesOperation: [OPERATIONS.UPDATE_PRICES],
			},
		},
	},

	{
		displayName: 'Weekdays (Comma Separated 0-6)',
		name: 'weekdays',
		type: 'string' as NodePropertyTypes,
		default: '',
		placeholder: '0,1,2,3,4,5,6',
		description: 'Comma-separated weekdays to apply (0=Sunday)',
		displayOptions: {
			show: {
				resource: [RESOURCES.RATES],
				operation: [OPERATIONS.PRICES],
				pricesOperation: [OPERATIONS.UPDATE_PRICES],
			},
		},
	},

	{
		displayName: 'Age Table Prices',
		name: 'age_table_prices',
		type: 'fixedCollection' as NodePropertyTypes,
		typeOptions: { multipleValues: true },
		default: { table: [] },
		description: 'List of {id, price} objects to set for age tables',
		displayOptions: {
			show: {
				resource: [RESOURCES.RATES],
				operation: [OPERATIONS.PRICES],
				pricesOperation: [OPERATIONS.UPDATE_PRICES],
			},
		},
		options: [
			{
				name: 'table',
				displayName: 'Table',
				values: [
					{
						displayName: 'Age Table ID',
						name: 'id',
						type: 'string' as NodePropertyTypes,
						default: '',
					},
					{
						displayName: 'Price',
						name: 'price',
						type: 'number' as NodePropertyTypes,
						default: 0,
					},
				],
			},
		],
	},

	{
		displayName: 'Count',
		name: 'count',
		type: 'boolean' as NodePropertyTypes,
		default: false,
		description: 'Return only the total count',
		displayOptions: { show: { resource: [RESOURCES.RATES], operation: [OPERATIONS.GET_RATES] } },
	},
	{
		displayName: 'Child',
		name: 'child',
		type: 'string' as NodePropertyTypes,
		default: '',
		description: 'Child filter',
		displayOptions: { show: { resource: [RESOURCES.RATES], operation: [OPERATIONS.GET_RATES] } },
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number' as NodePropertyTypes,
		default: 1,
		description: 'Limit for pagination',
		displayOptions: { show: { resource: [RESOURCES.RATES], operation: [OPERATIONS.GET_RATES] } },
	},
	{
		displayName: 'Offset',
		name: 'offset',
		type: 'number' as NodePropertyTypes,
		default: 1,
		description: 'Offset for pagination',
		displayOptions: { show: { resource: [RESOURCES.RATES], operation: [OPERATIONS.GET_RATES] } },
	},
	{
		displayName: 'Order',
		name: 'order',
		type: 'options' as NodePropertyTypes,
		options: [
			{ name: '— None —', value: '' },
			{ name: 'ASC', value: 'asc' },
			{ name: 'DESC', value: 'desc' },
		],
		default: '',
		displayOptions: { show: { resource: [RESOURCES.RATES], operation: [OPERATIONS.GET_RATES] } },
	},
	{
		displayName: 'Order By',
		name: 'order_by',
		type: 'options' as NodePropertyTypes,
		options: [
			{ name: '— None —', value: '' },
			{ name: 'Name', value: 'name' },
			{ name: 'ID', value: 'id' },
		],
		default: '',
		displayOptions: { show: { resource: [RESOURCES.RATES], operation: [OPERATIONS.GET_RATES] } },
	},
	{
		displayName: 'Parent ID',
		name: 'parent_id',
		type: 'string' as NodePropertyTypes,
		default: '',
		description: 'Parent rate id',
		displayOptions: { show: { resource: [RESOURCES.RATES], operation: [OPERATIONS.GET_RATES] } },
	},
	{
		displayName: 'Search',
		name: 'search',
		type: 'string' as NodePropertyTypes,
		default: '',
		description: 'Search term',
		displayOptions: { show: { resource: [RESOURCES.RATES], operation: [OPERATIONS.GET_RATES] } },
	},
	{
		displayName: 'Status',
		name: 'status',
		type: 'string' as NodePropertyTypes,
		default: '',
		description: 'Filter by status',
		displayOptions: { show: { resource: [RESOURCES.RATES], operation: [OPERATIONS.GET_RATES] } },
	},

	// Add / Update Rate fields
	{
		displayName: 'Name',
		name: 'name',
		type: 'string' as NodePropertyTypes,
		required: true,
		default: '',
		description: 'Name of the rate',
		displayOptions: {
			show: {
				resource: [RESOURCES.RATES],
				operation: [OPERATIONS.ADD_RATE, OPERATIONS.UPDATE_RATE],
			},
		},
	},
	{
		displayName: 'Status',
		name: 'status',
		type: 'options' as NodePropertyTypes,
		options: [
			{ name: '— None —', value: '' },
			{ name: 'Active', value: 'active' },
			{ name: 'Archived', value: 'archived' },
		],
		default: '',
		description: 'Status of the rate',
		displayOptions: { show: { resource: [RESOURCES.RATES], operation: [OPERATIONS.ADD_RATE] } },
	},
	{
		displayName: 'Parent ID',
		name: 'parent_id',
		type: 'string' as NodePropertyTypes,
		default: '',
		description: 'This rate uses prices from another rate id',
		displayOptions: {
			show: {
				resource: [RESOURCES.RATES],
				operation: [OPERATIONS.ADD_RATE, OPERATIONS.UPDATE_RATE],
			},
		},
	},
	{
		displayName: 'Closed',
		name: 'closed',
		type: 'string' as NodePropertyTypes,
		default: '',
		minValue: 0,
		maxValue: 1,
		placeholder: '0 (default) or 1 for closed',
		description: '0 (default) or 1 for closed',
		displayOptions: { show: { resource: [RESOURCES.RATES], operation: [OPERATIONS.UPDATE_RATE] } },
	},
	{
		displayName: 'Minimum Stay',
		name: 'minimum_stay',
		type: 'string' as NodePropertyTypes,
		default: '',
		placeholder: '0',
		description: '0 - 366 Default is 0',
		minValue: 0,
		maxValue: 366,
		displayOptions: { show: { resource: [RESOURCES.RATES], operation: [OPERATIONS.UPDATE_RATE] } },
	},
	{
		displayName: 'Maximum Stay',
		name: 'maximum_stay',
		type: 'string' as NodePropertyTypes,
		default: '',
		placeholder: '0',
		description: '0 - 366 Default is 0',
		minValue: 0,
		maxValue: 366,
		displayOptions: { show: { resource: [RESOURCES.RATES], operation: [OPERATIONS.UPDATE_RATE] } },
	},
	{
		displayName: 'Rules',
		name: 'rules',
		type: 'fixedCollection' as NodePropertyTypes,
		typeOptions: { multipleValues: false },
		default: '',
		description:
			'Single rule object with type and amount (choose fixed or percentage). Internally represented as an array for compatibility.',
		displayOptions: {
			show: {
				resource: [RESOURCES.RATES],
				operation: [OPERATIONS.ADD_RATE, OPERATIONS.UPDATE_RATE],
			},
		},
		options: [
			{
				name: 'table',
				displayName: 'Table',
				values: [
					{
						displayName: 'Type',
						name: 'type',
						type: 'options' as NodePropertyTypes,
						options: [
							{ name: 'Fixed', value: 'fixed' },
							{ name: 'Percentage', value: 'percentage' },
						],
						default: '',
					},
					{
						displayName: 'Amount',
						name: 'amount',
						type: 'number' as NodePropertyTypes,
						default: 0,
						description: 'Amount for the rule (use percentage for percent type)',
					},
				],
			},
		],
	},
];
