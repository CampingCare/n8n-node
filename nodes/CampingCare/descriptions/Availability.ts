import type { NodePropertyTypes, IHttpRequestMethods } from 'n8n-workflow';
import { API_ENDPOINTS, RESOURCES, OPERATIONS } from '../utils/constants';
import { booleanParams } from '../utils/booleanParameters';

export const availabilityDescription = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options' as NodePropertyTypes,
		noDataExpression: true,
		displayOptions: { show: { resource: [RESOURCES.AVAILABILITY] } },
		options: [
			{
				name: 'Get Stock',
				value: OPERATIONS.GET_STOCK,
				description: 'Get availability stock for an accommodation',
				action: 'Get stock',
				routing: {
					request: {
						method: 'GET' as IHttpRequestMethods,
						url: API_ENDPOINTS.AVAILABILITY_STOCK,
						qs: {
							accommodation_id: '={{ $parameter["accommodation_id"] || undefined }}',
							from: '={{ $parameter["from"] || undefined }}',
							till: '={{ $parameter["till"] || undefined }}',
							channel_id: '={{ $parameter["channel_id"] || undefined }}',
						},
					},
				},
			},
			{
				name: 'Get Places',
				value: OPERATIONS.GET_PLACES,
				description: 'Get available places',
				action: 'Get places',
				routing: {
					request: {
						method: 'GET' as IHttpRequestMethods,
						url: API_ENDPOINTS.AVAILABILITY_PLACES,
						qs: {
							start_date: '={{ $parameter["start_date"] || undefined }}',
							end_date: '={{ $parameter["end_date"] || undefined }}',
							accommodation_id: '={{ $parameter["accommodation_id"] || undefined }}',
							backend: '={{ $parameter["backend"] || undefined }}',
							place_id: '={{ $parameter["place_id"] || undefined }}',
							count: '={{ $parameter["count"] || undefined }}',
						},
					},
				},
			},
		],
		default: OPERATIONS.GET_STOCK,
	},

	{
		displayName: 'Accommodation ID',
		name: 'accommodation_id',
		type: 'options' as NodePropertyTypes,
		required: true,
		description: 'ID of the accommodation',
		placeholder: '7343',
		default: '',
		typeOptions: { loadOptionsMethod: 'getAccommodations' },
		displayOptions: {
			show: {
				resource: [RESOURCES.AVAILABILITY],
				operation: [OPERATIONS.GET_STOCK],
			},
		},
	},
	{
		displayName: 'From',
		name: 'from',
		type: 'string' as NodePropertyTypes,
		required: true,
		description: 'Start date (YYYY-MM-DD)',
		placeholder: '2025-01-01',
		default: '',
		displayOptions: {
			show: {
				resource: [RESOURCES.AVAILABILITY],
				operation: [OPERATIONS.GET_STOCK],
			},
		},
	},
	{
		displayName: 'Till',
		name: 'till',
		type: 'string' as NodePropertyTypes,
		required: true,
		description: 'End date (YYYY-MM-DD)',
		placeholder: '2025-01-31',
		default: '',
		displayOptions: {
			show: {
				resource: [RESOURCES.AVAILABILITY],
				operation: [OPERATIONS.GET_STOCK],
			},
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
			show: { resource: [RESOURCES.AVAILABILITY], operation: [OPERATIONS.GET_STOCK] },
		},
	},

	booleanParams.backend([RESOURCES.AVAILABILITY], [OPERATIONS.GET_PLACES]),
	booleanParams.count([RESOURCES.AVAILABILITY], [OPERATIONS.GET_PLACES]),

	{
		displayName: 'Accommodation ID',
		name: 'accommodation_id',
		type: 'options' as NodePropertyTypes,
		description: 'ID of the accommodation',
		placeholder: '7343',
		default: '',
		typeOptions: { loadOptionsMethod: 'getAccommodations' },
		displayOptions: {
			show: {
				resource: [RESOURCES.AVAILABILITY],
				operation: [OPERATIONS.GET_PLACES],
			},
		},
	},
	{
		displayName: 'Start Date',
		name: 'start_date',
		type: 'string' as NodePropertyTypes,
		required: true,
		description: 'Start date (YYYY-MM-DD)',
		placeholder: '2025-01-01',
		default: '',
		displayOptions: {
			show: {
				resource: [RESOURCES.AVAILABILITY],
				operation: [OPERATIONS.GET_PLACES],
			},
		},
	},
	{
		displayName: 'End Date',
		name: 'end_date',
		type: 'string' as NodePropertyTypes,
		required: true,
		description: 'End date (YYYY-MM-DD)',
		placeholder: '2025-01-31',
		default: '',
		displayOptions: {
			show: {
				resource: [RESOURCES.AVAILABILITY],
				operation: [OPERATIONS.GET_PLACES],
			},
		},
	},
	{
		displayName: 'Place ID',
		name: 'place_id',
		type: 'string' as NodePropertyTypes,
		description: 'Optional place ID to filter by',
		placeholder: '12345',
		default: '',
		displayOptions: {
			show: {
				resource: [RESOURCES.AVAILABILITY],
				operation: [OPERATIONS.GET_PLACES],
			},
		},
	},
];
