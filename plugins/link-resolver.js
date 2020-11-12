export default function(doc) {

  if (doc.type === 'photo') {
    return "/gallery/" + doc.uid
  }

  if (doc.type === 'about') {
    return '/about/'
  }

  if (doc.type === 'feedback') {
    return '/feedback/'
  }

  return "/not-found";

}
