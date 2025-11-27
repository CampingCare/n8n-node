import type { NodePropertyTypes, IHttpRequestMethods } from 'n8n-workflow';
import { API_ENDPOINTS, RESOURCES, OPERATIONS } from '../utils/constants';

export const exchangeRatesDescription = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options' as NodePropertyTypes,
		noDataExpression: true,
		displayOptions: { show: { resource: [RESOURCES.EXCHANGE_RATES] } },
		options: [
			{
				name: 'Get Exchange Rates',
				value: OPERATIONS.GET_EXCHANGE_RATES,
				description: 'Get a list of exchange rates with optional filters',
				action: 'Get exchange rates',
				routing: {
					request: {
						method: 'GET' as IHttpRequestMethods,
						url: API_ENDPOINTS.EXCHANGE_RATES,
						qs: {
							source_currency: '={{ $parameter["source_currency"] || undefined }}',
							converted_currency: '={{ $parameter["converted_currency"] || undefined }}',
							date: '={{ $parameter["date"] || undefined }}',
						},
					},
				},
			},
			{
				name: 'Exchange Value',
				value: OPERATIONS.EXCHANGE_VALUE,
				description: 'Exchange a value from one currency to another',
				action: 'Exchange value',
				routing: {
					request: {
						method: 'GET' as IHttpRequestMethods,
						url: `${API_ENDPOINTS.EXCHANGE_RATES}/exchange_value`,
						qs: {
							source_currency: '={{ $parameter["source_currency"] }}',
							converted_currency: '={{ $parameter["converted_currency"] }}',
							value: '={{ $parameter["value"] }}',
						},
					},
				},
			},
		],
		default: OPERATIONS.GET_EXCHANGE_RATES,
	},

	{
		displayName: 'Source Currency',
		name: 'source_currency',
		type: 'string' as NodePropertyTypes,
		required: true,
		description: 'The source currency code (e.g., USD)',
		placeholder: 'CHF',
		displayOptions: {
			show: {
				operation: [OPERATIONS.EXCHANGE_VALUE, OPERATIONS.GET_EXCHANGE_RATES],
				resource: [RESOURCES.EXCHANGE_RATES],
			},
		},
		default: '',
	},
	{
		displayName: 'Converted Currency',
		name: 'converted_currency',
		type: 'string' as NodePropertyTypes,
		required: true,
		description: 'The target currency code (e.g., EUR)',
		placeholder: 'EUR',
		displayOptions: {
			show: {
				operation: [OPERATIONS.EXCHANGE_VALUE, OPERATIONS.GET_EXCHANGE_RATES],
				resource: [RESOURCES.EXCHANGE_RATES],
			},
		},
		default: '',
	},
	{
		displayName	: 'Value',
		name: 'value',
		type: 'string' as NodePropertyTypes,
		required: true,
		description: 'The amount to be converted',
		placeholder: '12.50',
		displayOptions: {
			show: {
				operation: [OPERATIONS.EXCHANGE_VALUE],
				resource: [RESOURCES.EXCHANGE_RATES],
			},
		},
		default: '',
	},
	{
		displayName: 'Date',
		name: 'date',
		type: 'string' as NodePropertyTypes,
		required: true,
		description: 'The date for the exchange rate (YYYY-MM-DD). Defaults to today if not provided.',
		placeholder: '2025-01-01',
		displayOptions: {
			show: {
				operation: [OPERATIONS.GET_EXCHANGE_RATES],
				resource: [RESOURCES.EXCHANGE_RATES],
			},
		},
		default: '',
	},
];
