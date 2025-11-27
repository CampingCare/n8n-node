import type { NodePropertyTypes, IHttpRequestMethods } from 'n8n-workflow';
import { API_ENDPOINTS, RESOURCES, OPERATIONS } from '../utils/constants';
import { booleanParams } from '../utils/booleanParameters';

export const licensePlatesDescription = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options' as NodePropertyTypes,
		noDataExpression: true,
		displayOptions: { show: { resource: [RESOURCES.LICENSE_PLATES] } },
		options: [
			{
				name: 'Get License Plates',
				value: OPERATIONS.GET_LICENSE_PLATES,
				description: 'Get a list of license plates from the system',
				action: 'Get license plates',
				routing: {
					request: {
						method: 'GET' as IHttpRequestMethods,
						url: API_ENDPOINTS.LICENSE_PLATES,
						qs: {
							// Boolean parameters
							count: '={{ $parameter["count"] || undefined }}',
							force_dates: '={{ $parameter["force_dates"] || undefined }}',
							get_reservation: '={{ $parameter["get_reservation"] || undefined }}',
							// Query parameters
							end_date: '={{ $parameter["end_date"] || undefined }}',
							end_date_operator: '={{ $parameter["end_date_operator"] || undefined }}',
							license_plate: '={{ $parameter["license_plate"] || undefined }}',
							limit: '={{ $parameter["limit"] || undefined }}',
							offset: '={{ $parameter["offset"] || undefined }}',
							order: '={{ $parameter["order"] || undefined }}',
							order_by: '={{ $parameter["order_by"] || undefined }}',
							reservation_id: '={{ $parameter["reservation_id"] || undefined }}',
							search: '={{ $parameter["search"] || undefined }}',
							start_date: '={{ $parameter["start_date"] || undefined }}',
							start_date_operator: '={{ $parameter["start_date_operator"] || undefined }}',
							status: '={{ $parameter["status"] || undefined }}',
						},
					},
				},
			},
			{
				name: 'Get License Plate',
				value: OPERATIONS.GET_LICENSE_PLATE,
				description: 'Get a single license plate by ID',
				action: 'Get license plate',
				routing: {
					request: {
						method: 'GET' as IHttpRequestMethods,
						url: API_ENDPOINTS.LICENSE_PLATE_BY_ID,
					},
				},
			},
			{
				name: 'Check Valid License Plate',
				value: OPERATIONS.CHECK_VALID_LICENSE_PLATE,
				description: 'Validate a license plate',
				action: 'Check valid license plate',
				routing: {
					request: {
						method: 'GET' as IHttpRequestMethods,
						url: `${API_ENDPOINTS.LICENSE_PLATES}/check_plate`,
						qs: { plate: '={{ $parameter["plate"] || undefined }}' },
					},
				},
			},
			{
				name: 'Add License Plate',
				value: OPERATIONS.ADD_LICENSE_PLATE,
				description: 'Add a new license plate',
				action: 'Add license plate',
				routing: {
					request: {
						method: 'POST' as IHttpRequestMethods,
						url: API_ENDPOINTS.LICENSE_PLATES,
						body: {
							plate: '={{ $parameter["plate"] }}',
							reservation_id: '={{ $parameter["reservation_id"] || undefined }}',
							start_date: '={{ $parameter["start_date"] || undefined }}',
							end_date: '={{ $parameter["end_date"] || undefined }}',
							description: '={{ $parameter["description"] || undefined }}',
						},
					},
				},
			},
			{
				name: 'Update License Plate',
				value: OPERATIONS.UPDATE_LICENSE_PLATE,
				description: 'Update an existing license plate',
				action: 'Update license plate',
				routing: {
					request: {
						method: 'PUT' as IHttpRequestMethods,
						url: API_ENDPOINTS.LICENSE_PLATE_BY_ID,
						qs: {
							plate: '={{ $parameter["plate"] || undefined }}',
							start_date: '={{ $parameter["start_date"] || undefined }}',
							end_date: '={{ $parameter["end_date"] || undefined }}',
							description: '={{ $parameter["description"] || undefined }}',
							reservation_id: '={{ $parameter["reservation_id"] || undefined }}',
							status: '={{ $parameter["status"] || undefined }}',
						},
					},
				},
			},
			{
				name: 'Delete License Plate',
				value: OPERATIONS.DELETE_LICENSE_PLATE,
				description: 'Delete a license plate by ID',
				action: 'Delete license plate',
				routing: {
					request: {
						method: 'DELETE' as IHttpRequestMethods,
						url: API_ENDPOINTS.LICENSE_PLATE_BY_ID,
					},
				},
			},
		],
		default: OPERATIONS.GET_LICENSE_PLATES,
	},

	// Required ID fields
	{
		displayName: 'License Plate ID',
		name: 'license_plate_id',
		type: 'string' as NodePropertyTypes,
		required: true,
		description: 'The unique identifier of the license plate',
		default: '',
		placeholder: '123',
		displayOptions: {
			show: {
				resource: [RESOURCES.LICENSE_PLATES],
				operation: [
					OPERATIONS.GET_LICENSE_PLATE,
					OPERATIONS.UPDATE_LICENSE_PLATE,
					OPERATIONS.DELETE_LICENSE_PLATE,
				],
			},
		},
	},

	{
		displayName: 'Plate',
		name: 'plate',
		type: 'string' as NodePropertyTypes,
		required: true,
		description: 'The license plate number',
		default: '',
		placeholder: 'ABC-123',
		displayOptions: {
			show: {
				resource: [RESOURCES.LICENSE_PLATES],
				operation: [OPERATIONS.ADD_LICENSE_PLATE, OPERATIONS.CHECK_VALID_LICENSE_PLATE],
			},
		},
	},

	{
		displayName: 'Start Date',
		name: 'start_date',
		type: 'string' as NodePropertyTypes,
		required: true,
		default: '',
		placeholder: '2025-01-01',
		description: 'Start date for the license plate validity period',
		displayOptions: {
			show: {
				resource: [RESOURCES.LICENSE_PLATES],
				operation: [OPERATIONS.ADD_LICENSE_PLATE],
			},
		},
	},

	{
		displayName: 'End Date',
		name: 'end_date',
		type: 'string' as NodePropertyTypes,
		required: true,
		default: '',
		placeholder: '2025-12-31',
		description: 'End date for the license plate validity period',
		displayOptions: {
			show: {
				resource: [RESOURCES.LICENSE_PLATES],
				operation: [OPERATIONS.ADD_LICENSE_PLATE],
			},
		},
	},

	// Boolean parameters
	booleanParams.count([RESOURCES.LICENSE_PLATES], [OPERATIONS.GET_LICENSE_PLATES]),
	booleanParams.forceDates([RESOURCES.LICENSE_PLATES], [OPERATIONS.GET_LICENSE_PLATES]),
	booleanParams.getReservation([RESOURCES.LICENSE_PLATES], [OPERATIONS.GET_LICENSE_PLATES]),

	{
		displayName: 'Plate',
		name: 'plate',
		type: 'string' as NodePropertyTypes,
		description: 'The license plate number to validate or update',
		default: '',
		placeholder: 'ABC-123',
		displayOptions: {
			show: {
				resource: [RESOURCES.LICENSE_PLATES],
				operation: [OPERATIONS.UPDATE_LICENSE_PLATE],
			},
		},
	},
	{
		displayName: 'Start Date',
		name: 'start_date',
		type: 'string' as NodePropertyTypes,
		default: '',
		placeholder: '2025-01-01',
		description:
			'Filter by start date (GET) or set validity start (UPDATE). UPDATE: choose either reservation_id OR start/end date range.',
		displayOptions: {
			show: {
				resource: [RESOURCES.LICENSE_PLATES],
				operation: [OPERATIONS.GET_LICENSE_PLATES, OPERATIONS.UPDATE_LICENSE_PLATE],
			},
		},
	},
	{
		displayName: 'Start Date Operator',
		name: 'start_date_operator',
		type: 'options' as NodePropertyTypes,
		description: 'Operator to use with start date',
		options: [
			{ name: 'None', value: '' },
			{ name: '=', value: '=' },
			{ name: '>', value: '>' },
			{ name: '>=', value: '>=' },
			{ name: '<', value: '<' },
			{ name: '<=', value: '<=' },
		],
		default: '',
		displayOptions: {
			show: {
				resource: [RESOURCES.LICENSE_PLATES],
				operation: [OPERATIONS.GET_LICENSE_PLATES],
			},
		},
	},
	{
		displayName: 'End Date',
		name: 'end_date',
		type: 'string' as NodePropertyTypes,
		default: '',
		placeholder: '2025-12-31',
		description:
			'Filter by end date (GET) or set validity end (UPDATE). UPDATE: choose either reservation_id OR start/end date range.',
		displayOptions: {
			show: {
				resource: [RESOURCES.LICENSE_PLATES],
				operation: [OPERATIONS.GET_LICENSE_PLATES, OPERATIONS.UPDATE_LICENSE_PLATE],
			},
		},
	},
	{
		displayName: 'End Date Operator',
		name: 'end_date_operator',
		type: 'options' as NodePropertyTypes,
		description: 'Operator to use with end date',
		options: [
			{ name: 'None', value: '' },
			{ name: '=', value: '=' },
			{ name: '>', value: '>' },
			{ name: '>=', value: '>=' },
			{ name: '<', value: '<' },
			{ name: '<=', value: '<=' },
		],
		default: '',
		displayOptions: {
			show: {
				resource: [RESOURCES.LICENSE_PLATES],
				operation: [OPERATIONS.GET_LICENSE_PLATES],
			},
		},
	},
	{
		displayName: 'Description',
		name: 'description',
		type: 'string' as NodePropertyTypes,
		default: '',
		placeholder: 'some description',
		description: 'Description for the license plate',
		displayOptions: {
			show: {
				resource: [RESOURCES.LICENSE_PLATES],
				operation: [OPERATIONS.ADD_LICENSE_PLATE, OPERATIONS.UPDATE_LICENSE_PLATE],
			},
		},
	},
	{
		displayName: 'License Plate',
		name: 'license_plate',
		type: 'string' as NodePropertyTypes,
		default: '',
		placeholder: 'ABC-123',
		description: 'Filter by specific license plate number',
		displayOptions: {
			show: {
				resource: [RESOURCES.LICENSE_PLATES],
				operation: [OPERATIONS.GET_LICENSE_PLATES],
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'string' as NodePropertyTypes,
		default: '',
		placeholder: '50',
		description: 'Maximum number of license plates to return',
		displayOptions: {
			show: {
				resource: [RESOURCES.LICENSE_PLATES],
				operation: [OPERATIONS.GET_LICENSE_PLATES],
			},
		},
	},
	{
		displayName: 'Offset',
		name: 'offset',
		type: 'string' as NodePropertyTypes,
		default: '',
		placeholder: '0',
		description: 'Number of items to skip before starting to collect results',
		displayOptions: {
			show: {
				resource: [RESOURCES.LICENSE_PLATES],
				operation: [OPERATIONS.GET_LICENSE_PLATES],
			},
		},
	},
	{
		displayName: 'Order',
		name: 'order',
		type: 'options' as NodePropertyTypes,
		description: 'Select the sorting order of the returned license plates',
		options: [
			{ name: 'None', value: '' },
			{ name: 'ASC', value: 'asc' },
			{ name: 'DESC', value: 'desc' },
		],
		default: '',
		displayOptions: {
			show: {
				resource: [RESOURCES.LICENSE_PLATES],
				operation: [OPERATIONS.GET_LICENSE_PLATES],
			},
		},
	},
	{
		displayName: 'Order By',
		name: 'order_by',
		type: 'options' as NodePropertyTypes,
		description: 'Field to sort the results by',
		options: [
			{ name: 'None', value: '' },
			{ name: 'ID', value: 'id' },
			{ name: 'License Plate UID', value: 'license_plate_uid' },
			{ name: 'Admin ID', value: 'admin_id' },
			{ name: 'Start Date', value: 'start_date' },
			{ name: 'End Date', value: 'end_date' },
			{ name: 'Reservation ID', value: 'reservation_id' },
			{ name: 'License Plate', value: 'license_plate' },
			{ name: 'Status', value: 'status' },
		],
		default: '',
		displayOptions: {
			show: {
				resource: [RESOURCES.LICENSE_PLATES],
				operation: [OPERATIONS.GET_LICENSE_PLATES],
			},
		},
	},
	{
		displayName: 'Reservation ID',
		name: 'reservation_id',
		type: 'string' as NodePropertyTypes,
		default: '',
		placeholder: '5952',
		description:
			'Associate with reservation (ADD/UPDATE) or filter (GET). UPDATE: choose either reservation_id OR start/end date range.',
		displayOptions: {
			show: {
				resource: [RESOURCES.LICENSE_PLATES],
				operation: [
					OPERATIONS.GET_LICENSE_PLATES,
					OPERATIONS.UPDATE_LICENSE_PLATE,
					OPERATIONS.ADD_LICENSE_PLATE,
				],
			},
		},
	},
	{
		displayName: 'Search',
		name: 'search',
		type: 'string' as NodePropertyTypes,
		default: '',
		placeholder: 'Search for license plates',
		description: 'Filter license plates by search term. Partial matches are allowed.',
		displayOptions: {
			show: {
				resource: [RESOURCES.LICENSE_PLATES],
				operation: [OPERATIONS.GET_LICENSE_PLATES],
			},
		},
	},
	{
		displayName: 'Status',
		name: 'status',
		type: 'options' as NodePropertyTypes,
		description: 'Filter by status (GET) or set plate status (UPDATE)',
		options: [
			{ name: 'None', value: '' },
			{ name: 'In', value: 'in' },
			{ name: 'Out', value: 'out' },
		],
		default: '',
		displayOptions: {
			show: {
				resource: [RESOURCES.LICENSE_PLATES],
				operation: [OPERATIONS.GET_LICENSE_PLATES, OPERATIONS.UPDATE_LICENSE_PLATE],
			},
		},
	},
];
