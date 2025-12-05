import type { NodePropertyTypes, IHttpRequestMethods } from 'n8n-workflow';
import { API_ENDPOINTS, RESOURCES, OPERATIONS } from '../utils/constants';
import { booleanParams } from '../utils/booleanParameters';

export const accommodationsDescription = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options' as NodePropertyTypes,
		noDataExpression: true,
		displayOptions: { show: { resource: [RESOURCES.ACCOMMODATIONS] } },
		options: [
			{
				name: 'Places',
				value: OPERATIONS.PLACES,
				description: 'Manage accommodation places',
				action: 'Places',
			},
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
							// Boolean parameters
							count: '={{ $parameter["count"] || undefined }}',
							get_media: '={{ $parameter["get_media"] || undefined }}',
							get_meta: '={{ $parameter["get_meta"] || undefined }}',
							get_services: '={{ $parameter["get_services"] || undefined }}',
							translations: '={{ $parameter["translations"] || undefined }}',
							// Query parameters
							channel_id: '={{ $parameter["channel_id"] || undefined }}',
							limit: '={{ $parameter["limit"] || undefined }}',
							offset: '={{ $parameter["offset"] || undefined }}',
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
							// Boolean parameters
							get_media: '={{ $parameter["get_media"] || undefined }}',
							get_meta: '={{ $parameter["get_meta"] || undefined }}',
							translations: '={{ $parameter["translations"] || undefined }}',
							// Query parameters
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
							name: '={{ $parameter["update_name"] || undefined }}',
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
		displayName: 'Places Operation',
		name: 'placesOperation',
		type: 'options' as NodePropertyTypes,
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [RESOURCES.ACCOMMODATIONS],
				operation: [OPERATIONS.PLACES],
			},
		},
		options: [
			{
				name: 'Update Cleaning Status',
				value: OPERATIONS.UPDATE_CLEANING_STATUS,
				description: 'Update the cleaning status of an accommodation place',
				routing: {
					request: {
						method: 'PUT' as IHttpRequestMethods,
						url: API_ENDPOINTS.ACCOMMODATION_PLACE_CLEANING,
						qs: {
							status: '={{ $parameter["status"] || undefined }}',
						},
					},
				},
			},
			{
				name: 'Get Places',
				value: OPERATIONS.GET_PLACES,
				description: 'Get the accommodation places',
				routing: {
					request: {
						method: 'GET' as IHttpRequestMethods,
						url: API_ENDPOINTS.ACCOMMODATION_PLACES,
						qs: {
							count: '={{ $parameter["count"] || undefined }}',
							languages: '={{ $parameter["languages"] || undefined }}',
							limit: '={{ $parameter["limit"] || undefined }}',
							offset: '={{ $parameter["offset"] || undefined }}',
							order: '={{ $parameter["order"] || undefined }}',
							order_by: '={{ $parameter["order_by"] || undefined }}',
							search: '={{ $parameter["search"] || undefined }}',
							status: '={{ $parameter["status"] || undefined }}',
						},
					},
				},
			},
			{
				name: 'Get Place',
				value: OPERATIONS.GET_PLACE,
				description: 'Get the accommodation place',
				routing: {
					request: {
						method: 'GET' as IHttpRequestMethods,
						url: API_ENDPOINTS.ACCOMMODATION_PLACE,
						qs: {
							accommodation_id: '={{ $parameter["accommodation_id"] || undefined }}',
							place_id: '={{ $parameter["place_id"] || undefined }}',
						},
					},
				},
			},
		],
		default: OPERATIONS.GET_PLACES,
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

	// Required ID fields
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
					OPERATIONS.PLACES,
				],
			},
		},
	},
	{
		displayName: 'Place ID',
		name: 'place_id',
		type: 'string' as NodePropertyTypes,
		required: true,
		description: 'Select the accommodation place',
		default: '',
		displayOptions: {
			show: {
				resource: [RESOURCES.ACCOMMODATIONS],
				operation: [OPERATIONS.PLACES],
				placesOperation: [OPERATIONS.GET_PLACE, OPERATIONS.UPDATE_CLEANING_STATUS],
			},
		},
	},

	// Boolean parameters
	{
		...booleanParams.count(
			[RESOURCES.ACCOMMODATIONS],
			[OPERATIONS.GET_ACCOMMODATIONS, OPERATIONS.PLACES],
		),
		displayOptions: {
			show: {
				resource: [RESOURCES.ACCOMMODATIONS],
				operation: [OPERATIONS.GET_ACCOMMODATIONS, OPERATIONS.PLACES],
			},
			hide: {
				placesOperation: [OPERATIONS.GET_PLACE, OPERATIONS.UPDATE_CLEANING_STATUS],
			},
		},
	},
	booleanParams.getMedia(
		[RESOURCES.ACCOMMODATIONS],
		[OPERATIONS.GET_ACCOMMODATIONS, OPERATIONS.GET_ACCOMMODATION],
	),
	booleanParams.getMeta(
		[RESOURCES.ACCOMMODATIONS],
		[OPERATIONS.GET_ACCOMMODATIONS, OPERATIONS.GET_ACCOMMODATION],
	),
	booleanParams.getServices([RESOURCES.ACCOMMODATIONS], [OPERATIONS.GET_ACCOMMODATIONS]),
	{
		...booleanParams.languages([RESOURCES.ACCOMMODATIONS], [OPERATIONS.PLACES]),
		displayOptions: {
			show: {
				resource: [RESOURCES.ACCOMMODATIONS],
				operation: [OPERATIONS.PLACES],
				placesOperation: [OPERATIONS.GET_PLACES],
			},
		},
	},
	booleanParams.translations(
		[RESOURCES.ACCOMMODATIONS],
		[OPERATIONS.GET_ACCOMMODATIONS, OPERATIONS.GET_ACCOMMODATION],
	),

	// Query parameters
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

	// Add operation parameters
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

	// Update operation parameters
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

	// Place operation parameters
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'string' as NodePropertyTypes,
		description: 'Maximum number of places to return',
		placeholder: '15',
		default: '',
		displayOptions: {
			show: {
				resource: [RESOURCES.ACCOMMODATIONS],
				operation: [OPERATIONS.PLACES],
				placesOperation: [OPERATIONS.GET_PLACES],
			},
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
			show: {
				resource: [RESOURCES.ACCOMMODATIONS],
				operation: [OPERATIONS.PLACES],
				placesOperation: [OPERATIONS.GET_PLACES],
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
				resource: [RESOURCES.ACCOMMODATIONS],
				operation: [OPERATIONS.PLACES],
				placesOperation: [OPERATIONS.GET_PLACES],
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
			{ name: 'Place UID', value: 'place_uid' },
			{ name: 'Admin ID', value: 'admin_id' },
			{ name: 'Name', value: 'name' },
			{ name: 'Status', value: 'status' },
			{ name: 'Type', value: 'type' },
			{ name: 'Cleaning Status', value: 'cleaning_status' },
			{ name: 'Rank', value: 'rank' },
		],
		default: '',
		displayOptions: {
			show: {
				resource: [RESOURCES.ACCOMMODATIONS],
				operation: [OPERATIONS.PLACES],
				placesOperation: [OPERATIONS.GET_PLACES],
			},
		},
	},
	{
		displayName: 'Search',
		name: 'search',
		type: 'string' as NodePropertyTypes,
		description: 'Search term to filter places',
		placeholder: 'Search on name',
		default: '',
		displayOptions: {
			show: {
				resource: [RESOURCES.ACCOMMODATIONS],
				operation: [OPERATIONS.PLACES],
				placesOperation: [OPERATIONS.GET_PLACES],
			},
		},
	},
	{
		displayName: 'Status',
		name: 'status',
		type: 'options' as NodePropertyTypes,
		description: 'Filter places by status',
		options: [
			{ name: 'None', value: '' },
			{ name: 'Active', value: 'active' },
			{ name: 'Nonactive', value: 'nonactive' },
		],
		default: '',
		displayOptions: {
			show: {
				resource: [RESOURCES.ACCOMMODATIONS],
				operation: [OPERATIONS.PLACES],
				placesOperation: [OPERATIONS.GET_PLACES],
			},
		},
	},

	// Update Cleaning Status

	{
		displayName: 'Status',
		name: 'status',
		type: 'options' as NodePropertyTypes,
		description: 'Cleaning status to set for the accommodation place',
		options: [
			{ name: 'Unknown', value: 'unknown' },
			{ name: 'Clean', value: 'clean' },
			{ name: 'Wait For Review', value: 'wait_for_review' },
			{ name: 'Dirty', value: 'dirty' },
		],
		default: 'unknown',
		displayOptions: {
			show: {
				resource: [RESOURCES.ACCOMMODATIONS],
				operation: [OPERATIONS.PLACES],
				placesOperation: [OPERATIONS.UPDATE_CLEANING_STATUS],
			},
		},
	},

	// Meta operation parameters
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
