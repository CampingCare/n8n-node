import { API_ENDPOINTS, RESOURCES, OPERATIONS } from '../utils/constants';
import type { IHttpRequestMethods, NodePropertyTypes } from 'n8n-workflow';
import { booleanParams } from '../utils/booleanParameters';

export const usersDescription = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options' as NodePropertyTypes,
		noDataExpression: true,
		displayOptions: { show: { resource: [RESOURCES.USERS] } },
		options: [
			{
				name: 'Meta',
				value: OPERATIONS.META,
				description: 'Manage user meta information',
				action: 'Meta',
			},
			{
				name: 'Get Users',
				value: OPERATIONS.GET_USERS,
				description: 'Get a list of users for this administration',
				action: 'Get users',
				routing: {
					request: {
						method: 'GET' as IHttpRequestMethods,
						url: API_ENDPOINTS.USERS,
						qs: {
							// Boolean parameters
							count: '={{ $parameter["count"] || undefined }}',
							get_administrations: '={{ $parameter["get_administrations"] || undefined }}',
							get_meta: '={{ $parameter["get_meta"] || undefined }}',
							get_rights: '={{ $parameter["get_rights"] || undefined }}',
							// Query parameters
							limit: '={{ $parameter["limit"] || undefined }}',
							offset: '={{ $parameter["offset"] || undefined }}',
							order: '={{ $parameter["order"] || undefined }}',
							order_by: '={{ $parameter["order_by"] || undefined }}',
						},
					},
				},
			},
			{
				name: 'Get User',
				value: OPERATIONS.GET_USER,
				description: 'Get a single user by id',
				action: 'Get user',
				routing: {
					request: {
						method: 'GET' as IHttpRequestMethods,
						url: API_ENDPOINTS.USER_BY_ID,
						qs: {
							get_administrations: '={{ $parameter["get_administrations"] || undefined }}',
							get_meta: '={{ $parameter["get_meta"] || undefined }}',
							get_rights: '={{ $parameter["get_rights"] || undefined }}',
						},
					},
				},
			},
			{
				name: 'Update User',
				value: OPERATIONS.UPDATE_USER,
				description: 'Update a user, only provided parameters will be updated',
				action: 'Update user',
				routing: {
					request: {
						method: 'PUT' as IHttpRequestMethods,
						url: API_ENDPOINTS.USER_BY_ID,
						qs: {
							first_name: '={{ $parameter["first_name"] || undefined }}',
							last_name: '={{ $parameter["last_name"] || undefined }}',
							email: '={{ $parameter["email"] || undefined }}',
						},
					},
				},
			},
			{
				name: 'Add User',
				value: OPERATIONS.ADD_USER,
				description: 'Add either a empty user or add parameters to a user',
				action: 'Add user',
				routing: {
					request: {
						method: 'POST' as IHttpRequestMethods,
						url: API_ENDPOINTS.USERS,
						body: {
							first_name: '={{ $parameter["first_name"] || undefined }}',
							last_name: '={{ $parameter["last_name"] || undefined }}',
							email: '={{ $parameter["email"] || undefined }}',
						},
					},
				},
			},
		],
		default: OPERATIONS.GET_USERS,
	},
	{
		displayName: 'Meta Operation',
		name: 'metaOperation',
		type: 'options' as NodePropertyTypes,
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [RESOURCES.USERS],
				operation: [OPERATIONS.META],
			},
		},
		options: [
			{
				name: 'Update Meta',
				value: OPERATIONS.UPDATE_META,
				description: 'Update the kiosk meta',
				routing: {
					request: {
						method: 'PUT' as IHttpRequestMethods,
						url: API_ENDPOINTS.KIOSK_META,
						qs: {
							key: '={{ $parameter["key"] || undefined }}',
							value: '={{ $parameter["value"] || undefined }}',
						},
					},
				},
			},
			{
				name: 'Get Meta',
				value: OPERATIONS.GET_META,
				description: 'Get the kiosk meta',
				routing: {
					request: {
						method: 'GET' as IHttpRequestMethods,
						url: API_ENDPOINTS.KIOSK_META,
						qs: {
							key: '={{ $parameter["key"] || undefined }}',
						},
					},
				},
			},
		],
		default: OPERATIONS.UPDATE_META,
	},

	{
		displayName: 'User ID',
		name: 'user_id',
		type: 'string' as NodePropertyTypes,
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [RESOURCES.USERS],
				operation: [OPERATIONS.GET_USER, OPERATIONS.UPDATE_USER, OPERATIONS.META],
			},
		},
	},

	booleanParams.count([RESOURCES.USERS], [OPERATIONS.GET_USERS]),
	booleanParams.getAdministrations([RESOURCES.USERS], [OPERATIONS.GET_USERS, OPERATIONS.GET_USER]),
	booleanParams.getMeta([RESOURCES.USERS], [OPERATIONS.GET_USERS, OPERATIONS.GET_USER]),
	booleanParams.getRights([RESOURCES.USERS], [OPERATIONS.GET_USERS, OPERATIONS.GET_USER]),

	{
		displayName: 'Limit',
		name: 'limit',
		type: 'string' as NodePropertyTypes,
		description: 'Number of results to return',
		placeholder: '10',
		default: '',
		displayOptions: {
			show: {
				resource: [RESOURCES.USERS],
				operation: [OPERATIONS.GET_USERS],
			},
		},
	},
	{
		displayName: 'Offset',
		name: 'offset',
		type: 'string' as NodePropertyTypes,
		description: 'Number of results to skip',
		placeholder: '0',
		default: '',
		displayOptions: {
			show: {
				resource: [RESOURCES.USERS],
				operation: [OPERATIONS.GET_USERS],
			},
		},
	},
	{
		displayName: 'Order',
		name: 'order',
		type: 'options' as NodePropertyTypes,
		description: 'Order of the results',
		options: [
			{ name: 'None', value: '' },
			{ name: 'Ascending', value: 'asc' },
			{ name: 'Descending', value: 'desc' },
		],
		default: '',
		displayOptions: {
			show: {
				resource: [RESOURCES.USERS],
				operation: [OPERATIONS.GET_USERS],
			},
		},
	},
	{
		displayName: 'Order By',
		name: 'order_by',
		type: 'options' as NodePropertyTypes,
		description: 'Field to order the results by',
		options: [
			{ name: 'None', value: '' },
			{ name: 'ID', value: 'id' },
			{ name: 'UUID', value: 'uuid' },
			{ name: 'Display Name', value: 'display_name' },
			{ name: 'Status', value: 'status' },
			{ name: 'Type', value: 'type' },
		],
		default: '',
		displayOptions: {
			show: {
				resource: [RESOURCES.USERS],
				operation: [OPERATIONS.GET_USERS],
			},
		},
	},

	{
		displayName: 'First Name',
		name: 'first_name',
		type: 'string' as NodePropertyTypes,
		description: 'First name of the user',
		placeholder: 'John',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [RESOURCES.USERS],
				operation: [OPERATIONS.ADD_USER],
			},
		},
	},
	{
		displayName: 'Last Name',
		name: 'last_name',
		type: 'string' as NodePropertyTypes,
		description: 'Last name of the user',
		placeholder: 'Doe',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [RESOURCES.USERS],
				operation: [OPERATIONS.ADD_USER],
			},
		},
	},
	{
		displayName: 'Email',
		name: 'email',
		type: 'string' as NodePropertyTypes,
		description: 'Email address of the user',
		placeholder: 'john.doe@example.com',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [RESOURCES.USERS],
				operation: [OPERATIONS.ADD_USER],
			},
		},
	},

	{
		displayName: 'First Name',
		name: 'first_name',
		type: 'string' as NodePropertyTypes,
		description: 'First name of the user',
		placeholder: 'John',
		default: '',
		displayOptions: {
			show: {
				resource: [RESOURCES.USERS],
				operation: [OPERATIONS.UPDATE_USER],
			},
		},
	},
	{
		displayName: 'Last Name',
		name: 'last_name',
		type: 'string' as NodePropertyTypes,
		description: 'Last name of the user',
		placeholder: 'Doe',
		default: '',
		displayOptions: {
			show: {
				resource: [RESOURCES.USERS],
				operation: [OPERATIONS.UPDATE_USER],
			},
		},
	},
	{
		displayName: 'Email',
		name: 'email',
		type: 'string' as NodePropertyTypes,
		description: 'Email address of the user',
		placeholder: 'john.doe@example.com',
		default: '',
		displayOptions: {
			show: {
				resource: [RESOURCES.USERS],
				operation: [OPERATIONS.UPDATE_USER],
			},
		},
	},

	{
		displayName: 'Key',
		name: 'key',
		type: 'string' as NodePropertyTypes,
		description: 'Meta key to get or update',
		placeholder: 'nickname',
		default: '',
		displayOptions: {
			show: {
				resource: [RESOURCES.KIOSKS],
				operation: [OPERATIONS.META],
				metaOperation: [OPERATIONS.GET_META, OPERATIONS.UPDATE_META],
			},
		},
	},
	{
		displayName: 'Value',
		name: 'value',
		type: 'string' as NodePropertyTypes,
		description: 'Value to set for the meta key',
		placeholder: 'arjen-de-lat1',
		default: '',
		displayOptions: {
			show: {
				resource: [RESOURCES.KIOSKS],
				operation: [OPERATIONS.META],
				metaOperation: [OPERATIONS.UPDATE_META],
			},
		},
	},
];
