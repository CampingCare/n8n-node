import type { NodePropertyTypes, IHttpRequestMethods } from 'n8n-workflow';
import { API_ENDPOINTS, RESOURCES, OPERATIONS } from '../utils/constants';
import { booleans } from '../utils/booleansParams';

export const invoicesDescription = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options' as NodePropertyTypes,
		noDataExpression: true,
		displayOptions: { show: { resource: [RESOURCES.INVOICES] } },
		options: [
			{
				name: 'Meta',
				value: OPERATIONS.META,
				description: 'Manage invoice meta information',
				action: 'Meta',
			},
			{
				name: 'Get Invoices',
				value: OPERATIONS.GET_INVOICES,
				description: 'Get a list of invoices for this administration',
				action: 'Get invoices',
				routing: {
					request: {
						method: 'GET' as IHttpRequestMethods,
						url: API_ENDPOINTS.INVOICES,
						qs: {
							count: '={{ $parameter["count"] || undefined }}',
							filter_root_meta: '={{ $parameter["filter_root_meta"] || undefined }}',
							get_contact: '={{ $parameter["get_contact"] || undefined }}',
							get_meta: '={{ $parameter["get_meta"] || undefined }}',
							get_payment_terms: '={{ $parameter["get_payment_terms"] || undefined }}',
							get_payments: '={{ $parameter["get_payments"] || undefined }}',
							get_reservation: '={{ $parameter["get_reservation"] || undefined }}',
							get_rows: '={{ $parameter["get_rows"] || undefined }}',
							channel_id: '={{ $parameter["channel_id"] || undefined }}',
							'create_date[0]': '={{ $parameter["create_date_from"] || undefined }}',
							create_date_operator: '={{ $parameter["create_date_operator"] || undefined }}',
							'create_date[1]': '={{ $parameter["create_date_to"] || undefined }}',
							invoice_id: '={{ $parameter["invoice_id_filter"] || undefined }}',
							limit: '={{ $parameter["limit"] || undefined }}',
							offset: '={{ $parameter["offset"] || undefined }}',
							order: '={{ $parameter["order"] || undefined }}',
							order_by: '={{ $parameter["order_by"] || undefined }}',
							reservation_id: '={{ $parameter["reservation_id"] || undefined }}',
							status: '={{ $parameter["status"] || undefined }}',
							type: '={{ $parameter["type"] || undefined }}',
						},
					},
				},
			},
			{
				name: 'Get Invoice',
				value: OPERATIONS.GET_INVOICE,
				description: 'Get a single invoice by id',
				action: 'Get invoice',
				routing: {
					request: {
						method: 'GET' as IHttpRequestMethods,
						url: API_ENDPOINTS.INVOICE_BY_ID,
						qs: {
							filter_root_meta: '={{ $parameter["filter_root_meta"] || undefined }}',
							get_contact: '={{ $parameter["get_contact"] || undefined }}',
							get_contact_meta: '={{ $parameter["get_contact_meta"] || undefined }}',
							get_meta: '={{ $parameter["get_meta"] || undefined }}',
							get_payment_terms: '={{ $parameter["get_payment_terms"] || undefined }}',
							get_payments: '={{ $parameter["get_payments"] || undefined }}',
							get_reservation: '={{ $parameter["get_reservation"] || undefined }}',
							get_reservation_meta: '={{ $parameter["get_reservation_meta"] || undefined }}',
							get_rows: '={{ $parameter["get_rows"] || undefined }}',
							get_vat_totals: '={{ $parameter["get_vat_totals"] || undefined }}',
						},
					},
				},
			},
			{
				name: 'Add Invoice',
				value: OPERATIONS.ADD_INVOICE,
				description: 'Add a new empty concept email to the administration',
				action: 'Add invoice',
				routing: {
					request: {
						method: 'POST' as IHttpRequestMethods,
						url: API_ENDPOINTS.INVOICES,
						qs: {
							contact_id: '={{ $parameter["contact_id"] || undefined }}',
							reservation_id: '={{ $parameter["reservation_id"] || undefined }}',
							type: '={{ $parameter["type"] || undefined }}',
						},
					},
				},
			},
			{
				name: 'Update Invoice',
				value: OPERATIONS.UPDATE_INVOICE,
				description: 'Update a invoice contact',
				action: 'Update invoice',
				routing: {
					request: {
						method: 'PUT' as IHttpRequestMethods,
						url: API_ENDPOINTS.INVOICE_BY_ID,
						qs: {
							contact_id: '={{ $parameter["contact_id"] || undefined }}',
							reservation_id: '={{ $parameter["reservation_id"] || undefined }}',
						},
					},
				},
			},
			{
				name: 'Delete Invoice',
				value: OPERATIONS.DELETE_INVOICE,
				description: 'Remove a invoice from the administration',
				action: 'Delete invoice',
				routing: {
					request: {
						method: 'DELETE' as IHttpRequestMethods,
						url: API_ENDPOINTS.INVOICE_BY_ID,
					},
				},
			},
			{
				name: 'Finalize Invoice',
				value: OPERATIONS.FINALIZE_INVOICE,
				description: 'Invoices are started in status concept a can be changed',
				action: 'Finalize invoice',
				routing: {
					request: {
						method: 'POST' as IHttpRequestMethods,
						url: API_ENDPOINTS.INVOICE_FINALIZE,
						qs: {
							delay: '={{ $parameter["delay"] || undefined }}',
						},
					},
				},
			},
			{
				name: 'Cancel Delayed Finalized Invoice',
				value: OPERATIONS.CANCEL_DELAYED_FINALIZED_INVOICE,
				description: 'Invoices are started in status concept a can be changed',
				action: 'Cancel delayed finalized invoice',
				routing: {
					request: {
						method: 'POST' as IHttpRequestMethods,
						url: API_ENDPOINTS.INVOICE_CANCEL_FINALIZE,
					},
				},
			},
			{
				name: 'Create Credit',
				value: OPERATIONS.CREATE_CREDIT,
				description: 'Create a credit note for an invoice',
				action: 'Create credit',
				routing: {
					request: {
						method: 'POST' as IHttpRequestMethods,
						url: API_ENDPOINTS.INVOICE_CREDIT,
					},
				},
			},
		],
		default: OPERATIONS.GET_INVOICES,
	},
	{
		displayName: 'Meta Operation',
		name: 'metaOperation',
		type: 'options' as NodePropertyTypes,
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [RESOURCES.INVOICES],
				operation: [OPERATIONS.META],
			},
		},
		options: [
			{
				name: 'Update Meta',
				value: OPERATIONS.UPDATE_META,
				description: 'Update the invoice meta',
				routing: {
					request: {
						method: 'PUT' as IHttpRequestMethods,
						url: API_ENDPOINTS.INVOICE_META,
						qs: {
							key: '={{ $parameter["key"] || undefined }}',
							value: '={{ $parameter["value"] || undefined }}',
						},
					},
				},
			},
		],
		default: OPERATIONS.UPDATE_META,
	},

	{
		displayName: 'Invoice ID',
		name: 'invoice_id',
		type: 'string' as NodePropertyTypes,
		required: true,
		description: 'Unique identifier of the invoice',
		placeholder: '2750123',
		default: '',
		displayOptions: {
			show: {
				resource: [RESOURCES.INVOICES],
				operation: [
					OPERATIONS.META,
					OPERATIONS.GET_INVOICE,
					OPERATIONS.UPDATE_INVOICE,
					OPERATIONS.DELETE_INVOICE,
					OPERATIONS.FINALIZE_INVOICE,
					OPERATIONS.CANCEL_DELAYED_FINALIZED_INVOICE,
					OPERATIONS.CREATE_CREDIT,
				],
			},
		},
	},

	{
		displayName: 'Delay',
		name: 'delay',
		type: 'string' as NodePropertyTypes,
		description: 'Time in seconds to delay the finalization',
		placeholder: '7200',
		default: '',
		displayOptions: {
			show: {
				resource: [RESOURCES.INVOICES],
				operation: [OPERATIONS.FINALIZE_INVOICE],
			},
		},
	},

	{
		displayName: 'Key',
		name: 'key',
		type: 'string' as NodePropertyTypes,
		description: 'Meta key to get or update',
		placeholder: 'first_name',
		default: '',
		displayOptions: {
			show: {
				resource: [RESOURCES.INVOICES],
				operation: [OPERATIONS.META],
				metaOperation: [OPERATIONS.UPDATE_META],
			},
		},
	},

	{
		displayName: 'Value',
		name: 'value',
		type: 'string' as NodePropertyTypes,
		description: 'Value to set for the meta key',
		placeholder: 'John Doe',
		default: '',
		displayOptions: {
			show: {
				resource: [RESOURCES.INVOICES],
				operation: [OPERATIONS.META],
				metaOperation: [OPERATIONS.UPDATE_META],
			},
		},
	},

	booleans.count([RESOURCES.INVOICES], [OPERATIONS.GET_INVOICES]),
	booleans.filterRootMeta(
		[RESOURCES.INVOICES],
		[OPERATIONS.GET_INVOICES, OPERATIONS.GET_INVOICE],
	),
	booleans.getContact(
		[RESOURCES.INVOICES],
		[OPERATIONS.GET_INVOICES, OPERATIONS.GET_INVOICE],
	),
	booleans.getContactMeta([RESOURCES.INVOICES], [OPERATIONS.GET_INVOICE]),
	booleans.getMeta([RESOURCES.INVOICES], [OPERATIONS.GET_INVOICES, OPERATIONS.GET_INVOICE]),
	booleans.getPaymentTerms(
		[RESOURCES.INVOICES],
		[OPERATIONS.GET_INVOICES, OPERATIONS.GET_INVOICE],
	),
	booleans.getPayments(
		[RESOURCES.INVOICES],
		[OPERATIONS.GET_INVOICES, OPERATIONS.GET_INVOICE],
	),
	booleans.getReservation(
		[RESOURCES.INVOICES],
		[OPERATIONS.GET_INVOICES, OPERATIONS.GET_INVOICE],
	),
	booleans.getReservationMeta([RESOURCES.INVOICES], [OPERATIONS.GET_INVOICE]),
	booleans.getRows([RESOURCES.INVOICES], [OPERATIONS.GET_INVOICES, OPERATIONS.GET_INVOICE]),
	booleans.getVatTotals([RESOURCES.INVOICES], [OPERATIONS.GET_INVOICE]),

	{
		displayName: 'Channel',
		name: 'channel_id',
		type: 'options' as NodePropertyTypes,
		description: 'Select a channel (OTAs)',
		default: '',
		typeOptions: { loadOptionsMethod: 'getChannels' },
		displayOptions: {
			show: { resource: [RESOURCES.INVOICES], operation: [OPERATIONS.GET_INVOICES] },
		},
	},
	{
		displayName: 'Create Date From',
		name: 'create_date_from',
		type: 'string' as NodePropertyTypes,
		description: 'Filter by creation date from (format: YYYY-MM-DD)',
		default: '',
		placeholder: '2025-07-28',
		displayOptions: {
			show: { resource: [RESOURCES.INVOICES], operation: [OPERATIONS.GET_INVOICES] },
		},
	},
	{
		displayName: 'Create Date Operator',
		name: 'create_date_operator',
		type: 'options' as NodePropertyTypes,
		description: 'Operator for create date filter',
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
			show: { resource: [RESOURCES.INVOICES], operation: [OPERATIONS.GET_INVOICES] },
		},
	},
	{
		displayName: 'Create Date To',
		name: 'create_date_to',
		type: 'string' as NodePropertyTypes,
		description: 'Filter by creation date to (format: YYYY-MM-DD)',
		default: '',
		placeholder: '2025-08-04',
		displayOptions: {
			show: { resource: [RESOURCES.INVOICES], operation: [OPERATIONS.GET_INVOICES] },
		},
	},
	{
		displayName: 'Invoice ID Filter',
		name: 'invoice_id_filter',
		type: 'string' as NodePropertyTypes,
		description: 'Filter by specific invoice ID',
		default: '',
		placeholder: '123',
		displayOptions: {
			show: { resource: [RESOURCES.INVOICES], operation: [OPERATIONS.GET_INVOICES] },
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'string' as NodePropertyTypes,
		description: 'Maximum number of invoices to return (Max: 30)',
		placeholder: '10',
		default: '',
		displayOptions: {
			show: { resource: [RESOURCES.INVOICES], operation: [OPERATIONS.GET_INVOICES] },
		},
	},
	{
		displayName: 'Offset',
		name: 'offset',
		type: 'string' as NodePropertyTypes,
		description: 'Number of invoices to skip',
		placeholder: '0',
		default: '',
		displayOptions: {
			show: { resource: [RESOURCES.INVOICES], operation: [OPERATIONS.GET_INVOICES] },
		},
	},
	{
		displayName: 'Order',
		name: 'order',
		type: 'options' as NodePropertyTypes,
		description: 'Sort order',
		options: [
			{ name: 'None', value: '' },
			{ name: 'ASC', value: 'ASC' },
			{ name: 'DESC', value: 'DESC' },
		],
		default: '',
		displayOptions: {
			show: { resource: [RESOURCES.INVOICES], operation: [OPERATIONS.GET_INVOICES] },
		},
	},
	{
		displayName: 'Order By',
		name: 'order_by',
		type: 'options' as NodePropertyTypes,
		description: 'Field to sort by',
		options: [
			{ name: 'None', value: '' },
			{ name: 'ID', value: 'id' },
			{ name: 'Invoice UID', value: 'invoice_uid' },
			{ name: 'Invoice ID', value: 'invoice_id' },
			{ name: 'Contact ID', value: 'contact_id' },
			{ name: 'Admin ID', value: 'admin_id' },
			{ name: 'Status', value: 'status' },
			{ name: 'Type', value: 'type' },
			{ name: 'Subtotal', value: 'subtotal' },
			{ name: 'VAT', value: 'vat' },
			{ name: 'Total', value: 'total' },
			{ name: 'Currency', value: 'currency' },
			{ name: 'Created', value: 'create_date' },
			{ name: 'Contact Name', value: 'contact_name' },
			{ name: 'Last Modified', value: 'last_modified' },
		],
		default: '',
		displayOptions: {
			show: { resource: [RESOURCES.INVOICES], operation: [OPERATIONS.GET_INVOICES] },
		},
	},
	{
		displayName: 'Contact ID',
		name: 'contact_id',
		type: 'string' as NodePropertyTypes,
		description: 'Get only invoices for a specific contact',
		default: '',
		placeholder: '123',
		displayOptions: {
			show: {
				resource: [RESOURCES.INVOICES],
				operation: [OPERATIONS.ADD_INVOICE, OPERATIONS.UPDATE_INVOICE],
			},
		},
	},
	{
		displayName: 'Reservation ID',
		name: 'reservation_id',
		type: 'string' as NodePropertyTypes,
		description: 'Get only invoices for a specific reservation',
		default: '',
		placeholder: '1234',
		displayOptions: {
			show: {
				resource: [RESOURCES.INVOICES],
				operation: [OPERATIONS.GET_INVOICES, OPERATIONS.ADD_INVOICE, OPERATIONS.UPDATE_INVOICE],
			},
		},
	},
	{
		displayName: 'Meta',
		name: 'meta',
		type: 'fixedCollection' as NodePropertyTypes,
		typeOptions: {
			multipleValues: true,
		},
		placeholder: 'Add Meta',
		default: { meta: [] },
		displayOptions: {
			show: {
				resource: [RESOURCES.INVOICES],
				operation: [OPERATIONS.ADD_INVOICE, OPERATIONS.UPDATE_INVOICE],
			},
		},
		options: [
			{
				name: 'meta',
				displayName: 'Meta',
				values: [
					{
						displayName: 'Key',
						name: 'key',
						type: 'string' as NodePropertyTypes,
						default: '',
						placeholder: 'external-exchange-status',
					},
					{
						displayName: 'Value',
						name: 'value',
						type: 'string' as NodePropertyTypes,
						default: '',
						placeholder: 'confirmed',
					},
				],
			},
		],
		routing: {
			request: {
				body: {
					meta: '={{ $parameter["meta"].meta?.map(m => ({ key: m.key, value: m.value })) || [] }}',
				},
			},
		},
	},
	{
		displayName: 'Rows',
		name: 'rows',
		type: 'fixedCollection' as NodePropertyTypes,
		typeOptions: {
			multipleValues: true,
		},
		placeholder: 'Add Row',
		default: { row: [] },
		displayOptions: {
			show: {
				resource: [RESOURCES.INVOICES],
				operation: [OPERATIONS.ADD_INVOICE],
			},
		},
		options: [
			{
				name: 'row',
				displayName: 'Row',
				values: [
					{
						displayName: 'Amount',
						name: 'amount',
						type: 'string' as NodePropertyTypes,
						default: '',
						placeholder: '1',
					},
					{
						displayName: 'Count',
						name: 'count',
						type: 'string' as NodePropertyTypes,
						default: '',
						placeholder: '1',
					},
					{
						displayName: 'Data',
						name: 'data',
						type: 'string' as NodePropertyTypes,
						default: '',
						placeholder: 'Additional data',
					},
					{
						displayName: 'Description',
						name: 'description',
						type: 'string' as NodePropertyTypes,
						default: '',
						placeholder: 'My description',
					},
					{
						displayName: 'Price',
						name: 'price',
						type: 'string' as NodePropertyTypes,
						default: '',
						placeholder: '3',
					},
					{
						displayName: 'Type',
						name: 'type',
						type: 'options' as NodePropertyTypes,
						options: [
							{ name: 'Product', value: 'product' },
							{ name: 'Rate', value: 'rate' },
						],
						default: 'product',
					},
					{
						displayName: 'Type ID',
						name: 'type_id',
						type: 'string' as NodePropertyTypes,
						default: '',
						placeholder: '10307',
					},
					{
						displayName: 'VAT Percent',
						name: 'vat_procent',
						type: 'string' as NodePropertyTypes,
						default: '',
						placeholder: '9',
					},
				],
			},
		],
		routing: {
			request: {
				body: {
					rows: '={{ $parameter["rows"].row?.map(r => ({ type: r.type, type_id: Number(r.type_id) || r.type_id, description: r.description, amount: Number(r.amount), count: Number(r.count), vat_procent: Number(r.vat_procent), price: Number(r.price), data: r.data || "" })) || [] }}',
				},
			},
		},
	},
	{
		displayName: 'Status',
		name: 'status',
		type: 'options' as NodePropertyTypes,
		description: 'Filter by invoice status',
		options: [
			{ name: 'None', value: '' },
			{ name: 'Draft', value: 'draft' },
			{ name: 'Paid', value: 'paid' },
			{ name: 'Unpaid', value: 'unpaid' },
			{ name: 'Partly Paid', value: 'partly_paid' },
			{ name: 'Removed', value: 'removed' },
		],
		default: '',
		displayOptions: {
			show: { resource: [RESOURCES.INVOICES], operation: [OPERATIONS.GET_INVOICES] },
		},
	},
	{
		displayName: 'Type',
		name: 'type',
		type: 'options' as NodePropertyTypes,
		description: 'Filter by invoice type',
		options: [
			{ name: 'None', value: '' },
			{ name: 'Invoice', value: 'invoice' },
			{ name: 'Concept', value: 'concept' },
		],
		default: '',
		displayOptions: {
			show: {
				resource: [RESOURCES.INVOICES],
				operation: [OPERATIONS.GET_INVOICES, OPERATIONS.ADD_INVOICE],
			},
		},
	},
];
