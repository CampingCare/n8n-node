import type { NodePropertyTypes, IHttpRequestMethods } from 'n8n-workflow';
import { API_ENDPOINTS, RESOURCES, OPERATIONS } from '../utils/constants';
import { booleans } from '../utils/booleansParams';

export const administrationsDescription = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options' as NodePropertyTypes,
		noDataExpression: true,
		displayOptions: { show: { resource: [RESOURCES.ADMINISTRATIONS] } },
		options: [
			{
				name: 'Meta',
				value: OPERATIONS.META,
				description: 'Manage administration meta information',
				action: 'Meta',
			},
			{
				name: 'Age Tables',
				value: OPERATIONS.AGE_TABLES,
				description: 'Get age tables for an administration',
				action: 'Age tables',
			},
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
				name: 'Update Administration',
				value: OPERATIONS.UPDATE_ADMINISTRATION,
				description: 'Update an administration by id',
				action: 'Update administration',
				routing: {
					request: {
						method: 'PUT' as IHttpRequestMethods,
						url: '=/administrations/{{$parameter["admin_id"]}}',
						qs: {
							name: '={{ $parameter["update_name"] || undefined }}',
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
				description: 'Delete an administration by id',
				action: 'Delete administration',
				routing: {
					request: {
						method: 'DELETE' as IHttpRequestMethods,
						url: '=/administrations/{{$parameter["admin_id"]}}',
					},
				},
			},
		],
		default: OPERATIONS.GET_ADMINISTRATIONS,
	},
	{
		displayName: 'Meta Operation',
		name: 'metaOperation',
		type: 'options' as NodePropertyTypes,
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [RESOURCES.ADMINISTRATIONS],
				operation: [OPERATIONS.META],
			},
		},
		options: [
			{
				name: 'Update Meta',
				value: OPERATIONS.UPDATE_META,
				description: 'Update the administration meta',
				routing: {
					request: {
						method: 'PUT' as IHttpRequestMethods,
						url: '=/administrations/{{$parameter["admin_id"]}}/meta',
						qs: {
							key: '={{ $parameter["key"] || undefined }}',
							value: '={{ $parameter["value"] || undefined }}',
							admin_id: '={{ $parameter["update_admin_id"] || undefined }}',
						},
					},
				},
			},
			{
				name: 'Get Meta',
				value: OPERATIONS.GET_META,
				description: 'Get the administration meta',
				routing: {
					request: {
						method: 'GET' as IHttpRequestMethods,
						url: '=/administrations/{{$parameter["admin_id"]}}/meta',
						qs: {
							key: '={{ $parameter["key"] || undefined }}',
						},
					},
				},
			},
			{
				name: 'Delete Meta',
				value: OPERATIONS.DELETE_META,
				description: 'Delete the administration meta',
				routing: {
					request: {
						method: 'DELETE' as IHttpRequestMethods,
						url: '=/administrations/{{$parameter["admin_id"]}}/meta',
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
					OPERATIONS.AGE_TABLES,
					OPERATIONS.GET_ADMINISTRATION,
					OPERATIONS.UPDATE_ADMINISTRATION,
					OPERATIONS.DELETE_ADMINISTRATION,
					OPERATIONS.META,
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

	booleans.count([RESOURCES.ADMINISTRATIONS], [OPERATIONS.GET_ADMINISTRATIONS]),
	booleans.getAccommodations([RESOURCES.ADMINISTRATIONS], [OPERATIONS.GET_ADMINISTRATIONS]),
	booleans.getAgeTables(
		[RESOURCES.ADMINISTRATIONS],
		[OPERATIONS.GET_ADMINISTRATIONS, OPERATIONS.GET_ADMINISTRATION],
	),
	booleans.getMedia(
		[RESOURCES.ADMINISTRATIONS],
		[OPERATIONS.GET_ADMINISTRATIONS, OPERATIONS.GET_ADMINISTRATION],
	),
	booleans.getMeta(
		[RESOURCES.ADMINISTRATIONS],
		[OPERATIONS.GET_ADMINISTRATIONS, OPERATIONS.GET_ADMINISTRATION],
	),
	booleans.getVatTables([RESOURCES.ADMINISTRATIONS], [OPERATIONS.GET_ADMINISTRATION]),
	booleans.translations(
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
		displayName: 'Name',
		name: 'update_name',
		type: 'string' as NodePropertyTypes,
		description: 'Name of the administration',
		placeholder: 'Camping.care Park',
		default: '',
		displayOptions: {
			show: {
				resource: [RESOURCES.ADMINISTRATIONS],
				operation: [OPERATIONS.UPDATE_ADMINISTRATION],
			},
		},
	},

	{
		displayName: 'Key',
		name: 'key',
		type: 'string' as NodePropertyTypes,
		description: 'Meta key to get or update',
		placeholder: 'currency',
		default: '',
		displayOptions: {
			show: {
				resource: [RESOURCES.ADMINISTRATIONS],
				operation: [OPERATIONS.META],
				metaOperation: [OPERATIONS.UPDATE_META, OPERATIONS.GET_META, OPERATIONS.DELETE_META],
			},
		},
	},
	{
		displayName: 'Value',
		name: 'value',
		type: 'string' as NodePropertyTypes,
		description: 'Value to set for the meta key',
		placeholder: 'EUR',
		default: '',
		displayOptions: {
			show: {
				resource: [RESOURCES.ADMINISTRATIONS],
				operation: [OPERATIONS.META],
				metaOperation: [OPERATIONS.UPDATE_META],
			},
		},
	},
	{
		displayName: 'Update Administration ID',
		name: 'update_admin_id',
		type: 'string' as NodePropertyTypes,
		description: '**OTA only: administration id of the administration meta you want to change',
		placeholder: '1234',
		default: '',
		displayOptions: {
			show: {
				resource: [RESOURCES.ADMINISTRATIONS],
				operation: [OPERATIONS.META],
				metaOperation: [OPERATIONS.UPDATE_META],
			},
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
				ageTablesMethod: [OPERATIONS.GET_AGE_TABLE],
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
				ageTablesMethod: [OPERATIONS.GET_AGE_TABLES],
			},
		},
	},
];
