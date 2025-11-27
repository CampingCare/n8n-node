import type { NodePropertyTypes, IHttpRequestMethods } from 'n8n-workflow';
import { API_ENDPOINTS, RESOURCES, OPERATIONS } from '../utils/constants';

export const logsDescription = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options' as NodePropertyTypes,
		noDataExpression: true,
		displayOptions: { show: { resource: [RESOURCES.LOGS] } },
		options: [
			{
				name: 'Get Logs',
				value: OPERATIONS.GET_LOGS,
				description: 'Get a list of log entries',
				action: 'Get logs',
				routing: {
					request: {
						method: 'GET' as IHttpRequestMethods,
						url: API_ENDPOINTS.LOGS_BY_ID,
					},
				},
			},
			{
				name: 'Add Log',
				value: OPERATIONS.ADD_LOG,
				description: 'Add a new log entry',
				action: 'Add log',
				routing: {
					request: {
						method: 'POST' as IHttpRequestMethods,
						url: API_ENDPOINTS.LOGS,
						body: {
							type: '={{ $parameter["type"] }}',
							type_id: '={{ $parameter["type_id"] }}',
							severity: '={{ $parameter["severity"] }}',
							description: '={{ $parameter["description"] }}',
						},
					},
				},
			},
		],
		default: OPERATIONS.GET_LOGS,
	},

	{
		displayName: 'Type',
		name: 'type',
		type: 'options' as NodePropertyTypes,
		required: true,
		description: 'Type of log entry',
		options: [
			{ name: 'Reservation', value: 'reservation' },
			{ name: 'Contact', value: 'contact' },
			{ name: 'Invoice', value: 'invoice' },
			{ name: 'Accommodation', value: 'accommodation' },
		],
		default: 'reservation',
		displayOptions: {
			show: {
				resource: [RESOURCES.LOGS],
				operation: [OPERATIONS.ADD_LOG],
			},
		},
	},

	{
		displayName: 'Type ID',
		name: 'type_id',
		required: true,
		type: 'string' as NodePropertyTypes,
		description: 'ID of the entity this log is associated with',
		placeholder: '1234',
		default: '',
		displayOptions: {
			show: {
				resource: [RESOURCES.LOGS],
				operation: [OPERATIONS.ADD_LOG],
			},
		},
	},

	{
		displayName: 'Severity',
		name: 'severity',
		type: 'options' as NodePropertyTypes,
		required: true,
		description: 'Severity level of the log entry',
		options: [
			{ name: 'Information', value: 'information' },
			{ name: 'Warning', value: 'warning' },
			{ name: 'Error', value: 'error' },
			{ name: 'Critical', value: 'critical' },
		],
		default: 'information',
		displayOptions: {
			show: {
				resource: [RESOURCES.LOGS],
				operation: [OPERATIONS.ADD_LOG],
			},
		},
	},

	{
		displayName: 'Description',
		name: 'description',
		type: 'string' as NodePropertyTypes,
		required: true,
		description: 'Log message description',
		placeholder: 'Test log',
		default: '',
		displayOptions: {
			show: {
				resource: [RESOURCES.LOGS],
				operation: [OPERATIONS.ADD_LOG],
			},
		},
	},
];
