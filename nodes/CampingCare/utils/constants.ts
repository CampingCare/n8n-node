export const API_BASE_URL = 'https://api.camping.care/v21';

export const API_ENDPOINTS = {
	ADMINISTRATIONS: '/administrations',
	FIELDS: '/fields',
	FIELDS_FORMS: '/fields/forms',
	ACCOMMODATIONS: '/accommodations',
	CHANNELS: '/channels',
	CODES: '/codes',
	CONTACTS: '/contacts',
	RESERVATIONS: '/reservations',
	PRICE_CALCULATION: '/price_calculation',
	TIMEZONES: '/timezones',
	WEBHOOKS: '/webhooks',
	WEBHOOKS_EVENTS: '/webhooks/events',
	INVOICES: '/invoices',
	PAYMENTS: '/payments',
	RATES: '/rates',
} as const;

export const EXCLUDED_CONTACT_FIELDS = [
	'gender',
	'first_name',
	'last_name',
	'address',
	'address_number',
	'birthday',
	'city',
	'company',
	'country',
	'country_origin',
	'email',
	'id_nr',
	'phone',
	'zipcode',
	'phone_mobile',
	'vat_number',
	'state',
	'id_type',
	'created',
	'create_date',
] as const;

export const RESOURCES = {
	ACCOMMODATIONS: 'accommodations',
	ADMINISTRATIONS: 'administrations',
	CONTACTS: 'contacts',
	PRICE_CALCULATION: 'priceCalculation',
	RESERVATIONS: 'reservations',
	TIMEZONES: 'timezones',
	RATES: 'rates',
	INVOICES: 'invoices',
} as const;

export const OPERATIONS = {
	GET_ACCOMMODATION: 'getAccommodation',
	GET_ACCOMMODATIONS: 'getAccommodations',
	ADD_ACCOMMODATION: 'addAccommodation',
	DELETE_ACCOMMODATION: 'deleteAccommodation',

	GET_ADMINISTRATION: 'getAdministration',
	GET_ADMINISTRATIONS: 'getAdministrations',
	ADD_ADMINISTRATION: 'addAdministration',
	DELETE_ADMINISTRATION: 'deleteAdministration',
	AGE_TABLES: 'ageTables',

	GET_CONTACT: 'getContact',
	GET_CONTACTS: 'getContacts',
	ADD_CONTACT: 'addContact',
	DELETE_CONTACT: 'deleteContact',

	CALCULATE_PRICE: 'calculatePrice',

	GET_RESERVATION: 'getReservation',
	GET_RESERVATIONS: 'getReservations',
	CREATE_RESERVATION: 'createReservation',
	DELETE_RESERVATION: 'deleteReservation',

	GET_TIMEZONES: 'getTimezones',

	GET_RATES: 'getRates',
	GET_RATE: 'getRate',
	ADD_RATE: 'addRate',
	UPDATE_RATE: 'updateRate',
	DELETE_RATE: 'deleteRate',

	PRICES: 'prices',
	GET_PRICES: 'getPrices',
	UPDATE_PRICES: 'updatePrices',
	UPDATE_PRICES_BULK: 'updatePricesBulk',

	META: 'meta',
	GET_META: 'getMeta',
	UPDATE_META: 'updateMeta',
	DELETE_META: 'deleteMeta',

	GET_INVOICES: 'getInvoices',
	GET_INVOICE: 'getInvoice',
	ADD_INVOICE: 'addInvoice',
	UPDATE_INVOICE: 'updateInvoice',
	DELETE_INVOICE: 'deleteInvoice',
	FINALIZE_INVOICE: 'finalizeInvoice',
	CANCEL_DELAYED_FINALIZED_INVOICE: 'cancelDelayedFinalizedInvoice',
	CREATE_CREDIT: 'createCredit',
} as const;
