export default [
  'strapi::logger',
  'strapi::errors',
  
  // 1. SECURITY (Allows Cloudinary Images to Load)
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'dl.airtable.com',
            'res.cloudinary.com',
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'dl.airtable.com',
            'res.cloudinary.com',
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },

  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',

  // 2. BODY PARSER (Allows Large Uploads up to 200MB)
  {
    name: 'strapi::body',
    config: {
      formLimit: '256mb', // Increase form size limit
      jsonLimit: '256mb', // Increase JSON size limit
      textLimit: '256mb', // Increase text size limit
      formidable: {
        maxFileSize: 200 * 1024 * 1024, // Set max file size to 200MB
      },
    },
  },

  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];