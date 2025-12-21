export default ({ env }) => ({
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {
          // FORCE PUBLIC ACCESS
          access_mode: 'public',
          resource_type: 'auto',
        },
        uploadStream: {
          access_mode: 'public',
          resource_type: 'auto',
        },
        delete: {},
      },
    },
  },
});