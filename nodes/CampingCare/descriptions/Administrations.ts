import type { NodePropertyTypes, IHttpRequestMethods } from 'n8n-workflow';
import { API_ENDPOINTS, RESOURCES, OPERATIONS } from '../utils/constants';
import { commonBooleans } from '../utils/commonFields';

export const administrationsDescription = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options' as NodePropertyTypes,
		noDataExpression: true,
		displayOptions: { show: { resource: [RESOURCES.ADMINISTRATIONS] } },
		options: [
			{
				name: 'Get Administrations',
				value: OPERATIONS.GET_ADMINISTRATIONS,
				description: 'You can retrieve the administrations of a specific user',
				action: 'Get administrations',
				routing: {
					request: {
						method: 'GET' as IHttpRequestMethods,
						url: API_ENDPOINTS.ADMINISTRATIONS,
						qs: {
							count: '={{ $parameter["count"] || undefined }}',
							get_accommodations: '={{ $parameter["get_accommodations"] || undefined }}',
							get_age_tables: '={{ $parameter["get_age_tables"] || undefined }}',
							get_media: '={{ $parameter["get_media"] || undefined }}',
							get_meta: '={{ $parameter["get_meta"] || undefined }}',
							translations: '={{ $parameter["translations"] || undefined }}',
							limit: '={{ $parameter["limit"] || undefined }}',
							offset: '={{ $parameter["offset"] || undefined }}',
							order: '={{ $parameter["order"] || undefined }}',
							search: '={{ $parameter["search"] || undefined }}',
						},
					},
				},
			},
			{
				name: 'Get Administration',
				value: OPERATIONS.GET_ADMINISTRATION,
				description: 'Get a single administration by id',
				action: 'Get administration',
				routing: {
					request: {
						method: 'GET' as IHttpRequestMethods,
						url: '=/administrations/{{$parameter["admin_id"]}}',
						qs: {
							get_age_tables: '={{ $parameter["get_age_tables"] || undefined }}',
							get_media: '={{ $parameter["get_media"] || undefined }}',
							get_meta: '={{ $parameter["get_meta"] || undefined }}',
							get_vat_tables: '={{ $parameter["get_vat_tables"] || undefined }}',
							translations: '={{ $parameter["translations"] || undefined }}',
						},
					},
				},
			},
			{
				name: 'Add Administration',
				value: OPERATIONS.ADD_ADMINISTRATION,
				description: 'Add a new administration (full PMS or lite version)',
				action: 'Add administration',
				routing: {
					request: {
						method: 'POST' as IHttpRequestMethods,
						url: API_ENDPOINTS.ADMINISTRATIONS,
						body: {
							name: '={{ $parameter["name"] }}',
							type: '={{ $parameter["type"] }}',
						},
					},
				},
			},
			{
				name: 'Delete Administration',
				value: OPERATIONS.DELETE_ADMINISTRATION,
				description: 'Delete an administration by ID',
				action: 'Delete administration',
				routing: {
					request: {
						method: 'DELETE' as IHttpRequestMethods,
						url: '=/administrations/{{$parameter["admin_id"]}}',
					},
				},
			},
			{
				name: 'Age Tables',
				value: OPERATIONS.AGE_TABLES,
				description: 'Get age tables for an administration',
				action: 'Age tables',
			},
		],
		default: OPERATIONS.GET_ADMINISTRATIONS,
	},

	{
		displayName: 'Age Tables Method',
		name: 'ageTablesMethod',
		type: 'options' as NodePropertyTypes,
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [RESOURCES.ADMINISTRATIONS],
				operation: [OPERATIONS.AGE_TABLES],
			},
		},
		options: [
			{
				name: 'Get Age Tables',
				value: 'getAgeTables',
				description: 'Get age tables for this administrations',
				action: 'Get age tables',
				routing: {
					request: {
						method: 'GET' as IHttpRequestMethods,
						url: '=/administrations/{{$parameter["admin_id"]}}/age_tables',
						qs: {
							translations: '={{ $parameter["translations_age_tables"] || undefined }}',
							sort: '={{ $parameter["sort"] || undefined }}',
						},
					},
				},
			},
			{
				name: 'Get Age Table',
				value: 'getAgeTable',
				description: 'Get a single age table by id',
				action: 'Get age table',
				routing: {
					request: {
						method: 'GET' as IHttpRequestMethods,
						url: '=/administrations/{{$parameter["admin_id"]}}/age_tables/{{$parameter["age_table_id"]}}',
						qs: {
							translations: '={{ $parameter["translations_age_tables"] || undefined }}',
						},
					},
				},
			},
		],
		default: 'getAgeTables',
	},

	{
		displayName: 'Administration ID',
		name: 'admin_id',
		type: 'string' as NodePropertyTypes,
		required: true,
		description: 'The unique identifier of the administration',
		placeholder: '1234',
		default: '',
		displayOptions: {
			show: {
				resource: [RESOURCES.ADMINISTRATIONS],
				operation: [
					OPERATIONS.GET_ADMINISTRATION,
					OPERATIONS.AGE_TABLES,
					OPERATIONS.DELETE_ADMINISTRATION,
				],
			},
		},
	},

	{
		displayName: 'Name',
		name: 'name',
		type: 'string' as NodePropertyTypes,
		required: true,
		description: 'Name of the administration',
		placeholder: 'Camping.care Park',
		default: '',
		displayOptions: {
			show: { resource: [RESOURCES.ADMINISTRATIONS], operation: [OPERATIONS.ADD_ADMINISTRATION] },
		},
	},

	{
		displayName: 'Type',
		name: 'type',
		type: 'options' as NodePropertyTypes,
		required: true,
		description: 'Type of administration',
		options: [
			{ name: 'Full', value: 'full' },
			{ name: 'Lite', value: 'lite' },
		],
		default: 'full',
		displayOptions: {
			show: { resource: [RESOURCES.ADMINISTRATIONS], operation: [OPERATIONS.ADD_ADMINISTRATION] },
		},
	},

	commonBooleans.count([RESOURCES.ADMINISTRATIONS], [OPERATIONS.GET_ADMINISTRATIONS]),
	commonBooleans.getAccommodations([RESOURCES.ADMINISTRATIONS], [OPERATIONS.GET_ADMINISTRATIONS]),
	commonBooleans.getAgeTables(
		[RESOURCES.ADMINISTRATIONS],
		[OPERATIONS.GET_ADMINISTRATIONS, OPERATIONS.GET_ADMINISTRATION],
	),
	commonBooleans.getMedia(
		[RESOURCES.ADMINISTRATIONS],
		[OPERATIONS.GET_ADMINISTRATIONS, OPERATIONS.GET_ADMINISTRATION],
	),
	commonBooleans.getMeta(
		[RESOURCES.ADMINISTRATIONS],
		[OPERATIONS.GET_ADMINISTRATIONS, OPERATIONS.GET_ADMINISTRATION],
	),
	commonBooleans.getVatTables([RESOURCES.ADMINISTRATIONS], [OPERATIONS.GET_ADMINISTRATION]),
	commonBooleans.translations(
		[RESOURCES.ADMINISTRATIONS],
		[OPERATIONS.GET_ADMINISTRATIONS, OPERATIONS.GET_ADMINISTRATION],
	),

	{
		displayName: 'Limit',
		name: 'limit',
		type: 'string' as NodePropertyTypes,
		description: 'Maximum number of administrations to return (minimum 1)',
		placeholder: '5',
		default: '',
		displayOptions: {
			show: { resource: [RESOURCES.ADMINISTRATIONS], operation: [OPERATIONS.GET_ADMINISTRATIONS] },
		},
	},
	{
		displayName: 'Offset',
		name: 'offset',
		type: 'string' as NodePropertyTypes,
		description: 'Number of items to skip before starting to collect results',
		placeholder: '0',
		default: '',
		displayOptions: {
			show: { resource: [RESOURCES.ADMINISTRATIONS], operation: [OPERATIONS.GET_ADMINISTRATIONS] },
		},
	},
	{
		displayName: 'Order',
		name: 'order',
		type: 'options' as NodePropertyTypes,
		description: 'Select the sorting order of the returned administrations. None will not sort.',
		options: [
			{ name: 'None', value: '' },
			{ name: 'ASC', value: 'asc' },
			{ name: 'DESC', value: 'desc' },
		],
		default: '',
		displayOptions: {
			show: { resource: [RESOURCES.ADMINISTRATIONS], operation: [OPERATIONS.GET_ADMINISTRATIONS] },
		},
	},
	{
		displayName: 'Search',
		name: 'search',
		type: 'string' as NodePropertyTypes,
		description: 'Filter administrations by ID or name. Partial matches are allowed.',
		placeholder: 'Enter ID or name',
		default: '',
		displayOptions: {
			show: { resource: [RESOURCES.ADMINISTRATIONS], operation: [OPERATIONS.GET_ADMINISTRATIONS] },
		},
	},

	{
		displayName: 'Translations',
		name: 'translations_age_tables',
		type: 'boolean' as NodePropertyTypes,
		description: 'Whether to include translations for age table fields',
		default: false,
		displayOptions: {
			show: {
				resource: [RESOURCES.ADMINISTRATIONS],
				operation: [OPERATIONS.AGE_TABLES],
			},
		},
	},
	{
		displayName: 'Age Table ID',
		name: 'age_table_id',
		type: 'string' as NodePropertyTypes,
		required: true,
		description: 'The unique ID of the age table to retrieve',
		placeholder: '1234',
		default: '',
		displayOptions: {
			show: {
				resource: [RESOURCES.ADMINISTRATIONS],
				operation: [OPERATIONS.AGE_TABLES],
				ageTablesMethod: ['getAgeTable'],
			},
		},
	},
	{
		displayName: 'Sort',
		name: 'sort',
		type: 'options' as NodePropertyTypes,
		description: 'Sort age tables by field',
		options: [
			{ name: 'None', value: '' },
			{ name: 'Priority', value: 'priority' },
			{ name: 'Name', value: 'name' },
			{ name: 'ID', value: 'id' },
		],
		default: '',
		displayOptions: {
			show: {
				resource: [RESOURCES.ADMINISTRATIONS],
				operation: [OPERATIONS.AGE_TABLES],
				ageTablesMethod: ['getAgeTables'],
			},
		},
	},
];
