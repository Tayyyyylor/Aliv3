import React from 'react'

export default function GalleryTemplate() {

    getInitialProps = async (ctx) => {
        const res = await fetch('https://www.flickr.com/services/rest/?method=flickr.test.echo&name=Alibeniris')
        const json = await res.json()
        return { json }
    }
    console.log('json', json)
    console.log('res', res)


  return (
    <div>GalleryTemplate</div>
  )
}
