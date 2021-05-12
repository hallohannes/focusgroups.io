export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '609b7a4956dfb09337b158bd',
                  title: 'Sanity Studio',
                  name: 'focusgroups-io-studio',
                  apiId: 'de421fd7-c55d-491e-a747-e270ba417dee'
                },
                {
                  buildHookId: '609b7a49123520ac44c480a6',
                  title: 'Blog Website',
                  name: 'focusgroups-io',
                  apiId: 'ae787a56-6a00-4c09-8626-46c3833447f8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/shoplupe/focusgroups.io',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://focusgroups-io.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
