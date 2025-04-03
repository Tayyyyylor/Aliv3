import ModelPage from '@/components/molecules/modelPage/ModelPage'
import client from '@/utils/contentful'
import React, { useEffect, useState } from 'react'

export default function Director() {
  const [data, setData] = useState()

  console.log('data', data)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await client.getEntries({
          content_type: 'director',
        })

        console.log('response', response)

        if (response.items.length > 0) {
          const datas = response.items
          console.log('datas', datas)
          setData(datas)
        }
      } catch (error) {
        console.error('Error fetching data from Contentful:', error)
      }
    }

    fetchData()
  }, [])

  return data && <ModelPage data={data} />
}
