import type { NodePropertyTypes, IHttpRequestMethods } from 'n8n-workflow';
import { API_ENDPOINTS, RESOURCES, OPERATIONS } from '../utils/constants';
import { commonBooleans } from '../utils/commonFields';

export const accommodationsDescription = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options' as NodePropertyTypes,
		noDataExpression: true,
		displayOptions: { show: { resource: [RESOURCES.ACCOMMODATIONS] } },
		options: [
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
						url: '=/accommodations/{{$parameter["accommodation_id"]}}',
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
				name: 'Delete Accommodation',
				value: OPERATIONS.DELETE_ACCOMMODATION,
				description: 'With this method you can delete a single accommodation',
				action: 'Delete accommodation',
				routing: {
					request: {
						method: 'DELETE' as IHttpRequestMethods,
						url: '=/accommodations/{{$parameter["accommodation_id"]}}',
					},
				},
			},
		],
		default: OPERATIONS.GET_ACCOMMODATIONS,
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
				operation: [OPERATIONS.GET_ACCOMMODATION, OPERATIONS.DELETE_ACCOMMODATION],
			},
		},
	},

	commonBooleans.count([RESOURCES.ACCOMMODATIONS], [OPERATIONS.GET_ACCOMMODATIONS]),
	commonBooleans.getMeta(
		[RESOURCES.ACCOMMODATIONS],
		[OPERATIONS.GET_ACCOMMODATIONS, OPERATIONS.GET_ACCOMMODATION],
	),
	commonBooleans.getMedia(
		[RESOURCES.ACCOMMODATIONS],
		[OPERATIONS.GET_ACCOMMODATIONS, OPERATIONS.GET_ACCOMMODATION],
	),
	commonBooleans.getServices([RESOURCES.ACCOMMODATIONS], [OPERATIONS.GET_ACCOMMODATIONS]),
	commonBooleans.translations(
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
			show: { resource: [RESOURCES.ACCOMMODATIONS], operation: [OPERATIONS.ADD_ACCOMMODATION] },
		},
	},
];
