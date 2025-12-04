import { API_ENDPOINTS, RESOURCES, OPERATIONS } from '../utils/constants';
import type { IHttpRequestMethods, NodePropertyTypes } from 'n8n-workflow';

export const kiosksDescription = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options' as NodePropertyTypes,
		noDataExpression: true,
		displayOptions: { show: { resource: [RESOURCES.KIOSKS] } },
		options: [
			{
				name: 'Meta',
				value: OPERATIONS.META,
				description: 'Manage kiosk meta information',
				action: 'Meta',
			},
			{
				name: 'Get Kiosks',
				value: OPERATIONS.GET_KIOSKS,
				description: 'Get a list of kiosks for this administration',
				action: 'Get kiosks',
				routing: {
					request: {
						method: 'GET' as IHttpRequestMethods,
						url: API_ENDPOINTS.KIOSKS,
					},
				},
			},
			{
				name: 'Get Kiosk',
				value: OPERATIONS.GET_KIOSK,
				description: 'Get a single kiosk by id',
				action: 'Get kiosk',
				routing: {
					request: {
						method: 'GET' as IHttpRequestMethods,
						url: API_ENDPOINTS.KIOSK_BY_ID,
					},
				},
			},
			{
				name: 'Update Kiosk',
				value: OPERATIONS.UPDATE_KIOSK,
				description: 'Update a kiosk, only provided parameters will be updated',
				action: 'Update kiosk',
				routing: {
					request: {
						method: 'PUT' as IHttpRequestMethods,
						url: API_ENDPOINTS.KIOSK_BY_ID,
						qs: {
							name: '={{ $parameter["name"] || undefined }}',
						},
					},
				},
			},
			{
				name: 'Add Kiosk',
				value: OPERATIONS.ADD_KIOSK,
				description: 'Add either a empty kiosk or add parameters to a kiosk',
				action: 'Add kiosk',
				routing: {
					request: {
						method: 'POST' as IHttpRequestMethods,
						url: API_ENDPOINTS.KIOSKS,
						body: {
							name: '={{ $parameter["name"] || undefined }}',
							api_key_id: '={{ $parameter["api_key_id"] || undefined }}',
							brand: '={{ $parameter["brand"] || undefined }}',
						},
					},
				},
			},
			{
				name: 'Delete Kiosk',
				value: OPERATIONS.DELETE_KIOSK,
				description: 'Deletes a kiosk from the administration by ID',
				action: 'Delete kiosk',
				routing: {
					request: {
						method: 'DELETE' as IHttpRequestMethods,
						url: API_ENDPOINTS.KIOSK_BY_ID,
					},
				},
			},
			{
				name: 'Install Kiosk',
				value: OPERATIONS.INSTALL_KIOSK,
				description: 'Installs a kiosk from the administration by ID',
				action: 'Install kiosk',
				routing: {
					request: {
						method: 'POST' as IHttpRequestMethods,
						url: API_ENDPOINTS.KIOSK_INSTALL,
					},
				},
			},
		],
		default: OPERATIONS.GET_KIOSKS,
	},
	{
		displayName: 'Meta Operation',
		name: 'metaOperation',
		type: 'options' as NodePropertyTypes,
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [RESOURCES.KIOSKS],
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
						url: API_ENDPOINTS.KIOSK_META,
						qs: {
							key: '={{ $parameter["key"] || undefined }}',
						},
					},
				},
			},
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
							contact_id: '={{ $parameter["update_contact_id"] || undefined }}',
						},
					},
				},
			},
			{
				name: 'Delete Meta',
				value: OPERATIONS.DELETE_META,
				description: 'Delete the kiosk meta',
				routing: {
					request: {
						method: 'DELETE' as IHttpRequestMethods,
						url: API_ENDPOINTS.KIOSK_META,
						qs: {
							key: '={{ $parameter["key"] || undefined }}',
						},
					},
				},
			},
		],
		default: OPERATIONS.GET_META,
	},

	// Required ID fields
	{
		displayName: 'Kiosk ID',
		name: 'kiosk_id',
		type: 'string' as NodePropertyTypes,
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [RESOURCES.KIOSKS],
				operation: [
					OPERATIONS.GET_KIOSK,
					OPERATIONS.UPDATE_KIOSK,
					OPERATIONS.DELETE_KIOSK,
					OPERATIONS.INSTALL_KIOSK,
					OPERATIONS.META,
				],
			},
		},
	},

	{
		displayName: 'Name',
		name: 'name',
		type: 'string' as NodePropertyTypes,
		description: 'Name of the kiosk',
		placeholder: 'Verifone P400Plus',
		default: '',
		displayOptions: {
			show: {
				resource: [RESOURCES.KIOSKS],
				operation: [OPERATIONS.UPDATE_KIOSK, OPERATIONS.ADD_KIOSK],
			},
		},
	},

	{
		displayName: 'API Key ID',
		name: 'api_key_id',
		type: 'string' as NodePropertyTypes,
		description: 'API Key ID to associate with the kiosk',
		placeholder: '12345',
		default: '',
		displayOptions: {
			show: {
				resource: [RESOURCES.KIOSKS],
				operation: [OPERATIONS.ADD_KIOSK],
			},
		},
	},
	{
		displayName: 'Brand',
		name: 'brand',
		type: 'string' as NodePropertyTypes,
		description: 'Brand of the kiosk',
		placeholder: 'Verifone',
		default: '',
		displayOptions: {
			show: {
				resource: [RESOURCES.KIOSKS],
				operation: [OPERATIONS.ADD_KIOSK],
			},
		},
	},

	{
		displayName: 'Key',
		name: 'key',
		type: 'string' as NodePropertyTypes,
		description: 'Meta key to get or update',
		placeholder: 'app_id',
		default: '',
		displayOptions: {
			show: {
				resource: [RESOURCES.KIOSKS],
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
		placeholder: '216',
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
