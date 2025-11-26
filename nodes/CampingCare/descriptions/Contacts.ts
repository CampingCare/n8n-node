import type { NodePropertyTypes, IHttpRequestMethods } from 'n8n-workflow';
import { API_ENDPOINTS, RESOURCES, OPERATIONS } from '../utils/constants';
import { createDisplayOptions, createContactField } from '../utils/helpers';
import { commonBooleans } from '../utils/commonFields';

export const contactsDescription = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options' as NodePropertyTypes,
		noDataExpression: true,
		displayOptions: { show: { resource: [RESOURCES.CONTACTS] } },
		options: [
			{
				name: 'Meta',
				value: OPERATIONS.META,
				description: 'Manage contact meta information',
				action: 'Meta',
			},
			{
				name: 'Get Contacts',
				value: OPERATIONS.GET_CONTACTS,
				description: 'Get a list of contacts for this administration',
				action: 'Get contacts',
				routing: {
					request: {
						method: 'GET' as IHttpRequestMethods,
						url: API_ENDPOINTS.CONTACTS,
						qs: {
							count: '={{ $parameter["count"] || undefined }}',
							get_invoice_payments: '={{ $parameter["get_invoice_payments"] || undefined }}',
							get_invoices: '={{ $parameter["get_invoices"] || undefined }}',
							get_meta: '={{ $parameter["get_meta"] || undefined }}',
							get_reservation_payment_terms:
								'={{ $parameter["get_reservation_payment_terms"] || undefined }}',
							get_reservations: '={{ $parameter["get_reservations"] || undefined }}',
							limit: '={{ $parameter["limit"] || undefined }}',
							offset: '={{ $parameter["offset"] || undefined }}',
							order: '={{ $parameter["order"] || undefined }}',
							order_by: '={{ $parameter["order_by"] || undefined }}',
							search: '={{ $parameter["search"] || undefined }}',
						},
					},
				},
			},
			{
				name: 'Get Contact',
				value: OPERATIONS.GET_CONTACT,
				description: 'Get a single contact by id',
				action: 'Get contact',
				routing: {
					request: {
						method: 'GET' as IHttpRequestMethods,
						url: '=/contacts/{{$parameter["contact_id"]}}',
						qs: {
							get_invoice_payments: '={{ $parameter["get_invoice_payments"] || undefined }}',
							get_invoices: '={{ $parameter["get_invoices"] || undefined }}',
							get_meta: '={{ $parameter["get_meta"] || undefined }}',
							get_reservation_payment_terms:
								'={{ $parameter["get_reservation_payment_terms"] || undefined }}',
							get_reservations: '={{ $parameter["get_reservations"] || undefined }}',
						},
					},
				},
			},
			{
				name: 'Add Contact',
				value: OPERATIONS.ADD_CONTACT,
				description: 'Add either a empty contact or add parameters to a contact',
				action: 'Add contact',
				routing: {
					request: {
						method: 'POST' as IHttpRequestMethods,
						url: API_ENDPOINTS.CONTACTS,
						body: {
							first_name: '={{ $parameter["first_name"] || undefined }}',
							last_name: '={{ $parameter["last_name"] || undefined }}',
							gender: '={{ $parameter["gender"] || undefined }}',
							birthday: '={{ $parameter["birthday"] || undefined }}',
							email: '={{ $parameter["email"] || undefined }}',
							phone: '={{ $parameter["phone"] || undefined }}',
							phone_mobile: '={{ $parameter["phone_mobile"] || undefined }}',
							address: '={{ $parameter["address"] || undefined }}',
							address_number: '={{ $parameter["address_number"] || undefined }}',
							city: '={{ $parameter["city"] || undefined }}',
							state: '={{ $parameter["state"] || undefined }}',
							zipcode: '={{ $parameter["zipcode"] || undefined }}',
							country: '={{ $parameter["country"] || undefined }}',
							id_type: '={{ $parameter["id_type"] || undefined }}',
							id_nr: '={{ $parameter["id_nr"] || undefined }}',
							country_origin: '={{ $parameter["country_origin"] || undefined }}',
							company: '={{ $parameter["company"] || undefined }}',
							vat_number: '={{ $parameter["vat_number"] || undefined }}',
							type: '={{ $parameter["type"] || undefined }}',
							meta: '={{ $parameter["extraFields"]?.field?.filter(f => f.value !== "" && f.value !== undefined)?.map(f => ({ key: f.key, value: f.value })) || [] }}',
						},
					},
				},
			},
			{
				name: 'Update Contact',
				value: OPERATIONS.UPDATE_CONTACT,
				description: 'Update a contact, only provided parameters will be updated',
				action: 'Update contact',
				routing: {
					request: {
						method: 'PUT' as IHttpRequestMethods,
						url: '=/contacts/{{$parameter["contact_id"]}}',
						body: {
							gender: '={{ $parameter["gender"] || undefined }}',
							first_name: '={{ $parameter["first_name"] || undefined }}',
							last_name: '={{ $parameter["last_name"] || undefined }}',
							address: '={{ $parameter["address"] || undefined }}',
							address_number: '={{ $parameter["address_number"] || undefined }}',
							zipcode: '={{ $parameter["zipcode"] || undefined }}',
							city: '={{ $parameter["city"] || undefined }}',
							country: '={{ $parameter["country"] || undefined }}',
							company: '={{ $parameter["company"] || undefined }}',
							phone: '={{ $parameter["phone"] || undefined }}',
							type: '={{ $parameter["type"] || undefined }}',
						},
					},
				},
			},
			{
				name: 'Delete Contact',
				value: OPERATIONS.DELETE_CONTACT,
				description: 'Deletes a contact from the administration by ID',
				action: 'Delete contact',
				routing: {
					request: {
						method: 'DELETE' as IHttpRequestMethods,
						url: '=/contacts/{{$parameter["contact_id"]}}',
					},
				},
			},
		],
		default: OPERATIONS.GET_CONTACTS,
	},
	{
		displayName: 'Meta Operation',
		name: 'metaOperation',
		type: 'options' as NodePropertyTypes,
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [RESOURCES.CONTACTS],
				operation: [OPERATIONS.META],
			},
		},
		options: [
			{
				name: 'Update Meta',
				value: OPERATIONS.UPDATE_META,
				description: 'Update the contact meta',
				routing: {
					request: {
						method: 'PUT' as IHttpRequestMethods,
						url: '=/contacts/{{$parameter["contact_id"]}}/meta',
						qs: {
							key: '={{ $parameter["key"] || undefined }}',
							value: '={{ $parameter["value"] || undefined }}',
							contact_id: '={{ $parameter["update_contact_id"] || undefined }}',
						},
					},
				},
			},
			{
				name: 'Get Meta',
				value: OPERATIONS.GET_META,
				description: 'Get the contact meta',
				routing: {
					request: {
						method: 'GET' as IHttpRequestMethods,
						url: '=/contacts/{{$parameter["contact_id"]}}/meta',
						qs: {
							key: '={{ $parameter["key"] || undefined }}',
						},
					},
				},
			},
			{
				name: 'Delete Meta',
				value: OPERATIONS.DELETE_META,
				description: 'Delete the contact meta',
				routing: {
					request: {
						method: 'DELETE' as IHttpRequestMethods,
						url: '=/contacts/{{$parameter["contact_id"]}}/meta',
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
		displayName: 'Contact ID',
		name: 'contact_id',
		type: 'string' as NodePropertyTypes,
		required: true,
		description: 'The unique identifier of the contact',
		placeholder: '340',
		default: '',
		displayOptions: {
			show: {
				resource: [RESOURCES.CONTACTS],
				operation: [OPERATIONS.GET_CONTACT, OPERATIONS.UPDATE_CONTACT, OPERATIONS.DELETE_CONTACT, OPERATIONS.META],
			},
		},
	},
	commonBooleans.count([RESOURCES.CONTACTS], [OPERATIONS.GET_CONTACTS]),
	commonBooleans.getInvoicePayments(
		[RESOURCES.CONTACTS],
		[OPERATIONS.GET_CONTACTS, OPERATIONS.GET_CONTACT],
	),
	commonBooleans.getInvoices(
		[RESOURCES.CONTACTS],
		[OPERATIONS.GET_CONTACTS, OPERATIONS.GET_CONTACT],
	),
	commonBooleans.getMeta([RESOURCES.CONTACTS], [OPERATIONS.GET_CONTACTS, OPERATIONS.GET_CONTACT]),
	commonBooleans.getReservationPaymentTerms(
		[RESOURCES.CONTACTS],
		[OPERATIONS.GET_CONTACTS, OPERATIONS.GET_CONTACT],
	),
	commonBooleans.getReservations(
		[RESOURCES.CONTACTS],
		[OPERATIONS.GET_CONTACTS, OPERATIONS.GET_CONTACT],
	),

	{
		displayName: 'Limit',
		name: 'limit',
		type: 'string' as NodePropertyTypes,
		description: 'Maximum number of contacts to return (minimum 1)',
		placeholder: '1',
		default: '',
		displayOptions: {
			show: { resource: [RESOURCES.CONTACTS], operation: [OPERATIONS.GET_CONTACTS] },
		},
	},
	{
		displayName: 'Offset',
		name: 'offset',
		type: 'string' as NodePropertyTypes,
		description: 'Number of contacts to skip before starting to collect results',
		placeholder: '0',
		default: '',
		displayOptions: {
			show: { resource: [RESOURCES.CONTACTS], operation: [OPERATIONS.GET_CONTACTS] },
		},
	},
	{
		displayName: 'Order',
		name: 'order',
		type: 'options' as NodePropertyTypes,
		description:
			'Sorting order of the returned contacts. Choose ascending (ASC) or descending (DESC).',
		options: [
			{ name: 'None', value: '' },
			{ name: 'ASC', value: 'asc' },
			{ name: 'DESC', value: 'desc' },
		],
		default: '',
		displayOptions: {
			show: { resource: [RESOURCES.CONTACTS], operation: [OPERATIONS.GET_CONTACTS] },
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
			{ name: 'Contact UID', value: 'contact_uid' },
			{ name: 'Contact ID', value: 'contact_id' },
			{ name: 'Admin ID', value: 'admin_id' },
			{ name: 'Chain ID', value: 'chain_id' },
			{ name: 'Status', value: 'status' },
			{ name: 'Name', value: 'name' },
			{ name: 'Created', value: 'created' },
			{ name: 'Type', value: 'type' },
			{ name: 'Last Modified', value: 'last_modified' },
			{ name: 'Last Modified Search', value: 'last_modified_search' },
		],
		default: '',
		displayOptions: {
			show: { resource: [RESOURCES.CONTACTS], operation: [OPERATIONS.GET_CONTACTS] },
		},
	},
	{
		displayName: 'Search',
		name: 'search',
		type: 'string' as NodePropertyTypes,
		description: 'Filter contacts by ID or name. Partial matches are allowed.',
		placeholder: 'Enter ID or name',
		default: '',
		displayOptions: {
			show: { resource: [RESOURCES.CONTACTS], operation: [OPERATIONS.GET_CONTACTS] },
		},
	},

	createContactField('first_name', 'First Name', 'First name of the contact', {
		placeholder: 'John',
	}),
	createContactField('last_name', 'Last Name', 'Last name of the contact', {
		required: true,
		placeholder: 'Doe',
		operations: 'addContact',
	}),
	createContactField('last_name', 'Last Name', 'Last name of the contact', {
		placeholder: 'Doe',
		operations: 'updateContact',
	}),
	{
		displayName: 'Gender',
		name: 'gender',
		type: 'options' as NodePropertyTypes,
		description: 'Gender of the contact (used for personalization and reporting)',
		options: [
			{ name: 'None', value: '' },
			{ name: 'Male', value: 'male' },
			{ name: 'Female', value: 'female' },
			{ name: 'Family', value: 'family' },
		],
		default: '',
		displayOptions: createDisplayOptions('contacts', ['addContact', 'updateContact']),
	},
	createContactField('birthday', 'Birthday', 'Birthday of the contact in YYYY-MM-DD format', {
		placeholder: '1990-01-15',
		operations: 'addContact',
		typeOptions: {
			validation: [
				{
					type: 'regex',
					properties: {
						regex: '^\\d{4}-\\d{2}-\\d{2}$',
						errorMessage: 'Date must be in YYYY-MM-DD format',
					},
				},
			],
		},
	}),
	createContactField('email', 'Email', 'Email address of the contact', {
		required: true,
		placeholder: 'support@camping.care',
		operations: 'addContact',
	}),
	createContactField('phone', 'Phone', 'Primary phone number of the contact', {
		placeholder: '+31 (0)541 248 011',
	}),
	createContactField('phone_mobile', 'Mobile Phone', 'Mobile phone number of the contact', {
		placeholder: '+31 (0)541 248 011',
		operations: 'addContact',
	}),
	createContactField('address', 'Address', "Street name of the contact's address", {
		placeholder: 'Lossersestraat',
	}),
	createContactField('address_number', 'Address Number', "House number of the contact's address", {
		placeholder: '2',
	}),
	createContactField('city', 'City', 'City where the contact resides', {
		placeholder: 'Oldenzaal',
	}),
	createContactField('state', 'State', 'State or province of the contact', {
		placeholder: 'Overijssel',
		operations: 'addContact',
	}),
	createContactField('zipcode', 'Zipcode', "Postal code of the contact's address", {
		placeholder: '7574AE',
	}),
	{
		displayName: 'Country',
		name: 'country',
		type: 'options' as NodePropertyTypes,
		description: 'Country where the contact resides',
		typeOptions: { loadOptionsMethod: 'getCountriesFromRules' },
		default: '',
		displayOptions: createDisplayOptions('contacts', ['addContact', 'updateContact']),
	},
	createContactField(
		'id_type',
		'ID Type',
		'Type of identification document (e.g. Passport, ID Card)',
		{ placeholder: 'Passport', operations: 'addContact' },
	),
	createContactField('id_nr', 'ID Number', 'Identification number of the document', {
		placeholder: 'AB1234567',
		operations: 'addContact',
	}),
	{
		displayName: 'Country of Origin',
		name: 'country_origin',
		type: 'options' as NodePropertyTypes,
		description: 'Country of origin of the contact',
		typeOptions: { loadOptionsMethod: 'getCountriesFromRules' },
		default: '',
		displayOptions: createDisplayOptions('contacts', 'addContact'),
	},
	createContactField('company', 'Company', 'Company name if the contact represents a business', {
		placeholder: 'Camping.care',
	}),
	createContactField(
		'vat_number',
		'VAT Number',
		'VAT number associated with the company (if applicable)',
		{ placeholder: 'NL123456789B01', operations: 'addContact' },
	),
	{
		displayName: 'Type',
		name: 'type',
		type: 'options' as NodePropertyTypes,
		description: 'Type of contact',
		options: [
			{ name: 'None', value: '' },
			{ name: 'Main Traveler', value: 'main_traveler' },
			{ name: 'Co Traveler', value: 'co_traveler' },
			{ name: 'Booker', value: 'booker' },
		],
		default: '',
		displayOptions: createDisplayOptions('contacts', ['addContact', 'updateContact']),
	},
	{
		displayName: 'Extra Fields',
		name: 'extraFields',
		type: 'fixedCollection' as NodePropertyTypes,
		description: 'Add additional metadata fields as key/value pairs',
		placeholder: 'Add Field',
		typeOptions: { multipleValues: true },
		default: { field: [] },
		displayOptions: {
			show: { resource: [RESOURCES.CONTACTS], operation: [OPERATIONS.ADD_CONTACT] },
		},
		options: [
			{
				displayName: 'Field',
				name: 'field',
				values: [
					{
						displayName: 'Key',
						name: 'key',
						type: 'options' as NodePropertyTypes,
						description: 'Name of the metadata field',
						typeOptions: { loadOptionsMethod: 'getContactFields' },
						default: '',
					},
					{
						displayName: 'Value',
						name: 'value',
						type: 'string' as NodePropertyTypes,
						description: 'Value of the metadata field',
						default: '',
					},
				],
			},
		],
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
				resource: [RESOURCES.CONTACTS],
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
				resource: [RESOURCES.CONTACTS],
				operation: [OPERATIONS.META],
				metaOperation: [OPERATIONS.UPDATE_META],
			},
		},
	},
	{
		displayName: 'Update Contact ID',
		name: 'update_contact_id',
		type: 'string' as NodePropertyTypes,
		description: '**OTA only: contact id of the contact meta you want to change',
		placeholder: '1234',
		default: '',
		displayOptions: {
			show: {
				resource: [RESOURCES.CONTACTS],
				operation: [OPERATIONS.META],
				metaOperation: [OPERATIONS.UPDATE_META],
			},
		},
	},
];
