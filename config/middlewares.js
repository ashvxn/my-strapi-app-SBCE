module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  {
    name: 'strapi::body',
    config: {
      formLimit: '10mb',       // limits the form data
      jsonLimit: '10mb',       // limits JSON payload size
      textLimit: '10mb',       // limits text fields
      formidable: {
        maxFileSize: 20 * 1024 * 1024, // 20MB max file size
        uploadDir: './uploads',        // Ensure files are saved to the correct directory
        keepExtensions: true,         // Keep file extensions
      },
    },
  },
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
