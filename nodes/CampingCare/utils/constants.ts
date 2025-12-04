export const API_BASE_URL = 'https://api.camping.care/v21';

export const API_ENDPOINTS = {
	ACCOMMODATIONS: '/accommodations',
	ACCOMMODATION_BY_ID: '=/accommodations/{{$parameter["accommodation_id"]}}',
	ACCOMMODATION_META: '=/accommodations/{{$parameter["accommodation_id"]}}/meta',

	ADMINISTRATIONS: '/administrations',
	ADMINISTRATION_BY_ID: '=/administrations/{{$parameter["admin_id"]}}',
	ADMINISTRATION_META: '=/administrations/{{$parameter["admin_id"]}}/meta',
	ADMINISTRATION_AGE_TABLES: '=/administrations/{{$parameter["admin_id"]}}/age_tables',
	ADMINISTRATION_AGE_TABLE_BY_ID:
		'=/administrations/{{$parameter["admin_id"]}}/age_tables/{{$parameter["age_table_id"]}}',

	AVAILABILITY_STOCK: '/availability/stock',
	AVAILABILITY_PLACES: '/availability/places',

	CATEGORIES: '/categories',
	CATEGORY_BY_ID: '=/categories/{{$parameter["category_id"]}}',

	CHANNELS: '/channels',
	CODES: '/codes',

	CONTACTS: '/contacts',
	CONTACT_BY_ID: '=/contacts/{{$parameter["contact_id"]}}',
	CONTACT_META: '=/contacts/{{$parameter["contact_id"]}}/meta',

	EXCHANGE_RATES: '/exchange_rates',
	EXCHANGE_RATES_VALUE: '/exchange_rates/exchange_value',

	FIELDS: '/fields',
	FIELDS_FORMS: '/fields/forms',

	INVOICES: '/invoices',
	INVOICE_BY_ID: '=/invoices/{{$parameter["invoice_id"]}}',
	INVOICE_FINALIZE: '=/invoices/{{$parameter["invoice_id"]}}/finalize',
	INVOICE_CANCEL_FINALIZE: '=/invoices/{{$parameter["invoice_id"]}}/cancel_finalize',
	INVOICE_CREDIT: '=/invoices/{{$parameter["invoice_id"]}}/credit',
	INVOICE_META: '=/invoices/{{$parameter["invoice_id"]}}/meta',

	KIOSKS: '/kiosks',
	KIOSK_BY_ID: '=/kiosks/{{$parameter["kiosk_id"]}}',
	KIOSK_META: '=/kiosks/{{$parameter["kiosk_id"]}}/meta',
	KIOSK_INSTALL: '=/kiosks/{{$parameter["kiosk_id"]}}/install',

	LEDGERS: '/ledgers',
	LEDGER_BY_ID: '=/ledgers/{{$parameter["ledger_id"]}}',

	LICENSE_PLATES: '/license_plates',
	LICENSE_PLATE_BY_ID: '=/license_plates/{{$parameter["license_plate_id"]}}',

	LOGS_BY_ID: '/api/logs',
	LOGS: '/logs',

	PAYMENTS: '/payments',
	PRICE_CALCULATION: '/price_calculation',

	PRODUCTS: '/products',
	PRODUCT_BY_ID: '=/products/{{$parameter["product_id"]}}',
	PRODUCT_META: '=/products/{{$parameter["product_id"]}}/meta',

	RATES: '/rates',
	RATE_BY_ID: '=/rates/{{$parameter["rate_id"]}}',
	RATE_PRICES: '=/rates/{{$parameter["rate_id"]}}/prices',
	RATE_META: '=/rates/{{$parameter["rate_id"]}}/meta',

	RESERVATIONS: '/reservations',
	RESERVATION_BY_ID: '=/reservations/{{$parameter["reservation_id"]}}',
	RESERVATION_META: '=/reservations/{{$parameter["reservation_id"]}}/meta',

	TAGS: '/tags',
	TAG_BY_RESOURCE: '={{ $parameter["resource"] + "/" + $parameter["tagId"] }}',

	TIMEZONES: '/timezones',

	USERS: '/users',
	USER_BY_ID: '=/users/{{$parameter["user_id"]}}',
	USER_META: '=/users/{{$parameter["user_id"]}}/meta',

	WIDGETS: '/widgets',
	WIDGET_BY_ID: '=/widgets/{{$parameter["widget_id"]}}',

	WEBHOOKS: '/webhooks',
	WEBHOOKS_EVENTS: '/webhooks/events',
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
	AVAILABILITY: 'availability',
	CATEGORIES: 'categories',
	CONTACTS: 'contacts',
	EXCHANGE_RATES: 'exchangeRates',
	INVOICES: 'invoices',
	KIOSKS: 'kiosks',
	LEDGERS: 'ledgers',
	LICENSE_PLATES: 'licensePlates',
	LOGS: 'logs',
	PRICE_CALCULATION: 'priceCalculation',
	PRODUCTS: 'products',
	RATES: 'rates',
	RESERVATIONS: 'reservations',
	TAGS: 'tags',
	TIMEZONES: 'timezones',
	USERS: 'users',
	WIDGETS: 'widgets',
} as const;

