import { API_ENDPOINTS, RESOURCES, OPERATIONS } from '../utils/constants';
import type { IHttpRequestMethods, NodePropertyTypes } from 'n8n-workflow';

export const ledgersDescription = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options' as NodePropertyTypes,
		noDataExpression: true,
		displayOptions: { show: { resource: [RESOURCES.LEDGERS] } },
		options: [
			{
				name: 'Get Ledgers',
				value: OPERATIONS.GET_LEDGERS,
				description: 'Get a list of ledgers for this administration',
				action: 'Get ledgers',
				routing: {
					request: {
						method: 'GET' as IHttpRequestMethods,
						url: API_ENDPOINTS.LEDGERS,
					},
				},
			},
			{
				name: 'Get Ledger',
				value: OPERATIONS.GET_LEDGER,
				description: 'Get a single ledger by id',
				action: 'Get ledger',
				routing: {
					request: {
						method: 'GET' as IHttpRequestMethods,
						url: API_ENDPOINTS.LEDGER_BY_ID,
					},
				},
			},
			{
				name: 'Add Ledger',
				value: OPERATIONS.ADD_LEDGER,
				description: 'Add a new ledger to the administration',
				action: 'Add ledger',
				routing: {
					request: {
						method: 'POST' as IHttpRequestMethods,
						url: API_ENDPOINTS.LEDGERS,
						body: {
							number: '={{ $parameter["number"] }}',
							name: '={{ $parameter["name"] }}',
							type: '={{ $parameter["type"] }}',
						},
					},
				},
			},
			{
				name: 'Update Ledger',
				value: OPERATIONS.UPDATE_LEDGER,
				description: 'Update a ledger, only provided parameters will be updated',
				action: 'Update ledger',
				routing: {
					request: {
						method: 'PUT' as IHttpRequestMethods,
						url: API_ENDPOINTS.LEDGER_BY_ID,
						qs: {
							number: '={{ $parameter["number"] || undefined }}',
							name: '={{ $parameter["name"] || undefined }}',
							type: '={{ $parameter["type"] || undefined }}',
						},
					},
				},
			},
			{
				name: 'Delete Ledger',
				value: OPERATIONS.DELETE_LEDGER,
				description: 'Deletes a ledger from the administration by ID',
				action: 'Delete ledger',
				routing: {
					request: {
						method: 'DELETE' as IHttpRequestMethods,
						url: API_ENDPOINTS.LEDGER_BY_ID,
					},
				},
			},
		],
		default: OPERATIONS.GET_LEDGERS,
	},

	{
		displayName: 'Ledger ID',
		name: 'ledger_id',
		type: 'string' as NodePropertyTypes,
		description: 'The ID of the ledger',
		required: true,
		displayOptions: {
			show: {
				resource: [RESOURCES.LEDGERS],
				operation: [OPERATIONS.GET_LEDGER, OPERATIONS.UPDATE_LEDGER, OPERATIONS.DELETE_LEDGER],
			},
		},
		default: '',
	},

	{
		displayName: 'Number',
		name: 'number',
		type: 'string' as NodePropertyTypes,
		description: 'The number of the ledger',
		placeholder: '888',
		required: true,
		displayOptions: {
			show: {
				resource: [RESOURCES.LEDGERS],
				operation: [OPERATIONS.ADD_LEDGER],
			},
		},
		default: '',
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string' as NodePropertyTypes,
		description: 'The name of the ledger',
		placeholder: 'Pizza',
		required: true,
		displayOptions: {
			show: {
				resource: [RESOURCES.LEDGERS],
				operation: [OPERATIONS.ADD_LEDGER],
			},
		},
		default: '',
	},
	{
		displayName: 'Type',
		name: 'type',
		type: 'string' as NodePropertyTypes,
		description: 'The type of the ledger',
		placeholder: 'balance',
		displayOptions: {
			show: {
				resource: [RESOURCES.LEDGERS],
				operation: [OPERATIONS.ADD_LEDGER, OPERATIONS.UPDATE_LEDGER],
			},
		},
		default: '',
	},

	{
		displayName: 'Number',
		name: 'number',
		type: 'string' as NodePropertyTypes,
		description: 'The number of the ledger',
		placeholder: '888',
		displayOptions: {
			show: {
				resource: [RESOURCES.LEDGERS],
				operation: [OPERATIONS.UPDATE_LEDGER],
			},
		},
		default: '',
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string' as NodePropertyTypes,
		description: 'The name of the ledger',
		placeholder: 'Pizza',
		displayOptions: {
			show: {
				resource: [RESOURCES.LEDGERS],
				operation: [OPERATIONS.UPDATE_LEDGER],
			},
		},
		default: '',
	},
];
