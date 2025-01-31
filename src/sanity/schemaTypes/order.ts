
export default  {
    name: 'order',
    type: 'document',
    title: 'Order',
    fields: [
        {
            name: 'firstName',
            type: 'string',
            title: 'First Name',
          
        },
        {
            name: 'lastName',
            type: 'string',
            title: 'Last Name',
            
        },
        {
            name: 'address1',
            type: 'string',
            title: 'Address Line 1',
          
        },
        {
            name: 'address2',
            type: 'string',
            title: 'Address Line 2',
        },
        {
            name: 'city',
            type: 'string',
            title: 'City',
           
        },
        {
            name: 'postalcode',
            type: 'string',
            title: 'Postal Code',
            
        },
        {
            name: 'phone',
            type: 'string',
            title: 'Phone Number',
            
        },
        {
            name: 'email',
            type: 'string',
            title: 'Email',
            
        },
        {
            name : 'cartItems',
            title:  'cart Items',
            type: 'array',
            of : [{
                type: 'reference', to :{type: 'product'}
        }]
        },
        {
            name : 'total',
            title: 'Total',
            type: 'number',
        },
        {
            name : 'status',
            title: 'Order Status',
            type: 'string',
            options: {
                list :[
                    {
                        title: 'Pending',
                        value: 'pending'
                    },
                    {
                        title: 'Success',
                        value: 'success'
                    },
                    {
                        title: 'Dispatch',
                        value: 'dispatch'
                    },
                ],
                layout: 'radio'
            },
            initialValue: 'pending'
        }
    ],
}
