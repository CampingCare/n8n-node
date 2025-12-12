import { ICredentialTestRequest, ICredentialType, INodeProperties } from 'n8n-workflow';

export class CampingCareApi implements ICredentialType {
	name = 'campingCareApi';
	displayName = 'Starfish (CampingCare/HotelCare) API';
	documentationUrl = 'https://support.starfish.care/faq/n8n/';
	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: {
				password: true,
			},
			default: '',
			required: true,
			description: 'Bearer token for API authentication',
		},
		{
			displayName: 'Webhook Secret',
			name: 'webhookSecret',
			type: 'string',
			typeOptions: {
				password: true,
			},
			default: '',
			required: false,
			description:
				'Optional secret passed to Starfish when creating webhooks; incoming webhook requests must include this value in the X-Webhook-Secret header.',
		},
	];

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://api.camping.care/v21',
			url: '/administrations',
			method: 'GET',
			headers: {
				Authorization: '=Bearer {{$credentials.apiKey}}',
			},
		},
	};
}
