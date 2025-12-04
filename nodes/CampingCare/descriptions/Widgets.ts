import { API_ENDPOINTS, RESOURCES, OPERATIONS } from '../utils/constants';
import type { IHttpRequestMethods, NodePropertyTypes } from 'n8n-workflow';
import { booleanParams } from '../utils/booleanParameters';

export const widgetsDescription = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options' as NodePropertyTypes,
		noDataExpression: true,
		displayOptions: { show: { resource: [RESOURCES.WIDGETS] } },
		options: [
			{
				name: 'Get Widgets',
				value: OPERATIONS.GET_WIDGETS,
				description: 'Get a list of widgets for this administration',
				action: 'Get widgets',
				routing: {
					request: {
						method: 'GET' as IHttpRequestMethods,
						url: API_ENDPOINTS.WIDGETS,
						qs: {
							// Boolean parameters
							count: '={{ $parameter["count"] || undefined }}',
							// Query parameters
							area: '={{ $parameter["area"] || undefined }}',
							limit: '={{ $parameter["limit"] || undefined }}',
							offset: '={{ $parameter["offset"] || undefined }}',
							order: '={{ $parameter["order"] || undefined }}',
							order_by: '={{ $parameter["order_by"] || undefined }}',
						},
					},
				},
			},
			{
				name: 'Get Widget',
				value: OPERATIONS.GET_WIDGET,
				description: 'Get a single widget by id',
				action: 'Get widget',
				routing: {
					request: {
						method: 'GET' as IHttpRequestMethods,
						url: API_ENDPOINTS.WIDGET_BY_ID,
					},
				},
			},
			{
				name: 'Add Widget',
				value: OPERATIONS.ADD_WIDGET,
				description: 'Add either a empty widget or add parameters to a widget',
				action: 'Add widget',
				routing: {
					request: {
						method: 'POST' as IHttpRequestMethods,
						url: API_ENDPOINTS.WIDGETS,
						body: {
							app_id: '={{ $parameter["app_id"] || undefined }}',
							area: '={{ $parameter["area"] || undefined }}',
							data: '={{ $parameter["data"] || undefined }}',
							url: '={{ $parameter["url"] || undefined }}',
						},
					},
				},
			},
			{
				name: 'Delete Widget',
				value: OPERATIONS.DELETE_WIDGET,
				description: 'Delete a widget by id',
				action: 'Delete widget',
				routing: {
					request: {
						method: 'DELETE' as IHttpRequestMethods,
						url: API_ENDPOINTS.WIDGET_BY_ID,
					},
				},
			},
		],
		default: OPERATIONS.GET_WIDGETS,
	},

	{
		displayName: 'Widget ID',
		name: 'widget_id',
		type: 'string' as NodePropertyTypes,
		required: true,
		default: '',
		description: 'ID of the widget',
		displayOptions: {
			show: {
				resource: [RESOURCES.WIDGETS],
				operation: [OPERATIONS.GET_WIDGET, OPERATIONS.DELETE_WIDGET],
			},
		},
	},

	booleanParams.count([RESOURCES.WIDGETS], [OPERATIONS.GET_WIDGETS]),

	{
		displayName: 'Area',
		name: 'area',
		type: 'string' as NodePropertyTypes,
		description: 'Area of the widget',
		placeholder: 'booking_form',
		default: '',
		displayOptions: {
			show: {
				resource: [RESOURCES.WIDGETS],
				operation: [OPERATIONS.GET_WIDGETS, OPERATIONS.ADD_WIDGET],
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'string' as NodePropertyTypes,
		description: 'Number of results to return',
		placeholder: '10',
		default: '',
		displayOptions: {
			show: {
				resource: [RESOURCES.WIDGETS],
				operation: [OPERATIONS.GET_WIDGETS],
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
				resource: [RESOURCES.WIDGETS],
				operation: [OPERATIONS.GET_WIDGETS],
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
				resource: [RESOURCES.WIDGETS],
				operation: [OPERATIONS.GET_WIDGETS],
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
			{ name: 'Admin ID', value: 'admin_id' },
			{ name: 'App ID', value: 'app_id' },
			{ name: 'URL', value: 'url' },
			{ name: 'Area', value: 'area' },
			{ name: 'Data', value: 'data' },
		],
		default: '',
		displayOptions: {
			show: {
				resource: [RESOURCES.WIDGETS],
				operation: [OPERATIONS.GET_WIDGETS],
			},
		},
	},

	{
		displayName: 'App ID',
		name: 'app_id',
		type: 'string' as NodePropertyTypes,
		description: 'App ID for the widget',
		placeholder: '11',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [RESOURCES.WIDGETS],
				operation: [OPERATIONS.ADD_WIDGET],
			},
		},
	},
	{
		displayName: 'Area',
		name: 'area',
		type: 'string' as NodePropertyTypes,
		description: 'Area of the widget',
		placeholder: 'booking_form',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [RESOURCES.WIDGETS],
				operation: [OPERATIONS.GET_WIDGETS, OPERATIONS.ADD_WIDGET],
			},
		},
	},
	{
		displayName: 'Data',
		name: 'data',
		type: 'string' as NodePropertyTypes,
		description: 'Data for the widget in JSON format',
		default: '',
		displayOptions: {
			show: {
				resource: [RESOURCES.WIDGETS],
				operation: [OPERATIONS.ADD_WIDGET],
			},
		},
	},
	{
		displayName: 'URL',
		name: 'url',
		type: 'string' as NodePropertyTypes,
		description: 'URL for the widget',
		placeholder: 'https://google.nl',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [RESOURCES.WIDGETS],
				operation: [OPERATIONS.ADD_WIDGET],
			},
		},
	},
];