export const OPERATIONS = {
	GET_ACCOMMODATIONS: 'getAccommodations',
	GET_ACCOMMODATION: 'getAccommodation',
	ADD_ACCOMMODATION: 'addAccommodation',
	UPDATE_ACCOMMODATION: 'updateAccommodation',
	DELETE_ACCOMMODATION: 'deleteAccommodation',

	GET_ADMINISTRATIONS: 'getAdministrations',
	GET_ADMINISTRATION: 'getAdministration',
	UPDATE_ADMINISTRATION: 'updateAdministration',
	ADD_ADMINISTRATION: 'addAdministration',
	DELETE_ADMINISTRATION: 'deleteAdministration',
	AGE_TABLES: 'ageTables',
	GET_AGE_TABLES: 'getAgeTables',
	GET_AGE_TABLE: 'getAgeTable',

	GET_STOCK: 'getStock',
	GET_PLACES: 'getPlaces',

	GET_CATEGORIES: 'getCategories',
	GET_CATEGORY: 'getCategory',
	ADD_CATEGORY: 'addCategory',
	UPDATE_CATEGORY: 'updateCategory',
	DELETE_CATEGORY: 'deleteCategory',

	GET_CONTACTS: 'getContacts',
	GET_CONTACT: 'getContact',
	ADD_CONTACT: 'addContact',
	UPDATE_CONTACT: 'updateContact',
	DELETE_CONTACT: 'deleteContact',

	GET_EXCHANGE_RATES: 'getExchangeRates',
	EXCHANGE_VALUE: 'exchangeValue',

	GET_INVOICES: 'getInvoices',
	GET_INVOICE: 'getInvoice',
	ADD_INVOICE: 'addInvoice',
	UPDATE_INVOICE: 'updateInvoice',
	DELETE_INVOICE: 'deleteInvoice',
	FINALIZE_INVOICE: 'finalizeInvoice',
	CANCEL_DELAYED_FINALIZED_INVOICE: 'cancelDelayedFinalizedInvoice',
	CREATE_CREDIT: 'createCredit',

	KIOSKS: 'kiosks',
	GET_KIOSKS: 'getKiosks',
	GET_KIOSK: 'getKiosk',
	UPDATE_KIOSK: 'updateKiosk',
	ADD_KIOSK: 'addKiosk',
	DELETE_KIOSK: 'deleteKiosk',
	INSTALL_KIOSK: 'installKiosk',

	GET_LEDGERS: 'getLedgers',
	GET_LEDGER: 'getLedger',
	ADD_LEDGER: 'addLedger',
	UPDATE_LEDGER: 'updateLedger',
	DELETE_LEDGER: 'deleteLedger',

	GET_LICENSE_PLATES: 'getLicensePlates',
	GET_LICENSE_PLATE: 'getLicensePlate',
	CHECK_VALID_LICENSE_PLATE: 'checkValidLicensePlate',
	ADD_LICENSE_PLATE: 'addLicensePlate',
	UPDATE_LICENSE_PLATE: 'updateLicensePlate',
	DELETE_LICENSE_PLATE: 'deleteLicensePlate',

	GET_LOGS: 'getLogs',
	ADD_LOG: 'addLog',

	CALCULATE_PRICE: 'calculatePrice',

	GET_PRODUCTS: 'getProducts',
	GET_PRODUCT: 'getProduct',
	ADD_PRODUCT: 'addProduct',
	UPDATE_PRODUCT: 'updateProduct',
	DELETE_PRODUCT: 'deleteProduct',

	GET_RATES: 'getRates',
	GET_RATE: 'getRate',
	ADD_RATE: 'addRate',
	UPDATE_RATE: 'updateRate',
	DELETE_RATE: 'deleteRate',
	PRICES: 'prices',
	GET_PRICES: 'getPrices',
	UPDATE_PRICES: 'updatePrices',

	GET_RESERVATION: 'getReservation',
	GET_RESERVATIONS: 'getReservations',
	CREATE_RESERVATION: 'createReservation',
	DELETE_RESERVATION: 'deleteReservation',

	GET_TAGS: 'getTags',
	GET_TAG: 'getTag',
	ADD_TAG: 'addTag',
	DELETE_TAG: 'deleteTag',

	GET_TIMEZONES: 'getTimezones',

	GET_USERS: 'getUsers',
	GET_USER: 'getUser',
	UPDATE_USER: 'updateUser',
	ADD_USER: 'addUser',

	GET_WIDGETS: 'getWidgets',
	GET_WIDGET: 'getWidget',
	ADD_WIDGET: 'addWidget',
	DELETE_WIDGET: 'deleteWidget',

	META: 'meta',
	GET_META: 'getMeta',
	UPDATE_META: 'updateMeta',
	DELETE_META: 'deleteMeta',
} as const;
