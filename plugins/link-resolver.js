export default function(doc) {

  if (doc.isBroken) {
    return '/not-found'
  }

  if (doc.type === 'gallery') {
    return '/gallery'
  }

  if (doc.type === 'about') {
    return '/about'
  }

  if (doc.type === 'feedback') {
    return '/feedback'
  }

  return "/not-found";

}
