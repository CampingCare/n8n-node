import type { NodePropertyTypes, IHttpRequestMethods } from 'n8n-workflow';
import { API_ENDPOINTS, RESOURCES, OPERATIONS } from '../utils/constants';
import { booleans } from '../utils/booleansParams';

export const accommodationsDescription = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options' as NodePropertyTypes,
		noDataExpression: true,
		displayOptions: { show: { resource: [RESOURCES.ACCOMMODATIONS] } },
		options: [
			{
				name: 'Meta',
				value: OPERATIONS.META,
				description: 'Manage accommodation meta information',
				action: 'Meta',
			},
			{
				name: 'Get Accommodations',
				value: OPERATIONS.GET_ACCOMMODATIONS,
				description: 'You can get your accommodations with the get accommodations method',
				action: 'Get accommodations',
				routing: {
					request: {
						method: 'GET' as IHttpRequestMethods,
						url: API_ENDPOINTS.ACCOMMODATIONS,
						qs: {
							count: '={{ $parameter["count"] || undefined }}',
							get_meta: '={{ $parameter["get_meta"] || undefined }}',
							get_media: '={{ $parameter["get_media"] || undefined }}',
							get_services: '={{ $parameter["get_services"] || undefined }}',
							translations: '={{ $parameter["translations"] || undefined }}',
							limit: '={{ $parameter["limit"] || undefined }}',
							offset: '={{ $parameter["offset"] || undefined }}',
							channel_id: '={{ $parameter["channel_id"] || undefined }}',
							'status[0]': '={{ $parameter["status_0"] || undefined }}',
							'status[1]': '={{ $parameter["status_1"] || undefined }}',
						},
					},
				},
			},
			{
				name: 'Get Accommodation',
				value: OPERATIONS.GET_ACCOMMODATION,
				description: 'With this method you can retreive a single accommodation',
				action: 'Get accommodation',
				routing: {
					request: {
						method: 'GET' as IHttpRequestMethods,
						url: API_ENDPOINTS.ACCOMMODATION_BY_ID,
						qs: {
							get_meta: '={{ $parameter["get_meta"] || undefined }}',
							get_media: '={{ $parameter["get_media"] || undefined }}',
							translations: '={{ $parameter["translations"] || undefined }}',
							admin_id: '={{ $parameter["admin_id"] || undefined }}',
						},
					},
				},
			},
			{
				name: 'Add Accommodation',
				value: OPERATIONS.ADD_ACCOMMODATION,
				description: 'With this method you can add a new accommodation',
				action: 'Add accommodation',
				routing: {
					request: {
						method: 'POST' as IHttpRequestMethods,
						url: API_ENDPOINTS.ACCOMMODATIONS,
						body: {
							name: '={{ $parameter["name"] }}',
						},
					},
				},
			},
			{
				name: 'Update Accommodation',
				value: OPERATIONS.UPDATE_ACCOMMODATION,
				description: 'With this method you can update an existing accommodation',
				action: 'Update accommodation',
				routing: {
					request: {
						method: 'PUT' as IHttpRequestMethods,
						url: API_ENDPOINTS.ACCOMMODATION_BY_ID,
						qs: {
							name: '={{ $parameter["update_name"] }}',
							description: '={{ $parameter["description"] || undefined }}',
							status: '={{ $parameter["status"] || undefined }}',
							vat_procent: '={{ $parameter["vat_procent"] || undefined }}',
						},
					},
				},
			},
			{
				name: 'Delete Accommodation',
				value: OPERATIONS.DELETE_ACCOMMODATION,
				description: 'With this method you can delete a single accommodation',
				action: 'Delete accommodation',
				routing: {
					request: {
						method: 'DELETE' as IHttpRequestMethods,
						url: API_ENDPOINTS.ACCOMMODATION_BY_ID,
					},
				},
			},
		],
		default: OPERATIONS.GET_ACCOMMODATIONS,
	},
	{
		displayName: 'Meta Operation',
		name: 'metaOperation',
		type: 'options' as NodePropertyTypes,
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [RESOURCES.ACCOMMODATIONS],
				operation: [OPERATIONS.META],
			},
		},
		options: [
			{
				name: 'Update Meta',
				value: OPERATIONS.UPDATE_META,
				description: 'Update the accommodation meta',
				routing: {
					request: {
						method: 'PUT' as IHttpRequestMethods,
						url: API_ENDPOINTS.ACCOMMODATION_META,
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
				description: 'Get the accommodation meta',
				routing: {
					request: {
						method: 'GET' as IHttpRequestMethods,
						url: API_ENDPOINTS.ACCOMMODATION_META,
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
		displayName: 'Accommodation',
		name: 'accommodation_id',
		type: 'options' as NodePropertyTypes,
		required: true,
		description: 'Select the accommodation',
		default: '',
		typeOptions: { loadOptionsMethod: 'getAccommodations' },
		displayOptions: {
			show: {
				resource: [RESOURCES.ACCOMMODATIONS],
				operation: [
					OPERATIONS.GET_ACCOMMODATION,
					OPERATIONS.DELETE_ACCOMMODATION,
					OPERATIONS.META,
					OPERATIONS.UPDATE_ACCOMMODATION,
				],
			},
		},
	},

	booleans.count([RESOURCES.ACCOMMODATIONS], [OPERATIONS.GET_ACCOMMODATIONS]),
	booleans.getMeta(
		[RESOURCES.ACCOMMODATIONS],
		[OPERATIONS.GET_ACCOMMODATIONS, OPERATIONS.GET_ACCOMMODATION],
	),
	booleans.getMedia(
		[RESOURCES.ACCOMMODATIONS],
		[OPERATIONS.GET_ACCOMMODATIONS, OPERATIONS.GET_ACCOMMODATION],
	),
	booleans.getServices([RESOURCES.ACCOMMODATIONS], [OPERATIONS.GET_ACCOMMODATIONS]),
	booleans.translations(
		[RESOURCES.ACCOMMODATIONS],
		[OPERATIONS.GET_ACCOMMODATIONS, OPERATIONS.GET_ACCOMMODATION],
	),

	{
		displayName: 'Limit',
		name: 'limit',
		type: 'string' as NodePropertyTypes,
		description: 'Maximum number of accommodations to return',
		placeholder: '15',
		default: '',
		displayOptions: {
			show: { resource: [RESOURCES.ACCOMMODATIONS], operation: [OPERATIONS.GET_ACCOMMODATIONS] },
		},
	},
	{
		displayName: 'Offset',
		name: 'offset',
		type: 'string' as NodePropertyTypes,
		description: 'Number of items to skip before starting to return results',
		placeholder: '0',
		default: '',
		displayOptions: {
			show: { resource: [RESOURCES.ACCOMMODATIONS], operation: [OPERATIONS.GET_ACCOMMODATIONS] },
		},
	},
	{
		displayName: 'Channel',
		name: 'channel_id',
		type: 'options' as NodePropertyTypes,
		description: 'Select a channel (OTAs)',
		default: '',
		typeOptions: { loadOptionsMethod: 'getChannels' },
		displayOptions: {
			show: { resource: [RESOURCES.ACCOMMODATIONS], operation: [OPERATIONS.GET_ACCOMMODATIONS] },
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
			{ name: 'Nonactive', value: 'nonactive' },
		],
		default: '',
		displayOptions: {
			show: { resource: [RESOURCES.ACCOMMODATIONS], operation: [OPERATIONS.GET_ACCOMMODATIONS] },
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
			{ name: 'Nonactive', value: 'nonactive' },
		],
		default: '',
		displayOptions: {
			show: { resource: [RESOURCES.ACCOMMODATIONS], operation: [OPERATIONS.GET_ACCOMMODATIONS] },
		},
	},

	{
		displayName: 'Name',
		name: 'name',
		type: 'string' as NodePropertyTypes,
		required: true,
		description: 'Name of the new accommodation',
		placeholder: 'Campsite',
		default: '',
		displayOptions: {
			show: {
				resource: [RESOURCES.ACCOMMODATIONS],
				operation: [OPERATIONS.ADD_ACCOMMODATION],
			},
		},
	},

	{
		displayName: 'Name',
		name: 'update_name',
		type: 'string' as NodePropertyTypes,
		description: 'Update the name of the accommodation',
		placeholder: 'Camping name',
		default: '',
		displayOptions: {
			show: {
				resource: [RESOURCES.ACCOMMODATIONS],
				operation: [OPERATIONS.UPDATE_ACCOMMODATION],
			},
		},
	},
	{
		displayName: 'Description',
		name: 'description',
		type: 'string' as NodePropertyTypes,
		description: 'Update the description of the accommodation',
		placeholder: 'This is the accommodation description!',
		default: '',
		displayOptions: {
			show: {
				resource: [RESOURCES.ACCOMMODATIONS],
				operation: [OPERATIONS.UPDATE_ACCOMMODATION],
			},
		},
	},
	{
		displayName: 'Status',
		name: 'status',
		type: 'options' as NodePropertyTypes,
		description: 'Status of the accommodation',
		options: [
			{ name: 'None', value: '' },
			{ name: 'Active', value: 'active' },
			{ name: 'Nonactive', value: 'nonactive' },
		],
		default: '',
		displayOptions: {
			show: {
				resource: [RESOURCES.ACCOMMODATIONS],
				operation: [OPERATIONS.UPDATE_ACCOMMODATION],
			},
		},
	},
	{
		displayName: 'VAT Procent',
		name: 'vat_procent',
		type: 'string' as NodePropertyTypes,
		description: 'VAT procent for the accommodation',
		placeholder: '0',
		default: '',
		displayOptions: {
			show: {
				resource: [RESOURCES.ACCOMMODATIONS],
				operation: [OPERATIONS.UPDATE_ACCOMMODATION],
			},
		},
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
				resource: [RESOURCES.ACCOMMODATIONS],
				operation: [OPERATIONS.META],
				metaOperation: [OPERATIONS.UPDATE_META, OPERATIONS.GET_META],
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
				resource: [RESOURCES.ACCOMMODATIONS],
				operation: [OPERATIONS.META],
				metaOperation: [OPERATIONS.UPDATE_META],
			},
		},
	},
];
