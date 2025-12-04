# n8n-nodes-starfish

This is an n8n community node. It lets you use the Starfish API (CampingCare/HotelCare) in your n8n workflows.

Starfish is a comprehensive booking and reservation management platform for camping and hotel accommodations, providing APIs for managing contacts, reservations, accommodations, invoices, rates, and more.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

[Installation](#installation)
[Operations](#operations)
[Credentials](#credentials)
[Compatibility](#compatibility)
[Usage](#usage)
[Resources](#resources)
[Version history](#version-history)

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

### Prerequisites

- Node.js >= 20.15
- n8n >= 1.0.0 (Community Nodes enabled)
- A valid Starfish API key (available in your Starfish dashboard)

### Install via npm

```bash
npm install n8n-nodes-starfish
```

### Install in n8n

**Option A — via UI:**

1. In n8n: Settings > Community Nodes > Install
2. Search for or paste: `n8n-nodes-starfish`
3. Confirm and restart n8n

**Option B — via CLI:**

1. Stop your n8n instance
2. Install: `npm install n8n-nodes-starfish`
3. Restart n8n
4. The nodes will appear in the node panel

## Operations

This package provides two nodes:

### Starfish (CampingCare/HotelCare) Node

Regular node for making API calls:

#### Accommodations API

- **Get Accommodations** - List accommodations with filtering options
- **Get Accommodation** - Retrieve a specific accommodation by ID
- **Add Accommodation** - Create a new accommodation
- **Update Accommodation** - Modify existing accommodation details
- **Delete Accommodation** - Remove an accommodation
- **Meta Operations** - Manage accommodation metadata (get, update, delete)

#### Administrations API

- **Get Administrations** - List all administrations
- **Get Administration** - Get details of a specific administration
- **Add Administration** - Create a new administration (full PMS or lite version)
- **Update Administration** - Modify administration details
- **Delete Administration** - Remove an administration
- **Age Tables** - Retrieve and manage age table configurations
- **Meta Operations** - Manage administration metadata

#### Availability API

- **Get Stock** - Check accommodation availability for specific date ranges
- **Get Places** - Get available places/spots

#### Categories API

- **Get Categories** - List all categories
- **Get Category** - Get a specific category by ID
- **Add Category** - Create a new category
- **Update Category** - Modify existing category
- **Delete Category** - Remove a category

#### Contacts API

- **Get Contacts** - List contacts with filtering and pagination
- **Get Contact** - Retrieve a specific contact by ID
- **Add Contact** - Create a new contact with metadata support
- **Update Contact** - Modify existing contact information
- **Delete Contact** - Remove a contact
- **Meta Operations** - Manage contact metadata

#### Exchange Rates API

- **Get Exchange Rates** - Get currency exchange rates for specific dates
- **Exchange Value** - Convert amounts between currencies

#### Invoices API

- **Get Invoices** - List invoices with filters
- **Get Invoice** - Get a specific invoice by ID
- **Add Invoice** - Create a new invoice
- **Update Invoice** - Modify existing invoice
- **Delete Invoice** - Remove an invoice
- **Finalize Invoice** - Finalize an invoice for payment
- **Cancel Delayed Finalized Invoice** - Cancel a delayed finalization
- **Create Credit** - Create a credit note for an invoice
- **Add Rows** - Add line items to an invoice
- **Meta Operations** - Manage invoice metadata

#### Kiosks API

- **Get Kiosks** - List all kiosks
- **Get Kiosk** - Get a specific kiosk by ID
- **Add Kiosk** - Create a new kiosk
- **Update Kiosk** - Modify kiosk details
- **Delete Kiosk** - Remove a kiosk
- **Install Kiosk** - Install a kiosk
- **Meta Operations** - Manage kiosk metadata

#### Ledgers API

- **Get Ledgers** - List all ledgers
- **Get Ledger** - Get a specific ledger by ID
- **Add Ledger** - Create a new ledger
- **Update Ledger** - Modify ledger details
- **Delete Ledger** - Remove a ledger

#### License Plates API

- **Get License Plates** - List license plates with filtering
- **Get License Plate** - Get a specific license plate by ID
- **Check Valid License Plate** - Validate a license plate
- **Add License Plate** - Create a new license plate entry
- **Update License Plate** - Modify existing license plate
- **Delete License Plate** - Remove a license plate

#### Logs API

- **Get Logs** - Retrieve log entries
- **Add Log** - Create a new log entry for tracking activities related to reservations, contacts, invoices, or accommodations

#### Price Calculation API

- **Calculate Price** - Get pricing information before creating a reservation with support for age tables, birthdates, discount codes, and channels

#### Rates API

- **Get Rates** - List all rates
- **Get Rate** - Get a specific rate by ID
- **Add Rate** - Create a new rate
- **Update Rate** - Modify existing rate
- **Delete Rate** - Remove a rate
- **Get Prices** - Retrieve prices for a specific rate and date range
- **Update Prices** - Modify rate prices for specific dates
- **Meta Operations** - Manage rate metadata

#### Reservations API

- **Get Reservations** - List all reservations with filtering
- **Get Reservation** - Get a specific reservation by ID
- **Create Reservation** - Create a new reservation (with price calculation or forced data)
- **Delete Reservation** - Remove a reservation
- **Meta Operations** - Manage reservation metadata

#### Tags API

- **Get Tags** - List all tags
- **Get Tag** - Get a specific tag by ID
- **Add Tag** - Create a new tag
- **Delete Tag** - Remove a tag

#### Timezones API

- **Get Timezones** - List all available timezones

### Starfish (CampingCare/HotelCare) Trigger Node

Webhook trigger node for real-time events:

- Automatically creates and manages webhooks in Starfish
- Supports multiple event types (reservations, contacts, invoices, etc.)
- Receives real-time updates when data changes in Starfish
- Includes signature validation for security

## Credentials

### Setting up API Credentials

1. In n8n, go to **Credentials** > **New**
2. Search for "Starfish (CampingCare/HotelCare) API"
3. Enter your API credentials:
   - **API Key**: Your Starfish API key

To obtain your API key:

1. Log in to your Starfish dashboard (CampingCare or HotelCare)
2. Navigate to Settings > API
3. Generate or copy your API key

The API key is used for authentication with all Starfish API endpoints.

## Compatibility

- **Minimum n8n version:** 1.0.0
- **Node.js version:** >= 20.15
- **Tested with:** n8n 1.0.0+

This node uses the Starfish API v21. Ensure your API key has access to the required endpoints.

## Usage

### Getting Started

If you're new to n8n, check out the [Try it out](https://docs.n8n.io/try-it-out/) documentation to get started.

### Example 1: Create a Contact

1. Add the "Starfish (CampingCare/HotelCare)" node
2. Select **Resource**: Contacts API
3. Select **Operation**: Add Contact
4. Fill in required fields:
   - Email (required)
   - First Name
   - Last Name
   - Phone, Address, etc. (optional)

The API allows creating contacts with minimal information and adding data as needed.

### Example 2: Create a Reservation

1. Add the "Starfish (CampingCare/HotelCare)" node
2. Select **Resource**: Reservations API
3. Select **Operation**: Create Reservation
4. Choose creation method:
   - **Using Price Calculation**: First calculate price, then create reservation
   - **Force with Own Data**: Provide all required data directly

For the price calculation method:

1. First use Price Calculation API to get `calculation_id` and `hash`
2. Then create the reservation using these values

### Example 3: Listen for Webhook Events

1. Add the "Starfish (CampingCare/HotelCare) Trigger" node
2. Select events to listen for (e.g., "reservation_create", "contact_update")
3. Activate the workflow
4. The webhook will be automatically registered with Starfish
5. When events occur, the workflow will be triggered

### Important Notes

- **Date Format**: Always use YYYY-MM-DD format for dates
- **Required Fields**: Some operations have required fields (marked with \*)
- **Meta Fields**: Many resources support custom metadata via meta operations
- **Pagination**: Use `count` and `limit` parameters for large datasets
- **Boolean Parameters**: Use string values "0" or "1" for boolean query parameters

## Resources

- [Starfish API Documentation](https://support.starfish.care/faq/n8n/)
- [n8n Community Nodes Documentation](https://docs.n8n.io/integrations/#community-nodes)
- [GitHub Repository](https://github.com/CampingCare/n8n-nodes-starfish)
- [CampingCare Website](https://www.camping.care)

## Version history

### Version 1.0.6 (Current)

- Support for Invoices API with advanced operations
- Support for Rates API with pricing and metadata
- Enhanced webhook trigger with signature validation
- Support for Kiosks, Ledgers, and License Plates APIs
- Support for Exchange Rates and Logs APIs
- Support for Categories and Tags APIs
- Improved error handling and validation
- Meta operations for all major resources

### Version 1.0.0

- Initial release
- Support for Contacts, Reservations, and Accommodations
- Webhook trigger support
- Price calculation features
- Administrations and Timezones support

---

## Troubleshooting

### Common Issues

**"Invalid API Key" error**

- Verify your API key in the Starfish dashboard
- Update the key in n8n credentials

**Webhook not receiving events**

- Check that the workflow is activated
- Verify the webhook exists in Starfish dashboard
- Ensure n8n is accessible from the internet

**Date format errors**

- Ensure all dates use YYYY-MM-DD format
- For datetime fields, use YYYY-MM-DD HH:MM:SS format

**Meta operations not working**

- Verify the resource supports meta operations
- Check that the meta key is valid for the resource type
- Some meta operations may require specific permissions

## Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/my-feature`
5. Submit a pull request

## License

[MIT](LICENSE.md)

## Support

For support:

- Check the [API Documentation](https://support.starfish.care/faq/n8n/)
- Open an issue on [GitHub](https://github.com/CampingCare/n8n-node/issues)
- Contact Starfish support for API-related questions

## Credits

Created by the CampingCare development team.

Built with the [n8n nodes starter](https://github.com/n8n-io/n8n-nodes-starter).
