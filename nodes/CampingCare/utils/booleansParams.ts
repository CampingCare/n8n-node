import type { NodePropertyTypes, INodeProperties } from 'n8n-workflow';

export const createBooleanField = (
	name: string,
	displayName: string,
	description: string,
	resources: string[],
	operations: string[],
	defaultValue = false,
): INodeProperties => ({
	displayName,
	name,
	type: 'boolean' as NodePropertyTypes,
	description,
	default: defaultValue,
	displayOptions: {
		show: {
			resource: resources,
			operation: operations,
		},
	},
});

export const booleans = {
	backend: (resources: string[], operations: string[]) =>
		createBooleanField(
			'backend',
			'Backend',
			'Whether to include backend data',
			resources,
			operations,
		),

	count: (resources: string[], operations: string[]) =>
		createBooleanField(
			'count',
			'Count',
			'Whether to return only the total count instead of full details',
			resources,
			operations,
		),

	filterRootMeta: (resources: string[], operations: string[]) =>
		createBooleanField(
			'filter_root_meta',
			'Filter Root Meta',
			'Whether to filter root meta',
			resources,
			operations,
		),

	forceDates: (resources: string[], operations: string[]) =>
		createBooleanField(
			'force_dates',
			'Force Dates',
			'Whether to overwrite the stay dates of the reservation',
			resources,
			operations,
		),

	getAccommodations: (resources: string[], operations: string[]) =>
		createBooleanField(
			'get_accommodations',
			'Get Accommodations',
			'Whether to include accommodation data',
			resources,
			operations,
		),

	getAgeTables: (resources: string[], operations: string[]) =>
		createBooleanField(
			'get_age_tables',
			'Get Age Tables',
			'Whether to include age table information',
			resources,
			operations,
		),

	getAvailablePlaces: (resources: string[], operations: string[]) =>
		createBooleanField(
			'get_available_places',
			'Get Available Places',
			'Whether to get available places',
			resources,
			operations,
		),

	getBooker: (resources: string[], operations: string[]) =>
		createBooleanField(
			'get_booker',
			'Get Booker',
			'Whether to include booker details of the reservation(s)',
			resources,
			operations,
		),

	getContact: (resources: string[], operations: string[]) =>
		createBooleanField(
			'get_contact',
			'Get Contact',
			'Whether to include contact information',
			resources,
			operations,
		),

	getContactMeta: (resources: string[], operations: string[]) =>
		createBooleanField(
			'get_contact_meta',
			'Get Contact Meta',
			'Whether to include contact meta data',
			resources,
			operations,
		),

	getCoTravelers: (resources: string[], operations: string[]) =>
		createBooleanField(
			'get_co_travelers',
			'Get Co Travelers',
			'Whether to include co-traveler details of the reservation(s)',
			resources,
			operations,
		),

	getDeposit: (resources: string[], operations: string[]) =>
		createBooleanField(
			'get_deposit',
			'Get Deposit',
			'Whether to include deposit information',
			resources,
			operations,
		),

	getDiscountsPrice: (resources: string[], operations: string[]) =>
		createBooleanField(
			'get_discounts_price',
			'Get Discounts Price',
			'Whether to include discounts in the calculation',
			resources,
			operations,
		),

	getGuestsPrice: (resources: string[], operations: string[]) =>
		createBooleanField(
			'get_guests_price',
			'Get Guests Price',
			'Whether to include extra guest prices in the calculation',
			resources,
			operations,
		),

	getInvoiceMeta: (resources: string[], operations: string[]) =>
		createBooleanField(
			'get_invoice_meta',
			'Get Invoice Meta',
			'Whether to include invoice meta',
			resources,
			operations,
		),

	getInvoicePayment: (resources: string[], operations: string[]) =>
		createBooleanField(
			'get_invoice_payment',
			'Get Invoice Payment',
			'Whether to include invoice payment of the reservation(s)',
			resources,
			operations,
		),

	getInvoicePayments: (resources: string[], operations: string[]) =>
		createBooleanField(
			'get_invoice_payments',
			'Get Invoice Payments',
			'Whether to include invoice payments',
			resources,
			operations,
		),

	getInvoiceRowsfilter: (resources: string[], operations: string[]) =>
		createBooleanField(
			'get_invoice_rowsfilter',
			'Get Invoice Rowsfilter',
			'Whether to include invoice rows filter of the reservation(s)',
			resources,
			operations,
		),

	getInvoices: (resources: string[], operations: string[]) =>
		createBooleanField(
			'get_invoices',
			'Get Invoices',
			'Whether to include invoice data',
			resources,
			operations,
		),

	getMedia: (resources: string[], operations: string[]) =>
		createBooleanField(
			'get_media',
			'Get Media',
			'Whether to include media information',
			resources,
			operations,
		),

	getMeta: (resources: string[], operations: string[]) =>
		createBooleanField(
			'get_meta',
			'Get Meta',
			'Whether to include meta information',
			resources,
			operations,
		),

	getOptions: (resources: string[], operations: string[]) =>
		createBooleanField(
			'get_options',
			'Get Options',
			'Whether to get available bookable options (baby chair, extra tent, dog, etc.)',
			resources,
			operations,
		),

	getPayments: (resources: string[], operations: string[]) =>
		createBooleanField(
			'get_payments',
			'Get Payments',
			'Whether to include payments',
			resources,
			operations,
		),

	getPaymentTerms: (resources: string[], operations: string[]) =>
		createBooleanField(
			'get_payment_terms',
			'Get Payment Terms',
			'Whether to include payment terms',
			resources,
			operations,
		),

	getRequiredOptionsPrice: (resources: string[], operations: string[]) =>
		createBooleanField(
			'get_required_options_price',
			'Get Required Options Price',
			'Whether to include required options in the calculation',
			resources,
			operations,
		),

	getReservation: (resources: string[], operations: string[]) =>
		createBooleanField(
			'get_reservation',
			'Get Reservation',
			'Whether to include reservation information',
			resources,
			operations,
		),

	getReservationMeta: (resources: string[], operations: string[]) =>
		createBooleanField(
			'get_reservation_meta',
			'Get Reservation Meta',
			'Whether to include reservation meta data',
			resources,
			operations,
		),

	getReservationPaymentTerms: (resources: string[], operations: string[]) =>
		createBooleanField(
			'get_reservation_payment_terms',
			'Get Reservation Payment Terms',
			'Whether to include reservation payment terms',
			resources,
			operations,
		),

	getReservations: (resources: string[], operations: string[]) =>
		createBooleanField(
			'get_reservations',
			'Get Reservations',
			'Whether to include reservations',
			resources,
			operations,
		),

	getRows: (resources: string[], operations: string[]) =>
		createBooleanField(
			'get_rows',
			'Get Rows',
			'Whether to include detailed row information',
			resources,
			operations,
		),

	getServices: (resources: string[], operations: string[]) =>
		createBooleanField(
			'get_services',
			'Get Services',
			'Whether to include services',
			resources,
			operations,
		),

	getTaxesPrice: (resources: string[], operations: string[]) =>
		createBooleanField(
			'get_taxes_price',
			'Get Taxes Price',
			'Whether to include taxes in the calculation',
			resources,
			operations,
		),

	getVatTables: (resources: string[], operations: string[]) =>
		createBooleanField(
			'get_vat_tables',
			'Get VAT Tables',
			'Whether to include VAT table information',
			resources,
			operations,
		),

	getVatTotals: (resources: string[], operations: string[]) =>
		createBooleanField(
			'get_vat_totals',
			'Get VAT Totals',
			'Whether to include VAT totals',
			resources,
			operations,
		),

	searchAlternative: (resources: string[], operations: string[]) =>
		createBooleanField(
			'search_alternative',
			'Search Alternative',
			'Whether to search for alternative accommodations',
			resources,
			operations,
		),

	translations: (resources: string[], operations: string[]) =>
		createBooleanField(
			'translations',
			'Translations',
			'Whether to include translations',
			resources,
			operations,
		),
};
