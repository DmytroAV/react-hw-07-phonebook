import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://64f93d564098a7f2fc142a9d.mockapi.io/api/v1/' }),
  tagTypes: ['Contacts'],
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => '/contacts',
      providesTags: ['Contacts'],
    }),
    getContactById: builder.query({
      query: (id) => `/contacts/${id}`,
      providesTags: ['Contacts'],
    }),
    createContact: builder.mutation({
      query: (newContact) => ({
        url: '/contacts',
        method: 'POST',
        body: newContact,
      }),
      invalidatesTags: ['Contacts'],
    }),
    updateContact: builder.mutation({
      query: (fields) => ({
        url: `/contacts/${fields.id}`,
        method: 'PUT',
        body: fields,
      }),
      invalidatesTags: ['Contacts'],
    }),
    deleteContact: builder.mutation({
      query: (contactId) => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts']
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetContactsQuery, useGetContactByIdQuery, useCreateContactMutation, useUpdateContactMutation, useDeleteContactMutation } = contactsApi;

