'use client'

export default function cloudinaryLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  const params = ['f_auto', 'c_limit', `w_${width}`, `q_${quality || 'auto'}`];
  
  // Strip hardcoded domain if it somehow leaks into src
  let normalizedSrc = src.startsWith('/') ? src.slice(1) : src;
  if (normalizedSrc.startsWith('https://res.cloudinary.com/')) {
     const splitIndex = normalizedSrc.split('/');
     normalizedSrc = splitIndex.slice(5).join('/'); // strips host and upload paths
  }
  
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  return `https://res.cloudinary.com/${cloudName}/image/upload/${params.join(',')}/${normalizedSrc}`;
}
