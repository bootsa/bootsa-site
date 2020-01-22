export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
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
                  buildHookId: '5e2892bacfe3af66a2f49a8c',
                  title: 'Sanity Studio',
                  name: 'bootsa-site-studio',
                  apiId: '7530080b-4b20-4a1a-a3dc-02a2603e6566'
                },
                {
                  buildHookId: '5e2892bacfe3af44bbf49aaf',
                  title: 'Blog Website',
                  name: 'bootsa-site',
                  apiId: 'c2547d62-4ddc-4ec5-a427-32b69764ff9b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bootsa/bootsa-site',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://bootsa-site.netlify.com', category: 'apps'}
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
