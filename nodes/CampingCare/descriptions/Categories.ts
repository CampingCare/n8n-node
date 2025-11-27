import type { NodePropertyTypes, IHttpRequestMethods } from 'n8n-workflow';
import { API_ENDPOINTS, RESOURCES, OPERATIONS } from '../utils/constants';
import { booleanParams } from '../utils/booleanParameters';

export const categoriesDescription = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options' as NodePropertyTypes,
		noDataExpression: true,
		displayOptions: { show: { resource: [RESOURCES.CATEGORIES] } },
		options: [
			{
				name: 'Get Categories',
				value: OPERATIONS.GET_CATEGORIES,
				description: 'Get a list of categories from the system',
				action: 'Get categories',
				routing: {
					request: {
						method: 'GET' as IHttpRequestMethods,
						url: API_ENDPOINTS.CATEGORIES,
						qs: {
							count: '={{ $parameter["count"] || undefined }}',
							limit: '={{ $parameter["limit"] || undefined }}',
							offset: '={{ $parameter["offset"] || undefined }}',
							order_by: '={{ $parameter["order_by"] || undefined }}',
							order: '={{ $parameter["order"] || undefined }}',
							search: '={{ $parameter["search"] || undefined }}',
							'status[0]': '={{ $parameter["status_0"] || undefined }}',
							'status[1]': '={{ $parameter["status_1"] || undefined }}',
							'status[2]': '={{ $parameter["status_2"] || undefined }}',
						},
					},
				},
			},
			{
				name: 'Get Category',
				value: OPERATIONS.GET_CATEGORY,
				description: 'Get a single category by ID',
				action: 'Get category',
				routing: {
					request: {
						method: 'GET' as IHttpRequestMethods,
						url: API_ENDPOINTS.CATEGORY_BY_ID,
					},
				},
			},
			{
				name: 'Add Category',
				value: OPERATIONS.ADD_CATEGORY,
				description: 'Add a new category to the system',
				action: 'Add category',
				routing: {
					request: {
						method: 'POST' as IHttpRequestMethods,
						url: API_ENDPOINTS.CATEGORIES,
						body: {
							name: '={{ $parameter["name"] }}',
							description: '={{ $parameter["description"] || undefined }}',
						},
					},
				},
			},
			{
				name: 'Update Category',
				value: OPERATIONS.UPDATE_CATEGORY,
				description: 'Update the category in the system',
				action: 'Update category',
				routing: {
					request: {
						method: 'PUT' as IHttpRequestMethods,
						url: API_ENDPOINTS.CATEGORY_BY_ID,
						qs: {
							name: '={{ $parameter["update_name"] || undefined }}',
							description: '={{ $parameter["update_description"] || undefined }}',
							status: '={{ $parameter["status"] || undefined }}',
						},
					},
				},
			},
			{
				name: 'Delete Category',
				value: OPERATIONS.DELETE_CATEGORY,
				description: 'Delete a category from the system',
				action: 'Delete category',
				routing: {
					request: {
						method: 'DELETE' as IHttpRequestMethods,
						url: API_ENDPOINTS.CATEGORY_BY_ID,
					},
				},
			},
		],
		default: OPERATIONS.GET_CATEGORIES,
	},

	// Category ID for Get/Update/Delete operations
	{
		displayName: 'Category ID',
		name: 'category_id',
		type: 'string' as NodePropertyTypes,
		required: true,
		default: '',
		description: 'The ID of the category',
		displayOptions: {
			show: {
				resource: [RESOURCES.CATEGORIES],
				operation: [
					OPERATIONS.GET_CATEGORY,
					OPERATIONS.UPDATE_CATEGORY,
					OPERATIONS.DELETE_CATEGORY,
				],
			},
		},
	},

	booleanParams.count([RESOURCES.CATEGORIES], [OPERATIONS.GET_CATEGORIES]),
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'string' as NodePropertyTypes,
		placeholder: '15',
		default: '',
		description: 'Maximum number of results to return',
		displayOptions: {
			show: {
				resource: [RESOURCES.CATEGORIES],
				operation: [OPERATIONS.GET_CATEGORIES],
			},
		},
	},
	{
		displayName: 'Offset',
		name: 'offset',
		type: 'string' as NodePropertyTypes,
		placeholder: '0',
		default: '',
		description: 'Number of results to skip',
		displayOptions: {
			show: {
				resource: [RESOURCES.CATEGORIES],
				operation: [OPERATIONS.GET_CATEGORIES],
			},
		},
	},
	{
		displayName: 'Order By',
		name: 'order_by',
		type: 'options' as NodePropertyTypes,
		options: [
			{ name: 'None', value: '' },
			{ name: 'ID', value: 'id' },
			{ name: 'Category Uid', value: 'category_uid' },
			{ name: 'Icon', value: 'icon' },
			{ name: 'Admin ID', value: 'admin_id' },
			{ name: 'Name', value: 'name' },
			{ name: 'Status', value: 'status' },
			{ name: 'Rank', value: 'rank' },
		],
		default: '',
		description: 'Field to order results by',
		displayOptions: {
			show: {
				resource: [RESOURCES.CATEGORIES],
				operation: [OPERATIONS.GET_CATEGORIES],
			},
		},
	},
	{
		displayName: 'Order',
		name: 'order',
		type: 'options' as NodePropertyTypes,
		options: [
			{ name: 'None', value: '' },
			{ name: 'Ascending', value: 'asc' },
			{ name: 'Descending', value: 'desc' },
		],
		default: '',
		description: 'Sort order',
		displayOptions: {
			show: {
				resource: [RESOURCES.CATEGORIES],
				operation: [OPERATIONS.GET_CATEGORIES],
			},
		},
	},
	{
		displayName: 'Search',
		name: 'search',
		type: 'string' as NodePropertyTypes,
		placeholder: 'Search by name',
		default: '',
		description: 'Search term to filter categories',
		displayOptions: {
			show: {
				resource: [RESOURCES.CATEGORIES],
				operation: [OPERATIONS.GET_CATEGORIES],
			},
		},
	},
	{
		displayName: 'Status 1',
		name: 'status_0',
		type: 'options' as NodePropertyTypes,
		description: 'Filter by first status (leave empty to not filter)',
		options: [
			{ name: 'None', value: '' },
			{ name: 'Active', value: 'active' },
			{ name: 'Inactive', value: 'inactive' },
			{ name: 'Deleted', value: 'deleted' },
		],
		default: '',
		displayOptions: {
			show: {
				resource: [RESOURCES.CATEGORIES],
				operation: [OPERATIONS.GET_CATEGORIES],
			},
		},
	},
	{
		displayName: 'Status 2',
		name: 'status_1',
		type: 'options' as NodePropertyTypes,
		description: 'Filter by second status (leave empty to not filter)',
		options: [
			{ name: 'None', value: '' },
			{ name: 'Active', value: 'active' },
			{ name: 'Inactive', value: 'inactive' },
			{ name: 'Deleted', value: 'deleted' },
		],
		default: '',
		displayOptions: {
			show: {
				resource: [RESOURCES.CATEGORIES],
				operation: [OPERATIONS.GET_CATEGORIES],
			},
		},
	},
  {
		displayName: 'Status 3',
		name: 'status_2',
		type: 'options' as NodePropertyTypes,
		description: 'Filter by third status (leave empty to not filter)',
		options: [
			{ name: 'None', value: '' },
			{ name: 'Active', value: 'active' },
			{ name: 'Inactive', value: 'inactive' },
			{ name: 'Deleted', value: 'deleted' },
		],
		default: '',
		displayOptions: {
			show: {
				resource: [RESOURCES.CATEGORIES],
				operation: [OPERATIONS.GET_CATEGORIES],
			},
		},
	},

	// Add Category parameters
	{
		displayName: 'Name',
		name: 'name',
		type: 'string' as NodePropertyTypes,
		required: true,
		default: '',
		description: 'The name of the category',
		displayOptions: {
			show: {
				resource: [RESOURCES.CATEGORIES],
				operation: [OPERATIONS.ADD_CATEGORY],
			},
		},
	},
	{
		displayName: 'Description',
		name: 'description',
		type: 'string' as NodePropertyTypes,
		default: '',
		description: 'Description of the category',
		displayOptions: {
			show: {
				resource: [RESOURCES.CATEGORIES],
				operation: [OPERATIONS.ADD_CATEGORY],
			},
		},
	},

	// Update Category parameters
	{
		displayName: 'Name',
		name: 'update_name',
		type: 'string' as NodePropertyTypes,
		default: '',
		description: 'The new name of the category',
		displayOptions: {
			show: {
				resource: [RESOURCES.CATEGORIES],
				operation: [OPERATIONS.UPDATE_CATEGORY],
			},
		},
	},
	{
		displayName: 'Description',
		name: 'update_description',
		type: 'string' as NodePropertyTypes,
		default: '',
		description: 'The new description of the category',
		displayOptions: {
			show: {
				resource: [RESOURCES.CATEGORIES],
				operation: [OPERATIONS.UPDATE_CATEGORY],
			},
		},
	},
	{
		displayName: 'Status',
		name: 'status',
		type: 'options' as NodePropertyTypes,
		options: [
			{ name: 'None', value: '' },
			{ name: 'Active', value: 'active' },
			{ name: 'Inactive', value: 'inactive' },
			{ name: 'Deleted', value: 'deleted' },
		],
		default: '',
		description: 'Status of the category',
		displayOptions: {
			show: {
				resource: [RESOURCES.CATEGORIES],
				operation: [OPERATIONS.UPDATE_CATEGORY],
			},
		},
	},
];
