import type { NodePropertyTypes, IHttpRequestMethods } from 'n8n-workflow';
import { API_ENDPOINTS, RESOURCES, OPERATIONS } from '../utils/constants';
import { commonBooleans } from '../utils/commonFields';

export const tagsDescription = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options' as NodePropertyTypes,
		noDataExpression: true,
		displayOptions: { show: { resource: [RESOURCES.TAGS] } },
		options: [
			{
				name: 'Get Tags',
				value: OPERATIONS.GET_TAGS,
				description: 'Get a list of tags',
				action: 'Get tags',
				routing: {
					request: {
						method: 'GET' as IHttpRequestMethods,
						url: API_ENDPOINTS.TAGS,
						qs: {
							count: '={{ $parameter["count"] || undefined }}',
							limit: '={{ $parameter["limit"] || undefined }}',
							offset: '={{ $parameter["offset"] || undefined }}',
							search: '={{ $parameter["search"] || undefined }}',
						},
					},
				},
			},
			{
				name: 'Get Tag',
				value: OPERATIONS.GET_TAG,
				description: 'Get a single tag by ID',
				action: 'Get tag',
				routing: {
					request: {
						method: 'GET' as IHttpRequestMethods,
						url: '={{ $parameter["resource"] + "/" + $parameter["tagId"] }}',
					},
				},
			},
			{
				name: 'Add Tag',
				value: OPERATIONS.ADD_TAG,
				description: 'Add a new tag',
				action: 'Add tag',
				routing: {
					request: {
						method: 'POST' as IHttpRequestMethods,
						url: API_ENDPOINTS.TAGS,
						qs: {
							name: '={{ $parameter["name"] }}',
						},
					},
				},
			},
			{
				name: 'Delete Tag',
				value: OPERATIONS.DELETE_TAG,
				description: 'Delete a tag by ID',
				action: 'Delete tag',
				routing: {
					request: {
						method: 'DELETE' as IHttpRequestMethods,
						url: '={{ $parameter["resource"] + "/" + $parameter["tagId"] }}',
					},
				},
			},
		],
		default: OPERATIONS.GET_TAGS,
	},

	commonBooleans.count([RESOURCES.TAGS], [OPERATIONS.GET_TAGS]),
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'string' as NodePropertyTypes,
		placeholder: '15',
		default: '',
		description: 'Maximum number of results to return',
		displayOptions: {
			show: {
				resource: [RESOURCES.TAGS],
				operation: [OPERATIONS.GET_TAGS],
			},
		},
	},
	{
		displayName: 'Offset',
		name: 'offset',
		type: 'string' as NodePropertyTypes,
		placeholder: '0',
		default: '',
		description: 'Number of results to skip',
		displayOptions: {
			show: {
				resource: [RESOURCES.TAGS],
				operation: [OPERATIONS.GET_TAGS],
			},
		},
	},
	{
		displayName: 'Search',
		name: 'search',
		type: 'string' as NodePropertyTypes,
		placeholder: 'roe',
		default: '',
		description: 'Search term to filter tags',
		displayOptions: {
			show: {
				resource: [RESOURCES.TAGS],
				operation: [OPERATIONS.GET_TAGS],
			},
		},
	},

	{
		displayName: 'Name',
		name: 'name',
		type: 'string' as NodePropertyTypes,
		required: true,
		default: '',
		description: 'The name of the tag to create',
		displayOptions: {
			show: {
				resource: [RESOURCES.TAGS],
				operation: [OPERATIONS.ADD_TAG],
			},
		},
	},

	{
		displayName: 'Tag ID',
		name: 'tagId',
		type: 'string' as NodePropertyTypes,
		required: true,
		default: '',
		description: 'The ID of the tag',
		displayOptions: {
			show: {
				resource: [RESOURCES.TAGS],
				operation: [OPERATIONS.GET_TAG, OPERATIONS.DELETE_TAG],
			},
		},
	},
];
