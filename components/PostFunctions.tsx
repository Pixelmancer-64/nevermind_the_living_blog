export const get_file_meta = async (meta: any) => {
  const path = require('path')
  const fs = require('fs');
  const files = require.context("/pages/posts/", false, /.mdx$/);
  console.log(files.keys(), meta.slug)
  const post = `./${meta.slug}.mdx`
  const file = await files(post)
  const file_meta = file.meta
  const postPath = path.resolve('./pages/posts', post);
  const stats = fs.statSync(postPath);
  file_meta.created_at = new Date(stats.birthtime).toLocaleDateString();
  file_meta.last_updated_at = new Date(stats.mtime).toLocaleDateString();
  return {
    props: { file_meta },
  };
};