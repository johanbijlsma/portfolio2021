export default {
    name: 'general',
    title: 'General',
    type: 'document',
    fields: [{
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        },
        {
            name: 'body',
            title: 'Body',
            type: 'blockContent',
        },
    ],

    preview: {
        select: {
            title: 'title',
            subtitle: 'body',
        },
        // prepare(selection) {
        //     const { author } = selection
        //     return Object.assign({}, selection, {
        //         subtitle: author && `by ${author}`,
        //     })
        // },
    },
}