import { booleanParams } from '../utils/booleanParameters';
import { API_ENDPOINTS, RESOURCES, OPERATIONS } from '../utils/constants';
import type { IHttpRequestMethods, NodePropertyTypes } from 'n8n-workflow';

export const productsDescription = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options' as NodePropertyTypes,
		noDataExpression: true,
		displayOptions: { show: { resource: [RESOURCES.PRODUCTS] } },
		options: [
			{
				name: 'Meta',
				value: OPERATIONS.META,
				description: 'Manage product meta information',
				action: 'Meta',
			},
			{
				name: 'Get Products',
				value: OPERATIONS.GET_PRODUCTS,
				description: 'Get a list of products for this administration',
				action: 'Get products',
				routing: {
					request: {
						method: 'GET' as IHttpRequestMethods,
						url: API_ENDPOINTS.PRODUCTS,
						qs: {
							count: '={{ $parameter["count"] || undefined }}',
							get_meta: '={{ $parameter["get_meta"] || undefined }}',
							get_tags: '={{ $parameter["get_tags"] || undefined }}',
							translations: '={{ $parameter["translations"] || undefined }}',
							category: '={{ $parameter["category"] || undefined }}',
							deal_id: '={{ $parameter["deal_id"] || undefined }}',
							limit: '={{ $parameter["limit"] || undefined }}',
							offset: '={{ $parameter["offset"] || undefined }}',
							order: '={{ $parameter["order"] || undefined }}',
							order_by: '={{ $parameter["order_by"] || undefined }}',
							type: '={{ $parameter["type"] || undefined }}',
						},
					},
				},
			},
			{
				name: 'Get Product',
				value: OPERATIONS.GET_PRODUCT,
				description: 'Get a single product by id',
				action: 'Get product',
				routing: {
					request: {
						method: 'GET' as IHttpRequestMethods,
						url: API_ENDPOINTS.PRODUCT_BY_ID,
						qs: {
							get_meta: '={{ $parameter["get_meta"] || undefined }}',
							get_tags: '={{ $parameter["get_tags"] || undefined }}',
							translations: '={{ $parameter["translations"] || undefined }}',
						},
					},
				},
			},
			{
				name: 'Update Product',
				value: OPERATIONS.UPDATE_PRODUCT,
				description: 'Update a product, only provided parameters will be updated',
				action: 'Update product',
				routing: {
					request: {
						method: 'PUT' as IHttpRequestMethods,
						url: API_ENDPOINTS.PRODUCT_BY_ID,
						qs: {
							name: '={{ $parameter["name"] || undefined }}',
							description: '={{ $parameter["description"] || undefined }}',
							category: '={{ $parameter["category"] || undefined }}',
							price_incl: '={{ $parameter["price_incl"] || undefined }}',
							vat_procent: '={{ $parameter["vat_procent"] || undefined }}',
							type: '={{ $parameter["type"] || undefined }}',
							percentage: '={{ $parameter["percentage"] || undefined }}',
							meta: '={{ $parameter["metaFields"]?.field?.filter(f => f.value !== "" && f.value !== undefined)?.map(f => ({ key: f.key, value: f.value })) || [] }}',
						},
					},
				},
			},
			{
				name: 'Add Product',
				value: OPERATIONS.ADD_PRODUCT,
				description: 'Add either a empty product or add parameters to a product',
				action: 'Add product',
				routing: {
					request: {
						method: 'POST' as IHttpRequestMethods,
						url: API_ENDPOINTS.PRODUCTS,
						body: {
							name: '={{ $parameter["name"] || undefined }}',
							description: '={{ $parameter["description"] || undefined }}',
							category: '={{ $parameter["category"] || undefined }}',
							price_incl: '={{ $parameter["price_incl"] || undefined }}',
							vat_procent: '={{ $parameter["vat_procent"] || undefined }}',
							type: '={{ $parameter["type"] || undefined }}',
							percentage: '={{ $parameter["percentage"] || undefined }}',
							meta: '={{ $parameter["metaFields"]?.field?.filter(f => f.value !== "" && f.value !== undefined)?.map(f => ({ key: f.key, value: f.value })) || [] }}',
						},
					},
				},
			},
			{
				name: 'Delete Product',
				value: OPERATIONS.DELETE_PRODUCT,
				description: 'Deletes a product from the administration by ID',
				action: 'Delete product',
				routing: {
					request: {
						method: 'DELETE' as IHttpRequestMethods,
						url: API_ENDPOINTS.PRODUCT_BY_ID,
					},
				},
			},
		],
		default: OPERATIONS.GET_PRODUCTS,
	},
	{
		displayName: 'Meta Operation',
		name: 'metaOperation',
		type: 'options' as NodePropertyTypes,
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [RESOURCES.PRODUCTS],
				operation: [OPERATIONS.META],
			},
		},
		options: [
			{
				name: 'Get Meta',
				value: OPERATIONS.GET_META,
				description: 'Get the kiosk meta',
				routing: {
					request: {
						method: 'GET' as IHttpRequestMethods,
						url: API_ENDPOINTS.PRODUCT_META,
						qs: {
							key: '={{ $parameter["key"] || undefined }}',
						},
					},
				},
			},
			{
				name: 'Update Meta',
				value: OPERATIONS.UPDATE_META,
				description: 'Update the product meta',
				routing: {
					request: {
						method: 'PUT' as IHttpRequestMethods,
						url: API_ENDPOINTS.PRODUCT_META,
						qs: {
							key: '={{ $parameter["key"] || undefined }}',
							value: '={{ $parameter["value"] || undefined }}',
						},
					},
				},
			},
			{
				name: 'Delete Meta',
				value: OPERATIONS.DELETE_META,
				description: 'Delete the product meta',
				routing: {
					request: {
						method: 'DELETE' as IHttpRequestMethods,
						url: API_ENDPOINTS.PRODUCT_META,
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
		displayName: 'Product ID',
		name: 'product_id',
		type: 'string' as NodePropertyTypes,
		required: true,
		default: '',
		description: 'ID of the product',
		displayOptions: {
			show: {
				resource: [RESOURCES.PRODUCTS],
				operation: [
					OPERATIONS.GET_PRODUCT,
					OPERATIONS.UPDATE_PRODUCT,
					OPERATIONS.DELETE_PRODUCT,
					OPERATIONS.META,
				],
			},
		},
	},

	booleanParams.count([RESOURCES.PRODUCTS], [OPERATIONS.GET_PRODUCTS]),
	booleanParams.getMeta([RESOURCES.PRODUCTS], [OPERATIONS.GET_PRODUCTS, OPERATIONS.GET_PRODUCT]),
	booleanParams.getTags([RESOURCES.PRODUCTS], [OPERATIONS.GET_PRODUCTS, OPERATIONS.GET_PRODUCT]),
	booleanParams.translations(
		[RESOURCES.PRODUCTS],
		[OPERATIONS.GET_PRODUCTS, OPERATIONS.GET_PRODUCT],
	),

	{
		displayName: 'Category',
		name: 'category',
		type: 'string' as NodePropertyTypes,
		description: 'Filter products by category',
		placeholder: 'discount',
		default: '',
		displayOptions: {
			show: {
				resource: [RESOURCES.PRODUCTS],
				operation: [OPERATIONS.GET_PRODUCTS],
			},
		},
	},
	{
		displayName: 'Deal ID',
		name: 'deal_id',
		type: 'string' as NodePropertyTypes,
		description: 'Filter products by deal ID',
		placeholder: '10624',
		default: '',
		displayOptions: {
			show: {
				resource: [RESOURCES.PRODUCTS],
				operation: [OPERATIONS.GET_PRODUCTS],
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'string' as NodePropertyTypes,
		description: 'Limit the number of products returned',
		placeholder: '2',
		default: '',
		displayOptions: {
			show: {
				resource: [RESOURCES.PRODUCTS],
				operation: [OPERATIONS.GET_PRODUCTS],
			},
		},
	},
	{
		displayName: 'Offset',
		name: 'offset',
		type: 'string' as NodePropertyTypes,
		description: 'Number of products to skip',
		placeholder: '20',
		default: '',
		displayOptions: {
			show: {
				resource: [RESOURCES.PRODUCTS],
				operation: [OPERATIONS.GET_PRODUCTS],
			},
		},
	},
	{
		displayName: 'Order',
		name: 'order',
		type: 'options' as NodePropertyTypes,
		description: 'Order of products returned',
		options: [
			{ name: 'None', value: '' },
			{ name: 'Ascending', value: 'asc' },
			{ name: 'Descending', value: 'desc' },
		],
		default: '',
		displayOptions: {
			show: {
				resource: [RESOURCES.PRODUCTS],
				operation: [OPERATIONS.GET_PRODUCTS],
			},
		},
	},
	{
		displayName: 'Order By',
		name: 'order_by',
		type: 'options' as NodePropertyTypes,
		description: 'Field to order products by',
		options: [
			{ name: 'None', value: '' },
			{ name: 'ID', value: 'id' },
			{ name: 'Product UID', value: 'product_uid' },
			{ name: 'Admin ID', value: 'admin_id' },
			{ name: 'Product ID', value: 'product_id' },
			{ name: 'Status', value: 'status' },
			{ name: 'Type', value: 'type' },
			{ name: 'Category', value: 'category' },
			{ name: 'Name', value: 'name' },
			{ name: 'Price', value: 'price' },
			{ name: 'Price Incl', value: 'price_incl' },
			{ name: 'VAT Procent', value: 'vat_procent' },
			{ name: 'Percentage', value: 'percentage' },
			{ name: 'Rank', value: 'rank' },
		],
		default: '',
		displayOptions: {
			show: {
				resource: [RESOURCES.PRODUCTS],
				operation: [OPERATIONS.GET_PRODUCTS],
			},
		},
	},
	{
		displayName: 'Type',
		name: 'type',
		type: 'options' as NodePropertyTypes,
		description: 'Filter products by type',
		options: [
			{ name: 'None', value: '' },
			{ name: 'Price', value: 'price' },
			{ name: 'Procent', value: 'procent' },
		],
		default: '',
		displayOptions: {
			show: {
				resource: [RESOURCES.PRODUCTS],
				operation: [OPERATIONS.GET_PRODUCTS],
			},
		},
	},

	{
		displayName: 'Name',
		name: 'name',
		type: 'string' as NodePropertyTypes,
		description: 'Name of the product',
		placeholder: 'new package',
		default: '',
		displayOptions: {
			show: {
				resource: [RESOURCES.PRODUCTS],
				operation: [OPERATIONS.ADD_PRODUCT, OPERATIONS.UPDATE_PRODUCT],
			},
		},
	},
	{
		displayName: 'Description',
		name: 'description',
		type: 'string' as NodePropertyTypes,
		description: 'Description of the product',
		placeholder: 'This is a new product',
		default: '',
		displayOptions: {
			show: {
				resource: [RESOURCES.PRODUCTS],
				operation: [OPERATIONS.ADD_PRODUCT, OPERATIONS.UPDATE_PRODUCT],
			},
		},
	},
	{
		displayName: 'Category',
		name: 'category',
		type: 'string' as NodePropertyTypes,
		description: 'Category of the product',
		placeholder: 'tax',
		default: '',
		displayOptions: {
			show: {
				resource: [RESOURCES.PRODUCTS],
				operation: [OPERATIONS.ADD_PRODUCT, OPERATIONS.UPDATE_PRODUCT],
			},
		},
	},
	{
		displayName: 'Price Incl',
		name: 'price_incl',
		type: 'string' as NodePropertyTypes,
		description: 'Price including VAT',
		placeholder: '12',
		default: '',
		displayOptions: {
			show: {
				resource: [RESOURCES.PRODUCTS],
				operation: [OPERATIONS.ADD_PRODUCT, OPERATIONS.UPDATE_PRODUCT],
			},
		},
	},
	{
		displayName: 'VAT Procent',
		name: 'vat_procent',
		type: 'string' as NodePropertyTypes,
		description: 'VAT percentage for the product',
		placeholder: '9',
		default: '',
		displayOptions: {
			show: {
				resource: [RESOURCES.PRODUCTS],
				operation: [OPERATIONS.ADD_PRODUCT, OPERATIONS.UPDATE_PRODUCT],
			},
		},
	},
	{
		displayName: 'Type',
		name: 'type',
		type: 'options' as NodePropertyTypes,
		description: 'Type of the product',
		options: [
			{ name: 'Price', value: 'price' },
			{ name: 'Procent', value: 'procent' },
		],
		default: 'price',
		displayOptions: {
			show: {
				resource: [RESOURCES.PRODUCTS],
				operation: [OPERATIONS.ADD_PRODUCT, OPERATIONS.UPDATE_PRODUCT],
			},
		},
	},
	{
		displayName: 'Percentage',
		name: 'percentage',
		type: 'string' as NodePropertyTypes,
		description: 'Percentage value (only for type "procent")',
		placeholder: '10',
		default: '',
		displayOptions: {
			show: {
				resource: [RESOURCES.PRODUCTS],
				operation: [OPERATIONS.ADD_PRODUCT, OPERATIONS.UPDATE_PRODUCT],
				type: ['procent'],
			},
		},
	},
	{
		displayName: 'Meta Fields',
		name: 'metaFields',
		type: 'fixedCollection' as NodePropertyTypes,
		description: 'Add multiple meta fields as key/value pairs',
		placeholder: 'Add Meta Field',
		typeOptions: { multipleValues: true },
		default: { field: [] },
		displayOptions: {
			show: {
				resource: [RESOURCES.PRODUCTS],
				operation: [OPERATIONS.ADD_PRODUCT, OPERATIONS.UPDATE_PRODUCT],
			},
		},
		options: [
			{
				displayName: 'Field',
				name: 'field',
				values: [
					{
						displayName: 'Key',
						name: 'key',
						type: 'string' as NodePropertyTypes,
						description: 'Name of the meta field (will be sent as meta[0], meta[1], etc.)',
						default: '',
					},
					{
						displayName: 'Value',
						name: 'value',
						type: 'string' as NodePropertyTypes,
						description: 'Value of the meta field',
						default: '',
					},
				],
			},
		],
	},

	{
		displayName: 'Key',
		name: 'key',
		type: 'string' as NodePropertyTypes,
		description: 'Meta key to get or update',
		placeholder: 'pin',
		default: '',
		displayOptions: {
			show: {
				resource: [RESOURCES.PRODUCTS],
				operation: [OPERATIONS.META],
				metaOperation: [OPERATIONS.GET_META, OPERATIONS.UPDATE_META, OPERATIONS.DELETE_META],
			},
		},
	},
	{
		displayName: 'Value',
		name: 'value',
		type: 'string' as NodePropertyTypes,
		description: 'Value to set for the meta key',
		placeholder: '12345',
		default: '',
		displayOptions: {
			show: {
				resource: [RESOURCES.PRODUCTS],
				operation: [OPERATIONS.META],
				metaOperation: [OPERATIONS.UPDATE_META],
			},
		},
	},
];
